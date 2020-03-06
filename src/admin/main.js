import "../styles/main.pcss"; // временный импорт (без блоков основного сайта)

import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes.js'

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})