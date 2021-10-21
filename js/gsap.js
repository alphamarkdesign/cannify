
window.onload = function() {

gsap.registerPlugin(ScrollTrigger);

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
  

  

    gsap.fromTo("div", {duration: 2, stagger: 0.5},{duration:2, y: 0, stagger :0.5})
  

    gsap.from("h1 span>span", {
      duration: 1.5,
      y: 250,
      autoAlpha: 0,
      ease: Power3.out,
      stagger: 0.3
    })
  


}