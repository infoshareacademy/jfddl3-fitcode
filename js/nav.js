$(document).ready(function () {

    $('.nav-hamburger').on('click', function () {

        $('.navigation').slideToggle(300);
        $(this).toggleClass('transform');

    });


    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            $('.navigation a').each(function () {
                //var currLink = $(this);
                var refElement = $($(this).attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

                    $('.navigation ul li a').removeClass("active");
                    $('.navigation ul li a').addClass("nav-nav-color");
                    $(this).addClass("active");
                    $(this).removeClass("nav-nav-color");
                }
                else {
                    $(this).removeClass("active");
                    $(this).addClass("nav-nav-color");
                }
            });
        }
    });
});