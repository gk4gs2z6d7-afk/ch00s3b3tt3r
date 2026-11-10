/* The Record. Two storyboards:
   group 'politics' = the main board (power and accountability)
   group 'africa'   = Africa and its diaspora (optional, separate view)
   Each entry: one unredacted fact, context under the bars, and a source.
   wall: N puts an entry on the homepage board, in that order. */
window.SH_RECORD = [
  /* ================= MAIN BOARD: POWER AND POLITICS ================= */
  { g:'politics', id:'balfour', year:'1917', tag:'Empire', title:'The Balfour Declaration',
    fact:'In 67 words, Britain promised a national home in Palestine. The people already living there were not asked.',
    more:['The letter went from Foreign Secretary Arthur Balfour to Lord Rothschild on November 2, 1917.','Arabs were about nine in ten residents of Palestine at the time. The letter calls them the "existing non-Jewish communities."'],
    src:'Yale Law School, Avalon Project (full text)', url:'https://avalon.law.yale.edu/20th_Century/balfour.asp' },
  { g:'politics', id:'guatemala', year:'1946–1948', tag:'Experiments on people', title:'The Guatemala experiments',
    fact:'U.S. researchers deliberately infected about 1,300 Guatemalan prisoners, soldiers and patients with syphilis and gonorrhea.',
    more:['The work ran from 1946 to 1948 and was hidden for sixty years. A historian found the records in 2010.','The U.S. government apologized that year. A presidential commission titled its report "Ethically Impossible."'],
    src:'Presidential Commission for the Study of Bioethical Issues, "Ethically Impossible" (2011)', url:'https://drum.lib.umd.edu/items/ed765493-aa96-444c-974c-4eee14c4d913/full' },
  { g:'politics', id:'mkultra', year:'1953–1973', tag:'Experiments on people', wall:9, title:'MKUltra',
    fact:'The CIA dosed Americans with LSD without their knowledge. In 1973 its director ordered the files destroyed.',
    more:['The program ran for twenty years across universities, hospitals and prisons. Some subjects were never told.','About 20,000 pages survived because they were misfiled. Congress used them in its 1977 hearings.'],
    src:'U.S. Senate, "Project MKULTRA" joint hearing (1977)', url:'https://www.intelligence.senate.gov/sites/default/files/hearings/95mkultra.pdf' },
  { g:'politics', id:'northwoods', year:'1962', tag:'Lies for war', wall:6, title:'Operation Northwoods',
    fact:'America\'s top generals proposed staging terror attacks on Americans to justify invading Cuba.',
    more:['The memo was signed by the Chairman of the Joint Chiefs of Staff and sent to the Secretary of Defense on March 13, 1962.','It was a proposal. The Kennedy administration rejected it and none of it was carried out. It stayed secret for 35 years.'],
    src:'Joint Chiefs of Staff memo, March 13, 1962 (National Security Archive)', url:'https://nsarchive.gwu.edu/CMC-60/joint-chiefs-pretexts-to-invade-Cuba-1962' },
  { g:'politics', id:'tonkin', year:'1964', tag:'Lies for war', wall:7, title:'The Gulf of Tonkin',
    fact:'The attack Congress used to authorize the Vietnam War never happened. The NSA\'s own historian said so.',
    more:['A real skirmish took place on August 2, 1964. The second attack, reported on August 4, did not.','Congress passed the war resolution on August 7. More than 58,000 Americans and millions of Vietnamese died in the war that followed.'],
    src:'National Security Archive, NSA declassified study (2005)', url:'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB132/' },
  { g:'politics', id:'cyclone', year:'1979–1989', tag:'Blowback', wall:10, title:'Operation Cyclone',
    fact:'The U.S. armed Afghan fighters to bleed the Soviets. Veterans of that war went on to found al-Qaeda.',
    more:['The CIA spent billions through Pakistan\'s intelligence service between 1979 and 1989.','The 9/11 Commission found no evidence that the U.S. funded Osama bin Laden directly. The record shows the wider network, not a single payment.'],
    src:'The 9/11 Commission Report, chapter 2', url:'https://www.9-11commission.gov/REPORT/911REPORT.PDF' },
  { g:'politics', id:'hiss', year:'2000', tag:'Impunity', title:'Israel\'s chief pathologist, on tape',
    fact:'Israel\'s chief pathologist admitted on tape that organs were taken from the dead without their families\' consent.',
    more:['Dr. Yehuda Hiss gave the interview in 2000. It aired in December 2009. He said the bodies were Israeli, Palestinian and foreign workers alike.','Israeli officials confirmed the practice and said it ended in the 1990s. A 2009 Swedish newspaper claim that people were killed for organs was never substantiated.'],
    src:'Al Jazeera, December 21, 2009', url:'https://www.aljazeera.com/news/2009/12/21/israel-admits-to-organ-thefts' },
  { g:'politics', id:'iraq-wmd', year:'2003', tag:'Lies for war', wall:8, title:'Weapons of mass destruction',
    fact:'The Iraq war was sold on weapons of mass destruction. The government\'s own inspectors found none.',
    more:['The Iraq Survey Group reported in 2004 that Iraq had no stockpiles and no active program.','About 4,400 American service members died. No official was held to account for the claim.'],
    src:'PBS NewsHour on the Iraq Survey Group report (October 2004)', url:'https://www.pbs.org/newshour/show/iraq-findings-conclude-no-weapons-of-mass-destruction-existed-in-iraq' },
  { g:'politics', id:'gilens-page', year:'2014', tag:'Money in politics', wall:1, title:'The Gilens and Page study',
    fact:'Your vote doesn\'t matter. A study of 1,779 policy decisions found the average citizen\'s influence is near zero.',
    more:['Martin Gilens of Princeton and Benjamin Page of Northwestern compared what the public wanted with what became law. Wealthy donors and organized interests predicted the result. Ordinary voters did not.','In the authors\' words, average citizens have "little or no independent influence" on policy.'],
    src:'Gilens & Page, Perspectives on Politics 12(3), 2014', url:'https://www.cambridge.org/core/journals/perspectives-on-politics/article/abs/testing-theories-of-american-politics-elites-interest-groups-and-average-citizens/62327F513959D0A304D4893B382B992B' },
  { g:'politics', id:'hastert', year:'2016', tag:'Impunity', title:'The Speaker of the House',
    fact:'A former Speaker of the House paid hush money to a man he had abused as a boy. His prison term was for the bank withdrawals.',
    more:['Dennis Hastert was second in line to the presidency for eight years. In court in April 2016 he admitted abusing boys he coached.','The time limit for prosecuting the abuse had run out. He served 13 months of a 15-month sentence.'],
    src:'Roll Call, April 27, 2016', url:'https://rollcall.com/2016/04/27/hastert-gets-15-months-admits-abuse-at-sentencing/' },
  { g:'politics', id:'settlements', year:'1997–2017', tag:'Impunity', wall:4, title:'The secret settlement fund',
    fact:'Congress paid more than $17 million in secret, taxpayer-funded settlements for workplace claims against its own offices.',
    more:['The total covers 1997 to 2017 and includes harassment claims. Until 2018, members did not have to repay a cent.','The records were confidential by law. The public learned the total only after reporters pressed for it.'],
    src:'FactCheck.org, from Office of Compliance records', url:'https://www.factcheck.org/?p=146739' },
  { g:'politics', id:'qatar-cash', year:'2018–2023', tag:'Blowback', wall:11, title:'Qatari cash to Gaza',
    fact:'Israel\'s government approved Qatar sending millions of dollars in cash each month into Hamas-run Gaza.',
    more:['The payments began in 2018 with Prime Minister Netanyahu\'s approval. Israeli critics said at the time that it kept Hamas in power.','His government said the money bought quiet and paid for fuel and salaries. Hamas led the attack of October 7, 2023.'],
    src:'The New York Times investigation, via The Irish Times (December 2023)', url:'https://www.irishtimes.com/world/middle-east/2023/12/12/buying-quiet-inside-the-israeli-plan-that-propped-up-hamas' },
  { g:'politics', id:'trump-34', year:'2024', tag:'Impunity', title:'Thirty-four felonies',
    fact:'A jury convicted a former president of 34 felonies. The sentence was no penalty at all.',
    more:['Donald Trump was found guilty in New York on May 30, 2024 of falsifying business records. He was sentenced on January 10, 2025 to an unconditional discharge.','He denies wrongdoing and is appealing the verdict.'],
    src:'OPB / NPR, January 10, 2025', url:'https://opb.org/article/2025/01/10/trump-sentencing' },
  { g:'politics', id:'icc', year:'2024', tag:'Impunity', title:'The warrant and the sanctions',
    fact:'The International Criminal Court issued an arrest warrant for a sitting prime minister. The United States sanctioned the judges.',
    more:['The warrant is dated November 21, 2024. The court alleges Benjamin Netanyahu used starvation as a method of war in Gaza. He rejects the charge and Israel does not accept the court\'s authority.','At home he is on trial for bribery, fraud and breach of trust, which he denies. President Trump has publicly urged Israel\'s president to pardon him.'],
    src:'CBS News; Times of Israel trial coverage', url:'https://www.timesofisrael.com/topic/netanyahu-trial/' },
  { g:'politics', id:'gaza-aid', year:'2025', tag:'Impunity', wall:12, title:'The aid sites',
    fact:'994 people were killed near the food sites of one U.S.-backed aid group in eleven weeks. That is the UN\'s count.',
    more:['The UN human rights office counted 1,760 people killed while seeking aid in Gaza between May 27 and August 13, 2025.','994 died near sites run by the Gaza Humanitarian Foundation and 766 along convoy routes. Israel\'s military disputes the figures.'],
    src:'UN human rights office, August 15, 2025 (via Ahram Online)', url:'https://english.ahram.org.eg/NewsContentP/58/551297/War-on-Gaza/UN-says-at-least-,-killed-while-seeking-aid-in-Gaz.aspx' },
  { g:'politics', id:'pentagon-audit', year:'2025', tag:'Money in politics', wall:2, title:'The Pentagon audit',
    fact:'The Pentagon has failed eight audits in a row. Its budget went up anyway.',
    more:['The Defense Department has never passed a full audit since they began in 2018. The eighth failure was reported in December 2025, with 26 material weaknesses.','It is the only major federal agency that has never passed a clean audit. Its own target for passing is 2028.'],
    src:'Reuters, December 19, 2025', url:'https://gvwire.com/2025/12/19/pentagon-says-it-fails-eighth-audit-targets-2028-to-pass/' },
  { g:'politics', id:'epstein-files', year:'2025', tag:'Impunity', wall:5, title:'The Epstein files',
    fact:'It took an act of Congress to release the Epstein files. Hundreds of pages still came out fully blacked out.',
    more:['The Epstein Files Transparency Act passed in November 2025 with near-unanimous votes.','Lawmakers in both parties said the release fell short of what the law required.'],
    src:'Epstein Files Transparency Act, Public Law 119-38 (2025)', url:'https://www.congress.gov/119/plaws/publ38/PLAW-119publ38.htm' },
  { g:'politics', id:'aipac-2026', year:'2026', tag:'Money in politics', wall:3, title:'One lobby, one primary',
    fact:'AIPAC and its super PAC passed $100 million in election spending this cycle, with more than $30 million in one Senate primary.',
    more:['The figures come from Federal Election Commission filings through August 2026.','The same test applies to every lobby, foreign or domestic: no group should be able to outspend the voters of a state.'],
    src:'Sludge, from FEC filings (August 2026)', url:'https://readsludge.com/2026/08/03/aipac-tops-100-million-in-election-spending-for-second-straight-cycle/' },

  /* ================= AFRICA AND ITS DIASPORA ================= */
  { g:'africa', id:'origins', year:'300,000 years ago', tag:'Origins', title:'Where we all began',
    fact:'Every person alive descends from Africa. The first cities and the first writing came from the Middle East.',
    more:['The oldest known remains of our species, from Jebel Irhoud in Morocco, are about 300,000 years old. Writing and city life began in Mesopotamia, in today\'s Iraq, more than 5,000 years ago.','The two regions humanity owes the most to are the two treated with the least respect today.'],
    src:'Hublin et al., Nature 546 (2017)', url:'https://pubmed.ncbi.nlm.nih.gov/28593953/' },
  { g:'africa', id:'moors', year:'711–1492', tag:'Achievement', title:'The Moors in Spain',
    fact:'In the 900s, Moorish Córdoba was the largest city in western Europe, with a library said to hold 400,000 books.',
    more:['North African Muslims crossed into Spain in 711 and ruled parts of it until 1492. Their scholars preserved and advanced Greek medicine, mathematics and astronomy.','Words like algebra, algorithm and zenith entered Europe through them.'],
    src:'Encyclopaedia Britannica, "Caliphate of Córdoba"', url:'https://www.britannica.com/place/Caliphate-of-Cordoba' },
  { g:'africa', id:'mansa-musa', year:'1324', tag:'Achievement', title:'Mansa Musa of Mali',
    fact:'The emperor of Mali gave away so much gold on his 1324 pilgrimage that the price of gold in Cairo fell for years.',
    more:['Mansa Musa ruled one of the largest empires of his century. Writers in Cairo recorded the effect of his visit.','He built Timbuktu into a center of learning whose libraries survive today.'],
    src:'Al-Umari\'s account of Mansa Musa in Cairo (World History Commons)', url:'https://worldhistorycommons.org/al-umaris-account-mansa-musas-visit-cairo' },
  { g:'africa', id:'moorish-americas', year:'1500s', tag:'Achievement', title:'Moorish influence reaches the Americas',
    fact:'Moorish design crossed the Atlantic with Spain. Its arches, tiles and carved ceilings still stand in churches and palaces across Latin America.',
    more:['The style is called Mudéjar. Builders trained in the Moorish tradition shaped colonial cities from Mexico to Peru.','It reached the Americas through Spain, which the Moors had ruled for centuries.'],
    src:'AramcoWorld, "Mexico\'s Colors of Three Cultures" (2010)', url:'https://archive.aramcoworld.com/issue/201001/mexico.s.colors.of.three.cultures.htm' },
  { g:'africa', id:'slave-trade', year:'1501–1866', tag:'Cruelty', title:'The Atlantic slave trade',
    fact:'About 12.5 million Africans were forced onto slave ships. About 1.8 million died before reaching land.',
    more:['The figures come from the records of more than 36,000 voyages. Portugal, Britain, France, Spain, the Netherlands and the United States carried most of them.','The survivors and their children built the wealth of the Americas without pay.'],
    src:'National Endowment for the Humanities on the SlaveVoyages database', url:'https://www.neh.gov/humanities/2010/septemberoctober/feature/gross-injustice' },
  { g:'africa', id:'haiti-ransom', year:'1825–1947', tag:'Cruelty', title:'Haiti pays for its own freedom',
    fact:'Haiti was forced to pay France for the "property" its slaveholders lost. The last payment cleared in 1947.',
    more:['France sent warships in 1825 and demanded 150 million francs. Haiti borrowed from French banks to pay it.','A 2022 New York Times investigation put the long-run cost to Haiti at more than $21 billion.'],
    src:'Equal Justice Initiative, on The New York Times investigation "The Ransom" (2022)', url:'https://eji.org/news/haitis-forced-payments-to-enslavers-cost-economy-21-billion-the-new-york-times-found/' },
  { g:'africa', id:'berlin-conference', year:'1884–1885', tag:'Partition', title:'The Berlin Conference',
    fact:'Fourteen nations met in Berlin to set the rules for dividing Africa. Not one African was at the table.',
    more:['The conference ran from November 1884 to February 1885.','Borders drawn in the years that followed still cut through peoples and bind rivals together today.'],
    src:'Al Jazeera, "What happened at the Berlin Conference of 1884–1885?" (2025)', url:'https://www.aljazeera.com/news/2025/2/26/colonising-africa-what-happened-at-the-berlin-conference-of-1884-1885' },
  { g:'africa', id:'partition', year:'1914', tag:'Partition', title:'Who took what',
    fact:'By 1914, seven European countries held all of Africa except Ethiopia and Liberia.',
    more:['Britain: Egypt, Sudan, Nigeria, Ghana, Kenya, Uganda, Zimbabwe, Zambia, South Africa. France: Algeria, Tunisia, Morocco, Senegal, Mali, Niger, Chad, Ivory Coast, Madagascar. Germany: Namibia, Tanzania, Cameroon, Togo.','Belgium: Congo. Portugal: Angola, Mozambique, Guinea-Bissau. Italy: Libya, Eritrea, Somalia. Spain: Western Sahara, Equatorial Guinea.'],
    src:'Al Jazeera, "What happened at the Berlin Conference of 1884–1885?" (2025)', url:'https://www.aljazeera.com/news/2025/2/26/colonising-africa-what-happened-at-the-berlin-conference-of-1884-1885' },
  { g:'africa', id:'congo', year:'1885–1908', tag:'Cruelty', title:'King Leopold II and the Congo Free State',
    fact:'A king owned the Congo as his personal property. When workers missed rubber quotas, soldiers cut off hands.',
    more:['Leopold II of Belgium ran the territory from 1885 to 1908 for private profit. He never set foot in it.','Historians estimate the population fell by millions. A common estimate is around ten million, and the exact figure is disputed.'],
    src:'Encyclopaedia Britannica, "Congo Free State"', url:'https://www.britannica.com/place/Congo-Free-State' },
  { g:'africa', id:'herero-nama', year:'1904–1908', tag:'Cruelty', title:'The Herero and Nama genocide',
    fact:'A German general ordered the Herero people exterminated. Germany called it genocide in 2021, more than a century later.',
    more:['In German South West Africa, now Namibia, an estimated 65,000 Herero and 10,000 Nama were killed.','Survivors were held in camps. Skulls were shipped to Germany for race research.'],
    src:'Al Jazeera, May 28, 2021', url:'https://www.aljazeera.com/news/2021/5/28/germany-recognises-colonial-era-massacres-in-namibia-as-genocide' },
  { g:'africa', id:'ethiopia-gas', year:'1935–1936', tag:'Cruelty', title:'Italy in Ethiopia',
    fact:'Italy dropped mustard gas on Ethiopian soldiers and villages, breaking a treaty it had signed ten years earlier.',
    more:['Mussolini invaded in October 1935. Italy had signed the 1925 Geneva Protocol banning poison gas.','Emperor Haile Selassie told the League of Nations in June 1936. It did nothing.'],
    src:'Haile Selassie, appeal to the League of Nations, June 1936 (BlackPast)', url:'https://www.blackpast.org/global-african-history/1936-emperor-haile-selassie-ethiopia-appeal-league-nations/' },
  { g:'africa', id:'tuskegee', year:'1932–1972', tag:'Cruelty', title:'The Tuskegee syphilis study',
    fact:'For 40 years the U.S. government watched 399 Black men go untreated for syphilis, even after penicillin became the cure.',
    more:['The men were told they were being treated for "bad blood." They never gave informed consent.','The study ended in 1972 only because a whistleblower went to the press. Researchers did not infect the men; they withheld treatment.'],
    src:'CDC, "The Untreated Syphilis Study at Tuskegee" timeline', url:'https://www.cdc.gov/tuskegee/about/timeline.html' },
  { g:'africa', id:'mau-mau', year:'1952–1960', tag:'Cruelty', title:'Britain\'s camps in Kenya',
    fact:'In 2013 Britain paid 5,228 Kenyans for torture carried out in its detention camps.',
    more:['The abuse took place during the Mau Mau uprising. The files that proved it had been hidden in a government archive for decades.','The settlement was £19.9 million. The Foreign Secretary told Parliament the government "sincerely regrets" the abuses.'],
    src:'Statement to the House of Commons, June 6, 2013', url:'https://parallelparliament.co.uk/debate/2013-06-06/commons/commons-chamber/mau-mau-claims-settlement' },
  { g:'africa', id:'cointelpro', year:'1956–1971', tag:'Cruelty', title:'COINTELPRO',
    fact:'The FBI mailed Martin Luther King Jr. an anonymous letter that he took as a demand to kill himself.',
    more:['The letter was sent in November 1964. For fifteen years the Bureau infiltrated, discredited and disrupted Black political groups and other lawful movements.','It was exposed when activists broke into an FBI office in 1971. The Senate\'s Church Committee documented it in 1976.'],
    src:'U.S. Senate Church Committee, Final Report, Book III (1976)', url:'https://www.intelligence.senate.gov/wp-content/uploads/2024/08/sites-default-files-94755-iii.pdf' },
  { g:'africa', id:'lumumba', year:'1961', tag:'Cruelty', title:'Patrice Lumumba',
    fact:'Congo\'s first elected prime minister was shot less than seven months after independence. Belgium later admitted moral responsibility.',
    more:['Patrice Lumumba was killed on January 17, 1961. A Belgian parliamentary inquiry reported in 2001, and the government apologized in 2002.','A U.S. Senate committee found that the CIA had also plotted to kill him.'],
    src:'The New Humanitarian, "Belgium apologises for Lumumba killing" (2002)', url:'https://www.thenewhumanitarian.org/report/30121/drc-belgium-apologises-lumumba-killing' },
  { g:'africa', id:'king-malcolm', year:'1964–1968', tag:'Two views', title:'King and Malcolm X on Israel',
    fact:'Martin Luther King Jr. defended Israel\'s right to exist. Malcolm X called Zionism a new form of colonialism.',
    more:['Malcolm X published "Zionist Logic" in the Egyptian Gazette on September 17, 1964.','King told the Rabbinical Assembly on March 25, 1968 that Israel\'s security must be protected, ten days before he was killed.'],
    src:'JTA, on King\'s 1968 remarks', url:'https://www.jta.org/archive/op-ed-remembering-dr-kings-ties-to-israel', src2:'Malcolm X, "Zionist Logic" (1964), reprinted in Socialist Viewpoint', url2:'https://www.marxists.org/history/etol/newspape/socialist-viewpoint-us/mayjun_05/mayjun_05_21.htm' }
];

(function(){
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  // widths for decorative bars, fixed so the layout never shifts
  var BARS=[92,78,96,64,88,71,94,58,83,97,69,90];
  function bars(n,seed){var h='';for(var i=0;i<n;i++){h+='<i class="bar" style="width:'+BARS[(i*5+seed*3)%BARS.length]+'%"></i>';}return h;}

  /* ---------- homepage board ---------- */
  var board=document.getElementById('board');
  if(board){
    var items=window.SH_RECORD.filter(function(r){return r.wall;}).sort(function(a,b){return a.wall-b.wall;});
    var html='<svg class="strings" aria-hidden="true"></svg>';
    items.forEach(function(r,i){
      html+='<a class="doc" href="record.html#'+r.id+'" style="--r:'+[-2.4,1.6,-1.1,2.2,-1.8,1.2,-2,2.6,-.8,1.9,-1.5,1][i%12]+'deg" aria-label="'+esc(r.year+': '+r.fact)+'">'
        +'<span class="pin"></span>'
        +'<span class="doc-top"><b>'+esc(r.year)+'</b><em>'+esc(r.tag)+'</em></span>'
        +bars(2,i)+'<span class="fact">'+esc(r.fact)+'</span>'+bars(3,i+4)
        +'<span class="doc-foot">Open the file &rarr;</span></a>';
    });
    board.innerHTML=html;
    var svg=board.querySelector('.strings');
    function draw(){
      var b=board.getBoundingClientRect(),pins=board.querySelectorAll('.pin'),pts=[];
      if(!b.width)return;
      pins.forEach(function(p){var r=p.getBoundingClientRect();if(!r.width)return;pts.push([r.left+r.width/2-b.left,r.top+r.height/2-b.top]);});
      // snake order: left to right, then right to left, so the string runs down the edges
      var rows=[];pts.forEach(function(p){var r=rows[rows.length-1];if(r&&Math.abs(r[0][1]-p[1])<40)r.push(p);else rows.push([p]);});
      pts=[];rows.forEach(function(r,i){if(i%2)r.reverse();pts=pts.concat(r);});
      svg.setAttribute('viewBox','0 0 '+b.width+' '+b.height);
      var d='';for(var i=0;i<pts.length-1;i++){var a=pts[i],c=pts[i+1],sag=18+((i*7)%14);
        d+='<path d="M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+' Q'+((a[0]+c[0])/2).toFixed(1)+' '+((a[1]+c[1])/2+sag).toFixed(1)+' '+c[0].toFixed(1)+' '+c[1].toFixed(1)+'"/>';}
      svg.innerHTML=d;
    }
    var stage=board.parentNode,fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches,
        still=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // strings are measured flat, so the tilt is applied only after drawing
    function redraw(){board.style.transform='none';draw();board.style.transform='';}
    redraw();addEventListener('resize',redraw);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(redraw);
    if(fine&&!still){
      stage.classList.add('is3d');
      stage.addEventListener('pointermove',function(e){
        var r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        board.style.setProperty('--ry',(x*9).toFixed(2)+'deg');board.style.setProperty('--rx',(-y*7).toFixed(2)+'deg');
        stage.style.setProperty('--lx',((x+.5)*100).toFixed(1)+'%');stage.style.setProperty('--ly',((y+.5)*100).toFixed(1)+'%');
      });
      stage.addEventListener('pointerleave',function(){board.style.setProperty('--ry','0deg');board.style.setProperty('--rx','0deg');});
    }
  }

  /* ---------- record page ---------- */
  var list=document.getElementById('record-list');
  if(list){
    var filt=document.getElementById('record-filter'),all=document.getElementById('declass-all'),
        views=document.getElementById('record-views'),intro=document.getElementById('record-intro'),view='politics';
    var INTRO={politics:'Power and politics. Each file shows one fact. Everything else is under the bars.',
               africa:'Africa and its diaspora: what was built there, who divided it, and what was done to its people.'};
    function open(el,on){el.classList.toggle('open',on);var b=el.querySelector('.declass');b.setAttribute('aria-expanded',on);b.textContent=on?'Redact':'Declassify';}
    function render(){
      var rows=window.SH_RECORD.filter(function(r){return r.g===view;}),tags=[];
      rows.forEach(function(r){if(tags.indexOf(r.tag)<0)tags.push(r.tag);});
      views.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.dataset.v===view);});
      intro.textContent=INTRO[view];
      filt.innerHTML='<button class="chip on" data-t="">All '+rows.length+'</button>'+tags.map(function(t){return '<button class="chip" data-t="'+esc(t)+'">'+esc(t)+'</button>';}).join('');
      all.setAttribute('aria-pressed','false');all.textContent='Declassify all';
      list.innerHTML=rows.map(function(r,i){
        return '<article class="file" id="'+r.id+'" data-t="'+esc(r.tag)+'">'
          +'<div class="file-year">'+esc(r.year)+'</div>'
          +'<div class="file-page"><div class="file-top"><span>'+esc(r.tag)+'</span><span>File '+String(i+1).padStart(2,'0')+'</span></div>'
          +'<h2><span class="rx">'+esc(r.title)+'</span></h2>'
          +'<p class="fact">'+esc(r.fact)+'</p>'
          +r.more.map(function(m){return '<p><span class="rx">'+esc(m)+'</span></p>';}).join('')
          +'<p class="file-src"><span class="rx">Source: '+(r.url?'<a href="'+esc(r.url)+'" target="_blank" rel="noopener">'+esc(r.src)+'</a>':esc(r.src))+(r.url2?' &middot; <a href="'+esc(r.url2)+'" target="_blank" rel="noopener">'+esc(r.src2)+'</a>':'')+'</span></p>'
          +'<button class="declass" type="button" aria-expanded="false">Declassify</button></div></article>';
      }).join('');
    }
    list.addEventListener('click',function(e){var b=e.target.closest('.declass');if(b){var f=b.closest('.file');open(f,!f.classList.contains('open'));}});
    filt.addEventListener('click',function(e){var c=e.target.closest('.chip');if(!c)return;
      filt.querySelectorAll('.chip').forEach(function(x){x.classList.toggle('on',x===c);});
      list.querySelectorAll('.file').forEach(function(f){f.hidden=!!c.dataset.t&&f.dataset.t!==c.dataset.t;});});
    all.addEventListener('click',function(){var on=all.getAttribute('aria-pressed')!=='true';all.setAttribute('aria-pressed',on);all.textContent=on?'Redact all':'Declassify all';
      list.querySelectorAll('.file').forEach(function(f){open(f,on);});});
    views.addEventListener('click',function(e){var b=e.target.closest('button');if(!b||b.dataset.v===view)return;view=b.dataset.v;render();
      try{history.replaceState(null,'',view==='africa'?'#africa':location.pathname);}catch(err){}});
    function fromHash(){
      var h=location.hash.slice(1),rec=window.SH_RECORD.filter(function(r){return r.id===h;})[0];
      var want=h==='africa'?'africa':rec?rec.g:view;
      if(want!==view||!list.firstChild){view=want;render();}
      var el=rec&&document.getElementById(h);
      if(el){open(el,true);el.scrollIntoView({block:'center'});}
    }
    fromHash();addEventListener('hashchange',fromHash);
  }
})();
