import Vue from 'vue'
import Flickity from 'vue-flickity'


const review = {
  template: '#review_template',
  props: {
    review: Object
  }
}
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
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: true,
      groupCells: 2,
      draggable: false
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map((item) => {
        const requirePic = require(`../images/content/${item.photo}`)
        item.photo = requirePic;
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
