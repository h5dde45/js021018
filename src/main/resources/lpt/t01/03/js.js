let vm1 = new Vue({
    el: "#app1",
    data: {
        formData: {
            firstname: "",
            lastname: ""
        }
    },
    computed: {
        fullname: function () {
            return this.formData.firstname + " "
                + this.formData.lastname;
        }
    },
    methods: {
        submit: function () {
            alert(this.fullname)
        }
    }
});

let vm2 = new Vue({
    el: "#app2",
    data: {
        formData: {
            firstname: "",
            lastname: ""
        }
    },
    computed: {
        fullname: function () {
            return this.formData.firstname + " "
                + this.formData.lastname;
        }
    },
    methods: {
        submit: function () {
           alert(vm1.fullname)
        }
    }
});