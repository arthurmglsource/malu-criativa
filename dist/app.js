const track = document.querySelector('#film-track');
MALU_CONTENT.moments.forEach((item,index)=>{
 const figure=document.createElement('figure'); const img=document.createElement('img');
 img.src=`assets/${item.image}.webp`;img.alt=item.alt;img.loading='lazy';img.width=435;img.height=550;
 const caption=document.createElement('figcaption');const title=document.createElement('span');title.textContent=item.title;
 const number=document.createElement('span');number.textContent=String(index+1).padStart(2,'0');caption.append(title,number);figure.append(img,caption);track.append(figure);
});
document.querySelector('#contact-link').href=MALU_CONTENT.instagram;
const toggle=document.querySelector('#menu-toggle'),menu=document.querySelector('#menu');
function setMenu(open){menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.innerHTML=open?'Fechar <span>−</span>':'Menu <span>＋</span>';document.body.style.overflow=open?'hidden':'';document.querySelector('header').style.position=open?'fixed':'absolute';if(open)menu.querySelector('a').focus();}
toggle.addEventListener('click',()=>setMenu(menu.hidden));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(menu.hidden)return;if(e.key==='Escape'){setMenu(false);toggle.focus();}if(e.key==='Tab'){const elements=[toggle,...menu.querySelectorAll('a')];let i=elements.indexOf(document.activeElement);e.preventDefault();elements[(i+(e.shiftKey?-1:1)+elements.length)%elements.length].focus();}});
let down=false,start=0,left=0;
track.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;start=e.clientX;left=track.scrollLeft;track.setPointerCapture(e.pointerId)});
track.addEventListener('pointermove',e=>{if(down)track.scrollLeft=left-(e.clientX-start)});track.addEventListener('pointerup',()=>down=false);track.addEventListener('pointercancel',()=>down=false);
track.tabIndex=0;track.setAttribute('aria-label','Galeria de fotografias. Use as setas ou deslize para explorar.');
track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();track.scrollBy({left:(e.key==='ArrowRight'?1:-1)*300,behavior:'smooth'})}});
if(window.gsap&&window.ScrollTrigger){
 gsap.registerPlugin(ScrollTrigger);
 gsap.to('.progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.documentElement,start:'top top',end:'bottom bottom',scrub:true}});
 const mm=gsap.matchMedia();
 mm.add('(prefers-reduced-motion: no-preference)',()=>{
  gsap.utils.toArray('.intro h2,.social h2,.story h2,.manifesto h2,footer h2').forEach(el=>gsap.from(el,{y:45,opacity:0,duration:.9,scrollTrigger:{trigger:el,start:'top 90%',toggleActions:'play none none reverse'}}));
  gsap.from('.paper-one',{rotation:-18,y:60,scrollTrigger:{trigger:'.post-stack',start:'top bottom',end:'bottom center',scrub:1}});
  gsap.from('.paper-two',{rotation:20,y:110,scrollTrigger:{trigger:'.post-stack',start:'top bottom',end:'bottom center',scrub:1}});
  gsap.to('.manifesto>.star',{rotation:150,scrollTrigger:{trigger:'.manifesto',start:'top bottom',end:'bottom top',scrub:1}});
 });
 mm.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)',()=>{
  gsap.from('.story-one',{y:100,rotation:-12,scrollTrigger:{trigger:'.story-images',start:'top bottom',end:'bottom top',scrub:1}});
  gsap.from('.story-two',{y:180,rotation:14,scrollTrigger:{trigger:'.story-images',start:'top bottom',end:'bottom top',scrub:1}});
  gsap.to('.mobile-image',{scale:1.15,ease:'none',scrollTrigger:{trigger:'.mobile',start:'top top',end:'bottom bottom',pin:'.mobile-stage',scrub:1}});
 });
 window.addEventListener('load',()=>ScrollTrigger.refresh());document.fonts.ready.then(()=>ScrollTrigger.refresh());
}
