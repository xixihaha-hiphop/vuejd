import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Vant from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'vant/lib/index.css';
import 'swiper/css/swiper.css'

import Home from '../pages/Home.vue'
import Sort from '../pages/Sort.vue'
import ShopCart from '../pages/ShopCart.vue'
import Mine from '../pages/Mine.vue'
import PhoneList from '../pages/PhoneList.vue'


Vue.use(Router)
Vue.use(Vant)
Vue.use(VueAwesomeSwiper)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/phonelist',
      name: 'PhoneList',
      component: PhoneList
    }
  ]
})
