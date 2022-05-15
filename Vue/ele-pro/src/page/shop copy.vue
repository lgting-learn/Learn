<template>
  <div class="">
    <!-- TODO -->
    <!-- 
      :class="skeleton_loading?'':'display_hidden'"
     -->
    <!-- 骨架屏 -->
    <div
      class="skeleton_container flex_column fixed_full"
      :class="skeleton_loading?'':'display_hidden'"
    >
      <div class="skeleton_container_top">
        <div class="skeleton_top bg_black_2E2F3B padding_btm_10">
          <van-skeleton
            title
            avatar
            :row="1"
            :animate=false
            avatar-shape='square'
            avatar-size='70px'
          />
        </div>
        <div class="skeleton_down flex_row padding_10_top_bottom">
          <van-skeleton
            v-for="i in 3"
            :key="i"
            title
            title-width='50px'
            :animate=false
          />
        </div>
      </div>
      <div class="skeleton_left_rgt_wrap flex_row skeleton_container_btm">
        <div class="skeleton_left flex_column">
          <van-skeleton
            v-for="i in 15"
            :key="i"
            title
            title-width='50px'
            :animate=false
          />
        </div>
        <div class="skeleton_right ">
          <div class="skeleton_right_fill"></div>
          <van-skeleton
            v-for="i in 10"
            :key="i"
            title
            avatar
            :row="2"
            title-width="120px"
            row-width="100px"
            :animate=false
            avatar-shape='square'
            avatar-size='60px'
          />
        </div>
      </div>
  </div>
  <!-- 动态类名 多个条件判断 -->
  <!-- 
    :class="[active==0?'fixed_full':'shop_full_active',skeleton_loading?'':'display_block']"
TODO
   -->
  <!-- 正式内容 -->
  <div
    class='shop flex_column display_hidden'
    :class="[active==0?'fixed_full':'shop_full_active',skeleton_loading?'':'display_block']"
  >

    <div class="shop_top flex_row padding_10 grow_0 bg_black_2E2F3B">
      <span
        class="arrow_left van-icon van-icon-arrow-left van-nav-bar__arrow"
        @click="$router.go(-1);"
      ></span>
        <img
          class="shop_top_left border_radius_5"
          :src="shopDetail.image_path"
        >
          <div class="shop_top_right flex_column">
            <h3 class="ellipsis span_white font16 padding_5_bottom">{{shopDetail.name}}</h3>
            <span class="ellipsis span_white">商家配送／30分钟送达／配送费¥5</span>
            <span class="ellipsis span_white">公告：欢迎光临，用餐高峰请提前下单，谢谢公告：欢迎光临，用餐高峰请提前下单，谢谢</span>
          </div>
    </div>
    <div class="shop_tab flex_row grow_0">
      <div class="shop_tab_item flex_center">
        <span
          @click="changeTab(0)"
          :class="active==0?'span_active span_black weight_600':''"
        >商品</span>
      </div>
      <div class="shop_tab_item flex_center">
        <span
          @click="changeTab(1)"
          :class="active==1?'span_active span_black weight_600':''"
        >评价</span>
      </div>
    </div>
    <!-- 商品tab -->
    <div
      v-if="active==0"
      class="shop_container grow_1"
    >
      <!-- <div
      v-if="active==1"
      class="shop_container grow_1"
    > -->
      <div
        class="shop_detail shop_detail_left flex_row shop_detail_left_finally"
        id="wrap"
      >
        <!-- 左侧菜单 -->
        <div
          class="goodMenu grow_0"
          ref="goodMenu"
        >

          <ul class="ul_left bg_gray">
            <li
              v-for="(item,index) in goodList"
              :key="index"
              :class="currentIndex == index?'bg_fff':''"
              @click="selectLeft(index)"
              ref="lItem"
            >
              <img
                :src="item.icon"
                alt=""
                :class="item.icon?'':'display_hidden'"
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
                <h3 class="right_title padding_10 bg_gray">{{items.name}}</h3>

                <div
                  class="shop_right_content padding_10 flex_row flex_center_col"
                  v-for="(itemss,indexss) in items.foods"
                  :key="indexss"
                >
                  <van-image
                    fit="cover"
                    radius="5"
                    :src="itemss.image_path"
                    lazy-load
                    alt=""
                    class="shop_img_classify grow_0"
                  />

                  <div class="flex_column grow_1">
                    <span class="color_black3 font14 weight_600">{{ itemss.name}}</span>
                    <span>月售{{ itemss.month_sales}}份 好评率{{itemss.satisfy_rate}}%</span>
                    <div class="flex_row flex_between">
                      <span class="color_org">￥{{ itemss.price}}</span>
                      <!-- <AddAndReduce
                        ref="AddAndReduce"
                        :itemss="itemss"
                        :restaurant_id="restaurant_id"
                        @getFoodClassify="getFoodClassify"
                        @getFoodsTotal="getFoodsTotal"
                        @getAmountList="getAmountList"
                      ></AddAndReduce> -->
                      <div class='addAndReduce'>
                        <div class="flex_row_center rel food_num">
                          <img
                            class="bg_yellow border_radius_50 span_black num_change num_reduce flex_center"
                            @click="numChange(0,itemss.id,itemss.restaurant_id)"
                            :class="itemss.buy_number>0?'visible':'hidden'"
                            src="../../static/images/reduce.svg"
                          />
                          <div
                            class="num_show"
                            v-show="itemss.buy_number>0"
                          >{{itemss.buy_number}}</div>
                        <img
                          class="bg_yellow border_radius_50 span_black num_change num_add flex_center"
                          @click="numChange(1,itemss.id,itemss.restaurant_id)"
                          src="../../static/images/add.svg"
                        />
                      </div>
                    </div>
                  </div>

                  </div>
                  </div>
                  </li>
            </ul>
            </div>

            </div>
            <!-- 购物车组件 -->
            <div class="shop_cart commit_order btm border_radius_50 flex_row">
              <div class="flex_row bg_black shop_cart_left_wrap">
                <div class="flex_column_center shop_cart_left padding_5">
                  <img
                    class="width_height_20"
                    src="../../static/images/shop_msg.svg"
                  >
                    <span class="font10_center span_yellow">联系商家</span>
                </div>
                <div
                  class="circle circle_cart flex_center span_white grow_0 rel"
                  @click="showPopup"
                >
                  <img
                    class="shop_cart_img abs width_height_30"
                    src="../../static/images/shop_cart.svg"
                    alt=""
                  >
                    <span
                      class="bg_red flex_center span_white circle cart_num"
                      v-show="foodsTotal>0"
                    >{{foodsTotal}}</span>
                      <!-- </div> -->
              </div>
              <div
                class=" all_price span_white flex_center_col grow_1 ellipsis weight_600 commit_order_price bg_black rel"
                v-show="foodsPrice>0"
              >
                <!-- <span class="font11_right span_white abs">￥</span> -->
                <span class="span_white font16 weight_600 abs">￥{{foodsPrice}}</span>
            </div>
            </div>
            <router-link
              :to="{path:'/confirmOrder',query:{restaurant_id:restaurant_id,restaurant_name:restaurant_name,user_id:user_id}}"
              class="shop_cart_right_wrap amount bg_yellow flex_center abs grow_0 weight_600 span_black"
            >去结算</router-link>
              </div>
              <!-- 点击购物车弹出购物清单 -->
              <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '30%' }"
              >
                <div class="checklist_wrap flex_end padding_10 bg_gray">
                  <!-- <span>购物车</span> -->
                  <div
                    class="flex_row_center rel"
                    @click="clearFoodList"
                  >
                    <img
                      src="../../static/images/shop_trash.svg"
                      alt=""
                      class="width_height_15 abs trash_img"
                    >
                      <span class="font11_right">清空购物车</span>
                </div>

                </div>
                <div class="flex_col list_detail">
                  <div
                    class="list_detail_item flex_row "
                    v-for="(item,index) in amountList"
                    :key="index"
                  >
                    <span class="food_title ">{{item.name}}</span>
                    <span class="food_price color_org">￥{{item.price}}</span>
                    <!-- 购物车 -->
                    <!-- <AddAndReduce
                      ref="AddAndReduce"
                      :itemss="item"
                      :restaurant_id="restaurant_id"
                      @getFoodClassify="getFoodClassify"
                      @getFoodsTotal="getFoodsTotal"
                      @getAmountList="getAmountList"
                    ></AddAndReduce> -->
                    <div
                      class='addAndReduce addAndReduce_cart'
                    >
                      <div class="flex_row_center food_num rel">
                        <img
                          class="bg_yellow border_radius_50 span_black num_change num_reduce flex_center"
                          @click="numChange(0,item.id,item.restaurant_id)"
                          v-show="item.buy_number>0"
                          src="../../static/images/reduce.svg"
                          :class="item.buy_number>0?'visible':'hidden'"
                        />
                        <div
                          class="num_show"
                          v-show="item.buy_number>0"
                        >{{item.buy_number}}</div>
                      <img
                        class="bg_yellow border_radius_50 span_black num_change num_add flex_center"
                        @click="numChange(1,item.id,item.restaurant_id)"
                        src="../../static/images/add.svg"
                      />
                </div>
                </div>
                </div>

                </div>
                </van-popup>

                </div>
                <!-- 评论tab -->
                <div
                  class="shop_detail grow_1 appraise skeleton_appraise"
                  v-else-if="active==1&&skeleton_loading_appraise"
                >
                  <van-skeleton
                    v-for="i in 10"
                    :key="i"
                    title
                    avatar
                    :row="2"
                    title-width="120px"
                    row-width="100%,100%"
                    :animate=false
                    avatar-size='30px'
                  />
                  </div>
                  <div
                    class="shop_detail grow_1 appraise"
                    v-else-if="active==1&&!skeleton_loading_appraise"
                  >
                    <div class="appraise_top flex_row padding_10 flex_between display_hidden">
                      <div class="appraise_top_item flex_column flex_center margin_right_10">
                        <span class="span_yellow font25 weight_600">{{shopRateObj.restaurant_rate}}</span>
                        <span class="font11_center">商家评分</span>
                      </div>
                      <div class="appraise_top_item flex_column flex_center">
                        <div class="flex_row flex_center margin_bottom_5">
                          <span class="margin_right_10 font11_center">口味</span>
                          <van-rate
                            v-model="shopRateObj.restaurant_taste_rate"
                            :size="12"
                            color="#ffd21e"
                            void-icon="star"
                            void-color="#eee"
                          />
                          <span class="span_yellow margin_left_10">{{shopRateObj.restaurant_taste_rate}}</span>
                        </div>
                        <div class="flex_row flex_center">
                          <span class="margin_right_10 font11_center">包装</span>
                          <van-rate
                            v-model="shopRateObj.restaurant_pack_rate"
                            :size="12"
                            color="#ffd21e"
                            void-icon="star"
                            void-color="#eee"
                          />
                          <span class="span_yellow margin_left_10">{{shopRateObj.restaurant_pack_rate}}</span>
                        </div>
                      </div>
                      <div class="appraise_top_item flex_column flex_center">
                        <span class="span_gray font20">{{shopRateObj.distribution_satisfied_rate}}%</span>
                        <span class="span_gray font11_center">配送满意度</span>
                      </div>
                    </div>
                    <!-- 评论区 -->
                    <div class="appraise_detail padding_10">
                      <!-- TODO 暂时屏蔽 -->
                      <!-- <div class="appraise_detail_top flex_wrap">
                      <span
                        v-for="i in 20"
                        class="border_all border_radius_3 margin_right_5 margin_bottom_5 padding_3 font12"
                      >好评786</span>
                    </div> -->

                      <div class="appraise_detail_wrap">
                        <div
                          class="appraise_detail_item padding_btm_10 margin_top_10"
                          v-for="(item,index) in appraiseList"
                          :class="index!=(appraiseList.length-1)?'border_bottom':''"
                          :key="index"
                        >
                          <div class="item_top flex_row_center rel">
                            <van-image
                              cover
                              round
                              :src="item.head_img"
                              lazy-load
                              alt=""
                              class="circle width_height_30 margin_right_10"
                            />
                            <div class="flex_column">
                              <span class="span_black">{{item.user_name}}</span>
                              <div class="flex_row flex_center">
                                <span class="span_gray font11_left">评分</span>
                                <van-rate
                                  v-model="item.rate"
                                  :size="12"
                                  color="#ffd21e"
                                  void-icon="star"
                                  void-color="#eee"
                                />
                              </div>
                            </div>
                            <span class="font11_right abs right_0 top_0">{{item.appraise_time}}</span>
                          </div>
                          <div class="item_center flex_column">
                            <div class="font12 span_black margin_bottom_5">{{item.appraise_detail}}</div>
                            <div class="img_pic_wrap">
                              <div
                                v-for="(img_pic,img_pic_idx) in item.appraise_img"
                                :key="img_pic_idx"
                                class="img_pic_single"
                              >
                                <van-image
                                  cover
                                  fit="cover"
                                  radius="5"
                                  :src="img_pic.url"
                                  lazy-load
                                  alt=""
                                  class="width_height_120 border_radius_5"
                                />
                            </div>
                          </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    </div>
                    </div>
</template>

<script>
import BScroll from "better-scroll";
import AddAndReduce from "@/components/AddAndReduce.vue";
import { getStore, setStore, isNotBlank } from "../config/mUtils.js";
import { all } from "q";
import { Toast } from "vant";
import { Skeleton } from "vant";
var qs = require("qs");
export default {
  components: { AddAndReduce },
  data() {
    return {
      skeleton_loading: true, //骨架屏，店铺详情true显示
      skeleton_loading_appraise: true, //骨架屏，评论 true显示
      global_appraise: false, //点击评论tab只请求一次接口，设置全局变量
      shopRateObj: {}, //店铺评分详情
      appraiseList: [], //评价列表
      value: 2.5, //评分
      user_id: "",
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
      restaurant_id: "", //店铺id
      restaurant_name: "" //店铺名称
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
      that.skeleton_loading = false; //取消骨架屏  TODO
      that.$emit("getFoodClassify", that.goodList);

      // that.getFoodsTotal(that.goodList, that);
      //因为 _scrollInit函数需要操作DOM，因此必须在DOM元素存在文档中才能获取DOM节点
      //因此在 nextTick回调函数里面调用可以是实现此功能
      that.$nextTick(() => {
        that._scrollInit();
        that.getHeight();
      });
    });
    //获取单间店铺详情
    data = qs.stringify({ id: restaurant_id });
    this.$axios.post("/api/shopSingle", data).then(res => {
      that.shopDetail = res.data;
      that.restaurant_name = res.data.name;
      setStore("shop_img", res.data.image_path);
    });

    //获取某店铺评价
    this.$axios.post("/api/getShopRate", data).then(res => {
      if (res.data.length > 0) {
        that.shopRateObj = res.data[0];
      }
    });
  },
  methods: {
    //获取某店铺评价
    getShopAppraise() {
      if (this.global_appraise) {
        return;
      }
      let data = qs.stringify({ restaurant_id: this.restaurant_id });
      var that = this;
      this.$axios.post("/api/getShopAppraise", data).then(res => {
        that.global_appraise = true;
        that.skeleton_loading_appraise = false; //取消评论骨架屏
        if (res.data.length > 0) {
          that.appraiseList = res.data;
          var timestamp = "";

          if (that.appraiseList.length > 0) {
            for (let i = 0; i < that.appraiseList.length; i++) {
              // that.order_id = that.appraiseList[i].id;
              //设置默认头像
              that.appraiseList[i].head_img = that.appraiseList[i].head_img
                ? that.appraiseList[i].head_img
                : "../../static/images/default_headImg.svg";
              var timeInit = that.appraiseList[i].appraise_time;
              if (timeInit.length == 10) {
                //十位时间戳 单位：秒
                timestamp = new Date(parseInt(timeInit) * 1000); //直接用 new Date(时间戳) 格式转化获得当前时间
              } else {
                //十三位时间戳 单位：毫秒
                timestamp = new Date(parseInt(timeInit)); //直接用 new Date(时间戳) 格式转化获得当前时间
              }
              var year = timestamp.getFullYear();

              var month = timestamp.getMonth() + 1;

              var date = timestamp.getDate();
              // var time =
              //   timestamp.toLocaleDateString().replace(/\//g, "-") +
              //   " " +
              //   timestamp.toTimeString().substr(0, 8);
              var time = year + "." + month + "." + date;
              that.appraiseList[i].appraise_time = time;
              //截取存储到阿里云的图片,如：
              //http://user-mobile.oss-cn-beijing.aliyuncs.com/8504945.jpg?uploadId=B43DA80116594F62B497CD328C89BD31
              // 原方式
              // that.appraiseList[i].appraise_img =
              //   that.appraiseList[i].appraise_img.indexOf("?uploadId") > -1
              //     ? that.appraiseList[i].appraise_img.split("?uploadId")[0]
              //     : that.appraiseList[i].appraise_img;
              if (that.appraiseList[i].appraise_img) {
                if (that.appraiseList[i].appraise_img.indexOf("mobile.oss")) {
                  that.appraiseList[i].appraise_img = that.appraiseList[
                    i
                  ].appraise_img.split("?uploadId")[0];
                } else {
                  // 字符串转数组
                  that.appraiseList[i].appraise_img = that.appraiseList[
                    i
                  ].appraise_img.split(",");

                  // json数组解析为json
                  that.appraiseList[i].appraise_img = JSON.parse(
                    that.appraiseList[i].appraise_img
                  );
                }
              }
            }
          }
        }
      });
    },
    initCart() {
      var that = this;
      //获取最新菜单
      let data = qs.stringify({ restaurant_id: this.restaurant_id });
      this.$axios.post("/api/shopFoodClassify", data).then(function(res) {
        that.goodList = res.data;
        //type:1增加 id:当前食品id restaurant_id:店铺id
        let goodListArr = that.goodList;
        let itemObj = "";
        if (goodListArr.length != 0) {
          that.getFoodsTotal(that.goodList);
        }
      });
    },
    //改变食品选购数量
    numChange(type, id, restaurant_id) {
      var that = this;
      //获取最新菜单
      let data = qs.stringify({ restaurant_id: this.restaurant_id });
      this.$axios.post("/api/shopFoodClassify", data).then(function(res) {
        that.goodList = res.data;
        //type:1增加 id:当前食品id restaurant_id:店铺id
        let goodListArr = that.goodList;
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
          } else {
            return;
          }
        }
        let data = qs.stringify({
          buy_number: itemObj.buy_number,
          id: id,
          restaurant_id: restaurant_id
        });

        //更新食品数量
        that.$axios.post("/api/changeFoodsNum", data).then(res => {
          that.goodList = res.data;
          that.getFoodsTotal(that.goodList);
        });
      });
    }, //获取食品总数量
    getFoodsTotal(arr) {
      var num = 0;
      var price = 0;
      var amountList = []; //食品结算清单
      if (arr.length > 0) {
        arr.forEach(item => {
          if (item.foods.length > 0) {
            item.foods.forEach(items => {
              num += items.buy_number;
              //解决price出现多位小数
              price += items.buy_number * items.price;
              if (items.buy_number > 0) {
                amountList.push(items); //购物车-食品详情
              }
            });
          }
        });
      }
      price = price.toFixed(2);
      this.foodsTotal = num;
      this.foodsPrice = price;
      setStore("foodsPrice", price);
      this.amountList = amountList;
      setStore("amountList", amountList);
    },

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
            that.amountList = [];
            that.show = false;
            that.foodsTotal = 0;
            that.foodsPrice = 0;
          });
        }
      });
    },
    getFoodClassify(data) {
      this.goodList = data;
    },

    getAmountList(amountList) {
      this.amountList = amountList;
      setStore("amountList", amountList);
    },
    //点击购物车 弹出购物清单
    showPopup() {
      // debugger
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
      //点击评价tab时才请接口
      if (index == 1) {
        this.getShopAppraise();
      }
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

  mounted() {
    //初始化 购物车
    this.initCart();
  }
};
</script>

<style scoped>
.shop_detail_left {
  height: 74% !important;
}
.shop_detail_left_finally {
  height: 91% !important;
}
.skeleton_appraise .van-skeleton {
  padding-top: 10px;
  padding-bottom: 10px;
}

.skeleton_appraise .van-skeleton__content {
  padding-top: 0px;
}
.skeleton_appraise .van-skeleton__content .van-skeleton__title {
  height: 10px;
}
.skeleton_appraise .van-skeleton__content .van-van-skeleton__row {
  margin-top: 10px;
}
.skeleton_right_fill {
  background: #f2f3f5;
  width: 100%;
  height: 25px;
}
.skeleton_container_top {
  flex: 1;
}
.skeleton_container_btm {
  flex: 6;
}
.skeleton_left {
  flex: 1;
}
.skeleton_left .van-skeleton {
  flex: 1;
  background: #f2f3f5;
}
.skeleton_left .van-skeleton .van-skeleton__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.skeleton_left .van-skeleton .van-skeleton__content .van-skeleton__title {
  background: #fff;
}
.skeleton_right {
  flex: 3;
}
.skeleton_right .van-skeleton {
  padding-top: 15px;
  padding-bottom: 15px;
}
.skeleton_right .van-skeleton .van-skeleton__content {
  padding-top: 0;
}
.skeleton_right .van-skeleton__row {
  height: 10px;
  margin-top: 10px;
}
.skeleton_down .van-skeleton {
  flex: 1;
}
.skeleton_down .van-skeleton .van-skeleton__content {
  display: flex;
  justify-content: center;
}
.skeleton_down .van-skeleton .van-skeleton__content .van-skeleton__title {
  height: 20px;
}
.skeleton_top .van-skeleton {
  padding-top: 10px;
}
.shop_full_active {
  overflow-y: auto;
  overflow-x: hidden;
}
.appraise_detail {
  padding-top: 0;
  padding-bottom: 0;
  /* border-top: 10px solid #f6f6f6; */
}
.addAndReduce {
  width: 30%;
}
.addAndReduce_cart {
  width: 60px;
  position: absolute;
  right: 10px;
}
.list_detail_item .food_title {
  width: auto;
}
.trash_img {
  left: -2px;
}
.shop_cart_img {
  top: 50%;
  margin-top: -15px;
}
.shop_cart_left_wrap {
  width: 80%;
}
.shop_cart_right_wrap {
  width: 20%;
}
.shop_cart_left {
  align-items: center;
  border-right: 3px solid #fff;
}
.circle_cart_img {
}
.shop_top .arrow_left {
  color: white;
}
.van-popup {
  height: auto !important;
  z-index: 2006;
  /* padding: 10px 0; */
  padding-bottom: 60px;
}
.list_detail_item {
  padding: 10px;
}
.food_num {
  height: 100%;
  width: 100%;
  justify-content: space-between;
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
  width: 44%;
}
.amount {
  right: 0;
  height: 100%;
  /* width: 35%; */
}
.cart_num {
  width: 15px;
  height: 15px;
  font-size: 12px;
  position: absolute;
  right: 8px;
  top: 9px;
}
.circle_cart_wrap {
  position: relative;
  width: 50px;
  height: 50px;
}
.circle_cart {
  width: 50px;
  height: 100%;
  /* position: absolute;
  top: -11px;
  left: 14px; */
}
/* TODO */
.num_change {
  height: 18px;
  width: 18px;
  background: #fff;
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
}
.shop_top {
  /* background: #acacbe; */
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
  padding: 8px 0 8px 0;
  border-bottom: 0.026667rem solid #e4e4e4;
}
.shop_tab_item span {
  /* padding-bottom: 5px;
  border-bottom: 2px solid transparent; */
  font-size: 14px;
}
.span_active {
  /* border-bottom: 2px solid #ffc300 !important;
    border-radius: 1px; */
}
.shop_cart {
  /* background: #222; */
  height: 8%;
  position: relative;
  z-index: 10000;
  /* bottom: 5px; */
}

.ul_left li {
  /* padding: 10px; */
  padding: 13px 10px;
  display: flex;
}
.ul_left li img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.img_pic_wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.img_pic_single {
  width: 32%;
  padding-top: 0%;
  margin-bottom: 3px;
}

.img_pic_single .van-image {
  width: 100%;
}
.appraise_detail_item {
  padding-bottom: 1px;
}
.appraise_detail_item .item_center {
  margin-left: 40px;
}
</style>