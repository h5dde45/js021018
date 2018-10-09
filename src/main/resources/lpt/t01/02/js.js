new Vue({
    el: "#app",
    data: {
        formData: {
            firstname: "",
            lastname: "",
            url: "http://www.",
            badge: "",
            bookisbn: "",
            techno: ""
        },
        showDetails: false
    },
    computed: {
        fullname: function () {
            return this.formData.firstname + " "
                + this.formData.lastname;
            +this.formData.lastname;
        },
        technoArray: function () {
            return this.formData.techno.split(",");
        }
    },
    methods: {
        submit: function () {
            this.showDetails = true;
        }
    }
});