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
    levelEndScore: 1000,
    calcProc : function (x) {
        return Math.floor(x * 100 / env.viewPortWpx)
    },
    getRandom : function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    initLevelEnd : function () {
    document.querySelector('.game-board').innerHTML = '<div class="page-level-ok"><span>LEVEL UP!</span></div>';
    }
}

$('.game-board').append('<div id="scorebar"></div>'); //-----wld_TEMP



/*-----------------------------Inicjujemy Basket--------------------------------*/
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


/*-----------------------------Inicjujemy Bricks--------------------------------*/
var bricks=[];
//Interval tworzacy Bricks
var intervalBrick = setInterval(function () {
    var brick = new Brick(env.getRandom(0,100), 0, env.getRandom(1,10), env.getRandom(1,2));
    brick.init();
    bricks.push(brick);
}, env.creationDelay);


/*-----------------------------Interval Gry--------------------------------*/
var intervalCheck = setInterval(function () {
    //sprawdzanie czy Brick zostal zlapany w Basket
    bricks.forEach(function (element) {
        element.moveDown();
        if(element.checkCollision(basket)){
            if(element.type <= 5) {env.score += element.score} else {env.score -= element.score}
            $('#scorebar').text(env.score);
            element.removeBrick();
            //delete element;
        }else{
           //console.log('out')
        }
    });
    //Jesli osiagnelismy wymagana liczbe punktow Gra zatrzymuje intervals i LEVEL UP!
    if (env.score >= env.levelEndScore){
        clearInterval(intervalCheck);
        clearInterval(intervalBrick);
        bricks = [];
        env.initLevelEnd();
    }
}, 50)


/*-----------------------------Testowe Zatrzymywanie Gry--------------------------------*/
// setTimeout(function () {
//     clearInterval(intervalCheck);
//     clearInterval(intervalBrick);
// }, 10000)


/*
tudu  ----->
1. bricks wychodza za maxX
2. delete brick Objects
3. cos nie tak z basket, jesli nie uruchomimy gry z mysza nad game-board
4. bardziej inteligenetne trzorzenie bricks*
*/