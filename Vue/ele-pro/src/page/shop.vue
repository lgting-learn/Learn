<template>
  <div
    class='shop flex_column fixed_full'
  >
    <div class="shop_top flex_row padding_10 grow_0">
      <span
        class="arrow_left van-icon van-icon-arrow-left van-nav-bar__arrow"
        @click="$router.go(-1);"
      ></span>
        <img
          class="shop_top_left border_radius_5 "
          :src="shopDetail.image_path"
        >
          <div class="shop_top_right flex_column">
            <h3 class="ellipsis span_white">{{shopDetail.name}}</h3>
            <span class="ellipsis span_white">商家配送／分钟送达／配送费¥5</span>
            <span class="ellipsis span_white">公告：欢迎光临，用餐高峰请提前下单，谢谢公告：欢迎光临，用餐高峰请提前下单，谢谢</span>
          </div>
    </div>
    <div class="shop_tab flex_row grow_0">
      <div class="shop_tab_item flex_center">
        <span
          @click="changeTab(0)"
          :class="active==0?'span_active choice':''"
        >商品</span>
      </div>
      <div class="shop_tab_item flex_center">
        <span
          @click="changeTab(1)"
          :class="active==1?'span_active choice':''"
        >评价</span>
      </div>
    </div>
    <!-- 商品tab -->
    <div
      v-if="active==0"
      class="shop_container grow_1"
    >
      <div
        class="shop_detail  flex_row"
        id="wrap"
      >
        <!-- 左侧菜单 -->
        <div
          class="goodMenu grow_0"
          ref="goodMenu"
        >

          <ul class="ul_left">
            <li
              v-for="(item,index) in goodList"
              :key="index"
              :class="currentIndex == index?'bg_fff':''"
              @click="selectLeft(index)"
              ref="lItem"
            >{{ item.name}}</li>
          </ul>
          </div>
          <!-- 右侧菜单 -->
          <div
            class="goodList grow_1"
            ref="goodList"
          >
            <ul class="ul_right">
              <li
                v-for="(items, indexs) in goodList"
                :key="indexs"
                ref="rItem"
              >
                <h3 class="right_title padding_10">{{items.name}}</h3>

                <div
                  class="shop_right_content padding_10 flex_row flex_center_col"
                  v-for="(itemss,indexss) in items.foods"
                  :key="indexss"
                >
                  <img
                    :src="itemss.image_path"
                    alt=""
                    class="shop_img_classify grow_0"
                  >

                    <div class="flex_column grow_1">
                      <span class="color_black3 font16 weight_600">{{ itemss.name}}</span>
                      <span>月售{{ itemss.month_sales}}份 好评率{{itemss.satisfy_rate}}%</span>
                      <div class="flex_row flex_between">
                        <span class="color_org">￥{{ itemss.price}}</span>
                        <AddAndReduce
                          :itemss="itemss"
                          :restaurant_id="restaurant_id"
                          @getFoodClassify="getFoodClassify"
                          @getFoodsTotal="getFoodsTotal"
                          @getAmountList="getAmountList"
                        ></AddAndReduce>
                      </div>

                    </div>
                    </div>
                    </li>
            </ul>
            </div>

            </div>
            <!-- 购物车组件 -->
            <div class="shop_cart">
              <div
                class="circle circle_cart bg_blue flex_center span_white grow_0"
                @click="showPopup"
              >
                购
                <span
                  class="bg_red flex_center span_white circle cart_num"
                  v-show="foodsTotal>0"
                >{{foodsTotal}}</span>
                  <!-- </div> -->
            </div>
            <div
              class="all_price font20 span_white flex_center_col abs grow_1 ellipsis weight_600"
              v-show="foodsPrice>0"
            >￥{{foodsPrice}}</div>
              <div class="amount bg_green span_white flex_center abs grow_0">去结算</div>
              </div>
              <!-- 点击购物车弹出购物清单 -->
              <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '30%' }"
                
              >
                <div class="checklist_wrap flex_between padding_10 bg_gray">
                  <span>购物车</span>
                  <span @click="clearFoodList">清空</span>

                </div>
                <div class="flex_col list_detail">
                  <div
                    class="list_detail_item flex_row"
                    v-for="(item,index) in amountList"
                    :key="index"
                  >
                    <span class="food_title ">{{item.name}}</span>
                    <span class="food_price color_org">￥{{item.price}}</span>

                    <AddAndReduce
                      ref="AddAndReduce"
                      :itemss="item"
                      :restaurant_id="restaurant_id"
                      @getFoodClassify="getFoodClassify"
                      @getFoodsTotal="getFoodsTotal"
                      @getAmountList="getAmountList"
                    ></AddAndReduce>
                </div>

                </div>
                </van-popup>

                </div>
                <!-- 评论tab -->
                <!-- </div> -->
                <div
                  class="shop_detail grow_1"
                  v-else
                >
                  评价
                  </div>

                  </div>
</template>

<script>
import BScroll from "better-scroll";
import AddAndReduce from "@/components/AddAndReduce.vue";

var qs = require("qs");
export default {
  components: { AddAndReduce },
  data() {
    return {
      show: false,
      shopDetail: "",
      active: 0,
      foodsTotal: 0, //选购食品总数
      foodsPrice: 0, //选购食品总价格
      show: false,
      goodList: [],
      amountList: [], //食品结算清单
      scrollY: 0, //获取实时滚动位置
      heightList: [], //获取每一个li的高度 };
      restaurant_id: "" //店铺id
    };
  },
  computed: {
    //左右联动
    currentIndex() {
      const index = this.heightList.findIndex((item, index) => {
        this._initLeftScroll(index);
        return (
          this.scrollY >= this.heightList[index] &&
          this.scrollY < this.heightList[index + 1]
        );
      });
      return index > 0 ? index : 0;
    }
  },
  watch: {},
  created() {
    let restaurant_id = this.$route.query.restaurant_id;
    this.restaurant_id = this.$route.query.restaurant_id;
    let that = this;
    let data = qs.stringify({ restaurant_id: restaurant_id });
    //获取左侧菜单
    this.$axios.post("/api/shopFoodClassify", data).then(function(res) {
      that.goodList = res.data;
      // that.getFoodsTotal(that.goodList, that);
      //因为 _scrollInit函数需要操作DOM，因此必须在DOM元素存在文档中才能获取DOM节点
      //因此在 nextTick回调函数里面调用可以是实现此功能
      that.$nextTick(() => {
        that._scrollInit();
        that.getHeight();
      });
    });
    // this.getData(restaurant_id);
    //获取单间店铺详情
    data = qs.stringify({ id: restaurant_id });
    this.$axios.post("/api/shopSingle", data).then(res => {
      that.shopDetail = res.data;
    });
  },
  methods: {
    //清空购物车
    clearFoodList() {
      var that = this;
      var data = qs.stringify({ restaurant_id: this.restaurant_id });
      //批量更新食品表
      this.$axios.post("/api/batchUpdateFoods", data).then(res => {
        if (res.data.result == true || res.data.result == "true") {
          //获取最新数据
          //获取左侧菜单
          that.$axios.post("/api/shopFoodClassify", data).then(function(res) {
            that.goodList = res.data;
            that.foodsTotal = 0;
            that.foodsPrice = 0;
          });
        }
      });
    },
    getFoodClassify(data) {
      this.goodList = data;
    },
    getFoodsTotal(num, price) {
      this.foodsTotal = num;
      this.foodsPrice = price;
    },
    
    getAmountList(amountList) {
      this.amountList = amountList;
    },
    //点击购物车 弹出购物清单
    showPopup() {
      this.show = true;
    },

    //重新获取菜单数据
    getData(restaurant_id) {
      let that = this;
      let data = qs.stringify({ restaurant_id: restaurant_id });
      //获取左侧菜单
      this.$axios.post("/api/shopFoodClassify", data).then(function(res) {
        that.goodList = res.data;
      });
    },
    //点击左侧菜单
    selectLeft(index) {
      //  this.currentIndex = index
      this.scrollY = this.heightList[index];
      //右侧滚到相应位置
      this.goodmenu.scrollTo(0, -this.scrollY, 200);
    },
    changeTab(index) {
      this.active = index;
    },
    //左右联调 滑动右边，左边跟着滚动
    _initLeftScroll(index) {
      let menu = this.$refs.lItem;
      let el = menu[index];
      this.menuList.scrollToElement(el, 300, 0, -300);
    },
    //初始化 better-scroll
    _scrollInit() {
      this.menuList = new BScroll(this.$refs.goodMenu, {
        click: true
      });
      // !!!TODO 踩坑【点击增减食品数量操作按钮无效】
      // vue中用v-for遍历出的li中的@click事件在移动端无效
      // 使用的better-scroll默认会阻止touch事件。所以在配置中需要加上click: true
      this.goodmenu = new BScroll(this.$refs.goodList, {
        probeType: 3,
        click: true
      });
      this.goodmenu.on("scroll", pos => {
        //获取实时滚动的距离 使用scrollY接收
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    //获取右侧菜单高度
    getHeight() {
      //获取每一个li的高度
      const lis = this.$refs.rItem;
      //heightList的第一个元素为0
      let height = 0;
      this.heightList.push(height);
      //之后的高度即为当前li的高度加上之前面li的高度和
      lis.forEach(item => {
        height += item.clientHeight;
        this.heightList.push(height);
      });
    }
  },

  mounted() {}
};
</script>

<style scoped>
.van-popup {
  height: auto !important;
  z-index: 2006;
  /* padding: 10px 0; */
  margin-bottom: 41px;
}
.list_detail_item {
  padding: 10px;
}
.food_num {
  height: 100%;
  width: 20%;
}
.food_price {
  height: 100%;
  width: 20%;
}
.food_title {
  height: 100%;
  width: 60%;
}
.all_price {
  height: 100%;
  margin-left: 21%;

  width: 44%;
}
.amount {
  right: 0;
  height: 100%;
  width: 35%;
}
.cart_num {
  width: 15px;
  height: 15px;
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 0;
}
.circle_cart_wrap {
  position: relative;
  width: 50px;
  height: 50px;
}
.circle_cart {
  width: 50px;
  height: 50px;
  position: absolute;
  top: -11px;
  left: 14px;
}
/* TODO */
.num_change {
  height: 16px;
  width: 16px;
}
.num_show {
  padding: 0 5px;
}
.shop_img_classify {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 3px;
}

.shop_container {
  height: 100%;
  overflow: hidden;
}
.goodMenu,
.goodList {
  overflow-y: auto;
}
.shop_detail {
  /* 高度有问题 */
  height: 91%;
  position: relative;
  overflow: hidden;
}
.right_title {
  /* padding: 20px 10px; */
  background: #f5f5f5;
}
.shop_top {
  background: #acacbe;
}
.shop_top_left {
  width: 58px;
  height: 58px;
  margin-right: 10px;
}
.shop_top_right h3 {
  flex: 1;
}
.shop_top_right span {
  flex: 1;
  width: 50%;
}
.shop_top_right {
  position: relative;
}
.shop_tab_item {
  flex: 1;
  padding: 15px 0 10px 0;
  border-bottom: 0.026667rem solid #e4e4e4;
}
.shop_tab_item span {
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
}
.span_active {
  border-bottom: 2px solid #1989fa !important;
}
.shop_cart {
  background: #555;
  height: 9%;
  position: relative;
  z-index: 10000;
}
.ul_left {
  background: #f5f5f5;
}
.ul_left li {
  padding: 20px;
}
</style>