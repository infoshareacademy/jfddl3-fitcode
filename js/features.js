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

});
