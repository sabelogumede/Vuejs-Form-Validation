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
                required: validators.required,
                integer: validators.integer,
                between: validators.between(21, 120)
            }
        }
    },

    methods: {
        submitForm () {
             
            if (!this.$v.form.$invalid) {
                console.log('📝 Form Submitted', this.form)
            } else {
                console.log('❌  Invalid form')
            }
                
        }
    }
})