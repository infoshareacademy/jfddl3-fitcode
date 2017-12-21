$(document).ready(function () {

    $('.nav-hamburger').on('click', function () {
        $('.navigation').slideToggle(300);
        $(this).toggleClass('transform');
    });

    selectActiveSection()
    $(document).on("scroll", selectActiveSection);

    function selectActiveSection(event) {
        var distanceToTop = $(document).scrollTop();
        var $navbarLinks = $('.navigation ul li a')
        $navbarLinks.each(function () {
            var refElement = $($(this).attr("href"));
            var elementTopPosition = Math.floor(refElement.position().top)
            var elementBottomPosition = Math.floor(refElement.position().top + refElement.height())
            if (
                elementTopPosition <= distanceToTop
                &&
                elementBottomPosition >= distanceToTop
            ) {
                $navbarLinks.removeClass("active");
                $navbarLinks.addClass("nav-nav-color");
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
