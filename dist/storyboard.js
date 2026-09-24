/* Approved print storyboard. Layout is independent from animation state. */
(() => {
 const toggle=document.querySelector('#menu-toggle'),menu=document.querySelector('#menu');
 let previousFocus;
 const setMenu=open=>{if(open)previousFocus=document.activeElement;menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.innerHTML=open?'Fechar <span>−</span>':'Menu <span>＋</span>';document.body.style.overflow=open?'hidden':'';document.querySelector('header').style.position=open?'fixed':'absolute';if(open)menu.querySelector('a').focus();else previousFocus?.focus();};
 toggle.addEventListener('click',()=>setMenu(menu.hidden));
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();setMenu(false);history.pushState(null,'',a.hash);document.querySelector(a.hash)?.scrollIntoView({behavior:'instant',block:'start'});}));
 document.addEventListener('keydown',e=>{if(menu.hidden)return;if(e.key==='Escape')setMenu(false);if(e.key==='Tab'){const els=[toggle,...menu.querySelectorAll('a')];const i=els.indexOf(document.activeElement);e.preventDefault();els[(i+(e.shiftKey?-1:1)+els.length)%els.length].focus();}});
 if(!window.gsap||!window.ScrollTrigger)return;
 gsap.registerPlugin(ScrollTrigger);
 const mm=gsap.matchMedia();
 const hero=document.querySelector('.hero-editorial');
 mm.add('(prefers-reduced-motion: no-preference)',()=>{
  const loader=document.querySelector('.loader');loader.classList.add('is-active');
  const reveal=gsap.timeline({defaults:{ease:'power3.out'}});
  reveal.from('.loader img',{scale:.88,opacity:0,duration:.35})
   .to('.loader-lime',{clipPath:'circle(75% at 50% 50%)',duration:.45},.35)
   .to('.loader img',{scale:1.08,duration:.28,yoyo:true,repeat:1},.4)
   .to('.loader-orange',{clipPath:'circle(75% at 50% 50%)',duration:.4},.95)
   .to('.loader img',{filter:'brightness(0) invert(1)',duration:.25},1)
   .to(loader,{yPercent:-100,duration:.6,ease:'power4.inOut',onComplete:()=>loader.classList.remove('is-active')},1.45)
   .from('.hero-natural',{yPercent:115,duration:1.1},1.7)
   .from('.hero-creative',{y:35,rotation:-5,clipPath:'inset(0 100% 0 0)',duration:1.3},1.95)
   .from('.hero-person-reveal',{scale:1.025,opacity:0,clipPath:'inset(0 0 12% 0)',duration:1.4},1.8)
   .from('.hero-note-paper',{y:-28,rotation:-10,opacity:0,duration:1.05},2.2)
   .from('.hero-spark',{scale:0,rotation:-80,duration:.75},2.5);
  document.querySelectorAll('.hero-stroke').forEach(p=>{const l=p.getTotalLength();reveal.fromTo(p,{strokeDasharray:l,strokeDashoffset:l},{strokeDashoffset:0,duration:1.2},2.1);});
  const exit=gsap.timeline({scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.8},defaults:{ease:'none'}});
  exit.fromTo('.hero-type-back',{xPercent:0,y:0},{xPercent:-6,y:-60},0).fromTo('.hero-type-front',{xPercent:0,y:0},{xPercent:4,y:-25},0).fromTo('.hero-person',{y:0},{y:70},0).fromTo('.hero-note',{y:0},{y:-80},0).fromTo('.hero-drawing',{y:0},{y:70},0);
  document.querySelectorAll('.scene:not(.package):not(.collage):not(.contact) h2,.scene:not(.package):not(.contact) h3').forEach(el=>gsap.from(el,{y:30,clipPath:'inset(0 0 100% 0)',duration:.85,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
  document.querySelectorAll('mark').forEach(el=>gsap.from(el,{backgroundSize:'0% 100%',duration:.8,ease:'power2.inOut',scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
  document.querySelectorAll('.drawn path').forEach(p=>{const l=p.getTotalLength();gsap.fromTo(p,{strokeDasharray:l,strokeDashoffset:l},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:p.closest('section,footer'),start:'top 80%',end:'center 45%',scrub:.8}});});
  document.querySelectorAll('.services-grid,.management-list,.extras-grid,.process ol').forEach(group=>gsap.from([...group.children].filter(e=>!e.classList.contains('wave')),{y:35,rotation:1.5,stagger:.09,duration:.8,ease:'power3.out',scrollTrigger:{trigger:group,start:'top 88%',once:true}}));
  const contactReveal=gsap.timeline({scrollTrigger:{trigger:'.contact',start:'top 82%',once:true},defaults:{ease:'power3.out'}});
  contactReveal.from('.contact-portrait img',{x:-35,y:24,opacity:0,duration:1.15});
  gsap.from('.contact-logo,.contact h2,.contact-copy,.contact-actions',{y:20,opacity:0,stagger:.12,duration:.8,ease:'power2.out',scrollTrigger:{trigger:'.contact-content',start:'top 88%',once:true}});
  gsap.from('.contact-mascot',{rotation:-8,y:5,duration:1.1,ease:'sine.out',scrollTrigger:{trigger:'.contact-bottom',start:'top 98%',once:true}});
  gsap.from('.template-paper',{y:90,rotation:i=>[4,-3,5][i],stagger:.14,duration:1.05,ease:'power3.out',scrollTrigger:{trigger:'.template-grid',start:'top 88%',once:true}});
  gsap.to('.portfolio-intro>.burst',{rotation:150,ease:'none',scrollTrigger:{trigger:'.portfolio-intro',start:'top bottom',end:'bottom top',scrub:1}});
  gsap.from('.fruit',{y:35,rotation:-5,duration:1,scrollTrigger:{trigger:'.essence',start:'top 50%',once:true}});
  const collage=gsap.timeline({scrollTrigger:{trigger:'.collage',start:'top 88%',end:'top 10%',scrub:1},defaults:{ease:'power2.out'}});
  collage.from('.collage h2>span',{y:60,clipPath:'inset(0 0 100% 0)'},0).from('.collage h2>em',{x:-50,rotation:-3},.1)
   .from('.piece-head',{yPercent:12},0).from('.collage-piece:not(.piece-head)',{yPercent:24,rotation:i=>(i%2?4:-4),transformOrigin:'50% 62%',stagger:.045},.05);
  gsap.to('.progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.documentElement,start:'top top',end:'bottom bottom',scrub:true}});
  return()=>{loader.classList.remove('is-active');};
 });
 mm.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)',()=>{
  const track=document.querySelector('.moment-track');viewport.classList.add('is-pinned');
  gsap.to(track,{x:()=>-Math.max(0,track.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:'.moments',start:'top top',end:()=>'+='+Math.max(600,track.scrollWidth-innerWidth),pin:true,scrub:.8,invalidateOnRefresh:true}});
  gsap.set('.package-track',{flexDirection:'row',width:'300vw'});gsap.set('.package',{width:'100vw'});
  gsap.to('.package-track',{x:()=>-2*innerWidth,ease:'none',scrollTrigger:{trigger:'.packages',start:'top top',end:()=>'+='+2*innerWidth,pin:true,scrub:.8,invalidateOnRefresh:true}});
  gsap.to('.mascot',{y:50,rotation:7,ease:'none',scrollTrigger:{trigger:'.essence',start:'top bottom',end:'bottom top',scrub:1}});
  });
 mm.add('(min-width: 761px) and (pointer: fine) and (prefers-reduced-motion: no-preference)',()=>{
  const layers=[...hero.querySelectorAll('[data-depth]')].map(el=>({depth:+el.dataset.depth,x:gsap.quickTo(el,'x',{duration:1,ease:'power3.out'}),y:gsap.quickTo(el,'y',{duration:1,ease:'power3.out'})}));
  const move=e=>{const r=hero.getBoundingClientRect();layers.forEach(l=>{l.x(((e.clientX-r.left)/r.width-.5)*20*l.depth);l.y(((e.clientY-r.top)/r.height-.5)*14*l.depth);});};
  const leave=()=>layers.forEach(l=>{l.x(0);l.y(0);});hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',leave);
  return()=>{hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',leave);};
 });
 document.fonts.ready.then(()=>ScrollTrigger.refresh());window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
 document.querySelectorAll('img').forEach(img=>{if(!img.complete)img.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});});
 window.addEventListener('pagehide',()=>mm.revert(),{once:true});
 window.addEventListener('pageshow',e=>{if(e.persisted)location.reload();});
})();
