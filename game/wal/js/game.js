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


/*-----------------------------Definjujemy koszyk-------------------------------------*/
function createPad() {
    var pad = {
        x: 40,
        y: 90,
        width: 20,
        init: function () {
            var padd = $('<div class="pad" style="top: ' + this.y + '%;left: ' + this.x + '%;"></div>');
            $('.game-board').append(padd);
        },
        movePad: function (z) {
            this.x = z;
            $('.pad').css('left', (this.x) + '%');
            $('.pad').html('this.x: ' + this.x); //----wld_test
            //console.log(this.x); //--------------------wld_CL
        },
    }
    return pad
}

//tworzymy i inicjujemy koszyk
var basket = createPad();
basket.init();
//poruszamy koszykiem
$('.game-board').mousemove(function (e) {
    //console.log('page: ', e.pageX); //--------------------wld_CL
    var newX = Math.floor(calcProc(e.pageX) - basket.width / 2 - calcProc($('.game-board').offset().left));
    //console.log(newX); //--------------------wld_CL
    if ((newX + basket.width < env.maxPosX) && (newX > env.minPosX)) {
        basket.x = newX;
    } else if (newX + basket.width >= env.maxPosX) {
        basket.x = env.maxPosX - basket.width;
    } else {
        basket.x = env.minPosX;
    }
    //basket.x = newX;
    basket.movePad(basket.x);
});


/*-----------------------------Definjujemy pojedynczy klocek-------------------------------------*/
function createPoint(id) {
    var point = {
        id: id,
        x: Math.round(Math.random() * 100),
        y: 0,
        type: 0,
        speed: 1,
        init: function () {
            var bullet = $('<div id="' + id + '" class="bullet" style="left: '+ this.x +'%; background-color: ' + (this.type == 0 ? 'green' : 'red') + '"></div>');
            $('.game-board').append(bullet);
            setTimeout(function () {
                $('#' + id).addClass('falling')
            }, 1)
        },
        removePoint: function () {
            $('#' + id).remove();
        }
    };
    return point;
}



//tworzymy i inicjujemy pojedynczy klocek
var point = createPoint(1)
point.init()

//tu na razie jeszcze nic. bedziemy to sprawszac czy klocek spadl za ekran lub zderzyl sie z koszykiem
setInterval(function () {

    if ($('#'+point.id).css('top') > env.MaxPosY) {point.removePoint()}
}, 10)