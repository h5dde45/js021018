Vue.component('zxc', {
    template: "<h1>tttt</h1>"
});

new Vue({
    el: "#app",
    data: {
        name: "1",
        age: 44,
        currentBook: "Vue js book",
        books: [],
        url: "https://yandex.ru/"
    },
    methods: {
        changeName: function () {
            this.name = "2";
        },
        addBook: function () {
            this.books.push(this.currentBook);
        }
    },
    computed: {
        userInfo: function () {
            return this.name + " = " + this.age;
        }
    },
    watch: {
        name: function () {
            console.log(this.name)
        }
    }
});
