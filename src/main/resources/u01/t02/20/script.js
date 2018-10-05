let block = document.getElementById("one");

// block.onclick = function () {
//     this.style.background = "red";
// };

block.ondblclick = function () {
    this.style.background = "yellow";
};

block.oncontextmenu = function () {
    this.style.background = "black";
    return false;
};

block.onmouseenter = function () {
    this.style.background = "blue";
};

block.onmouseleave = function () {
    this.style.background = "orange";
};

block.onmouseup = function () {
    this.style.background = "green";
};

let a = 100;
block.onmousemove = function () {
    a++;
    this.style.width = a + "px";
};

block.onmousedown = function (e) {
    this.style.background = "gray";
    console.log(e.button);
    console.log(e.which);
};