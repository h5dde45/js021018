
let cat = document.getElementById("cat");

document.onmousemove = function (event) {
    cat.style.position = "fixed";
    cat.style.left = event.clientX + "px";
    cat.style.top = event.clientY + "px";
};