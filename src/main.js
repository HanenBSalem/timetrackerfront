import  Vue from "vue";
import Vuesax from 'vuesax';
import App from './App.vue';

Vue0config.productionTip = false;
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax, {

});

new Vue ({
    render: (h)=> h (App),
}).$mount("#app");
