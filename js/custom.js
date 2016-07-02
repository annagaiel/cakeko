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
