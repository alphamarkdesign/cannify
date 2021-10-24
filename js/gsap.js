
window.onload = function() {

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.batch(".reveal-section div", {onEnter: batch => gsap.fromTo(batch, { play:1, duration:1 , opacity: 0, stagger: 0.1, y:150, overwrite: false }, { play: 1,duration: 1, opacity: 1, stagger: 0.1, y: 0, overwrite: false}), });
ScrollTrigger.batch(".pic-col img", {onEnter: batch=> gsap.from(batch, {duration: 1.5,
  y: 200,
  autoAlpha: 0,
  ease: Power3.out, stagger: 0.3})})

const sections = gsap.utils.toArray(".panel");
const container = document.querySelector('body');

  const tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".company-news-section",
      pin: false,
      scrub: true,
      end: () => `+=${container.offsetWidth}`
      
    }
    
  })
  
  tl
  .to(sections, { duration: 2, xPercent: -100 * (sections.length - 1), ease: "power4.out" })
  .to(container, { duration: 0.3, backgroundColor: '#274840', ease: "none" }, 0)
  .to(container, { duration: 0.3, backgroundColor: '#E5E3DA', ease: "none" }, 1)
  

    gsap.from("h1 span>span", {
      duration: 1.5,
      delay: 1.5,
      y: 200,
      autoAlpha: 0,
      ease: Power3.out,
      stagger: 0.3
    })

    gsap.fromTo(".breakline", { delay: 2,  duration: 0.7, opacity: 0, width: 0}, { delay: 2,duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})
    // gsap.fromTo(".vid", {delay: 1.5, duration: 1, height: 0},{delay: 1.5, duration: 1, height: '70vh', ease: "slow (0.3, 0.4, false"})

    


    gsap.fromTo(".nav-item , .navbar-brand", { delay: 2.6,  duration: 0.5, opacity: 0 ,stagger: 0.03, y:- 50, ease: "slow (0.9 , 4, false)" }, { delay: 2.6,duration: 0.5, opacity: 1, y: 0,stagger: 0.03,  ease: "slow (0.9 , 4, false)"})


    gsap.fromTo(".header-contact > span", { delay: 2.6,  duration: 0.5, opacity: 0 ,stagger: 0.03, ease: "slow (0.9 , 4, false)" }, { delay: 2.6,duration: 0.5, opacity: 1,stagger: 0.03,  ease: "slow (0.9 , 4, false)"})

    gsap.fromTo(".header-buttons > button", { delay: 2.3,  duration: 0.3, opacity: 0 ,stagger: 0.1, ease: "slow (0.9 , 4, false)" }, { delay: 2.3,duration: 0.3, opacity: 1,stagger: 0.1,  ease: "slow (0.9 , 4, false)"})

}



