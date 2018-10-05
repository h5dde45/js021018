function alertInfo() {
    alert('asd');
}

function checkTime() {
    var timeIn = Math.round(Date.now() / 1000);
    if (Math.round(Date.now() / 1000) < timeIn + 1){
        alertInfo();
    }
        console.log(timeIn);
}
checkTime();