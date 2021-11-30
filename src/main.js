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
let globalData1 = new Vue({
  options: { $addtofav: 'false' },
});

let globalData2 = new Vue({
  options: { $addtoplan: 'false' },
});

let globalData3 = new Vue({
  options: { $uploadrecipe: 'false' },
});

let globalData4 = new Vue({
  options: { $thedish: {} },
});

Vue.mixin({
  computed: {
    $addtofav: {
      get: function () { 
        console.log('hello from $addtofav mixin getter!');
        return globalData1.$options.$addtofav },
      set: function (newOption) { 
        console.log('hello from $addtofav mixin setter!');
        console.log(this.$addtofav)
        globalData1.$options.$addtofav = newOption; 
      }
    },
    $addtoplan: {
      get: function () { 
        console.log('hello from $addtoplan mixin getter!');
        return globalData2.$options.$addtoplan },
      set: function (newOption) { 
        console.log('hello from $addtoplan mixin setter!');
        console.log(this.$addtoplan)
        globalData2.$options.$addtoplan = newOption; 
      }
    },
    $uploadrecipe: {
      get: function () { 
        console.log('hello from $uploadrecipe mixin getter!');
        return globalData3.$options.$uploadrecipe },
      set: function (newOption) { 
        console.log('hello from $uploadrecipe mixin setter!');
        console.log(this.$uploadrecipe)
        globalData3.$options.$uploadrecipe = newOption; 
      }
    },
    $thedish: {
      get: function () { 
        console.log('hello from $thedish mixin getter!');
        return globalData4.$options.$thedish },
      set: function (newOption) { 
        console.log('hello from $thedish mixin setter!');
        console.log(this.$thedish)
        globalData4.$options.$thedish = newOption; 
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
