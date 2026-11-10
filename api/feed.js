// SIGNAL feed. Fetches news on the server so the page never depends on a third-party proxy.
// GET /api/feed?q=<search terms>   -> Google News RSS search
// GET /api/feed?src=recalls        -> official FDA + CPSC recall feeds
// Responses are cached at the edge for 30 minutes and served stale for a day if a refresh fails.
const SOURCES = {
  recalls: [
    'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/recalls/rss.xml',
    'https://www.cpsc.gov/Newsroom/CPSC-RSS-Feed/Recalls-RSS'
  ]
};
const FALLBACK_Q = { recalls: 'recall (FDA OR CPSC OR USDA) contamination OR hazard OR lead OR undeclared when:14d' };

function decode(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&amp;/g, '&');
}
function tag(block, name) {
  const m = block.match(new RegExp('<' + name + '\\b[^>]*>([\\s\\S]*?)</' + name + '>', 'i'));
  return m ? decode(m[1]).trim() : '';
}
function parse(xml, fallbackSource) {
  const out = [];
  const items = xml.match(/<item\b[\s\S]*?<\/item>/gi) || [];
  for (const it of items.slice(0, 30)) {
    let title = tag(it, 'title');
    const source = tag(it, 'source') || fallbackSource || '';
    if (source && title.endsWith(' - ' + source)) title = title.slice(0, -(' - ' + source).length);
    out.push({
      title: title || 'Untitled',
      link: tag(it, 'link') || tag(it, 'guid') || '#',
      time: tag(it, 'pubDate'),
      source,
      summary: decode(tag(it, 'description').replace(/<[^>]+>/g, ' ')).replace(/&nbsp;|\u00a0/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 240)
    });
  }
  return out;
}
async function get(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 8000);
  try {
    const r = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SignalFeed/1.0; +https://structuralhumanism.com)', 'Accept': 'application/rss+xml, application/xml, text/xml' } });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.text();
  } finally { clearTimeout(t); }
}
const gnews = q => 'https://news.google.com/rss/search?q=' + encodeURIComponent(q) + '&hl=en-US&gl=US&ceid=US:en';

module.exports = async (req, res) => {
  const q = String(req.query.q || '').slice(0, 300);
  const src = String(req.query.src || '');
  let items = [], errors = [];
  try {
    if (src && SOURCES[src]) {
      const results = await Promise.allSettled(SOURCES[src].map(get));
      results.forEach((r, i) => {
        if (r.status === 'fulfilled') items = items.concat(parse(r.value, i === 0 ? 'FDA' : 'CPSC'));
        else errors.push(String(r.reason && r.reason.message || r.reason));
      });
      if (!items.length) items = parse(await get(gnews(FALLBACK_Q[src])));
    } else if (q) {
      items = parse(await get(gnews(q)));
    } else {
      res.status(400).json({ error: 'Pass q or src.' }); return;
    }
  } catch (e) { errors.push(String(e && e.message || e)); }

  items.sort((a, b) => (Date.parse(b.time) || 0) - (Date.parse(a.time) || 0));
  if (!items.length) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(502).json({ error: 'Feed unavailable', detail: errors });
    return;
  }
  res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
  res.status(200).json({ fetched: new Date().toISOString(), count: items.length, items: items.slice(0, 40) });
};
