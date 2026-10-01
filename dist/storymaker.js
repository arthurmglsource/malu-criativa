/* Storymaker owns only its new layers; existing heading/mark reveals stay in storyboard.js. */
(() => {
 const section=document.querySelector('#storymaker');
 if(!section||!window.gsap||!window.ScrollTrigger)return;
 const mm=gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)',()=>{
  const copy=gsap.timeline({scrollTrigger:{trigger:section.querySelector('.sm-copy'),start:'top 82%',once:true},defaults:{ease:'power3.out'}});
  copy.from(section.querySelectorAll('.sm-line'),{y:12,opacity:0,stagger:.08,duration:.7},.16)
   .from(section.querySelectorAll('.story-tags span'),{y:10,opacity:0,stagger:.08,duration:.6},.42);
  const art=gsap.timeline({scrollTrigger:{trigger:section.querySelector('.sm-art'),start:'top 85%',once:true},defaults:{ease:'power3.out'}});
  art.from(section.querySelector('.sm-reveal'),{y:20,scale:.985,opacity:0,duration:1.1},0);
  section.querySelectorAll('.sm-doodle path').forEach((path,i)=>{
   const length=path.getTotalLength();
   art.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,duration:.6},.4+i*.07);
  });
 });
 mm.add('(min-width: 1025px) and (prefers-reduced-motion: no-preference)',()=>{
  const depth=gsap.timeline({scrollTrigger:{trigger:section,start:'top bottom',end:'bottom top',scrub:1},defaults:{ease:'none'}});
  depth.fromTo(section.querySelector('.sm-depth'),{y:7},{y:-7},0)
   .fromTo(section.querySelector('.sm-rays'),{y:3},{y:-3},0)
   .fromTo(section.querySelector('.sm-spark'),{y:5,rotation:-10},{y:-5,rotation:-6},0)
   .fromTo(section.querySelector('.sm-squiggle'),{y:4},{y:-4},0);
  return()=>{
   gsap.set([section.querySelector('.sm-depth'),section.querySelector('.sm-rays'),section.querySelector('.sm-spark'),section.querySelector('.sm-squiggle')],{clearProps:'transform'});
  };
 });
 window.addEventListener('pagehide',()=>mm.revert(),{once:true});
})();
