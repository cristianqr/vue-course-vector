import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import es from 'vee-validate/dist/locale/es';
import App from './App.vue'
import './shared'
import './shared/directives'
import './shared/filters';
import router from './routes';

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

const veeValidateConfig = {
    classNames: {
        invalid: 'is-invalid',
        valid: 'is-valid'
    },
    classes: true
};

Vue.use(VeeValidate, veeValidateConfig);
Validator.localize('es', es);

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
