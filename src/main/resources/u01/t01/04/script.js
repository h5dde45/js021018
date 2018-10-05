function upb() {
    document.querySelector(".hidden-block")
        .style.display = "block";
}
function userProgress(time) {
    var start = 0;
    var timer = time * 10;
    var progressElement = document.getElementById("userProgress");

    var interval = setInterval(function () {
            if (start > 100) {
                clearInterval(interval);
                upb();
            } else {
                progressElement.value = start;
                start++;
            }
        }
        ,
        timer
    );
}
userProgress(3);