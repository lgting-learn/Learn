<template>
  <div class="order flex_column fixed_full">
    <van-search
      v-model="value"
      shape="round"
      background="#FFC300"
      placeholder="搜索我的订单"
    />
    <!-- <keep-alive> -->
    <OrderItem
      :titleTitle="titleTitle"
      :orderDetailCur="orderDetailCur"
      :finished="finished"
      :active="active"
      @clickTab="clickTab"
      @onLoad="onLoad"
    ></OrderItem>
    <!-- </keep-alive> -->

    <TabBottom :nav_title="nav_title" :active="activeBtm"></TabBottom>
  </div>
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";
import OrderItem from "@/components/OrderItem.vue";
import Top from "@/components/Top.vue";
import { getStore, setStore, isNotBlank, amendHeight } from "../config/mUtils.js";
const qs = require("qs");
export default {
  data() {
    return {
      fontSize: "",
      oldHeight:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      value: "",
      orderDetail: [], //所有订单
      orderDetailCur: [], //当前状态的订单
      order_id: "",
      active: 0,
      list: [],
      // loading: false,
      finished: false,
      titleTitle: [
        { title: "已付款", index: 0 },
        { title: "待付款", index: 1 },
        { title: "待评价", index: 2 },
        { title: "退款 / 售后", index: 3 },
        { title: "全部", index: -1 },
      ],
      nav_title: "订单",
      activeBtm: 2,
    };
  },
  components: { TabBottom, Top, OrderItem },
  computed: {},
  watch: {},
  methods: {
    /*
    点击tab 切换订单列表数据
    1.避免每次切换tab重新请求数据
    2.切换其他页签回来后,缓存上次预览位置
     */
    clickTab(index) {
      if (index == 4) {
        this.orderDetailCur = this.orderDetail;
      } else {
        this.orderDetailCur = this.orderDetail.filter((value) => {
          return value.order_status == index;
        });
      }
    },

    toUserRate(restaurant_id, id) {
      this.$router.replace({
        path: "/userRate",
        query: { restaurant_id: restaurant_id, order_id: id },
      });
    },
    toConfirmOrder(id) {
      this.$router.replace({
        path: "/confirmOrder",
        query: { order_id: id, type: "order" },
      });
    },
    // 不区分订单状态 获取所有订单
    getInitData() {
      let userInfo = getStore("loginUserInfo") && JSON.parse(getStore("loginUserInfo"));
      let order_status = this.active;
      let data = qs.stringify({
        user_id: userInfo.id,
      });
      let that = this;
      let amountList = "";
      this.$axios.post("/api/getOrderList", data).then((res) => {
        that.orderDetail = res.data;
        let itemObj = {};
        for (let i = 0; i < that.orderDetail.length; i++) {
          itemObj = that.orderDetail[i];
          // that.order_id = that.orderDetail[i].id;
          var timeInit = itemObj.trading_time;
          var timestamp = new Date(parseInt(timeInit)); //直接用 new Date(时间戳) 格式转化获得当前时间
          var time =
            timestamp.toLocaleDateString().replace(/\//g, "-") +
            " " +
            timestamp.toTimeString().substr(0, 8);
          itemObj.trading_time = time;
          if (itemObj.order_status == 0) {
            that.orderDetailCur.push(itemObj);
          }
        }
      });
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.finished = true;
      }, 1000);
    },
  },
  created() {},
  mounted() {
    console.log("mounted====");
    //  $(".order").css("font-size",'30px');
    // alert('+'+$(".order").css("font-size"))
    this.getInitData();
    // !!!解决输入法压缩整个页面布局
    amendHeight(this.oldHeight, "order");
  },
};
</script>

<style>
.van-field__clear {
  right: 5px;
}
.order .van-tab__text--ellipsis {
  overflow: auto !important;
  display: block !important;
  white-space: nowrap;
}
</style>
