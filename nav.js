$(document).ready(function menu(){
    $('.nav-hamburger').click(function() {
        $('.navigation').toggleClass('appears').slideToggle(300);
    });

    $('.nav-hamburger').click(function() {
        $(this).toggleClass('transform');
    });
});