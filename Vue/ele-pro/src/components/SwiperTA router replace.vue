<template>
  <div class="swiper_taskaweay grow_0" id="swiper_taskaweay" ref="swiper_taskaweay_child">
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="index_out in swipeLen" :key="index_out">
        <div class="swipe_item_ta flex_wrap">
          <div
            v-for="(item, index) in swipeTotal.slice(
              (index_out - 1) * item_num,
              (index_out - 1) * item_num + item_num
            )"
            @click="turnFood(item, index, index_out)"
            :key="index"
            class="swipe_item_ta_small flex_center flex_column"
          >
            <van-image
              cover
              round
              :src="item.image_url"
              lazy-load
              alt=""
              class="circle width_height_30"
            />
            <span>{{ item.title }}</span>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "AddAndReduce",
  props: ["showOrNot"],
  data() {
    return {
      skeleton_loading: true, //骨架屏，瀑布流true显示
      loading: true, //将 loading 属性设置成 false 表示内容加载完成，此时会隐藏占位图，并显示 Skeleton 的子组件
      //每张轮播图展示的图片数量
      item_num: 8,
      swipeTotal: [],
    };
  },
  computed: {
    swipeLen: function () {
      let num =
        this.swipeTotal.length % this.item_num > 0
          ? parseInt(this.swipeTotal.length / this.item_num) + 1
          : parseInt(this.swipeTotal.length / this.item_num);
      return num;
    },
  },
  watch: {
    // 数据加载完 在获取元素高度
    swipeLen: function () {
      this.$nextTick(() => {
        // 获取轮播图高度
        let swiper_height = this.$refs.swiper_taskaweay_child.clientHeight;
        this.$emit("getSwiperHeight", swiper_height);
      });
    },
  },
  methods: {
    turnFood (item, index, index_out) {
      // 防止ios触底出现工具栏
      this.$router.replace({
        path: "/food",
        query: { title: item.title, category: (index_out - 1) * 8 + index },
      });
    },
  },
  created() {
    var that = this;
    this.$axios.get("/api/classify").then(function (res) {
      that.skeleton_loading = false;
      that.swipeTotal = res.data;
    });
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<style>
.swiper_taskaweay .swipe_item_ta_small span {
  margin-top: 10px;
}
.taskaway_skeleton_top {
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
}

.hide {
  display: none;
}
.show {
  display: block;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.swipe_item_ta_small {
  width: 25%;
}
.swiper_taskaweay {
  position: relative;
  flex-grow: 0;
  /* margin-top: 43px; */
}
.swiper_taskaweay .swipe_item_ta_small img {
  /* width: 36px;
  height: 36px; */
  margin-bottom: 12px;
}
.swiper_taskaweay .swipe_item_ta_small {
  /* height: 86px; */
  padding: 20px 0 10px 0;
}
.swiper_taskaweay .swipe_item_ta a:nth-child(8n) {
  padding-top: 0;
}
.swiper_taskaweay .swipe_item_ta a:nth-child(5n) {
  padding-top: 0;
}
.swiper_taskaweay .swipe_item_ta a:nth-child(6n) {
  padding-top: 0;
}
.swiper_taskaweay .swipe_item_ta a:nth-child(7n) {
  padding-top: 0;
}
.swiper_taskaweay .swipe_item_ta_small span {
  line-height: 17px;
}
.swiper_taskaweay .my-swipe .van-swipe-item {
  background: #fff;
}
#swiper_taskaweay .van-swipe__indicators {
  bottom: 10px !important;
}
#swiper_taskaweay .van-swipe__indicators .van-swipe__indicator {
  background: #000 !important;
  opacity: 0.2 !important;
  width: 8px !important;
  height: 8px !important;
}
#swiper_taskaweay .van-swipe__indicators .van-swipe__indicator--active {
  background-color: #ffc300 !important;
  opacity: 1 !important;
}
#swiper_taskaweay .swipe_item_ta {
  padding-bottom: 16px;
}
</style>
