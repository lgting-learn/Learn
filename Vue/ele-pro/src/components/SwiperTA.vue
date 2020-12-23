<template>
  <div 
    class='swiper_taskaweay'
    id="swiper_taskaweay"
  >
    <van-swipe
      class="my-swipe"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="index_out in swipeLen"
        :key="index_out"
      >
        <div class="swipe_item_ta flex_wrap">
          <!-- <div
            class="swipe_item_ta_small flex_center flex_column"
            v-for="(item,index) in swipeTotal.slice((index_out-1)*item_num,(index_out-1)*item_num+item_num)"
            :key="index"
          > -->
          <router-link
            :to="{path: '/food', query: {title:item.title}}"
            v-for="(item,index) in swipeTotal.slice((index_out-1)*item_num,(index_out-1)*item_num+item_num)"
            :key="index"
            class="swipe_item_ta_small flex_center flex_column"
          >
            <img
              :src="item.image_url"
              alt=""
            >
              <span>{{item.title}}</span>
              </router-link>
              <!-- </div> -->
        </div>
        </van-swipe-item>
        </van-swipe>
        </div>
</template>

<script>
// import {swiperFood} from "../service/getData.js"
export default {
  name: "AddAndReduce",
  data() {
    return {
      //每张轮播图展示的图片数量
      item_num: 8,
      swipeTotal: []
    };
  },
  computed: {
    swipeLen: function() {
      let num =
        this.swipeTotal.length % this.item_num > 0
          ? parseInt(this.swipeTotal.length / this.item_num) + 1
          : parseInt(this.swipeTotal.length / this.item_num);
      return num;
    }
  },
  watch: {},
  methods: {},
  created() {
    var that = this;
    this.$axios.get("/api/classify").then(function(res) {
      that.swipeTotal = res.data;
    });
  },
  mounted() {}
};
</script>

<style >
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
  width: 36px;
  height: 36px;
  margin-bottom: 12px;
}
.swiper_taskaweay .swipe_item_ta_small {
  height: 86px;
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
  background-color: #FFC300 !important;
  opacity: 1 !important;
}
#swiper_taskaweay .swipe_item_ta {
  padding-bottom: 16px;
}
</style>