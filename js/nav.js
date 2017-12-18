$(document).ready(function() {

    $('.nav-hamburger').on('click', function () {

        $('.navigation').slideToggle(300);
        $(this).toggleClass('transform');

    });

/*

    var navEl = $('.navigation ul li a');

    navEl.on('click', function colors(e) {

        navEl.removeClass('active');
        $(this).toggleClass('active');

        navEl.addClass('nav-nav-color');
        $(this).toggleClass('nav-nav-color');
    });

*/

// remove class from others except active one

    inView('#start')
        .on('enter', function() {
            $('.nav-start').addClass('active')
            $('.nav-start').removeClass('nav-nav-color')
        })

        .on('exit', function() {
            $('.nav-start').removeClass('active')
            $('.nav-start').addClass('nav-nav-color')
        })

    inView('#what')
        .on('enter', function() {
            $('.nav-fit').addClass('active')
            $('.nav-fit').removeClass('nav-nav-color')
        })

        .on('exit', function() {
            $('.nav-fit').removeClass('active')
            $('.nav-fit').addClass('nav-nav-color')
        })

    inView('#newsletter')
        .on('enter', function() {
            $('.nav-prem').addClass('active')
            $('.nav-prem').removeClass('nav-nav-color')
        })

        .on('exit', function() {
            $('.nav-prem').removeClass('active')
            $('.nav-prem').addClass('nav-nav-color')
        })

    inView('#details')
        .on('enter', function() {
            $('.nav-det').addClass('active')
            $('.nav-det').removeClass('nav-nav-color')
        })

        .on('exit', function() {
            $('.nav-det').removeClass('active')
            $('.nav-det').addClass('nav-nav-color')
        })

    inView('#about')
        .on('enter', function() {
            $('.nav-us').addClass('active')
            $('.nav-us').removeClass('nav-nav-color')
        })

        .on('exit', function() {
            $('.nav-us').removeClass('active')
            $('.nav-us').addClass('nav-nav-color')
        })
});


    /*
    var os = $('.logo a img').offset();
    console.log(os);

    Offset TOP

    START:        0

    FITCODE:      726

    PREMIERA:     1394

    SZCZEGÓŁY:    2036

    EKIPA:        2947

    var a = $('.navigation ul li nth-child(2) a');
    if (os.offsetTop > 726 && os.offsetTop < 1394) {

        a.addClass('active');
        else {
            a.removeClass('active')
        }
    }
*/

