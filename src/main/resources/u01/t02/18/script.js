let radio = document.getElementsByName("prim");

for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = testRadio;
}

function testRadio() {
    console.log(this.value);
}

document.getElementById("one").onclick=checkRadio;

function checkRadio() {
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked){
            alert(radio[i].value);
            break;
        }
        console.log(radio[i].value);
    }
}