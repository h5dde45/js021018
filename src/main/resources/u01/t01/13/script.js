let tagA = document.getElementsByTagName("a");

for (let i = 0; i < tagA.length; i++) {
    console.log(tagA[i].href );
    if (tagA[i].getAttribute("href") == "#") {
        tagA[i].style.color = "red";
    }
}