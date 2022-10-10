<template>
  <div class="food flex_column fixed_full">
    <Top :nav_title="nav_title"></Top>

    <div
      class="food_container flex_column common_container"
      :class="show ? '' : 'food_container_show'"
    >
      <div class="food_container_top flex_row border_bottom bg_fff grow_0">
        <div
          v-for="(item, index) in titleArr"
          :key="index"
          class="top_item grow_1 padding_10 flex_center font14"
          :class="[
            index != titleArr.length - 1 ? 'top_item_line' : '',
            item.heightLightFlag ? 'choice_blue' : '',
          ]"
          @click="showPopup(index)"
        >
          {{ item.title }}
          <span
            class="arrow_down_full"
            :class="item.heightLightFlag ? 'choice_blue_arrow' : ''"
          ></span>
        </div>
      </div>
      <div class="food_show near_shop_show grow_1 rel">
        <waterFall
          :imgsArr="imgsArr"
          :columns="columns"
          :nav_title="nav_title"
          :category="category"
          :shop_start="shop_start"
          :shop_limit="shop_limit"
          ref="waterFall"
          :waterFullBottom="waterFullBottom"
          :waterFullPadding="waterFullPadding"
          @getData="getData"
        ></waterFall>

        <van-popup v-model="show" position="top" :style="{ height: popup_height }">
          <!-- 第一个tab 分类-->
          <div class="condition flex_row" v-show="choose_tab == 0">
            <div class="grow_1 condition_left">
              <div
                class="condition_left_item flex_row rel flex_center_col"
                v-for="(item, index) in categoryLeft"
                :key="index"
                @click="chooseMenuLeft(item.id)"
                :class="chooseMenuId == item.id ? 'bg_white' : ''"
              >
                <img
                  :src="
                    item.image_url
                      ? item.image_url
                      : 'https://fuss10.elemecdn.com/6/23/5a6fce94bed63a21508f68a72c158png.png'
                  "
                  alt=""
                  class="icon_category"
                />
                <span>{{ item.name }}</span>
                <span class="category_count">{{ item.count }}</span>
                <van-icon
                  name="arrow"
                  color="gray"
                  class="arrow_right_vant arrow_right_vant_food"
                  size="14"
                />
              </div>
            </div>
            <div class="grow_1 condition_right">
              <!--!!!
              1、for循环报错sub_categories属性不存在，此时categoryLeft数组可能为空，
              用if提前判断
              2、if不与for放在一层，优化性能
              -->
              <div v-if="categoryLeft.length">
                <div
                  class="condition_right_item flex_row condition_left_item rel flex_center_col"
                  :key="index"
                  v-for="(item, index) in categoryLeft[chooseMenuId - 1].sub_categories"
                  :class="index != 19 ? 'border_bottom' : ''"
                >
                  <span>{{ item.name }}</span>
                  <span class="category_count"></span>
                  <van-icon
                    name="arrow"
                    color="gray"
                    class="arrow_right_vant arrow_right_vant_food"
                    size="14"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- 第二个标签 -->
          <div class="condition flex_col" v-show="choose_tab == 1">
            <div
              v-for="(item, index) in sortArr"
              :key="index"
              class="flex_row padding_15 border_bottom sort_item"
            >
              <img src="" alt=""/>
              <span class="font14">{{ item.title }}</span>
            </div>
          </div>
          <!-- 第三个标签 -->
          <div class="condition flex_col" v-show="choose_tab == 2">
            <div class="food_select flex_col padding_10 food_select_method">
              <span class="select_title">配送方式</span>
              <div class="send_method">
                <span
                  v-for="(item, index) in selectSendArr"
                  :key="index"
                  @click="chooseSelectTab('send', index)"
                  :class="item.choose_index ? 'choice' : ''"
                  class="border_all border_radius_3 padding_5_top_bottom flex_center"
                >{{ item.title }}</span
                >
              </div>
            </div>
            <div class="food_select flex_col padding_10">
              <span class="select_title">商家属性</span>
              <div class="send_method send_method_attr flex_between">
                <span
                  v-for="(item, index) in selectAttrArr"
                  :key="index"
                  class="border_all border_all_attr border_radius_3 padding_5_top_bottom flex_center"
                  @click="chooseSelectTab('attr', index)"
                  :class="item.choose_index ? 'choice' : ''"
                >{{ item.title }}</span
                >
              </div>
            </div>
            <div class="select_bot flex_row padding_10 bg_gray">
              <div
                class="select_bot_item clear bg_white grow_1 flex_center border_radius_5 span_black"
                @click="clear"
              >
                清空
              </div>
              <div
                class="select_bot_item confirm grow_1 flex_center bg_green border_radius_5 span_white"
                @click="confirmFood"
              >
                确定
              </div>
            </div>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import waterFall from "@/components/waterFall.vue";
import {setStore, getStore, setHistory} from "../../config/mUtils";

import Top from "@/components/Top.vue";

let qs = require("qs");

export default {
  components: {Top, waterFall},
  data() {
    return {
      heightLightTab: -1, //高亮tab
      // 瀑布流返回
      shop_start: 0,
      shop_limit: 10,
      shop_done: false, //true加载到最后一页
      imgsArr: [],
      responseData: [],
      popup_height: "auto", //下拉框高度
      show: false,
      chooseMenuId: 1, //左侧菜单选中索引
      waterFullBottom: 15, //底部距离下张图片距离
      waterFullPadding: 10, // 图片左/右间隔 三份
      columns: 2,
      choose_tab: -1, //当前选中tab
      select_attr_index: -1, //当前选中tab
      categoryLeft: [],
      selectSendArr: [{title: "蜂鸟专送", index: 0, img_url: "", choose_index: false}], //配送方式
      selectAttrArr: [
        //商家属性
        {title: "品牌商家", index: 0, img_url: "", choose_index: false},
        {title: "外卖保", index: 1, img_url: "", choose_index: false},
        {title: "准时达", index: 2, img_url: "", choose_index: false},
        {title: "新店", index: 3, img_url: "", choose_index: false},
        {title: "在线支付", index: 4, img_url: "", choose_index: false},
        {title: "开发票", index: 5, img_url: "", choose_index: false},
      ],
      titleArr: [
        //tab
        {
          title: this.$route.query.title, //获取路由的传值
          index: 0,
          heightLightFlag: false,
        },
        {
          title: "排序",
          index: 1,
          heightLightFlag: false,
        },
        {
          title: "筛选",
          index: 2,
          heightLightFlag: false,
        },
      ],
      sortArr: [
        {
          img_path: "",
          title: "智能排序",
          index: 0,
        },
        {
          img_path: "",
          title: "距离最近",
          index: 1,
        },
        {
          img_path: "",
          title: "销量最高",
          index: 2,
        },
        {
          img_path: "",
          title: "起送价最低",
          index: 3,
        },
        {
          img_path: "",
          title: "配送速度最快",
          index: 4,
        },
        {
          img_path: "",
          title: "评分最高",
          index: 5,
        },
      ],
    };
  },
  computed: {
    nav_title() {
      return this.$route.query.title;
    },
    category() {
      return this.$route.query.category;
    },
  },
  watch: {
    show: function () {
      if (!this.show) {
        for (let i = 0; i < this.titleArr.length; i++) {
          this.titleArr[i].heightLightFlag = false;
        }
      }
    },
  },
  created() {
    //初始化瀑布流
    setHistory(this);
    this.getData();
    this.getCategory();
  },
  /*
  * created()与mounted()失效：index-food-shop，重新进入food不再触发这两个钩子函数，TODO 原因未分析出来
  * */
  activated() {
    setHistory(this);
  },
  mounted() {
  },
  methods: {
    clear() {
      for (let i = 0; i < this.selectSendArr.length; i++) {
        this.selectSendArr[i].choose_index = false;
      }
      for (let i = 0; i < this.selectAttrArr.length; i++) {
        this.selectAttrArr[i].choose_index = false;
      }
    },
    //点击确定
    confirmFood() {
      this.show = false;
      for (let i = 0; i < this.titleArr.length; i++) {
        this.titleArr[i].heightLightFlag = false;
      }
    },
    //点击筛选tab
    chooseSelectTab(type, index) {
      if (type == "send") {
        this.selectSendArr[index].choose_index = !this.selectSendArr[index].choose_index;
      } else if (type == "attr") {
        this.selectAttrArr[index].choose_index = !this.selectAttrArr[index].choose_index;
      }
    },
    chooseMenuLeft(id) {
      this.chooseMenuId = id;
    },

    //获取分类
    getCategory() {
      let that = this;
      this.$axios.get("/api/category").then((res) => {
        that.categoryLeft = res.data;
        // 提示待添加
        let toAdd = [
          {
            id: 1,
            sub_id: 2,
            name: "暂未分类",
            count: "0",
            level: "2",
            image_url: null,
          },
        ];
        if (that.categoryLeft.length > 0) {
          that.categoryLeft.forEach((item) => {
            if (item.name == that.nav_title) {
              that.chooseMenuId = item.id;
            }
            if (item.sub_categories.length == 0) {
              toAdd[0].count = item.sub_categories.count;
              item.sub_categories = toAdd;
            }
          });
        }
      });
    },
    //瀑布流 触底加载
    getData() {
      if (this.shop_done) {
        return;
      }
      let that = this;
      let data = qs.stringify({
        start: this.shop_start,
        limit: this.shop_limit,
        category: this.$route.query.category,
      });
      // 清空瀑布流列长和数组
      if (this.shop_start == 0) {
        setStore("arrH", []);
      }
      this.$axios.post("/api/shop", data).then(function (res) {
        if (res && res.data) {
          that.shop_start += that.shop_limit;
          if (res.data.length == that.shop_limit) {
          } else {
            that.shop_done = true; //最后一页
          }
          that.$refs.waterFall.changeIsInProcessing(false);
        }
        that.responseData = res.data;
        that.imgsArr = [];
        that.responseData.forEach((res) => {
          that.imgsArr.push({
            src: res.image_path,
            href: {
              path: "/shop",
              query: {restaurant_id: res.id},
            },
            info: res.name,
            score: res.score,
            introduce: res.introduce,
            per_capita: res.per_capita,
            month_sales: res.month_sales,
            id: res.id,
            category: res.category,
          });
        });
      });
    },
    clickFn(event, {index, value}) {
      // 阻止a标签跳转
      // event.preventDefault();
      // 只有当点击到图片时才进行操作
      if (event.target.tagName.toLowerCase() == "img") {
        console.log("img clicked", index, value);
      }
    },
    //index 当前选择tab
    showPopup(index) {
      this.choose_tab = index;
      let flagInit = false; //第一次点击tab
      let flagItem = false; //
      for (let i = 0; i < this.titleArr.length; i++) {
        //某tab被选中
        if (this.titleArr[i].heightLightFlag) {
          flagInit = true;

          //展示/收起
          if (this.choose_tab == this.titleArr[i].index) {
            this.show = false; //收起
            this.titleArr[i].heightLightFlag = this.show;
          } else {
            this.show = true; //展开
            for (let j = 0; j < this.titleArr.length; j++) {
              this.titleArr[j].heightLightFlag = false;
            }
            this.titleArr[index].heightLightFlag = this.show;
            return;
          }
        }
      }
      //没有tab被选中，直接展开tab并设置各tab状态
      if (!flagInit) {
        this.show = !this.show;
        for (let i = 0; i < this.titleArr.length; i++) {
          this.titleArr[i].heightLightFlag = false;
        }
        this.titleArr[index].heightLightFlag = true;
      }
    },
  },
};
</script>

<style>
.food {
  height: 700px;
}

.arrow_right_vant_food {
  right: 5px;
}

.near_shop_show {
  height: 700px;
}

.food .van-nav-bar__arrow {
  position: absolute;
}

.food_select {
  padding-bottom: 0px !important;
}

.send_method_attr {
  display: flex;
  flex-wrap: wrap;
}

.sort_item {
  padding-left: 0;
  padding-right: 0;
  margin: 0 15px;
}

.condition_right {
  height: 340px;
  overflow-y: auto;
  width: 50%;
}

.category_count {
  position: absolute;
  right: 20px;
}

.icon_category {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.food_container_show {
  flex: 1;
}

.food_container {
  flex: 1;
  bottom: 0 !important;
}

.food_container .near_shop_show {
  /* overflow-y: auto; */
  /* padding-top: 10px; */
}

.food_select_method {
  padding-bottom: 0;
}

.select_bot_item {
  height: 40px;
}

.select_bot_item:nth-child(1) {
  margin-right: 10px;
}

.select_title {
  display: block;
  margin-bottom: 8px;
}

.border_all {
  width: 30%;
}

.border_all_attr {
  margin-bottom: 8px;
}

.condition_left {
  background: #f1f1f1;
  width: 50%;
}

.condition_right_item {
  margin-left: 10px;
  padding-left: 0 !important;
}

.condition_left_item {
  padding: 10px 10px;
}

.arrow_right_food {
  right: 10px;
}

.food_top {
  z-index: 2100;
  position: relative;
}

.food_container_top {
  z-index: 2100;
  position: relative;
}

.van-popup {
  position: absolute;
  /* top: 75px; */
  overflow: hidden !important;
}

.top_item_line {
  border-right: 1px solid #e4e4e4;
}

.food_container .van-overlay {
  margin-top: 90px !important;
}

.vue-waterfall-easy-container .loading .dot {
  background: #1989fa !important;
}
</style>
