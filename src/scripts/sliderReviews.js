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
            flag: 1,
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                freeScroll: true,
                cellAlign: 'left'
            }
        }
    },
    methods: {
        next() {
            if (this.flag >= 3) {
                document.querySelector('.slider__btn--next').setAttribute('disabled', 'disabled');
                document.querySelector('.slider__btn--next').classList.add('disabled');
                document.querySelector('.slider__btn-next-black').classList.add('disabled-svg')
            } else {
                document.querySelector('.slider__btn--prev').removeAttribute('disabled', 'disabled');
                document.querySelector('.slider__btn--prev').classList.remove('disabled');
                document.querySelector('.slider__btn-prev-black').classList.remove('disabled-svg')
                this.$refs.flickity.next();
                this.flag++;
                console.log("click");
            }
        },
        previous() {
            if (this.flag <= 1) {
                document.querySelector('.slider__btn--prev').setAttribute('disabled', 'disabled');
                document.querySelector('.slider__btn--prev').classList.add('disabled');
                document.querySelector('.slider__btn-prev-black').classList.add('disabled-svg')
            } else {
                document.querySelector('.slider__btn--next').removeAttribute('disabled', 'disabled');
                document.querySelector('.slider__btn--next').classList.remove('disabled');
                document.querySelector('.slider__btn-next-black').classList.remove('disabled-svg')
                this.$refs.flickity.previous();
                this.flag--;
                console.log("click");
            }
        }
    }
});