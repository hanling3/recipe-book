import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VCalendar from 'v-calendar';


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


// --------- <Global Variable> -----------------
let globalData = new Vue({
  options: { $addtofav: 'false' }
});

Vue.mixin({
  computed: {
    $addtofav: {
      get: function () { 
        console.log('hello from mixin getter!');
        return globalData.$options.$addtofav },
      set: function (newOption) { 
        console.log('hello from mixin setter!');
        globalData.$options.$addtofav = newOption; 
      }
    }
  }
})
// --------- </Global Variable> -----------------

Vue.config.productionTip = false


// Use v-calendar & v-date-picker components
Vue.use(VCalendar);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
