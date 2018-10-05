let goods = {
    "43rt2": {
        "name": "banana",
        "cost": 33,
        "img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Banana.png",
        "sclad": "yes"
    },
    "4rt556": {
        "name": "tomato",
        "cost": 44,
        "img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
        "sclad": "no"
    },
    "57uyt": {
        "name": "apple",
        "cost": 22,
        "img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Apple.png",
        "sclad": "yes"
    }
};


let out = "";
for (let rey in goods) {
    out += " Name: " + goods[rey].name +"<br>"+
         "Cost: " + goods[rey].cost +"<br>"+
         "Sclad: " + goods[rey].sclad +"<br>"+
         "<img src='" + goods[rey].img +"'<br><hr>"
         ;
}

let div = document.getElementById("out").innerHTML = out;

