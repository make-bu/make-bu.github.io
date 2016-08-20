// Add scrollspy to <body>
/*
  TODO Fix this
$('body').scrollspy({target: ".navbar", offset: 50}); 

$("#main-navbar a").on('click', function(e){
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});
*/
  
//Scroll between the hero verbs
var scrollHeroVerbs = ["Make","Hack","Create","Learn"];
var iHero = 0; //incrementer for Hero text

$(document).ready(function() {
  
  $('#scroll-verbs').addClass("slide-up-down-animation");
  
  function scrollHeroFn() {
    iHero = (iHero >= scrollHeroVerbs.length-1) ? 0 : iHero+1;
    $('#scroll-verbs').text(function(i,t){
      return scrollHeroVerbs[iHero];
    });
  }
  
  scrollHeroFn(); //Run once
  setInterval(function(){scrollHeroFn()}, 2000); //then repeat
  
});