let man = {
    "name": "1",
    "age": "32",
    "id": "44re",
    "gender": "male"
};
let man2 = {
    "name": "1",
    "age": "32",
    "id": "44re",
    "gender": "male",
    "year": function () {
        return 2034 - this.age;
    }
};
let m = {
    "mas": [1, 2, 3, 4, 5],
    "sum": function () {
        let res = 0;
        for (let i = 0; i < this.mas.length; i++) {
            res += this.mas[i];
        }
        return res;
    }
};

console.log(man);
console.log(man.name);
console.log(man["id"]);
console.log(man2.year());
console.log(m.sum());