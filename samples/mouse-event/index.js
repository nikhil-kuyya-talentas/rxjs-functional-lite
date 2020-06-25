'use strict';

document.onreadystatechange = function (ev) {
    function complete() {
        document.addEventListener('mousedown', function () {
            document.addEventListener('mousemove', mouseMoveEventHanlder);
            document.addEventListener('mouseup', function (evt) {
                document.removeEventListener('mousemove', mouseMoveEventHanlder);
            });
        });
        function mouseMoveEventHanlder(evt) {
            console.log(evt.clientX, evt.clientY);
        }
        document.addEventListener('click', console.log);
    }
    if (document.readyState === 'complete') {
        console.log('ready');
        complete();
    }
};
