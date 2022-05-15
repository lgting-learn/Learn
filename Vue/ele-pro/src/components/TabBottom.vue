<template>
  <div class="TabBottom flex_row">
    <!-- 点击动画效果 -->
    <div
      tag="div"
      class="tab_item flex_column flex_center"
      v-for="(item, index) in tabBarImg"
      :key="index"
      :to="{ name: item.name }"
      @click="changeTab(item.name)"
      :class="index != 0 && active == index && clickFlag ? 'ballon' : ''"
    >
      <img
        v-show="active != index"
        :src="item.src_0"
        alt=""
        class="1"
        :class="index == 0 && active == 0 ? 'img_big' : ''"
      />
      <img
        v-show="active == index"
        :src="item.src_1"
        alt=""
        class="2"
        :class="[index == 0 && active == 0 ? 'img_big' : '']"
      />
      <span class="font10_center" v-show="index != 0 || active != 0">
        {{ item.title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBottom",
  props: ["nav_title", "active"],
  data() {
    return {
      clickFlag: true,
      icon: "home-o",
      color: "",
      span_color: "",
      tabBarImg: [
        {
          name: "taskaway",
          src_0: "../../static/images/tab1_1.svg",
          src_1: "../../static/images/tab1_1.svg",
          title: "外卖",
        },
        {
          name: "search",
          src_0: "../../static/images/tab2_0.svg",
          src_1: "../../static/images/tab2_1.svg",
          title: "搜索",
        },
        {
          name: "order",
          src_0: "../../static/images/tab3_0.svg",
          src_1: "../../static/images/tab3_1.svg",
          title: "订单",
        },
        {
          name: "mine",
          src_0: "../../static/images/tab4_0.svg",
          src_1: "../../static/images/tab4_1.svg",
          title: "我的",
        },
      ],
    };
  },
  methods: {
    changeTab(name) {
      this.clickFlag = true;
      // 防止ios触底出现工具栏
      this.$router.replace({ name: name });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(0.7); /*开始为原始大小*/
  }
  75% {
    transform: scale(1);
  }
}
.ballon {
  -webkit-animation-name: scaleDraw; /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
  -webkit-animation-duration: 0.2s; /*动画所花费的时间*/
  animation-fill-mode: forward; /*动画完成之后定格*/
}

.img_big {
  width: 35px !important;
  height: 35px !important;
}
.img_big {
  width: 35px;
  height: 35px;
}
.TabBottom {
  padding: 2px 0;
  flex-grow: 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #e4e4e4;
  /* position: absolute; */
  height: 42px;
}
.TabBottom .tab_item img {
  width: 25px;
  height: 25px;
}

.tab_item {
  flex: 1;
}
.tab_item span {
  color: black;
  font-size: 14px;
}
</style>
