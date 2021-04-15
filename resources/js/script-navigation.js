// jshint esversion:6

//-----------------------
// Sticky Navigation Bar
//-----------------------

$(document).ready(function() {
  // Activate / Deactivate Sticky Navigation Bar
  $('.js--section-about').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  // Smooth Glide to Targeted Main Page Section
  $(function() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});
