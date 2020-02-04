import Vue from 'Vue'
import axios from 'axios'

export default function () {
    const previews = {
        template: '#slider-previews',
        props: {
            works: Array,
            currentWork: Object,
            currentIndex: Number,
        }

        computed: {
            translate() {
                const step = 100 / this.works.length;

                if (this.currentIndex >= this.worksLength - 1) return;
                if (this.currentIndex < 2) return 0;
                if (this.currentIndex >= 2) return step * (this.currentIndex - 1);
            }
        }
    }
    http: //localhost:8081/
        const btns = {
            templates: '#slider-btns',
            props: {
                current: Number,
                worksLength: Number
            }

        }

    const display = {
        template: '#slider-display',
        components: {
            previews,
            btns
        }
    }

    const tags = {

    }

    const description = {
        templats: '#slider-desc',
        components: {
            tags
        }
    }

    new Vue({
        el: '#slider-container',
        template: '#slider-template',
        components: {
            display,
            description
        },
        data() {

        }
    })
}