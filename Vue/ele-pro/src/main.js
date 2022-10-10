// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router/router'
import 'lib-flexible/flexible'
import './common/common.css'//引用公共样式
import './config/rem.js'
import VueScroller from 'vue-scroller'
import websdk from "easemob-websdk"
import {
  Tabbar, TabbarItem, Icon, NavBar, Swipe, SwipeItem, Popup, AddressEdit,
  AddressList, Toast, Dialog, Tab, Tabs, Search, List, Lazyload, Skeleton, Rate,
  Uploader, SwipeCell, Button, Cell, Loading
} from 'vant';
import axios from 'axios';
import 'vant/lib/index.css'

Vue.prototype.$axios = axios;
import qs from 'qs'

import {Image as VanImage} from 'vant';
import {NoticeBar} from 'vant';

Vue.prototype.$qs = qs;

Vue.use(VanImage);
Vue.use(VueScroller);
Vue.use(Popup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(AddressEdit);
Vue.use(AddressList);
Vue.use(Toast);
Vue.use(List);
// 全局注册
Vue.use(Dialog);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
Vue.use(Lazyload);
Vue.use(Skeleton);
Vue.use(Rate);
Vue.use(Uploader);
// 通知栏
Vue.use(NoticeBar);
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Cell);
Vue.use(Loading);
Vue.config.productionTip = false

Vue.directive("focus",{
  inserted:function (el,binding){
    el.focus();
    console.log(binding)
  },
  update:function (el){
    console.log("update "+el)
  },
  componentUpdated:function (el){
    console.log("componentUpdated "+el)

  }
})
Vue.filter("FormatTime", function (value) {
  return value + "全局";
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
export default {
  mounted() {
    this.$toast('提示文案');
  },
};
