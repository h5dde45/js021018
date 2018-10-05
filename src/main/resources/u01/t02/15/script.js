let p = document.getElementsByTagName("p");
let one = document.getElementsByClassName("one");

for (let i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}
for (let i = 0; i < one.length; i++) {
    one[i].onclick = f2;
}

function f1() {
    this.style.fontWeight = "bold";
    this.style.color = "red";
    this.style.background = "yellow";
}

function f2() {
    this.style.fontStyle = "inherit";
    this.style.color = "blue";
    this.style.background = "red";
}
