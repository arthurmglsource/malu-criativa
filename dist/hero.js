/* Separate wrappers keep entrance, pointer and scroll transforms independent. */
(() => {
 const hero = document.querySelector('.hero-editorial');
 if (!hero || !window.gsap || !window.ScrollTrigger) return;
 gsap.registerPlugin(ScrollTrigger);
 const mm = gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)', () => {
  const q = gsap.utils.selector(hero);
  const entrance = gsap.timeline({defaults:{ease:'power3.out',duration:1}});
  entrance.from(q('.hero-paper'),{opacity:0,duration:1.2},0)
   .from(q('.hero-natural'),{yPercent:110,duration:1.3},.15)
   .from(q('.hero-creative'),{y:35,rotation:-5,opacity:0,duration:1.4},.4)
   .from(q('.hero-person-reveal'),{scale:1.025,opacity:0,clipPath:'inset(0 0 8% 0)',duration:1.6},.35)
   .fromTo(q('.hero-stroke'),{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,duration:1.5,stagger:.12},.7)
   .from(q('.hero-note-paper'),{y:-25,rotation:-9,opacity:0,duration:1.25},.95)
   .from(q('.hero-detail'),{y:12,opacity:0,stagger:.07,duration:.8},1.1);
  const scroll = gsap.timeline({scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.7},defaults:{ease:'none'}});
  scroll.to(q('.hero-type-back'),{xPercent:-7,y:-70},0)
   .to(q('.hero-type-front'),{xPercent:-4,y:-35,rotation:-3},0)
   .to(q('.hero-person'),{y:85,scale:1.02},0)
   .to(q('.hero-note'),{y:-65,rotation:2},0)
   .to(q('.hero-drawing'),{y:50,rotation:5,opacity:.2},0);
  return () => {entrance.kill();scroll.kill();};
 });
 mm.add('(min-width: 761px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
  const layers = [...hero.querySelectorAll('[data-depth]')].map(el => ({depth:Number(el.dataset.depth),x:gsap.quickTo(el,'x',{duration:1.1,ease:'power3.out'}),y:gsap.quickTo(el,'y',{duration:1.1,ease:'power3.out'})}));
  const move = e => {const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;layers.forEach(l=>{l.x(x*22*l.depth);l.y(y*16*l.depth);});};
  const reset = () => layers.forEach(l=>{l.x(0);l.y(0);});
  hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',reset);
  return () => {hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',reset);};
 });
})();
