const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});

// Add smooth scrolling to all links
$("a.smooth").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){

      window.location.hash = hash;
    });
  }
});
