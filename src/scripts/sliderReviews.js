import Vue from "vue";
import Flickity from 'vue-flickity'

new Vue({
    el: "#slider-reviews",
    template: "#reviews-list",
    components: {
        Flickity,
    },
    data() {
        return {
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                freeScroll: true,
                autoPlay: 4000
            }
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    }
})







// new Vue({
//     el: "#slider-reviews",
//     template: "#reviews-list",
//     components: {
//         Flickity,
//     },
//     data() {
//         return {
//             flickityOptions: {
//                 prevNextButtons: false,
//                 pageDots: false,
//                 wrapAround: true,
//                 freeScroll: true,
//                 autoPlay: 4000
//             }
//         }
//     },
//     methods: {
//         next() {
//             this.$refs.flickity.next();
//         },

//         previous() {
//             this.$refs.flickity.previous();
//         }
//     }
// })