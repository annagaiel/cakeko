// Pause Carousel
$(function(){
  $('#homeCarousel.slide').carousel({
    interval: 6000,
    pause: "hover"
  });
  $('#homeCarousel').find("*").focus(function(){
    $("#homeCarousel").carousel('pause');
  }).blur(function() {
    $("#homeCarousel").carousel('cycle');
  });
})

// Fancybox
$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
