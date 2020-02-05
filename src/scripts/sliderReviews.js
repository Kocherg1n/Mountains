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
                initialIndex: 3,
                prevNextButtons: true,
                pageDots: false,
                wrapAround: true,
                freeScroll: true
                // any options from Flickity can be used
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