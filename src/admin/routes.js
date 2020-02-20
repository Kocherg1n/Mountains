import VueRouter from 'vue-router'
import About from './pages/About.vue'
import Works from './pages/Works.vue'
import Reviews from './pages/Reviews.vue'


export default new VueRouter({
    routes: [{
        path: '',
        component: About
    }, {
        path: '/works',
        component: Works
    }, {
        path: '/reviews',
        component: Reviews
    }],

})