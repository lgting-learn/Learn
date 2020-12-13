// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router/router'
import 'lib-flexible/flexible'
import './common/common.css'//引用公共样式
import { Tabbar, TabbarItem, Icon, NavBar, Swipe, SwipeItem } from 'vant';
import axios from 'axios';
Vue.prototype.$axios = axios;
import qs from 'qs'
Vue.prototype.$qs = qs;

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
