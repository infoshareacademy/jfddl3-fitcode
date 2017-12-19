$(document).ready(function () {

    /*hide button on load*/
    $("#backToTop").hide();

    /*fade in and out when high from top > 400px*/
    $(document).scroll(function () {
        $(this).scrollTop() > 400 ? $('#backToTop').fadeIn() : $('#backToTop').fadeOut();
        return false;
    });

    /*scroll to top on click*/
    $('#backToTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /*animate team photos when scroll reach the view port*/
    $(document).on('scroll', function() {
        if($(this).scrollTop() >= ($('.team-section1').position().top) - 120){
            $('.team-section1').addClass('team-anime');
            //------wld_CL console.log('here');
        }
    })


});

