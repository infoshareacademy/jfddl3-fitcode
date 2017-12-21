var env = {
    'minPosX': 0,
    'maxPosX': 100,
    'minPosY': 0,
    'maxPosY': 95,
    'viewPortHpx': $('.game-board').height(),
    'viewPortWpx': $('.game-board').width()
}
function calcProc(x) {
    return Math.floor(x * 100 / env.viewPortWpx)
}



/*-----------------------------Inicjujemy Brick--------------------------------*/
var brick = new Brick(Math.round(Math.random() * 100),0,1)
brick.init()

// setInterval(function () {
//
//     if ($('#'+point.id).css('top') > env.MaxPosY) {point.removePoint()}
// }, 10)





/*-----------------------------Inicjujemy Koszyk--------------------------------*/
//tworzymy i inicjujemy koszyk
var basket = new Basket();
basket.init();
//poruszamy koszykiem
$('.game-board').mousemove(function (e) {
    //console.log('page: ', e.pageX); //--------------------wld_CL
    var newX = Math.floor(calcProc(e.pageX) - basket.width / 2 - calcProc($('.game-board').offset().left));
    //console.log(newX); //--------------------wld_CL
    if ((newX + basket.width < env.maxPosX) && (newX > env.minPosX)) {
        basket.positionX = newX;
    } else if (newX + basket.width >= env.maxPosX) {
        basket.positionX = env.maxPosX - basket.width;
    } else {
        basket.positionX = env.minPosX;
    }
    basket.moveBasket(basket.positionX);
});
