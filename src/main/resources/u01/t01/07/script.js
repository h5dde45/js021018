document.getElementById("in").oninput = function () {
    const offset = 1;
    let str = this.value;
    let out = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code +=  offset;
        out += String.fromCharCode(code);
    }
    document.getElementById("help").innerHTML = str;
    document.getElementById("out").innerHTML = out;
};

document.getElementById("out2").oninput = function () {
    const offset = 1;
    let str = this.value;
    let out = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code -=  offset;
        out += String.fromCharCode(code);
    }
    document.getElementById("out3").innerHTML = out;
};