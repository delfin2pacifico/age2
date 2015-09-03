(function(){

    var model = {};

    model[moveElmBy] = function (elm, deltaXY){
        elm.style.left = elm.offsetLeft + deltaXY.x + 'px';
        elm.style.top = elm.offsetTop + deltaXY.y + 'px';
    };

    model[moveElmTo] = function (elm, positionXY){
        elm.style.left = positionXY.x + 'px';
        elm.style.top = positionXY.y + 'px';
    }
}());