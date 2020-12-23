import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router';
import TabBottom from '@/components/TabBottom'
//引用页面
import Taskaway from '../page/taskaway.vue'
import Search from '../page/search.vue'
import Order from '../page/order.vue'
import Mine from '../page/mine.vue'
import Shop from '../page/shop.vue'
import Food from '../page/food.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'taskaway',
    component: Taskaway
  },
  //单个路由均为对象，path：路径，component：组件
  { path: "/search", component: Search, name: 'search' },
  { path: "/order", component: Order, name: 'order' },
  { path: "/mine", component: Mine, name: 'mine' },
  { path: "/shop", component: Shop, name: 'shop' },
  { path: "/food", component: Food, name: 'food' }
]

const router = new VueRouter({ routes })
export default router