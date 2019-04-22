new Vue({
    el: '#app',

    data() {
        return {
            form: {
                name: null,
                age: null
            }
        }
    },

    computed: {
        nameIsValid () {
            return !!this.form.name
            // console.log(nameIsValid)
        },

        ageIsValid () {
            return typeof this.form.age === 'number' && this.form.age >= 21 && this.form.age < 120
            // console.log(ageIsValid)
        },
        formIsValid () {
            return this.nameIsValid && this.ageIsValid
            // console.log(formIsValid)
        }

    },

    methods: {
        submitForm () {
             
            if (this.formIsValid) {
                console.log('📝 Form Submitted', this.form)
            } else {
                console.log('❌  Invalid form')
            }
                
        }
    }
})