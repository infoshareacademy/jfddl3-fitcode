$(document).ready(function(){

    $('.nav-hamburger').on('click', function() {

        $('.navigation').slideToggle(300);
        $(this).toggleClass('transform');

    });


    var navEl = $('.navigation ul li a');

    navEl.on('click', function colors(e) {

        navEl.removeClass('active');
        $(this).toggleClass('active');

        navEl.addClass('nav-nav-color');
        $(this).toggleClass('nav-nav-color');
    });



});

