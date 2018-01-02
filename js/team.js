//take original carousel <img> and load it as background of parent tag
var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('slideshow-full-screen');

$('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
    });
    $(this).remove();
});
//adjust element height to present viewport height
$(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
});



//standard carousel properties
$('.carousel').carousel({
    interval: 3000,
    pause: "hover"
});