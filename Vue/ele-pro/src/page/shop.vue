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
                      <span class="color_black3 font18">{{ itemss.name}}</span>
                      <span>月售{{ itemss.month_sales}}份 好评率{{itemss.satisfy_rate}}%</span>
                      <div class="flex_row flex_between">
                        <span class="color_org">￥{{ itemss.price}}</span>
                        <div class="flex_row  ">
                          <div
                            class="bg_blue border_radius_50 span_white num_change num_reduce flex_center"
                            @click="numChange(0,itemss.id,itemss.restaurant_id)"
                          >-</div>
                        <div class="num_show">{{itemss.buy_number}}</div>
                        <div
                          class="bg_blue border_radius_50 span_white num_change num_add flex_center"
                          @click="numChange(1,itemss.id,itemss.restaurant_id)"
                        >+</div>
                    </div>
                    </div>

                    </div>
                    </div>
                    </li>
            </ul>
            </div>

            </div>
            <!-- 购物车组件 -->
            <div class="shop_cart">

            </div>
            </div>
            <!-- 评论tab -->

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
var qs = require("qs");
export default {
  components: {},
  data() {
    return {
      shopDetail: "",
      active: 0,
      show: false,
      menuLeft: [], //左侧菜单目录
      goodList: [],
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
    let that = this;
    let data = qs.stringify({ restaurant_id: restaurant_id });
    //获取左侧菜单
    this.$axios.post("/api/shopFoodClassify", data).then(function(res) {
      that.goodList = res.data;
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
    //重新获取菜单数据
    getData(restaurant_id) {
      let that = this;
      let data = qs.stringify({ restaurant_id: restaurant_id });
      //获取左侧菜单
      this.$axios.post("/api/shopFoodClassify", data).then(function(res) {
        that.goodList = res.data;
        //因为 _scrollInit函数需要操作DOM，因此必须在DOM元素存在文档中才能获取DOM节点
        //因此在 nextTick回调函数里面调用可以是实现此功能
        // that.$nextTick(() => {
        //   that._scrollInit();
        //   that.getHeight();
        // });
      });
    },
    //改变食品选购数量
    numChange(type, id, restaurant_id) {
      let goodListArr = this.goodList;
      let itemObj = "";
      if (goodListArr.length != 0) {
        goodListArr.forEach(item => {
          if (item.foods.length != 0) {
            item.foods.forEach(items => {
              if (items.id == id) {
                itemObj = items;
              }
            });
          }
        });
      }
      if (type == 1) {
        itemObj.buy_number++;
      } else {
        if (itemObj.buy_number >= 1) {
          itemObj.buy_number--;
        }else{return;}
      }
      let data = qs.stringify({
        buy_number: itemObj.buy_number,
        id: id,
        restaurant_id: restaurant_id
      });
      var that = this;

      //更新食品数量
      this.$axios.post("/api/changeFoodsNum", data).then(res => {
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
.arrow_left {
  color: #fff;
  font-size: 23px;
  position: absolute;
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
}
.ul_left {
  background: #f5f5f5;
}
.ul_left li {
  padding: 20px;
}
</style>