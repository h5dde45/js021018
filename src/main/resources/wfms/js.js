const car = (name, model, owner, year, phone, image) => (
    {name, model, owner, year, phone, image}
);

const cars = [
    car('Ford', 'Focus', "chel_1", 2018,
        "+7 921-123-45-67", "images/focus.jpg"),
    car('Ford', 'Mondeo', "chel_2", 2013,
        "+7 921-123-45-68", "images/mondeo.jpg"),
    car('Porshe', 'Panamera', "chel_3", 2015,
        "+7 921-123-45-69", "images/panamera.jpg")
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedIndex: 0,
        phoneVisibility: false,
        search: "",
        modalVisibility: false
    },
    methods: {
        selectCar: function (index) {
            this.car = this.cars[index];
            this.selectedIndex = index
        }
    },
    computed: {
        phoneBtnText: function () {
            return this.phoneVisibility ? "Hide phone" : "Show phone";
        },
        filterCars(){
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 ||
                    car.model.indexOf(this.search) > -1 ;
            });
        }
    }

});