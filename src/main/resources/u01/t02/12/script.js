document.getElementById("sl").onclick = sliderLeft;
let left = 0;

function sliderLeft() {
    let polosa = document.getElementById("polosa");
    left -= 128;
    if (left < -512) {
        left = 0;
    }
    polosa.style.left = left + "px";
}