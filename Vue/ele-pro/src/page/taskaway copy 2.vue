<template>
  <div
    class="taskaway flex_column fixed_full"
    :class="skeleton_loading ? 'display_block' : ''"
    id="taskaway"
    ref="taskaway"
  >
    <!-- <Top :nav_title="nav_title" :top_show="0"></Top> -->

    <div
      class="common_container common_container_task"
      id="common_container_task"
      ref="common_container_task"
    >
      <SwiperTA
        :showOrNot="showOrNot"
        ref="swiper_taskaweay"
        @getSwiperHeight="getSwiperHeight"
        v-show="showTopFlag"
      >
      </SwiperTA>
      <div
        class="taskaway_skeleton_top flex_row"
        :class="skeleton_loading ? 'display_block' : 'display_hidden'"
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
      <div
        class="taskaway_skeleton_btm flex_row"
        :class="skeleton_loading ? 'display_block' : 'display_hidden'"
      >
        <div class="skeleton_right_fill"></div>

        <van-skeleton
          v-for="i in 8"
          :key="i"
          title
          avatar
          row="2"
          title-width="60px"
          row-width="80px"
          :animate="false"
          avatar-size="100px"
          avatar-shape="square"
        />
      </div>
      <!-- <div
            class="display_hidden grow_1"
            :class="skeleton_loading?'':'display_block'"
          > -->
      <div
        class="split taskaway_split"
        :class="skeleton_loading ? 'display_hidden' : 'display_block'"
      ></div>

      <div
        class="near_shop flex_column grow_1"
        :class="skeleton_loading ? 'display_hidden' : 'display_block'"
      >
        <div class="near_shop_top padding_10" id="near_shop_top">
          <!-- <span>附近商家</span> -->
          <van-notice-bar
            left-icon="volume-o"
            text="App展示数据均爬取自美团，仅供学习使用。"
            color="red"
            v-show="showTopFlag"
          />
        </div>
        <div class="near_shop_show" ref="near_shop_show">
          <!-- loadingTimeOut=500：请求时间小于500毫秒，不显示加载动画 -->
          <vue-waterfall-easy
            ref="waterfall"
            :imgsArr="imgsArr"
            @scrollReachBottom="getData"
            :isRouterLink="false"
            @click="clickFn"
          >
            <div class="img-info padding_10" slot-scope="props">
              <p class="some-info weight_600 color_black3">{{ props.value.info }}</p>
              <div class="flex_row_center">
                <p
                  class="some-info font10_left color_org task_score margin_right_5 flex_center"
                >
                  {{ props.value.score }}分
                </p>
                <p
                  class="some-info font10_left color_gray ellipsis task_introduce flex_center"
                >
                  {{ props.value.introduce }}
                </p>
              </div>
              <div class="flex_row_center">
                <div class="some-info font10_left color_gray ellipsis task_item_btm">
                  人均￥{{ props.value.per_capita }}|月售{{ props.value.month_sales }}
                </div>
              </div>
            </div>
            <!-- 数据加载完 默认提示语：被你看完了 -->
            <div slot="waterfall-over">被你看完啦</div>
          </vue-waterfall-easy>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <TabBottom :nav_title="nav_title" :active="active"></TabBottom>
    <!-- </div> -->
  </div>
</template>

<script>
import SwiperTA from "@/components/SwiperTA.vue";
import vueWaterfallEasy from "vue-waterfall-easy";
import TabBottom from "@/components/TabBottom.vue";
import Top from "@/components/Top.vue";
import $ from "jquery";

import { getStore, setStore, isNotBlank, throttle } from "../config/mUtils";
import { all } from "q";

let qs = require("qs");

export default {
  components: { SwiperTA, vueWaterfallEasy, TabBottom, Top },
  data() {
    return {
      items: [{ title: "foo" }, { title: "baz" }],
      skeleton_loading: true, //骨架屏，瀑布流true显示
      swi_height: 0, //轮播图组件高度
      showOrNot: "y",
      nav_title: "外卖",
      active: 0,
      imgsArr: [],
      responseData: [],
      shop_start: 0,
      shop_limit: 10,
      shop_done: false, //true加载到最后一页
      calFlag: true,
      moveDownFlag: true,
      moveUpFlag: true,
      showTopFlag: true,
      scollerNum: 0,
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
    let container_scroll = document.querySelector(".common_container_task").scrollTop; // 要滚动到顶部吸附的元素的偏移量
    let waterfall_scroll = document.querySelector(".vue-waterfall-easy-scroll").scrollTop;
    setStore("container_scroll", container_scroll);
    setStore("waterfall_scroll", waterfall_scroll);
    next();
  },
  // 详情页面进入列表页前
  beforeRouteEnter(to, from, next) {
    //从详情页来到列表页 列表页回滚原位置
    //!!!最难问题1/2：能够获取vm.$refs.waterfall.$refs.scrollEl实例，但对其scrollTop赋值后，读取scrollTop总是为0
    /*
    1、vm.$refs.waterfall.$refs.scrollEl的属性scroll-y不是'scroll'-排除
    2、瀑布流组件未加载完-排除
    3、真正原因：从详情页回来，列表页重新请求接口数据，页面重新渲染，此时列表页没有滚动高度，所以无论怎么赋值，scrollTop=0
      解决：缓存组件：
      (1) App.vue设置：
        <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      (2) route.js在需要缓存的组件设置属性
        meta: {
            keepAlive: true // 需要缓存
          }
      (3) taskaway.vue
        // router跳转离开列表页前，记录当前页面的位置
        beforeRouteLeave(to, from, next) {})
        // router跳转离开列表页前，记录当前页面的位置，恢复滚动页面的scrollTop
        beforeRouteLeave(to, from, next) {})
    */

    if (from.name == "shop") {
      next((vm) => {
        vm.$refs.common_container_task.scrollTop = getStore("container_scroll");
        vm.$refs.waterfall.$refs.scrollEl.scrollTop = getStore("waterfall_scroll");
      });
    } else {
      next((vm) => {
        vm.$refs.common_container_task.scrollTop = 0;
      });
    }
  },
  methods: {
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
        this.$refs.waterfall.waterfallOver();
        return;
      }
      let that = this;
      let data = qs.stringify({
        start: this.shop_start,
        limit: this.shop_limit,
      });

      this.$axios.post("/api/shop", data).then(function (res) {
        that.skeleton_loading = false;
        that.scollerNum++;
        if (res && res.data) {
          if (res.data.length == that.shop_limit) {
            that.shop_start += that.shop_limit;
          } else {
            that.shop_done = true; //最后一页
          }
          that.calFlag == true;
        }

        that.responseData = res.data;
        that.responseData.forEach((res) => {
          that.imgsArr = that.imgsArr.concat({
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
          });
        });
      });
    },
    //!!!第一次触底前 移除瀑布流内部的滑动，只保留外层的滑动
    handleScroll(e) {
      // !!!只有滚动条所在的元素的scrollTop才有值
      // 外部容器
      let move_top =
        document.querySelector(".common_container_task") &&
        document.querySelector(".common_container_task").scrollTop; // 要滚动到顶部吸附的元素的偏移量
      // 轮播图
      let swiper_taskaweay =
        this.swiper_taskaweay ||
        (document.querySelector("#swiper_taskaweay") &&
          document.querySelector("#swiper_taskaweay").clientHeight);
      this.swiper_taskaweay = swiper_taskaweay;
      let near_shop_top =
        this.near_shop_top ||
        (document.querySelector("#near_shop_top") &&
          document.querySelector("#near_shop_top").clientHeight); // 广播
      this.near_shop_top = near_shop_top;

      // 轮播图+App用户数据通知栏-10px padding
      let allMove = parseInt(swiper_taskaweay) + parseInt(near_shop_top);
      if ((move_top >= allMove && this.moveDownFlag) || this.scollerNum == 1) {
        $(
          "#common_container_task .near_shop .vue-waterfall-easy-container .vue-waterfall-easy-scroll"
        ).css("overflow-y", "scroll");
        this.moveDownFlag = false;
        this.moveUpFlag = true;
      } else if (move_top < allMove && this.moveUpFlag) {
        $(
          "#common_container_task .near_shop .vue-waterfall-easy-container .vue-waterfall-easy-scroll"
        ).css("overflow-y", "hidden");
        this.moveUpFlag = false;
        this.moveDownFlag = true;
        console.log("301=====" + move_top + "  " + allMove + "  " + this.moveUpFlag);
      }

      // 获取瀑布流各个div
      if (this.calFlag == true && this.shop_start >= 10) {

        let allHeightDiv = $(".vue-waterfall-easy .default-card-animation");
        let evenDiv = 0; // 偶数
        let oddDiv = 0; // 奇数
        if (allHeightDiv && allHeightDiv.length > 1) {
          for (let i = 0; i < allHeightDiv.length; i++) {
            if (i % 2 == 0) {
              evenDiv += allHeightDiv[i].clientHeight;
            } else {
              console.log("318 else====");

              oddDiv += allHeightDiv[i].clientHeight;
            }
          }
        }
        let maxHeiDiv = Math.max(evenDiv, oddDiv);

        $(".taskaway .near_shop_show") &&
          $(".taskaway .near_shop_show").css("height", maxHeiDiv - 9);
        // this.getData(); // todo 有必要？
        this.calFlag = false;
      }
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$nextTick(function () {
      // 监听滚动事件，然后用handleScroll这个方法进行相应的处理 !!!第三个参数为true
      window.addEventListener("scroll", throttle(this.handleScroll, 50), true);
    });
  },
  //!!!TODO
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
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
  margin-bottom: 47px;
}
.task_item_btm {
}
.task_introduce {
  max-width: 90px;
}
.task_score {
  /* margin-right: 5px; */
}
/* 阻止瀑布流组件滑动 */
#common_container_task .vue-waterfall-easy-container .vue-waterfall-easy-scroll {
  /* overflow: hidden;*/
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
  /* 动态 导致类似卡顿现象 todo*/
  height: 700px;
  /* background: #ed6a0c; */
  /* overflow-y: hidden; */
  /* TODO */
  /* height:100%; */
}
.taskaway_split {
  flex-grow: 0;
}
.near_shop {
  height: auto;
  border-top: 10px solid #f6f6f6;
}
#near_shop_top {
  display: flex;
  align-items: center;
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
