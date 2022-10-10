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
import {
  getStore,
  setStore,
  isNotBlank,
  amendHeight,
  setHistory,
} from "../../config/mUtils.js";

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
        {title: "已付款", index: 0},
        {title: "待付款", index: 1},
        {title: "待评价", index: 2},
        {title: "退款 / 售后", index: 3},
        {title: "全部", index: -1},
      ],
      nav_title: "订单",
      activeBtm: 2,
    };
  },
  components: {TabBottom, OrderItem},
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
        query: {restaurant_id: restaurant_id, order_id: id},
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
  // 第一次进入页面执行
  created() {
  },
  // 每次进入页面执行
  mounted() {
    setHistory(this);
    this.getInitData();
    // !!!解决输入法压缩整个页面布局
    amendHeight(this.oldHeight, "order");
  },
};
</script>

<style>

.van-tabs__line {
  background-color: #ffc300 !important;
}

.van-tabs__wrap {
  height: 30px !important;
  /* position: relative !important; */
}

.van-tabs__nav {
  flex-grow: 0 !important;
}

.van-tab {
  font-size: 13px !important;
  font-weight: bold;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: center !important;
}

.van-tabs--line {
  background: #f6f6f6 !important;
}

.order .arrow_right_vant_order {
  position: inherit !important;
}

.order .van-tab .van-tab__text {
  color: #333;
  font-size: 14px;
}

.order .van-tab--active .van-tab__text {
  font-size: 15px;
  font-weight: bold;
}

.order .van-tabs__line {
  width: 20px;
}

.van-field__clear {
  right: 5px;
}

.order .van-tab__text--ellipsis {
  overflow: auto !important;
  display: block !important;
  white-space: nowrap;
}
</style>
