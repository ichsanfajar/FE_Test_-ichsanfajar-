$(document).ready(function() {
  $("#image-4").animate({right: "-=870"}, 3500);
  $("#leaf-1").animate({left: "-=200"}, 4700);
  $("#leaf-2").animate({right: "-=70"}, 5500);
  $("#flower-2").animate({left: "-=100"}, 6500);
  $("#flower-bottom").animate({top: "-=200"}, 15700);
  $(window).load(function(){
    setTimeout(function(){ $('#flower-1').fadeIn('slow') }, 8000);
  });
  $(window).load(function(){
    setTimeout(function(){ $('#leaf-bottom-1').fadeIn('slow') }, 9500);
  });
  $(window).load(function(){
    setTimeout(function(){ $('#leaf-bottom-2').fadeIn('slow') }, 9500);
  });
});

