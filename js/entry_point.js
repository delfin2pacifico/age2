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

    styleSheet.sheet.insertRule('.verticalLine {position: absolute; width: 1px; height: 100%; border-left: 1px dotted #aaa;}', 0);
    styleSheet.sheet.insertRule('.horizontalLine {position: absolute; width: 100%; height: 1px; border-top: 1px dotted #aaa;}', 0);


    pointerCros.verticalLine.classList.add('verticalLine');
    pointerCros.horizontalLine.classList.add('horizontalLine');

    document.body.appendChild(pointerCros.verticalLine);
    document.body.appendChild(pointerCros.horizontalLine);


    window.addEventListener('mousemove', function (eventObj) {
        pointerCros.verticalLine.style.left = eventObj.clientX + 'px';
        pointerCros.horizontalLine.style.top = eventObj.clientY + 'px';
    });

    styleSheet.sheet.insertRule('.new-elm {position: absolute; width:5px; height:5px; border: 1px dotted #55a; background: #88a}', 0);

    window.addEventListener('mousedown', function (eventObj) {
        var newElm = document.createElement('div'),
            left = eventObj.clientX,
            top = eventObj.clientY;

        newElm.classList.add('new-elm');
        newElm.style.left = left + 'px';
        newElm.style.top = top + 'px';

        document.body.appendChild(newElm);

        function sizer(eventObj) {
            var width = eventObj.clientX - left,
                height = eventObj.clientY - top;

            width = width > 5 ? width : 5;
            height = height > 5 ? height : 5;

            newElm.style.width = width + 'px';
            newElm.style.height = height + 'px';
        }

        window.addEventListener('mousemove', sizer);
        window.addEventListener('mouseup', function () {
            window.removeEventListener('mousemove', sizer)
        })

    })


}());