import Vue from 'vue'
import Router from '@views/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(Router)
Vue.use(ElementUI)

new Vue({
    el: '#app',
    render: h => h(App)
});