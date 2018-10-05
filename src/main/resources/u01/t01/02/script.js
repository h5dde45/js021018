document.querySelector('#test').onmousemove = function (event) {
    document.querySelector('#offX').innerHTML=event.offsetX;
    document.querySelector('#offY').innerHTML=event.offsetY;
};