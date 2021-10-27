// Change body color

jQuery(function($){
    $(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() /5);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();
});

// Change body color


//Flickity Buttons

$(document).ready( function() {
    var $gallery = $('.carousel').flickity({
      prevNextButtons: false,
    pageDots: false
    });
    // Flickity instance
    var flkty = $gallery.data('flickity');
    // elements
  
    // previous
    var $previousButton = $('.button--previous').on( 'click', function() {
      $gallery.flickity('previous');
    });
    // next
    var $nextButton = $('.button--next').on( 'click', function() {
      $gallery.flickity('next');
    });
  
  
  });

  //Flickity Buttons

  //Magnetic Buttons
  var magnets = document.querySelectorAll('.magnetic, .carousel-magnetic')
  var strength = 50

  magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
      TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});
function moveMagnet(event) {
var magnetButton = event.currentTarget
var bounding = magnetButton.getBoundingClientRect()

TweenMax.to( magnetButton, 1, {
x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
ease: Power4.easeOut
})
}
//Magnetic Buttons


//Cursor Follow
jQuery(document).ready(function() {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
        mouseX = e.pageX - 13;
        mouseY = e.pageY - 13; 
    });
        
    setInterval(function(){
        xp += ((mouseX - xp)/3);
        yp += ((mouseY - yp)/3);
        $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 20);

    });
//Cursor Follow

//Page Loader

$(window).on("load", function(){

    gsap.to('.intro-content > p', 1, {
        delay: 0.6 ,
        duration: 1,
        y: '200',
        ease: 'slow (0.9, 1, false)'
    });

    gsap.to('.intro-content > img', 0.9, {
        delay: 0.7 ,
        duration: 1,
        y: '200',
        ease: 'slow (0.9, 1, false)'
    });

    let tl = new TimelineMax();
    tl.to('.preloader', 1.2, {
        delay: 1 ,
        height:'0vh',
        ease: 'expo.inOut'
    });
});

//Page Loader

//Dropdown Menu Icons

$(document).ready(function(){

    $(".dropdown-icon-toggler1").click(function(event){
        event.preventDefault();
        $("#dropdown-icon").toggleClass("dropdown-chevron-up");
    });
});

$(document).ready(function(){

    $(".dropdown-icon-toggler2").click(function(event){
        event.preventDefault();
        $("#dropdown-icon2").toggleClass("dropdown-chevron-up");
    });
});

//Dropdown Menu Icons


//Hamburger Menu Class Toggle

$(document).ready(function () {

    $("#mob-menu").click(function (event) {
        event.preventDefault();
        $('body').toggleClass('fixed-position');
        $('.section-padding').toggleClass('remove-padding')
        $('.navbar').toggleClass('navbar-padding')
    });
    });

//Hamburger Menu Class Toggle

//Hamburger Menu Icon Animation
$(document).ready(function () {
        
    $('.first-button').on('click', function () {
    
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
    
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
    
      $('.animated-icon3').toggleClass('open');
    });
    });
// Hamburger Menu Icon Animation