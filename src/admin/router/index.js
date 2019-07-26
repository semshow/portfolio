import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@router/routes"

Vue.use(VueRouter)

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
  next();
})

export default router({routes, mode: 'history'})

