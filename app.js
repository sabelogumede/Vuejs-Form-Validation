// Tell vue to use the plugin
Vue.use(vuelidate.default)


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
                between: validators.between(21, 120) //$v.form.age.between
            }
        }
    },

    methods: {
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