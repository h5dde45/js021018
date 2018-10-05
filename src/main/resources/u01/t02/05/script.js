document.getElementById("add").onclick = function () {
    document.getElementById("res").innerHTML =
        parseInt(document.getElementById("n1").value) +
        parseInt(document.getElementById("n2").value);
};
document.getElementById("subtraction").onclick = function () {
    document.getElementById("res").innerHTML =
        document.getElementById("n1").value -
        document.getElementById("n2").value;
};
