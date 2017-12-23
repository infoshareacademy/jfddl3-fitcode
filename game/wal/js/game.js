var env = {
    minPosX: 0,
    maxPosX: 100,
    minPosY: 0,
    maxPosY: 95,
    viewPortHpx: $('.game-board').height(),
    viewPortWpx: $('.game-board').width(),
    score : 0,
    speed : 0.2,
    creationDelay: 2000,
    calcProc : function (x) {
    return Math.floor(x * 100 / env.viewPortWpx)
}
}



/*-----------------------------Inicjujemy Koszyk--------------------------------*/
//tworzymy i inicjujemy koszyk
var basket = new Basket();
basket.init();
//poruszamy koszykiem
$('.game-board').mousemove(function (e) {
    //console.log('page: ', e.pageX); //--------------------wld_CL
    var newX = Math.floor(env.calcProc(e.pageX) - basket.width / 2 - env.calcProc($('.game-board').offset().left));
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




/*-----------------------------Inicjujemy Brick--------------------------------*/
// var brick = new Brick(Math.round(Math.random() * 100),0,Math.round(Math.random() * 10));
// brick.init()
// setInterval(function () {
//     brick.moveDown();
//     console.log(brick.y)
//     if(brick.y > env.maxPosY){brick.removeBrick(); delete brick;}
// }, 50)


$('.game-board').append('<div id="scorebar"></div>');
var bricks=[];
var intervalBrick = setInterval(function () {
    var brick = new Brick(Math.round(Math.random() * 100), 0, Math.round(Math.random() * 10), Math.round(Math.random() * 2));
    brick.init();
    bricks.push(brick);
}, env.creationDelay);



var intervalCheck = setInterval(function () {
    bricks.forEach(function (element) {
        element.moveDown();
        if(element.checkCollision(basket)){
            env.score += element.score;
            $('#scorebar').text(env.score);
            element.removeBrick();
        }else{
           // console.log('out')
        }
    });
    // if(brick.y > env.maxPosY){brick.removeBrick()}
}, 50)

setTimeout(function () {
    clearInterval(intervalCheck);
    clearInterval(intervalBrick);
}, 30000)
