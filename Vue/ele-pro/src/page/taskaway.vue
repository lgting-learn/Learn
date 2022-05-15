<template>
  <div class="taskaway flex_column fixed_full" id="taskaway" ref="taskaway">
    <div
      class="common_container common_container_task"
      id="common_container_task"
      ref="common_container_task"
    >
      <SwiperTA ref="swiper_taskaweay" @getSwiperHeight="getSwiperHeight"> </SwiperTA>
      <div
        class="taskaway_skeleton_top flex_row"
        :class="skeleton_loading ? '' : 'display_hidden'"
      >
        <van-skeleton
          v-for="i in 8"
          :key="i"
          title
          avatar
          title-width="50px"
          :animate="false"
          avatar-size="30px"
        />
      </div>
      <!-- 分割条 -->
      <div
        class="split taskaway_split"
        :class="skeleton_loading ? 'display_hidden' : 'display_block'"
      ></div>
      <div
        class="near_shop_top padding_10 box_fixed broadcast"
        id="near_shop_top"
        :class="{ is_fixed: isFixed }"
      >
        <!-- <span>附近商家</span> -->
        <van-notice-bar
          left-icon="volume-o"
          text="App展示数据均爬取自美团，仅供学习使用。"
          color="red"
        />
      </div>
    </div>

    <div class="contentItem near_shop_show" ref="near_shop_show">
      <!-- loadingTimeOut=500：请求时间小于500毫秒，不显示加载动画 -->
      <!-- <div v-for="item in 5" :key="item" class="item vue-waterfall-easy-scroll" style="padding: 20px">
        item{{ item }}
        <img src="http://p0.meituan.net/waimaipoi/23116ead6885e6883689db8010b5384d52286.jpg" alt="">
      </div> -->
      <van-loading type="spinner" color="#1989fa" vertical v-if="1 == 2" />

      <waterFall
        :imgsArr="imgsArr"
        :columns="columns"
        :shop_start="shop_start"
        :shop_limit="shop_limit"
        ref="waterFall"
        :waterFullBottom="waterFullBottom"
        :waterFulpadding="waterFulpadding"
        @broadcastCell="broadcastCell"
        @getData="getData"
      ></waterFall>
    </div>

    <TabBottom :nav_title="nav_title" :active="active"></TabBottom>
  </div>
</template>

<script>
import SwiperTA from "@/components/SwiperTA.vue";
import TabBottom from "@/components/TabBottom.vue";
import Top from "@/components/Top.vue";
import waterFall from "@/components/waterFall.vue";
import $ from "jquery";

import { getStore, setStore, isNotBlank, throttle } from "../config/mUtils";
import { all } from "q";

let qs = require("qs");

export default {
  components: { SwiperTA, TabBottom, Top, waterFall },
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
      items: [{ title: "foo" }, { title: "baz" }],
      skeleton_loading: true, //骨架屏，瀑布流true显示
      swi_height: 0, //轮播图组件高度
      showOrNot: "y",
      nav_title: "外卖",
      active: 0,
      responseData: [],
      shop_start: 0,
      shop_limit: 10,
      shop_done: false, //true加载到最后一页
      maxHeiDiv: 0,
      waterFallNums: 0,
      // 瀑布流参数
      columns: 2, // 列数
      imgsArr: [],
      waterFullBottom: 15, //底部距离下张图片距离
      waterFulpadding: 10, // 图片左/右间隔 三份
    };
  },
  computed: {
    isShow() {
      return this.items && this.items.length > 0;
    },
  },
  watch: {},

  // router跳转离开列表页前，记录当前页面的位置
  beforeRouteLeave(to, from, next) {
    // let container_scroll = document.querySelector(".common_container_task").scrollTop; // 要滚动到顶部吸附的元素的偏移量
    // let waterfall_scroll = document.querySelector(".vue-waterfall-easy-scroll").scrollTop;
    // setStore("container_scroll", container_scroll);
    // setStore("waterfall_scroll", waterfall_scroll);
    next();
  },
  // 详情页面进入列表页前
  beforeRouteEnter(to, from, next) {
    if (from.name == "shop") {
      next((vm) => {
        // vm.$refs.common_container_task.scrollTop = getStore("container_scroll");
        // vm.$refs.waterfall.$refs.scrollEl.scrollTop = getStore("waterfall_scroll");
      });
    } else {
      next((vm) => {
        // vm.$refs.common_container_task.scrollTop = 0;
      });
    }
  },
  methods: {
    // 页面尺寸改变时实时触发
    // window.onresize = function() {
    //     //重新定义瀑布流
    //     waterFall();
    // };

    // 获取轮播图高度
    getSwiperHeight(height) {
      // this.swi_height = height;
    },

    onClickLeft() {},
    imgErrorFn() {
      //补充
    },

    // 使用瀑布流组件的router-link跳转，ios微信预览底部出现工具栏，用replace替代即可解决
    clickFn(event, { index, value }) {
      // 阻止a标签跳转
      event.preventDefault();
      this.$router.replace(value.href);

      this.swi_height = event.clientY;
      this.scroll = this.swi_height + this.$refs.common_container_task.scrollTop;
    },

    changeTitle(title) {
      this.nav_title = title;
    },

    //瀑布流 触底加载
    getData() {
      if (this.shop_done) {
        // this.$refs.waterfall.waterfallOver();
        return;
      }
      let that = this;
      let data = qs.stringify({
        start: this.shop_start,
        limit: this.shop_limit,
      });
      // 清空瀑布流列长和数组
      if (this.shop_start == 0) {
        setStore("arrH", []);
      }

      this.$axios.post("/api/shop", data).then(function (res) {
        that.skeleton_loading = false;
        if (res && res.data) {
          that.shop_start += that.shop_limit;
          if (res.data.length == that.shop_limit) {
          } else {
            that.shop_done = true; //最后一页
          }
          that.$refs.waterFall.changeIsInProcessing(false);
        }
        that.responseData = res.data;
        that.imgsArr = [];
        that.responseData.forEach((res) => {
          that.imgsArr.push({
            src: res.image_path,
            href: {
              path: "/shop",
              query: { restaurant_id: res.id, backPageName: "taskaway" },
            }, //!!!vueWaterfallEasy瀑布流组件 跳转传参
            info: res.name,
            score: res.score,
            introduce: res.introduce,
            per_capita: res.per_capita,
            month_sales: res.month_sales,
            id: res.id,
          });
        });
      });
    },
    // 吸顶
    broadcastCell() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > this.offsetTop ? true : false;
      // }
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
  // 离开当前页面 销毁 未生效 TODO
  destroyed() {},
};
</script>

<style>
.taskaway .van-loading {
  position: fixed !important;
  left: 50%;
  margin-left: -15px;
  z-index: 1000;
}
.taskaway {
  overflow-x: hidden;
  /* height: 1253px; */
}
.taskaway.fixed_full {
  position: relative !important;
}
.contentItem {
  /* margin-bottom: 47px; */

  /* flex: 1;
  overflow-y: scroll; */
}

.is_fixed {
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 999;
}
.skeleton_right_fill {
  background: #f2f3f5;
  width: 100%;
  height: 25px;
  margin: 0 17px;
  margin-top: 20px;
}
.taskaway_skeleton_top {
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
}
.taskaway_skeleton_btm {
  flex: 4;
  flex-wrap: wrap;
  justify-content: space-between;
}
.taskaway_skeleton_btm .van-skeleton__avatar {
  border-radius: 5px;
  width: 80% !important;
  height: 150px !important;
}
.taskaway_skeleton_btm .van-skeleton__title {
  margin-left: 16px;
}

.taskaway .van-skeleton {
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-top: 31px;
  padding-bottom: 0;
}
.taskaway .van-skeleton__avatar {
  margin-right: 0;
}
.taskaway_skeleton_btm .van-skeleton {
  width: 43%;
}
.taskaway_skeleton_btm .van-skeleton__row {
  margin-left: 15px;
  height: 10px;
  margin-top: 10px;
}
.taskaway .van-skeleton__content {
  display: flex;
  justify-content: center;
}
.taskaway .van-skeleton__title {
  margin-right: 0;
}

.taskaway_skeleton_btm .van-skeleton__content {
  display: flex;
  flex-direction: column;
}
.common_container_task {
  display: flex;
  flex-direction: column;
  position: relative !important;
  top: 0 !important;
}
.task_item_btm {
}
.task_introduce {
  max-width: 90px;
}
.task_score {
}
/* 阻止瀑布流组件滑动 */
#taskaway .vue-waterfall-easy-scroll {
  overflow-y: hidden;
}
.vue-waterfall-easy-container .loading .dot {
  background: #1989fa !important;
}
.index_main {
  flex-grow: 1;
}
.vue-waterfall-easy-container .vue-waterfall-easy a {
  border-radius: 4px;
  overflow: hidden;
}

.vue-waterfall-easy-container .vue-waterfall-easy a.img-inner-box {
  padding: 0 !important;
}
.vue-waterfall-easy-container .vue-waterfall-easy > .img-box {
  padding: 0 !important;
  width: 48% !important;
  padding-left: 3% !important;
  padding-bottom: 10px !important;
}
.vue-waterfall-easy-container {
  /* overflow-y: hidden; */
}
.vue-waterfall-easy-container .vue-waterfall-easy {
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* overflow-y: hidden; */
}

.near_shop_show {
  /* 动态 导致类似卡顿现象 TODO*/
  /* 写死700 导致首页滑动卡顿 需要多次滑动 */
  /* height: 700px; */
  /* height: auto; */
  /* flex: 1; */
}
.taskaway_split {
  flex-grow: 0;
}
.near_shop {
  height: auto;
}
#near_shop_top {
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
}
#near_shop_top span {
  flex-grow: 0;
}
/*设置通知栏字体颜色 */
#near_shop_top * {
  color: #ed6a0c;
}
#near_shop_top .van-notice-bar {
  flex-grow: 1;
}
.over {
  padding-bottom: 10px;
}
/* 瀑布流加载样式 */
.loading.ball-beat {
  /* margin-bottom: 40px; */
}
</style>
