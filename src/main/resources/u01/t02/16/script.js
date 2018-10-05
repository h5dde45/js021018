document.getElementById("r1").oninput = cssGenerator;

function cssGenerator() {
    let div = document.getElementById("test");
    let out = document.getElementById("out");
    div.style.borderRadius = this.value + "px";

    out.innerHTML="br:"+this.value + " px";
    out.innerHTML="br:"+this.value + " px";
}