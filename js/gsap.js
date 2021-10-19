gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel");
const container = document.querySelector('body');


// Setting the initial background color
//gsap.set(container, {
//  backgroundColor: 'lightblue',
//})


const tl = gsap.timeline({
  
    scrollTrigger: {
    trigger: ".company-news-section",
    pin: false,
    scrub: true,
    end: () => `+=${container.offsetWidth}`
      
  }
  
})

 tl
 .to(sections, { duration: 2, xPercent: -100 * (sections.length - 0.1), ease: "none" })
 .to(container, { duration: 0.1, backgroundColor: '#274840', ease: "none" }, 0)
 .to(container, { duration: 0.1, backgroundColor: '#E5E3DA', ease: "none" }, 1)