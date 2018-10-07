let test = document.getElementById("test");
let shift = 0;

function move() {
    test.style.marginLeft = shift + 'px';
    shift += 40;
}
let interval = setInterval(move, 1000);

document.getElementById("stop").onclick = function () {
    clearInterval(interval);
};

document.getElementById("start").onclick = function () {
    setTimeout(move,500);
};

