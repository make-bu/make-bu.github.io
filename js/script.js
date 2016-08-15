// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50}); 

$("#main-navbar a").on('click', function(e){
  console.log("hello");
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