import Vue from "vue";
import Flickity from 'vue-flickity'

let items = document.querySelectorAll('.carousel-cell');
console.log(items);

new Vue({
    el: "#slider-reviews",
    template: "#reviews-list",
    components: {
        Flickity,
    },
    data() {
        return {
            counter: 0,
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                freeScroll: false,
                cellAlign: 'left',
                draggable: false
            }
        }
    },
    methods: {
        next() {
            this.counter++;
            if (this.counter > 0) {
                document.querySelector('.slider__btn--prev').classList.remove('disabled')
            }
            if (this.counter === 3) {
                document.querySelector('.slider__btn--next').classList.add('disabled')
            }
            this.$refs.flickity.next();
        },
        previous() {
            this.counter--;
            if (this.counter === 0) {
                document.querySelector('.slider__btn--prev').classList.add('disabled')
            }
            if (this.counter < 3) {
                document.querySelector('.slider__btn--next').classList.remove('disabled')
            }
            this.$refs.flickity.previous();
        }
    }
});