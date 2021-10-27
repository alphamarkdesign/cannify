window.onload = function() {

//Page Animations
gsap.registerPlugin(ScrollTrigger);

    //Text Animations
    gsap.from("h1 span>span", {duration: 1.5,delay: 1.5,y: 200,autoAlpha: 0,ease: Power3.out,stagger: 0.3})

    ScrollTrigger.batch(".reveal-section h2", {onEnter : batch => gsap.from(batch, {duration: 0.6, x: 50})})
    ScrollTrigger.batch(".reveal-section p", {onEnter : batch => gsap.from(batch, {delay: 0.3, duration: 0.5, opacity:0, ease: sine.out,})})
    ScrollTrigger.batch(".reveal-section a", {onEnter : batch => gsap.from(batch, {delay: 0.3, duration: 0.5, opacity:0, ease: sine.out,})})
    //Text Animations

    //Header Animations
    gsap.fromTo(".header-breakline", { delay: 1.7,  duration: 0.7, opacity: 0, width: 0}, { delay: 1.7,duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})
    gsap.fromTo(".nav-item , .navbar-brand", { delay: 2,  duration: 0.5, opacity: 0 ,stagger: 0.03, y: 50, ease: "slow (0.9 , 4, false)" }, { delay: 2,duration: 0.5, opacity: 1, y: 0,stagger: 0.03,  ease: "slow (0.9 , 4, false)"})
    gsap.fromTo(".header-contact > span", { delay: 2,  duration: 0.5, opacity: 0 ,stagger: 0.03, ease: "slow (0.9 , 4, false)" }, { delay: 2,duration: 0.5, opacity: 1,stagger: 0.03,  ease: "slow (0.9 , 4, false)"})
    gsap.fromTo(".header-buttons > button", { delay: 1.9,  duration: 0.3, opacity: 0 ,stagger: 0.1, ease: "slow (0.9 , 4, false)" }, { delay: 1.9,duration: 0.3, opacity: 1,stagger: 0.1,  ease: "slow (0.9 , 4, false)"})
    //Header Animations


    //Sections Animations
    ScrollTrigger.batch(".reveal", {onEnter: batch => gsap.to(batch, {  duration:1 , height: 0, stagger: 0.3 })});
    ScrollTrigger.batch(".breakline", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, width: 0,ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".news-breakline", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, width: 0,ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".black-breakline", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, width: 0,ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, width: '100%', ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".news>div", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, y: 50, stagger: 0.5, ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, y: 0, stagger: 0.5, ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".first-col>div", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, y: 50, stagger: 0.1, ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, y: 0, stagger: 0.1, ease: "slow (0.3 , 0.4, false)"})})
    ScrollTrigger.batch(".cannify-partners>div", {onEnter : batch => gsap.fromTo(batch, { duration: 0.7, opacity: 0, y: 50, stagger: 0.4, ease: "slow (0.3 , 0.4, false)"}, {duration: 0.7, opacity: 1, y: 0, stagger: 0.4, ease: "slow (0.3 , 0.4, false)"})})
    //Sections Animations

//Page Animations
} 


//Hamburger Menu Animations
var $hamburger = $('#mob-menu');

        var hamburgerMotion = new TimelineMax()
        .fromTo(".nav-breakline", {  opacity: 0, width: 0}, { duration: 0.3, opacity: 1, width: '100%'})
        .fromTo(".nav-item span>span", { delay:-1, y: 50, opacity: 0, }, { duration: 0.4, y:0, opacity: 1,  stagger: 0.1,})
        .fromTo(".menu-button", {  opacity: 0, }, { duration: 0.5, opacity: 1,  stagger: 0.1,})
        .fromTo(".only-collapsed > span", {  opacity: 0, y: 50,}, { duration: 0.2, opacity: 1, y:0, stagger: 0.1,})
        .restart()

        $hamburger.on('click', function(e) {
        hamburgerMotion.restart(!hamburgerMotion.restart());
        });
//Hamburger Menu Animations