(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeOutSine');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });




  

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);



document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {



  // F12 Engelle
    if (e.keyCode == 123) {
          return false;
    } 

    // CTRL+I Engelle
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
   
        return false;
    }

    // CTRL+J Engelle
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
  
        return false;
    }

    // CTRL+S Engelle
    if (e.ctrlKey && e.keyCode == 83) {
   
        return false;
    }

    // CTRL+U Engelle
    if (e.ctrlKey && e.keyCode == 85) {
  
        return false;
    }

}
