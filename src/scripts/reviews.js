import Vue from 'vue';
import Flickity from 'vue-flickity';


const review = {
  template: '#review_template',
  props: {
    review: Object
  }
};
new Vue({
  el: '#reviews_slider',
  template: '#reviews_template',
  components: {
    Flickity,
    review
  },
  data: {
    reviews: [],
    flickityOptions: {
      freeScroll: true,
      contain: true,
      prevNextButtons: false,
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: false,
      groupCells: 2,
      draggable: false,
      adaptiveHeight: true
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map((item) => {
        const requirePic = require(`../images/content/${item.avatar}`)
        item.avatar = requirePic;
        return item
      })
    },
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    }
  },
  created(){
    const data = require('../data/reviews.json');
    this.reviews = this.makeArrWithRequiredImages(data);
  }
})
