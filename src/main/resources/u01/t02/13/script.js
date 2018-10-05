document.getElementById("sl").onclick = sliderLeft;
let left = 0;
let timer;
autoSlider();


function autoSlider() {
    timer = setTimeout(sliderLeft, 1000);
}

function sliderLeft() {
    let polosa = document.getElementById("polosa");
    left -= 128;
    if (left < -512) {
        left = 0;
        clearTimeout(timer);
    }
    polosa.style.left = left + "px";
    autoSlider();
}