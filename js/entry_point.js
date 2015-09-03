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

    styleSheet.sheet.insertRule('.verticalLine {position: absolute; width: 1px; height: 100%; border-left: 1px dotted #555;}', 0);
    styleSheet.sheet.insertRule('.horizontalLine {position: absolute; width: 100%; height: 1px; border-top: 1px dotted #555;}', 0);


    pointerCros.verticalLine.classList.add('verticalLine');
    pointerCros.horizontalLine.classList.add('horizontalLine');

    document.body.appendChild(pointerCros.verticalLine);
    document.body.appendChild(pointerCros.horizontalLine);


    window.addEventListener('mousemove', function (eventObj) {

        pointerCros.verticalLine.style.left = eventObj.clientX + 'px';
        pointerCros.horizontalLine.style.top = eventObj.clientY + 'px';

    })


}());