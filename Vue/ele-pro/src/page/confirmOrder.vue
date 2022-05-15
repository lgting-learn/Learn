<template>
  <div
    class='confirmOrder flex_column fixed_full bg_gray'
  >
    <Top :nav_title='nav_title'></Top>
    <div class="confirmOrder_content common_container">
      <div class="confirmOrder_content_top bg_yellow rel flex_center">
        <router-link
          class="self_center flex_col bg_yellow bg_white border_radius_5 rel"
          :to="loginFlag==0?'/login':'/myAddress'"
        >
          <div
            class="flex_row_center margin_10_left_right padding_10_top_bottom border_radius_5"
            :class="loginFlag!=2?'padding_20_top_bottom':''"
          >
            <div v-if="loginFlag==2">
              <div class="weight_600 ellipsis detail_address font15">{{defaultAdd.detail_address}}</div>
              <div class="flex_row_center">
                <span class="font11_left">{{defaultAdd.name}}</span>
                <span class="font11_left">{{defaultAdd.phone}}</span>
              </div>
            </div>
            <div v-else-if="loginFlag==1">暂无地址，点击填写</div>
            <div v-else-if="loginFlag==0">点击登录</div>
        <van-icon
                  name="arrow"
                  color="gray"
                  class="arrow_right_vant arrow_right_vant_co"
                  size="18"
                />

      </div>
      <div
        class="flex_row_center margin_10_left_right flex_between arrive_time_wrap"
        v-if="loginFlag==2"
      >
        <div class="flex_row_center flex_between arrive_time">
          <span class="weight_600 font11_left">立即送出</span>
          <span class="color_org font11_right">大约22:29送达</span>
        </div>
    </div>
    </router-link>

    </div>
    <div class="confirmOrder_container bg_gray rel">
      <div class="order_detail bg_white border_radius_5 rel padding_10 flex_col">
        <div class="padding_btm_10 border_bottom">{{restaurant_name}}</div>
        <div
          class="order_item flex_row_center padding_top_10"
          v-for="(item,index) in amountList"
          :key="index"
        >
          <van-image
            fit="cover"
            round
            :src="item.image_path"
            lazy-load
            alt=""
            class="width_height_50 margin_right_10 grow_0 border_radius_5"
          />
          <div class="flex_col grow_1">
            <div class="food_name_price flex_between padding_btm_10">
              <span>{{item.name}}</span>
              <span>￥{{item.price}}</span>
            </div>
            <span class="food_name_num">x{{item.buy_number}}</span>
          </div>
      </div>
      <div class="flex_end">
        <!-- <span class="font11_right"></span> -->
        <span class="font16 weight_600 span_black">小计￥{{foodsPrice}}</span>
      </div>
      <div
        class="unfold flex_center"
        v-show="1==0"
      >
        <div class="rel flex_row_center unfold_more">
          <span>展开更多</span>
          <span class="arrow_down abs"></span>
        </div>
    </div>

    <div>

    </div>

    </div>
    <div class="order_detail order_detail_btm bg_white border_radius_5 rel padding_10 flex_col margin_top_10">
      <div
        class="detail_btm_item flex_row_center padding_top_10 flex_between"
        v-for="(item,index) in detailOrder"
        :key="index"
      >
        <span>{{item.title}}</span>
        <span>{{item.desc}}</span>
    </div>

    </div>
    </div>
    </div>
    <div
      class="commit_order btm border_radius_50 flex_row overflow_hidden"
      v-show="type!='order'"
    >
      <div class="commit_order_price bg_black rel flex_center">
        <!-- <span class="font11_right span_white abs">￥</span> -->
        <span
          class="span_white font16 weight_600 abs"
          style="padding-left:10px"
        >￥{{foodsPrice}}</span>
      </div>
      <!-- <div class="commit_order">找人付</div> -->
      <div
        class="bg_yellow grow_1 flex_center padding_10_top_bottom weight_600 span_black"
        @click="commitOrder"
      >提交订单</div>
        </div>
        </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { Toast } from "vant";
import { getStore, setStore, isNotBlank } from "../config/mUtils.js";
let qs = require("qs");
export default {
  data() {
    return {
      userInfo:"",
      type: "", //type为order 来自订单页面，否则来自店铺
      defaultAdd: "", //获取默认地址
      address_id: "", //地址id
      restaurant_id: "", //店铺id
      restaurant_name: "", //店铺名称
      amountList: [],
      foodsPrice: 0,
      detailOrder: [
        { title: "备注", desc: "" },
        { title: "餐具数量", desc: "" },
        { title: "发票", desc: "该店不支持线上开票，请联系商户" },
        { title: "支付方式", desc: "在线支付" }
      ],
      loginFlag: 0, //0未登录 1已登录未填写地址 2 已登陆且有地址
      loginName: "登录/注册", //登陆状态
      nav_title: "提交订单",
      active: 3,
      sign: "欢迎回来", //个签
      img_url: "../../static/images/default_headImg.svg" //用户头像
    };
  },
  components: { Top },
  computed: {},
  watch: {},
  methods: {
    //TODO 补充没有地址的情况
    getAddress() {
      // let userInfo = JSON.parse(getStore("loginUserInfo"));
      // let data = qs.stringify({ user_id: userInfo.id });
      // let that = this;
      // this.$axios.post("/api/getDefaultAddress", data).then(res => {
      //   that.defaultAdd = res.data;
      //   that.address_id = res.data.id;
      // });
    },
    info() {
      //是否登录
      this.userInfo =
        getStore("loginUserInfo") && JSON.parse(getStore("loginUserInfo"));
      // 用户是否有地址
      let data = qs.stringify({ user_id: this.userInfo.id });
      let that = this;
      this.$axios.post("/api/getDefaultAddress", data).then(res => {
        that.defaultAdd = res.data;
        that.address_id = res.data.id;
        if (this.userInfo && res.data.total != 0) {
          this.loginFlag = 2;
        } else {
          if (!this.userInfo) {
            //未登录
            this.loginFlag = 0;
          } else if (res.data.total == 0) {
            this.loginFlag = 1;
          }
        }
      });

      this.type = this.$route.query.type;
      if (this.type != "order") {
        //来自店铺
        this.amountList = JSON.parse(getStore("amountList"));
        this.foodsPrice = getStore("foodsPrice");
        this.shop_img = getStore("shop_img");
        let data = qs.stringify({ order_detail: this.amountList });
        this.restaurant_id = this.$route.query.restaurant_id;
        this.restaurant_name = this.$route.query.restaurant_name;
        this.user_id = this.userInfo.id;
      } else {
        //来自订单页面
        let data = qs.stringify({ order_id: this.$route.query.order_id });
        let that = this;
        this.$axios.post("/api/getOrderDetail", data).then(res => {
          that.amountList = JSON.parse(res.data[0].order_detail);
          this.foodsPrice = res.data[0].all_price;
          this.shop_img = res.data[0].shop_img;
          this.restaurant_name = res.data[0].restaurant_name;
        });
      }
    },
    commitOrder() {
      let amountList = JSON.stringify(this.amountList);
      let data = qs.stringify({
        order_detail: amountList,
        restaurant_id: this.restaurant_id,
        user_id: this.user_id,
        address_id: this.address_id,
        order_status: 0, //订单状态
        restaurant_name: this.restaurant_name,
        all_price: this.foodsPrice,
        shop_img: this.shop_img,
        trading_time: Date.now() //当前时间
      });
      this.$axios.post("/api/comfirmOrder", data).then(res => {
        Toast('支付成功');
      }).catch(e=>{
        Toast('支付失败');
      });
    }
  },
  created() {
    this.info();
    this.getAddress();
  },
  mounted() {}
};
</script>

<style scoped>
.flex_row_center{

}
.confirmOrder_content{
  position: relative!important;
  top: 0!important;
}
.arrow_right_vant_co{
  right: 5px;
}
.commit_order_price span:nth-child(2) {
  left: 16px;
}
.commit_order_price span:nth-child(1) {
  left: 3px;
}
.commit_order .bg_yellow {
  background: -webkit-linear-gradient(left, #ffd01e, #ffc300 100%);
}
.commit_order .commit_order_price {
  flex-grow: 5;
}
.order_detail_btm {
  /* margin-top:  */
}
.commit_order {
  width: 92%;
  left: 50% !important;
  overflow: hidden;
  margin-left: -46%;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}
.unfold_more {
  padding-right: 15px;
}
.unfold .arrow_down {
  right: 0;
  top: 3px;
}
.order_detail {
  top: 50px;
}
.arrive_time_wrap {
  padding-bottom: 10px;
}
.arrive_time {
  width: 100%;
}
.self_center {
  margin-top: 35px;
}
.confirmOrder .right_10 {
  right: 10px !important;
}
.confirmOrder .detail_address {
  display: inline-block;
  width: 80%;
}

.confirmOrder_container {
  padding-left: 3%;
  padding-right: 3%;
}
.confirmOrder_container_item:nth-child(1) {
  margin-top: 40px;
}
.head_img {
  height: 50px;
  width: 50px;
  margin-right: 10px !important;
}
.confirmOrder_content_top {
  height: 10%;
}
.self_center {
  width: 94%;
  overflow: hidden;
  box-shadow: 1px 4px 11px #999;
  z-index: 1001;
}
.confirmOrder_content {
  flex-grow: 1;
}
</style>