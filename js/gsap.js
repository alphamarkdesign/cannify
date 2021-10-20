gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel");
const container = document.querySelector('body');


// Setting the initial background color
// gsap.set(container, {
//  backgroundColor: '#E5E3DA',
// })




//gsap loading screen
gsap.fromTo(".loading-symbol", {opacity: 0, yPercent: 0}, {duration: 1, opacity: 1, yPercent: 100})



//container changing colors to body
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
 

 
