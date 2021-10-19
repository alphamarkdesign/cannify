// gsap.registerPlugin(ScrollTrigger);

// const sections = gsap.utils.toArray(".panel");
// const container = document.querySelector('.company-news-section');


// // Setting the initial background color
// gsap.set(container, {
//  backgroundColor: '#E5E3DA',
// })


// const tl = gsap.timeline({
  
//     scrollTrigger: {
//     trigger: ".company-news-section",
//     pin: false,
//     scrub: true,
//     end: () => `+=${container.offsetWidth}`
      
//   }
  
// })

//  tl
//  .to(sections, { duration: 2, xPercent: -100 * (sections.length - 0), ease: "none" })
//  .to(container, { duration: 0.5, backgroundColor: '#274840', ease: "none" }, 0)
//  .to(container, { duration: 0.5, backgroundColor: '#E5E3DA', ease: "none" }, 1)
 