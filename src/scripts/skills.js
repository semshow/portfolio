import Vue from 'vue'
import { createDecipher } from 'crypto'

const skill = {
  template: '#skill',
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drawColoredCircle() {
      const circle = this.$refs['circle']
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dasharray')
      );
        const percent = (dashArray / 100) * (100 - this.skillPercent);
        circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
}

const row = {
  template: '#skills_row',
  props: {
    skill: Object
  },
  components: {
    skill
  }
}

new Vue({
  el: '#skills_container',
  template: '#skills_list',
  components: {
    row
  },
  data() {
    return {
      skills: []
    }
  },
  created() {
    const data = require('../data/skills.json')
    this.skills = data
  }
})
