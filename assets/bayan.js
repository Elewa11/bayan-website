/* Bayan — shared interactions (progress, reveal, counters, magnetic, cursor, menu, parallax, FAQ) */
(function(){
  document.documentElement.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;
  const head = document.getElementById('head');
  const prog = document.getElementById('prog');
  const pars = [...document.querySelectorAll('.par')];

  function onScroll(){
    const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    if(prog) prog.style.width = (h>0 ? (y/h*100) : 0) + '%';
    if(head) head.classList.toggle('solid', y>30);
    if(!reduce && pars.length){
      const vh = window.innerHeight;
      pars.forEach(el=>{
        const r = el.getBoundingClientRect();
        const off = ((r.top + r.height/2) - vh/2)/vh;
        el.style.transform = 'translateY(' + (off*-26*(parseFloat(el.dataset.speed)||.05)*20).toFixed(1) + 'px)';
      });
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  /* reveal + stagger */
  const io = new IntersectionObserver((es)=>es.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold:.14});
  document.querySelectorAll('.reveal, .stagger').forEach(el=>io.observe(el));

  /* count-up (Arabic-Indic) */
  const ar = n => String(n).replace(/[0-9]/g, d=>'٠١٢٣٤٥٦٧٨٩'[d]);
  const cio = new IntersectionObserver((es)=>es.forEach(e=>{
    if(!e.isIntersecting) return; cio.unobserve(e.target);
    const el=e.target, target=+el.dataset.count;
    if(reduce){ el.textContent=ar(target); return; }
    let t0=null; const dur=1300;
    const step=ts=>{ t0=t0||ts; const p=Math.min((ts-t0)/dur,1); const eased=1-Math.pow(1-p,3);
      el.textContent=ar(Math.round(eased*target)); if(p<1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), {threshold:.6});
  document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

  /* magnetic buttons */
  if(!reduce && fine){
    document.querySelectorAll('.magnetic').forEach(b=>{
      b.addEventListener('mousemove', e=>{ const r=b.getBoundingClientRect();
        b.style.transform = 'translate(' + ((e.clientX-r.left-r.width/2)*.25) + 'px,' + ((e.clientY-r.top-r.height/2)*.35) + 'px)'; });
      b.addEventListener('mouseleave', ()=> b.style.transform='');
    });
  }

  /* custom cursor */
  const dot=document.getElementById('cdot'), ring=document.getElementById('cring');
  if(dot && ring){
    if(!reduce && fine){
      let mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my;
      addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY;
        dot.style.transform='translate('+mx+'px,'+my+'px) translate(-50%,-50%)'; });
      (function loop(){ rx+=(mx-rx)*.18; ry+=(my-ry)*.18;
        ring.style.transform='translate('+rx+'px,'+ry+'px) translate(-50%,-50%)'; requestAnimationFrame(loop); })();
      document.querySelectorAll('a,button,.axis,.acard,.lvl,.track,.lcell').forEach(el=>{
        el.addEventListener('mouseenter',()=>ring.classList.add('hot'));
        el.addEventListener('mouseleave',()=>ring.classList.remove('hot'));
      });
    } else { dot.style.display='none'; ring.style.display='none'; }
  }

  /* mobile menu */
  const nav=document.getElementById('nav'), menuBtn=document.getElementById('menuBtn');
  if(nav && menuBtn){
    menuBtn.addEventListener('click',()=>nav.classList.toggle('show'));
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('show')));
  }

  /* FAQ accordion */
  document.querySelectorAll('.acc-q').forEach(function(q){
    q.addEventListener('click', function(){ q.parentElement.classList.toggle('open'); });
  });



  /* interactive mockups */
  // Lesson Mockup
  document.querySelectorAll('.mock-option').forEach(opt => {
    opt.addEventListener('click', function() {
      const qCard = opt.closest('.mock-q-card');
      if(qCard.dataset.answered) return;
      qCard.dataset.answered = 'true';
      
      const isCorrect = opt.hasAttribute('data-correct');
      if(isCorrect) {
        opt.classList.add('correct');
      } else {
        opt.classList.add('wrong');
        const corr = qCard.querySelector('[data-correct]');
        if(corr) corr.classList.add('correct');
      }
    });
  });

  // Dashboard Mockup
  document.querySelectorAll('.mock-student-row').forEach(row => {
    row.addEventListener('click', function() {
      const container = row.closest('.live-mockup');
      if(!container) return;
      
      container.querySelectorAll('.mock-student-row').forEach(r => r.classList.remove('active'));
      row.classList.add('active');
      
      const sname = row.querySelector('.mock-student-name').textContent;
      const sprog = row.dataset.progress;
      const sread = row.dataset.read;
      const sscore = row.dataset.score;
      const schart = row.dataset.chart.split(',');
      
      const detailName = container.querySelector('.mock-detail-name');
      const detailProg = container.querySelector('.mock-detail-prog');
      const detailRead = container.querySelector('.mock-detail-read');
      const detailScore = container.querySelector('.mock-detail-score');
      
      if(detailName) detailName.textContent = sname;
      if(detailProg) detailProg.textContent = sprog + '%';
      if(detailRead) detailRead.textContent = sread + ' نصوص';
      if(detailScore) detailScore.textContent = sscore + '%';
      
      container.querySelectorAll('.mock-chart-bar').forEach((bar, idx) => {
        const val = schart[idx] || 0;
        bar.style.height = val + '%';
        bar.setAttribute('data-val', val);
      });
    });
  });
})();

/* v2 — inject kinetic Arabic calligraphy + diacritics motif */
(function(){
  function injectMotif(host){
    if(!host || host.querySelector('.kmotif')) return;
    var m=document.createElement('div'); m.className='kmotif'; m.setAttribute('aria-hidden','true');
    var svg='<svg class="pen" viewBox="0 0 760 340" preserveAspectRatio="xMidYMid meet">'+
      '<path d="M30 230 C 150 70, 290 70, 360 180 C 410 255, 500 255, 540 165 C 580 80, 660 90, 720 150"/></svg>';
    m.innerHTML=svg;
    var marks=['ـَ','ـِ','ـُ','ـّ','ـْ'];
    for(var i=0;i<marks.length;i++){
      var s=document.createElement('span'); s.className='diac'; s.textContent=marks[i];
      s.style.top=(10+i*16)+'%'; s.style.insetInlineEnd=(5+i*8)+'%'; s.style.animationDelay=(i*1.1)+'s';
      m.appendChild(s);
    }
    host.insertBefore(m, host.firstChild);
  }
  injectMotif(document.querySelector('.hero'));
  injectMotif(document.querySelector('.page-hero'));

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer:fine)').matches;
  if(!reduce && fine){
    addEventListener('mousemove', function(e){
      var cx = (e.clientX / innerWidth) - 0.5;
      var cy = (e.clientY / innerHeight) - 0.5;
      document.querySelectorAll('.diac').forEach(function(el, idx){
        var factor = (idx + 1) * 20;
        el.style.transform = 'translate(' + (cx * factor).toFixed(1) + 'px, ' + (cy * factor).toFixed(1) + 'px)';
      });
    });
  }
})();
