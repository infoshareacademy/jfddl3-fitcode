function Brick(positionX, positionY, type) {
    this.brickHandler = brick;
    this.x = positionX;
    this.y = positionY;
    this.width = 5;
    this.hight = 5;
    this.type = type; //dodawanie klasy, zeby okreslic typ
    this.move = 1;
    this.init = function () {
        var htmlBrick = $('<div class="brick brick-type-'+this.type+'" style="left: ' + this.x + '%;"></div>');
        $('.game-board').append(htmlBrick);
    }
    this.moveDown = function () {
        if ((_positionY + this.speed) >= 0) {
            this.x = this.x + this.move;
            $(this.brickHandler).css('top', _positionY + '%');
        }
    }
    this.removeBrick = function () {
        $(this.brickHandler).remove();
    }
}