(function () {

    var model = {},
        view = {},
        controller = {};


    model.moveElmBy = function (elm, deltaXY) {
        elm.style.left = elm.offsetLeft + deltaXY.x + 'px';
        elm.style.top = elm.offsetTop + deltaXY.y + 'px';
    };

    model.moveElmTo = function (elm, positionXY) {
        elm.style.left = positionXY.x + 'px';
        elm.style.top = positionXY.y + 'px';
    };

    var pointerCros = {
        "verticalLine": document.createElement('div'),
        "horizontalLine": document.createElement('div')
    };

    var styleSheet = document.createElement('style');
    document.head.appendChild(styleSheet);

    styleSheet = styleSheet.sheet;
    styleSheet.addRule('.verticalLine', 'position:absolute');


    console.log();

}());