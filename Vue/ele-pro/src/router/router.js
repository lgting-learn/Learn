import Vue from 'vue'
//引入vue-router
import VueRouter from 'vue-router';
import TabBottom from '@/components/TabBottom'
//引用页面
import Index from '../page/index/index.vue'
import Search from '../page/search/search.vue'
import Order from '../page/order/order.vue'
import Mine from '../page/mine/mine.vue'
import ConfirmOrder from '../page/index/confirmOrder.vue'
import Shop from '../page/index/shop.vue'
import Food from '../page/index/food.vue'
import PersonalCenter from '../page/mine/personalCenter.vue'
import AddressCreate from '../page/mine/addressCreate.vue'
import MyAddress from '../page/mine/myAddress.vue'
import Login from '../page/mine/login.vue'
import Settings from '../page/mine/settings.vue'
import UserRate from '../page/index/userRate.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      keepAlive: true // 需要缓存
    }
  },
  //单个路由均为对象，path：路径，component：组件
  { path: "/search", component: Search, name: 'search' },
  { path: "/order", component: Order, name: 'order' },
  { path: "/mine", component: Mine, name: 'mine' },
  { path: "/shop", component: Shop, name: 'shop' },
  {
    path: "/food", component: Food, name: 'food', meta: {
      keepAlive: false // 不需要缓存
    }
  },
  { path: "/personalCenter", component: PersonalCenter, name: 'personalCenter' },
  { path: "/addressCreate", component: AddressCreate, name: 'addressCreate' },
  { path: "/myAddress", component: MyAddress, name: 'myAddress' },
  { path: "/login", component: Login, name: 'login' },
  { path: "/settings", component: Settings, name: 'settings' },
  { path: "/confirmOrder", component: ConfirmOrder, name: 'confirmOrder' },
  { path: "/userRate", component: UserRate, name: 'userRate' },
]

const router = new VueRouter({
  routes,
  mode: 'hash',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.documentElement.scroll
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
// router.beforeEach((to, from, next) => {
//   window.history.replaceState(null, null, window.location.href);
//   next();
// });
export default router
