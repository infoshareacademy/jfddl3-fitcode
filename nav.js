$(document).ready(function(){

    $('.nav-hamburger').click(function() {
        $('.navigation').slideToggle(300);
        $(this).toggleClass('transform');
    });
});