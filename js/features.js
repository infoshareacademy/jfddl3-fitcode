$(document).ready(function(){

    $("#backToTop").hide(); //hide

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#backToTop').fadeIn();
            } else {
                $('#backToTop').fadeOut();

            }
            return false;
        });

        // scroll to top
        $('#backToTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});