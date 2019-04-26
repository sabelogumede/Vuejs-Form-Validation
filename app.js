// Tell vue to use the plugin
Vue.use(vuelidate.default)

const pizzaOrBurger = value => value === 'pizza' || value === 'burger' || !validators.helpers.req(value)
const oldEnoughAndAlive = validators.between(21, 120) 

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

    validations: {
        form: {
            name: {
                required: validators.required
                // min: validators.minLength(3)
            },

            age: {
                required: validators.required, //$v.form.age.required
                integer: validators.integer, //$v.form.age.integer
                oldEnoughAndAlive //$v.form.age.oldEnoughAndAlive
            },

            email: {
                email: validators.email
            },

            food: {
                pizzaOrBurger
            }
        }
    },

    methods: {
        shouldAppendValidclass (field) {// ex: field = $v.form.email
            return !field.$invalid && field.$model && field.$dirty
        },
        shouldAppendErrorClass (field) {// ex: field = $v.form.email
            return field.$error
        },
        submitForm () {
            this.$v.form.$touch()
            if (!this.$v.form.$invalid) {
                console.log('📝 Form Submitted', this.form)
            } else {
                console.log('❌  Invalid form')
            }
                
        }
    }
})