document.getElementById("innerHTML").onclick = function () {
    let p = document.getElementById("text");
    p.innerHTML = "<i>innerHTML</i>";
};
document.getElementById("addInnerHTML").onclick = function () {
    let p = document.getElementById("text");
    p.innerHTML += " addInnerHTML";
};
document.getElementById("beforeBegin").onclick = function () {
    let p = document.getElementById("text");
    p.insertAdjacentHTML("beforeBegin","hi");
};
document.getElementById("afterBegin").onclick = function () {
    let p = document.getElementById("text");
    p.insertAdjacentHTML("afterBegin","hi");
};
document.getElementById("outerHTML").onclick = function () {
    let p = document.getElementById("text");
    p.outerHTML="outerHTML";
};
