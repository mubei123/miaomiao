import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from "./movie"
import cinemaRouter from "./cinema"
import mineRouter from "./mine"

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  base: 'miaomiao',
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path: "/*",
      redirect: "/cinema"
    },
    {
      path: "/cinema",
      component: () => import("@/views/cinema"),
      children: [
        {path: 'cilist', component: () => import("@/components/Cilist")}
      ]
    }
  ]
})

export default router
