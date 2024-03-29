Vue.decodeURIComponent()

let sample = new Vue({
    el: ".sample",
    data: {
        name: "asd",
        showH2: false,
        numbers: []
    },
    methods: {
        addNumber(){
            let rnd = Math.floor(Math.random() * 11) - 5;
            this.numbers.push(rnd);
        }
    },
    computed: {
        sum(){
            let sum = 0;
            for (let i = 0; i < this.numbers.length; i++) {
                sum += this.numbers[i];
            }
            return sum;
        },
        btnText(){
           return this.showH2 ? 'Hide' : 'Open';
        }
    },
    watch: {}
});
