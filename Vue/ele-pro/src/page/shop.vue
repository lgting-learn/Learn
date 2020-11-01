<template>
  <div
    class='shop flex_column fixed_full'
  >
    <div class="shop_top flex_row padding_10 grow_0">
      <span class="arrow_left van-icon van-icon-arrow-left van-nav-bar__arrow" @click="$router.go(-1);"></span>
      <img
        class="shop_top_left border_radius_5 "
        src="https://exp-picture.cdn.bcebos.com/d2987775f2c4ec9971a863b4c3fe1e425c6b0740.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1"
      >
        <div class="shop_top_right flex_column">
          <h3 class="ellipsis span_white">效果演示</h3>
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
              :class="currentIndex === index?'bg_fff':''"
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
                  class="shop_right_content padding_10"
                  v-for="(itemss,indexss) in items.foods"
                  :key="indexss"
                >{{ itemss.name}}</div>

                  <div
                    v-for="(item, key) in items.data"
                    :key="key"
                  >
                    {{ item}}
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
export default {
  components: {},
  data() {
    return {
      active: 0,
      show:false,
      menuLeft: [], //左侧菜单目录
      goodList: [
        {
          name: "热销榜",
          description: "热销来袭～",
          restaurant_id: 1,
          id: 9196,
          foods: [
            {
              _id: "5e018611de911551beafac3c",
              tips: "711评价 月售265份",
              item_id: 6053,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "打威群岛",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f35f39b6262048.jpg",
              name: "阿斯顿·",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "阿斯顿·",
                  item_id: 6053,
                  sku_id: 23689,
                  food_id: 23716,
                  restaurant_id: 1,
                  _id: "5e018a9ede911551beafacf1",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e018a9ede911551beafacf2"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 820,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111",
                  name: "阿斯顿·",
                  item_id: 6053,
                  sku_id: 23690,
                  food_id: 23717,
                  restaurant_id: 1,
                  _id: "5e018a9ede911551beafacef",
                  specs: [
                    {
                      name: "规格",
                      value: "111",
                      _id: "5e018a9ede911551beafacf0"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 733,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 30,
              satisfy_count: 128,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  values: ["默认", "111"],
                  name: "规格"
                }
              ],
              rating_count: 711,
              month_sales: 265,
              description: "的撒旦",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e01b173de911551beafb045",
              tips: "742评价 月售798份",
              item_id: 6086,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "e1",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path:
                "blob:http://localhost:8002/cb165b6f-1ef7-4ed3-a738-045f98ad1e72",
              name: "ew1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ew1",
                  item_id: 6086,
                  sku_id: 23698,
                  food_id: 23725,
                  restaurant_id: 1,
                  _id: "5e01b173de911551beafb046",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 108,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 73,
              satisfy_count: 514,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 742,
              month_sales: 798,
              description: "e1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e01c15718adbf20d9cbff84",
              tips: "527评价 月售407份",
              item_id: 6107,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "e"
              },
              image_path:
                "blob:http://localhost:8002/b6d4076d-9467-4818-8eb1-e412b64c9bbb",
              name: "ee",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ee",
                  item_id: 6107,
                  sku_id: 23702,
                  food_id: 23729,
                  restaurant_id: 1,
                  _id: "5e01c15718adbf20d9cbff85",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 373,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 73,
              satisfy_count: 847,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:29:46.548Z",
              specifications: [],
              rating_count: 527,
              month_sales: 407,
              description: "e",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e01c635f58062216abea792",
              tips: "741评价 月售440份",
              item_id: 6111,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "dd",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170a90adb5664655.jpg",
              name: "dsd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "dsd",
                  item_id: 6111,
                  sku_id: 24505,
                  food_id: 24532,
                  restaurant_id: 1,
                  _id: "5e6085e8942e5767f50a2907",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 111,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 35,
              satisfy_count: 87,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [],
              rating_count: 741,
              month_sales: 440,
              description: "d",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e0473708f58e17456767dcf",
              tips: "771评价 月售739份",
              item_id: 6138,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "没得活动"
              },
              image_path: "16f4162bb0262234.jpg",
              name: "长沙喜茶",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "长沙喜茶",
                  item_id: 6138,
                  sku_id: 23881,
                  food_id: 23908,
                  restaurant_id: 1,
                  _id: "5e0961c16901211bf3ad7c9a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 538,
                  sold_out: false,
                  price: 200,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 83,
              satisfy_count: 202,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-26T08:30:52.612Z",
              specifications: [],
              rating_count: 771,
              month_sales: 739,
              description: "味道好寂寥",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e0574227f4f8e7628d7f0f6",
              tips: "255评价 月售571份",
              item_id: 6140,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "12",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f454da7fc62267.jpg",
              name: "222",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "222",
                  item_id: 6140,
                  sku_id: 23835,
                  food_id: 23862,
                  restaurant_id: 1,
                  _id: "5e05b0426901211bf3ad722e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 506,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 55,
              satisfy_count: 779,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-26T09:00:58.100Z",
              specifications: [],
              rating_count: 255,
              month_sales: 571,
              description: "12",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e05b0686901211bf3ad722f",
              tips: "49评价 月售390份",
              item_id: 6146,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "111"
              },
              image_path: "16f4637c1ec62295.jpg",
              name: "ergre",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ergre",
                  item_id: 6146,
                  sku_id: 23850,
                  food_id: 23877,
                  restaurant_id: 1,
                  _id: "5e05e9506901211bf3ad77b0",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e05e9506901211bf3ad77b1"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 436,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111",
                  name: "ergre",
                  item_id: 6146,
                  sku_id: 23851,
                  food_id: 23878,
                  restaurant_id: 1,
                  _id: "5e05e9506901211bf3ad77ae",
                  specs: [
                    {
                      name: "规格",
                      value: "111",
                      _id: "5e05e9506901211bf3ad77af"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 310,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "ergre",
                  item_id: 6146,
                  sku_id: 23852,
                  food_id: 23879,
                  restaurant_id: 1,
                  _id: "5e05e9506901211bf3ad77ac",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e05e9506901211bf3ad77ad"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 493,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "ergre",
                  item_id: 6146,
                  sku_id: 23853,
                  food_id: 23880,
                  restaurant_id: 1,
                  _id: "5e05e9506901211bf3ad77aa",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e05e9506901211bf3ad77ab"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 961,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "儿童团",
                  name: "ergre",
                  item_id: 6146,
                  sku_id: 23854,
                  food_id: 23881,
                  restaurant_id: 1,
                  _id: "5e05e9506901211bf3ad77a8",
                  specs: [
                    {
                      name: "规格",
                      value: "儿童团",
                      _id: "5e05e9506901211bf3ad77a9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 81,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "ergre",
                  item_id: 6146,
                  sku_id: 23855,
                  food_id: 23882,
                  restaurant_id: 1,
                  _id: "5e05e9506901211bf3ad77a6",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e05e9506901211bf3ad77a7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 414,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 22,
              satisfy_count: 993,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "111", "", "", "儿童团", ""]
                }
              ],
              rating_count: 49,
              month_sales: 390,
              description: "111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e05d7716901211bf3ad775b",
              tips: "104评价 月售828份",
              item_id: 6147,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "123",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f456501c462271.jpg",
              name: "12",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "12",
                  item_id: 6147,
                  sku_id: 23848,
                  food_id: 23875,
                  restaurant_id: 1,
                  _id: "5e05d7716901211bf3ad775c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 232,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 62,
              satisfy_count: 586,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 104,
              month_sales: 828,
              description: "12",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e05e8e06901211bf3ad7798",
              tips: "932评价 月售232份",
              item_id: 6148,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "阿斯蒂芬"
              },
              image_path: "16f4715b31662323.png",
              name: "生活",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "生活",
                  item_id: 6148,
                  sku_id: 23858,
                  food_id: 23885,
                  restaurant_id: 1,
                  _id: "5e05f3866901211bf3ad77d6",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 124,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 56,
              satisfy_count: 234,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 932,
              month_sales: 232,
              description: "食品",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e0896666901211bf3ad7a34",
              tips: "156评价 月售438份",
              item_id: 6152,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "广轻特惠",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f518b501662356.jpg",
              name: "麻辣烫",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "麻辣烫",
                  item_id: 6152,
                  sku_id: 23871,
                  food_id: 23898,
                  restaurant_id: 1,
                  _id: "5e0896666901211bf3ad7a35",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 503,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 46,
              satisfy_count: 754,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 156,
              month_sales: 438,
              description: "一饭二",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e0b14e76901211bf3ad8027",
              tips: "281评价 月售56份",
              item_id: 6164,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "16f5b440c1b62438.jpg",
              name: "sadf",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "sadf",
                  item_id: 6164,
                  sku_id: 23896,
                  food_id: 23923,
                  restaurant_id: 1,
                  _id: "5e0b14e76901211bf3ad8028",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 9,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 31,
              satisfy_count: 706,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 281,
              month_sales: 56,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e0f0a7c6901211bf3ad84aa",
              tips: "137评价 月售593份",
              item_id: 6177,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "1233"
              },
              image_path: "16f6ac0e4ac62500.png",
              name: "test",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "test",
                  item_id: 6177,
                  sku_id: 23922,
                  food_id: 23949,
                  restaurant_id: 1,
                  _id: "5e0f0a7c6901211bf3ad84ab",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 272,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 94,
              satisfy_count: 155,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 137,
              month_sales: 593,
              description: "313",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e0f0a986901211bf3ad84ac",
              tips: "299评价 月售348份",
              item_id: 6178,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "2",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f6ac15f0d62501.png",
              name: "test33444",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "test33444",
                  item_id: 6178,
                  sku_id: 24013,
                  food_id: 24040,
                  restaurant_id: 1,
                  _id: "5e1596816901211bf3ad964a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 536,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 79,
              satisfy_count: 22,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 299,
              month_sales: 348,
              description: "555",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e10b15d6901211bf3ad867e",
              tips: "524评价 月售435份",
              item_id: 6183,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "VCxvxc",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f7134d5ea62526.jpg",
              name: "123123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123123",
                  item_id: 6183,
                  sku_id: 23979,
                  food_id: 24006,
                  restaurant_id: 1,
                  _id: "5e1483bc6901211bf3ad91c5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 665,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 92,
              satisfy_count: 104,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 524,
              month_sales: 435,
              description: "vcx",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e11b1da6901211bf3ad87d0",
              tips: "320评价 月售454份",
              item_id: 6184,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "asxsaxs"
              },
              image_path: "16f751eca3262534.png",
              name: "aa",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "aa",
                  item_id: 6184,
                  sku_id: 23943,
                  food_id: 23970,
                  restaurant_id: 1,
                  _id: "5e12a55b6901211bf3ad895a",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e12a55b6901211bf3ad895b"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 390,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "12",
                  name: "aa",
                  item_id: 6184,
                  sku_id: 23944,
                  food_id: 23971,
                  restaurant_id: 1,
                  _id: "5e12a55b6901211bf3ad8958",
                  specs: [
                    {
                      name: "规格",
                      value: "12",
                      _id: "5e12a55b6901211bf3ad8959"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 630,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 68,
              satisfy_count: 647,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "12"]
                }
              ],
              rating_count: 320,
              month_sales: 454,
              description: "aa",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e1573756901211bf3ad9490",
              tips: "690评价 月售588份",
              item_id: 6193,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "食品活动"
              },
              image_path: "16f83b8449762710.jpg",
              name: "kou食品名称fdsafdsafdasfdsafdsadfasdfas",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "kou食品名称fdsafdsafdasfdsafdsadfasdfas",
                  item_id: 6193,
                  sku_id: 24037,
                  food_id: 24064,
                  restaurant_id: 1,
                  _id: "5e1701506901211bf3ad9dc8",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 774,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 98,
              satisfy_count: 911,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 690,
              month_sales: 588,
              description: "食品详情",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e1700ea6901211bf3ad9dbd",
              tips: "197评价 月售311份",
              item_id: 6202,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "333",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f89db843662803.png",
              name: "斯蒂芬斯蒂芬",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "斯蒂芬斯蒂芬",
                  item_id: 6202,
                  sku_id: 24245,
                  food_id: 24272,
                  restaurant_id: 1,
                  _id: "5e3ab10ec9a05328e6622204",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e3ab10ec9a05328e6622205"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 943,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "20",
                  name: "斯蒂芬斯蒂芬",
                  item_id: 6202,
                  sku_id: 24246,
                  food_id: 24273,
                  restaurant_id: 1,
                  _id: "5e3ab10ec9a05328e6622202",
                  specs: [
                    {
                      name: "规格",
                      value: "20",
                      _id: "5e3ab10ec9a05328e6622203"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 453,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 608,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "20"]
                }
              ],
              rating_count: 197,
              month_sales: 311,
              description: "333",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e14650a6901211bf3ad915c",
              tips: "278评价 月售508份",
              item_id: 6189,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "wer"
              },
              image_path: "16f7faaa98c62668.jpg",
              name: "ewrwgadsffdasfdasfdasdfasf",
              __v: 0,
              specfoods: [
                {
                  specs_name: "1",
                  name: "ewrwgadsffdasfdasfdasdfasf",
                  item_id: 6189,
                  sku_id: 24035,
                  food_id: 24062,
                  restaurant_id: 1,
                  _id: "5e1701426901211bf3ad9dc5",
                  specs: [
                    {
                      name: "规格",
                      value: "1",
                      _id: "5e1701426901211bf3ad9dc6"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 568,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "fdsafdas",
                  name: "ewrwgadsffdasfdasfdasdfasf",
                  item_id: 6189,
                  sku_id: 24036,
                  food_id: 24063,
                  restaurant_id: 1,
                  _id: "5e1701426901211bf3ad9dc3",
                  specs: [
                    {
                      name: "规格",
                      value: "fdsafdas",
                      _id: "5e1701426901211bf3ad9dc4"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 60,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 52,
              satisfy_count: 996,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["1", "fdsafdas"]
                }
              ],
              rating_count: 278,
              month_sales: 508,
              description: "折扣更优惠",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e1702346901211bf3ad9dc9",
              tips: "940评价 月售865份",
              item_id: 6203,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "4321432"
              },
              image_path: "16f89e0a5bf62804.png",
              name: "4321423",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "4321423",
                  item_id: 6203,
                  sku_id: 24038,
                  food_id: 24065,
                  restaurant_id: 1,
                  _id: "5e1702346901211bf3ad9dca",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 754,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 78,
              satisfy_count: 258,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                },
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 940,
              month_sales: 865,
              description: "412343214",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e202b2e0236b14725d392e4",
              tips: "516评价 月售125份",
              item_id: 6228,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "16fada8a65a63159.jpg",
              name: "让他 ",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "让他 ",
                  item_id: 6228,
                  sku_id: 24101,
                  food_id: 24128,
                  restaurant_id: 1,
                  _id: "5e202b2e0236b14725d392e5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 716,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 16,
              satisfy_count: 601,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 516,
              month_sales: 125,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e202ba30236b14725d392e6",
              tips: "217评价 月售858份",
              item_id: 6229,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "16fadaa723d63160.jpg",
              name: "以后",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "以后",
                  item_id: 6229,
                  sku_id: 24102,
                  food_id: 24129,
                  restaurant_id: 1,
                  _id: "5e202ba30236b14725d392e7",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 479,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 94,
              satisfy_count: 646,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 217,
              month_sales: 858,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e202c240236b14725d39300",
              tips: "242评价 月售282份",
              item_id: 6230,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "re"
              },
              image_path: "16fadac837063161.jpg",
              name: "二额",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "二额",
                  item_id: 6230,
                  sku_id: 24103,
                  food_id: 24130,
                  restaurant_id: 1,
                  _id: "5e202c240236b14725d39301",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 934,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 20,
              satisfy_count: 245,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 242,
              month_sales: 282,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e204adf0236b14725d39373",
              tips: "993评价 月售485份",
              item_id: 6272,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "规划规范的大概花费",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16fae24753e63187.jpg",
              name: "和官方电话发gh",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "和官方电话发gh",
                  item_id: 6272,
                  sku_id: 24109,
                  food_id: 24136,
                  restaurant_id: 1,
                  _id: "5e204adf0236b14725d39374",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 967,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 4.2,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 417,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 993,
              month_sales: 485,
              description: "过分的话大锅饭h",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e204c3c0236b14725d39375",
              tips: "758评价 月售397份",
              item_id: 6273,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "大师傅"
              },
              image_path: "16fae29d26563189.jpg",
              name: "阿斯蒂芬",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "阿斯蒂芬",
                  item_id: 6273,
                  sku_id: 24153,
                  food_id: 24180,
                  restaurant_id: 1,
                  _id: "5e26aa6ddb7fe12148568db1",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e26aa6ddb7fe12148568db2"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 935,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "2",
                  name: "阿斯蒂芬",
                  item_id: 6273,
                  sku_id: 24154,
                  food_id: 24181,
                  restaurant_id: 1,
                  _id: "5e26aa6ddb7fe12148568daf",
                  specs: [
                    {
                      name: "规格",
                      value: "2",
                      _id: "5e26aa6ddb7fe12148568db0"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 791,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "123",
                  name: "阿斯蒂芬",
                  item_id: 6273,
                  sku_id: 24155,
                  food_id: 24182,
                  restaurant_id: 1,
                  _id: "5e26aa6ddb7fe12148568dad",
                  specs: [
                    {
                      name: "规格",
                      value: "123",
                      _id: "5e26aa6ddb7fe12148568dae"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 694,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 11,
              satisfy_count: 518,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "2", "123"]
                }
              ],
              rating_count: 758,
              month_sales: 397,
              description: "第三方",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e2438e80236b14725d39b06",
              tips: "351评价 月售256份",
              item_id: 6283,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "16fbd7e4f5863329.jpg",
              name: "addddd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "addddd",
                  item_id: 6283,
                  sku_id: 24174,
                  food_id: 24201,
                  restaurant_id: 1,
                  _id: "5e2d6aabdb7fe12148569553",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 981,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 43,
              satisfy_count: 568,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 351,
              month_sales: 256,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e2438f40236b14725d39b08",
              tips: "748评价 月售963份",
              item_id: 6284,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "16fbd7e977663330.jpg",
              name: "uuuuu",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "uuuuu",
                  item_id: 6284,
                  sku_id: 24187,
                  food_id: 24214,
                  restaurant_id: 1,
                  _id: "5e3030d7db7fe12148569ad6",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e3030d7db7fe12148569ad7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 152,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "uuuuu",
                  item_id: 6284,
                  sku_id: 24188,
                  food_id: 24215,
                  restaurant_id: 1,
                  _id: "5e3030d7db7fe12148569ad4",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e3030d7db7fe12148569ad5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 882,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 17,
              satisfy_count: 688,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", ""]
                }
              ],
              rating_count: 748,
              month_sales: 963,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e2aac97db7fe1214856924d",
              tips: "34评价 月售882份",
              item_id: 6295,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "16fd6b24f9063408.jpg",
              name: "1231",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1231",
                  item_id: 6295,
                  sku_id: 24163,
                  food_id: 24190,
                  restaurant_id: 1,
                  _id: "5e2aac97db7fe1214856924e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 105,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 98,
              satisfy_count: 814,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [],
              rating_count: 34,
              month_sales: 882,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e2eb38ddb7fe12148569628",
              tips: "908评价 月售963份",
              item_id: 6297,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "16fe66d627d63420.jpg",
              name: "00001233",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "00001233",
                  item_id: 6297,
                  sku_id: 24180,
                  food_id: 24207,
                  restaurant_id: 1,
                  _id: "5e2fad8adb7fe121485698d6",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 30,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 100,
              satisfy_count: 30,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [],
              rating_count: 908,
              month_sales: 963,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e34537adb7fe1214856a278",
              tips: "265评价 月售904份",
              item_id: 6302,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "热卖中",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16ffc65f7b263485.jpg",
              name: "狗不理包子",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "狗不理包子",
                  item_id: 6302,
                  sku_id: 24205,
                  food_id: 24232,
                  restaurant_id: 1,
                  _id: "5e367a45db7fe1214856a469",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e367a45db7fe1214856a46a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 463,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "99",
                  name: "狗不理包子",
                  item_id: 6302,
                  sku_id: 24206,
                  food_id: 24233,
                  restaurant_id: 1,
                  _id: "5e367a45db7fe1214856a467",
                  specs: [
                    {
                      name: "规格",
                      value: "99",
                      _id: "5e367a45db7fe1214856a468"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 592,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 0.1,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 10,
              satisfy_count: 336,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [
                {
                  values: ["默认", "99"],
                  name: "规格"
                }
              ],
              rating_count: 265,
              month_sales: 904,
              description: "棒棒棒的",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e4fd8fc156c7477e1baf5a4",
              tips: "685评价 月售111份",
              item_id: 6359,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "吐了吐了"
              },
              image_path: "17067e76b7f64030.png",
              name: "吐了4",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "吐了4",
                  item_id: 6359,
                  sku_id: 24365,
                  food_id: 24392,
                  restaurant_id: 1,
                  _id: "5e5298d74f6c5c2594489bb9",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 951,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 82,
              satisfy_count: 936,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-21T05:41:05.200Z",
              specifications: [],
              rating_count: 685,
              month_sales: 111,
              description: "吐了",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e552e57942e5767f50a08b6",
              tips: "797评价 月售635份",
              item_id: 6370,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "视频活动",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1707cbd273464304.jpg",
              name: "视频名称",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "视频名称",
                  item_id: 6370,
                  sku_id: 24655,
                  food_id: 24682,
                  restaurant_id: 1,
                  _id: "5e7319ce07e5ca4f7d1d8b8b",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 379,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 30,
              satisfy_count: 620,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 797,
              month_sales: 635,
              description: "食品详情",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e58c11c942e5767f50a1445",
              tips: "461评价 月售413份",
              item_id: 6380,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "111",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1708ab25f2964429.png",
              name: "111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6380,
                  sku_id: 24450,
                  food_id: 24477,
                  restaurant_id: 1,
                  _id: "5e58c11c942e5767f50a1446",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 334,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 53,
              satisfy_count: 881,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 461,
              month_sales: 413,
              description: "111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e5ba6cc942e5767f50a1c4f",
              tips: "507评价 月售593份",
              item_id: 6390,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "11"
              },
              image_path: "1709603adc764485.png",
              name: "111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6390,
                  sku_id: 24462,
                  food_id: 24489,
                  restaurant_id: 1,
                  _id: "5e5ba6cc942e5767f50a1c50",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 99,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 973,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 507,
              month_sales: 593,
              description: "11",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e5f2e5b942e5767f50a2454",
              tips: "186评价 月售753份",
              item_id: 6399,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "170a3d645a764585.jpg",
              name: "jjjj",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "jjjj",
                  item_id: 6399,
                  sku_id: 24480,
                  food_id: 24507,
                  restaurant_id: 1,
                  _id: "5e5f30b5942e5767f50a2487",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 553,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 91,
              satisfy_count: 419,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 186,
              month_sales: 753,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e5f62de942e5767f50a2600",
              tips: "258评价 月售425份",
              item_id: 6404,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "170a49a4fdd64609.jpg",
              name: "papapa",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "papapa",
                  item_id: 6404,
                  sku_id: 24496,
                  food_id: 24523,
                  restaurant_id: 1,
                  _id: "5e5fc86b942e5767f50a2813",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 846,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 42,
              satisfy_count: 788,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 258,
              month_sales: 425,
              description: "hahaha",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e5f6406942e5767f50a2603",
              tips: "16评价 月售812份",
              item_id: 6405,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "170a49ed96164610.jpg",
              name: "鸡柳",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "鸡柳",
                  item_id: 6405,
                  sku_id: 24488,
                  food_id: 24515,
                  restaurant_id: 1,
                  _id: "5e5f6406942e5767f50a2604",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 281,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 52,
              satisfy_count: 265,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 16,
              month_sales: 812,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e68c9bd942e5767f50a3e70",
              tips: "718评价 月售125份",
              item_id: 6431,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "突突突突突突拖拖拖拖拖拖"
              },
              image_path: "170c954120964874.jpg",
              name: "突突突突突突拖拖拖拖拖",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "突突突突突突拖拖拖拖拖",
                  item_id: 6431,
                  sku_id: 24580,
                  food_id: 24607,
                  restaurant_id: 1,
                  _id: "5e690161942e5767f50a3f3a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 730,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 70,
              satisfy_count: 997,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 718,
              month_sales: 125,
              description: "突突突突突突拖拖拖拖拖拖",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e69040d942e5767f50a3f44",
              tips: "665评价 月售133份",
              item_id: 6433,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "1",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170ce535af964898.jpg",
              name: "111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6433,
                  sku_id: 24594,
                  food_id: 24621,
                  restaurant_id: 1,
                  _id: "5e6a113f942e5767f50a4206",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e6a113f942e5767f50a4207"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 644,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "11",
                  name: "111",
                  item_id: 6433,
                  sku_id: 24595,
                  food_id: 24622,
                  restaurant_id: 1,
                  _id: "5e6a113f942e5767f50a4204",
                  specs: [
                    {
                      name: "规格",
                      value: "11",
                      _id: "5e6a113f942e5767f50a4205"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 830,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 60,
              satisfy_count: 335,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [
                {
                  values: ["默认", "11"],
                  name: "规格"
                }
              ],
              rating_count: 665,
              month_sales: 133,
              description: "1222",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e6f262607e5ca4f7d1d7fae",
              tips: "344评价 月售595份",
              item_id: 6447,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "1",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170e22d277265020.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6447,
                  sku_id: 24623,
                  food_id: 24650,
                  restaurant_id: 1,
                  _id: "5e6f262607e5ca4f7d1d7faf",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 650,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 217,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 344,
              month_sales: 595,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e6f2bac07e5ca4f7d1d8022",
              tips: "267评价 月售494份",
              item_id: 6449,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "小黄鱼节"
              },
              image_path: "170e242670365029.png",
              name: "油炸小黄鱼",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "油炸小黄鱼",
                  item_id: 6449,
                  sku_id: 24625,
                  food_id: 24652,
                  restaurant_id: 1,
                  _id: "5e6f2bac07e5ca4f7d1d8023",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 85,
                  sold_out: false,
                  price: 18.9,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 52,
              satisfy_count: 272,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 267,
              month_sales: 494,
              description: "油炸小黄鱼",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e6f30ff07e5ca4f7d1d8083",
              tips: "192评价 月售201份",
              item_id: 6450,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "AAA",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170e25767c365030.png",
              name: "AAA1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "AAA1",
                  item_id: 6450,
                  sku_id: 24636,
                  food_id: 24663,
                  restaurant_id: 1,
                  _id: "5e70846407e5ca4f7d1d845f",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 194,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 14,
              satisfy_count: 388,
              attributes: [],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 192,
              month_sales: 201,
              description: "AA",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e01a661de911551beafaf19",
              tips: "234评价 月售975份",
              item_id: 6077,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "额外e"
              },
              image_path: "16f3671feb262054.jpg",
              name: "呃额1额",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "呃额1额",
                  item_id: 6077,
                  sku_id: 24681,
                  food_id: 24708,
                  restaurant_id: 1,
                  _id: "5e743a8507e5ca4f7d1d8e52",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 930,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 15,
              satisfy_count: 575,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 234,
              month_sales: 975,
              description: "12呃",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e758da307e5ca4f7d1d9125",
              tips: "497评价 月售907份",
              item_id: 6468,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "asdf"
              },
              image_path: "170fb315f6765214.jpg",
              name: "1234455",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1234455",
                  item_id: 6468,
                  sku_id: 24751,
                  food_id: 24778,
                  restaurant_id: 1,
                  _id: "5e7974b06c41e733f7bd6e4e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7974b06c41e733f7bd6e4f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 725,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "2341",
                  name: "1234455",
                  item_id: 6468,
                  sku_id: 24752,
                  food_id: 24779,
                  restaurant_id: 1,
                  _id: "5e7974b06c41e733f7bd6e4c",
                  specs: [
                    {
                      name: "规格",
                      value: "2341",
                      _id: "5e7974b06c41e733f7bd6e4d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 453,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 46,
              satisfy_count: 493,
              attributes: [],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "2341"]
                }
              ],
              rating_count: 497,
              month_sales: 907,
              description: "asdf",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e855a29dd5b8d23f1495f62",
              tips: "979评价 月售80份",
              item_id: 6507,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "22",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17138e7b91f65682.jpg",
              name: "22",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "22",
                  item_id: 6507,
                  sku_id: 24838,
                  food_id: 24865,
                  restaurant_id: 1,
                  _id: "5e85b1f9dd5b8d23f149627c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 692,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 27,
              satisfy_count: 166,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [],
              rating_count: 979,
              month_sales: 80,
              description: "12",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e8aedacc5780f6b716813f9",
              tips: "412评价 月售842份",
              item_id: 6521,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "www"
              },
              image_path: "1714eb04db665842.jpg",
              name: "wqqq",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "wqqq",
                  item_id: 6521,
                  sku_id: 24879,
                  food_id: 24906,
                  restaurant_id: 1,
                  _id: "5e8aff02c5780f6b71681458",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e8aff02c5780f6b71681459"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 759,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "sdf ",
                  name: "wqqq",
                  item_id: 6521,
                  sku_id: 24880,
                  food_id: 24907,
                  restaurant_id: 1,
                  _id: "5e8aff02c5780f6b71681456",
                  specs: [
                    {
                      name: "规格",
                      value: "sdf ",
                      _id: "5e8aff02c5780f6b71681457"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 275,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 2,
              satisfy_count: 548,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-05T09:22:18.354Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "sdf "]
                }
              ],
              rating_count: 412,
              month_sales: 842,
              description: "www",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e8d7dae0edd5f2f3159f4c6",
              tips: "697评价 月售363份",
              item_id: 6532,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "888888",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17158b2f51e65950.jpg",
              name: "849",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "849",
                  item_id: 6532,
                  sku_id: 24892,
                  food_id: 24919,
                  restaurant_id: 1,
                  _id: "5e8d7dae0edd5f2f3159f4c7",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 107,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 56,
              satisfy_count: 919,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-07T14:25:45.429Z",
              specifications: [],
              rating_count: 697,
              month_sales: 363,
              description: "88888888",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e8ee3c7398a14620f21b4d5",
              tips: "219评价 月售62份",
              item_id: 6543,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "232"
              },
              image_path: "1715e2962e565995.jpg",
              name: "3434",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "3434",
                  item_id: 6543,
                  sku_id: 24911,
                  food_id: 24938,
                  restaurant_id: 1,
                  _id: "5e8ee3c7398a14620f21b4d6",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 614,
                  sold_out: false,
                  price: 19,
                  promotion_stock: -1,
                  recent_rating: 1.2,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 6,
              satisfy_count: 504,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-08T13:44:34.092Z",
              specifications: [],
              rating_count: 219,
              month_sales: 62,
              description: "2323",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e9509b24be518044d5ee1b6",
              tips: "819评价 月售948份",
              item_id: 6559,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "111",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "171762de83666143.jpg",
              name: "哈哈哈这是厉害的",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "哈哈哈这是厉害的",
                  item_id: 6559,
                  sku_id: 24932,
                  food_id: 24959,
                  restaurant_id: 1,
                  _id: "5e9509b24be518044d5ee1b7",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 422,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 81,
              satisfy_count: 591,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-10T16:30:35.039Z",
              specifications: [],
              rating_count: 819,
              month_sales: 948,
              description: "1111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e9eaba378a583389c883fb6",
              tips: "725评价 月售248份",
              item_id: 6571,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "1719bce8e6d66467.jpg",
              name: "7789",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "7789",
                  item_id: 6571,
                  sku_id: 24956,
                  food_id: 24983,
                  restaurant_id: 1,
                  _id: "5e9eaba378a583389c883fb7",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 190,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 40,
              satisfy_count: 309,
              attributes: [],
              is_essential: false,
              server_utc: "2020-04-18T12:58:25.260Z",
              specifications: [],
              rating_count: 725,
              month_sales: 248,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5eaeb43b7653d21ef58c162b",
              tips: "316评价 月售467份",
              item_id: 6603,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "111",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "171da700ea966822.jpeg",
              name: "掠影浮光",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "掠影浮光",
                  item_id: 6603,
                  sku_id: 25097,
                  food_id: 25124,
                  restaurant_id: 1,
                  _id: "5eb6283681d8b2675d1cf051",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5eb6283681d8b2675d1cf052"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 161,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111",
                  name: "掠影浮光",
                  item_id: 6603,
                  sku_id: 25098,
                  food_id: 25125,
                  restaurant_id: 1,
                  _id: "5eb6283681d8b2675d1cf04f",
                  specs: [
                    {
                      name: "规格",
                      value: "111",
                      _id: "5eb6283681d8b2675d1cf050"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 126,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "阿萨德",
                  name: "掠影浮光",
                  item_id: 6603,
                  sku_id: 25099,
                  food_id: 25126,
                  restaurant_id: 1,
                  _id: "5eb6283681d8b2675d1cf04d",
                  specs: [
                    {
                      name: "规格",
                      value: "阿萨德",
                      _id: "5eb6283681d8b2675d1cf04e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 947,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 61,
              satisfy_count: 544,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-26T11:19:50.406Z",
              specifications: [
                {
                  values: ["默认", "111", "阿萨德"],
                  name: "规格"
                }
              ],
              rating_count: 316,
              month_sales: 467,
              description: "时装",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5eccdd21c2a22c2993e4e0eb",
              tips: "147评价 月售904份",
              item_id: 6636,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "172503fa24d67383.jpg",
              name: "香辣鸡翅",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "香辣鸡翅",
                  item_id: 6636,
                  sku_id: 25233,
                  food_id: 25260,
                  restaurant_id: 1,
                  _id: "5ed46bd111943c38555c01ee",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 267,
                  sold_out: false,
                  price: 10,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 15,
              satisfy_count: 598,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-26T02:45:36.559Z",
              specifications: [],
              rating_count: 147,
              month_sales: 904,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5ecf7c9dc2a22c2993e4eb72",
              tips: "40评价 月售337份",
              item_id: 6641,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "2",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1725a7ecac967451.png",
              name: "22",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "22",
                  item_id: 6641,
                  sku_id: 25220,
                  food_id: 25247,
                  restaurant_id: 1,
                  _id: "5ecfb298c2a22c2993e4ec37",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 810,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 9,
              satisfy_count: 884,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-26T02:45:36.559Z",
              specifications: [],
              rating_count: 40,
              month_sales: 337,
              description: "22222",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5edf08f94133f0644a9a7566",
              tips: "217评价 月售825份",
              item_id: 6688,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "172973addef67870.jpg",
              name: "test111111111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "test111111111",
                  item_id: 6688,
                  sku_id: 25378,
                  food_id: 25405,
                  restaurant_id: 1,
                  _id: "5edf2d344133f0644a9a75e4",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 747,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 84,
              satisfy_count: 513,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [],
              rating_count: 217,
              month_sales: 825,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5eeb3c11dd7bf64dcd34ed6d",
              tips: "816评价 月售37份",
              item_id: 6711,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "172c6e29fbc68277.png",
              name: "啊啊啊啊啊啊",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "啊啊啊啊啊啊",
                  item_id: 6711,
                  sku_id: 25426,
                  food_id: 25453,
                  restaurant_id: 1,
                  _id: "5eeb3c11dd7bf64dcd34ed6e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 98,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 71,
              satisfy_count: 706,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-16T08:34:52.006Z",
              specifications: [],
              rating_count: 816,
              month_sales: 37,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5eec914929f2e165e11a1b8d",
              tips: "607评价 月售999份",
              item_id: 6713,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "456"
              },
              image_path: "172cc1647f768486.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6713,
                  sku_id: 25443,
                  food_id: 25470,
                  restaurant_id: 1,
                  _id: "5ef0554d29f2e165e11a246d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 522,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 88,
              satisfy_count: 233,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-19T09:53:12.204Z",
              specifications: [],
              rating_count: 607,
              month_sales: 999,
              description: "563",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5ef315d529f2e165e11a329d",
              tips: "782评价 月售802份",
              item_id: 6722,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "买3赠一"
              },
              image_path: "1730994fa6c69121.jpg",
              name: "20hanbao",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "20hanbao",
                  item_id: 6722,
                  sku_id: 25596,
                  food_id: 25623,
                  restaurant_id: 1,
                  _id: "5efc4f1296a3d461bd878e4e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5efc4f1296a3d461bd878e4f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 995,
                  sold_out: false,
                  price: 15,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "123",
                  name: "20hanbao",
                  item_id: 6722,
                  sku_id: 25597,
                  food_id: 25624,
                  restaurant_id: 1,
                  _id: "5efc4f1296a3d461bd878e4c",
                  specs: [
                    {
                      name: "规格",
                      value: "123",
                      _id: "5efc4f1296a3d461bd878e4d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 621,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "20hanbao",
                  item_id: 6722,
                  sku_id: 25598,
                  food_id: 25625,
                  restaurant_id: 1,
                  _id: "5efc4f1296a3d461bd878e4a",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5efc4f1296a3d461bd878e4b"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 654,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 15,
              satisfy_count: 203,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-19T09:53:12.204Z",
              specifications: [
                {
                  values: ["默认", "123", ""],
                  name: "规格"
                }
              ],
              rating_count: 782,
              month_sales: 802,
              description: "牛肉汉堡",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5ef9a817a6248b771743f965",
              tips: "503评价 月售870份",
              item_id: 6729,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "172ff8621bc68846.jpg",
              name: "珍珠奶茶",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "珍珠奶茶",
                  item_id: 6729,
                  sku_id: 25571,
                  food_id: 25598,
                  restaurant_id: 1,
                  _id: "5ef9bbf7a6248b771743f9e9",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 151,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 90,
              satisfy_count: 773,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-29T06:46:55.522Z",
              specifications: [],
              rating_count: 503,
              month_sales: 870,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5ef9a876a6248b771743f977",
              tips: "469评价 月售563份",
              item_id: 6730,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "111"
              },
              image_path: "172ff3a079768834.png",
              name: "珍珠奶茶",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "珍珠奶茶",
                  item_id: 6730,
                  sku_id: 25577,
                  food_id: 25604,
                  restaurant_id: 1,
                  _id: "5efad57ba6248b771743faca",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 404,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 7,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 49,
              satisfy_count: 848,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-29T06:46:55.522Z",
              specifications: [],
              rating_count: 469,
              month_sales: 563,
              description: "222",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5efaf9eaa6248b771743fb73",
              tips: "372评价 月售228份",
              item_id: 6733,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "士大夫",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "173045f179c69046.png",
              name: "萨法",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "萨法",
                  item_id: 6733,
                  sku_id: 25590,
                  food_id: 25617,
                  restaurant_id: 1,
                  _id: "5efb724396a3d461bd878c96",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 21,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 29,
              satisfy_count: 133,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-29T06:46:55.522Z",
              specifications: [],
              rating_count: 372,
              month_sales: 228,
              description: "发放",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5efc2dca96a3d461bd878d7d",
              tips: "209评价 月售814份",
              item_id: 6735,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "1730912d4df69101.png",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6735,
                  sku_id: 25593,
                  food_id: 25620,
                  restaurant_id: 1,
                  _id: "5efc2dca96a3d461bd878d7e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 111,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 91,
              satisfy_count: 608,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-30T08:41:05.483Z",
              specifications: [],
              rating_count: 209,
              month_sales: 814,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5f11623bd60f415455b4c6fe",
              tips: "787评价 月售492份",
              item_id: 6765,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "234242",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1735be79f9e69550.jpg",
              name: "134",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "134",
                  item_id: 6765,
                  sku_id: 25700,
                  food_id: 25727,
                  restaurant_id: 1,
                  _id: "5f11623bd60f415455b4c701",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5f11623bd60f415455b4c702"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 464,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "123",
                  name: "134",
                  item_id: 6765,
                  sku_id: 25701,
                  food_id: 25728,
                  restaurant_id: 1,
                  _id: "5f11623bd60f415455b4c6ff",
                  specs: [
                    {
                      name: "规格",
                      value: "123",
                      _id: "5f11623bd60f415455b4c700"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 500,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 72,
              satisfy_count: 926,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-14T06:47:36.360Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "123"]
                }
              ],
              rating_count: 787,
              month_sales: 492,
              description: "4242",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5f194ed0d60f415455b4d240",
              tips: "132评价 月售518份",
              item_id: 6779,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "w"
              },
              image_path: "1737adbd7eb69732.jpg",
              name: "wwww",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "wwww",
                  item_id: 6779,
                  sku_id: 25757,
                  food_id: 25784,
                  restaurant_id: 1,
                  _id: "5f194ed0d60f415455b4d241",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 525,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.7,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 90,
              satisfy_count: 900,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-14T06:47:36.360Z",
              specifications: [],
              rating_count: 132,
              month_sales: 518,
              description: "www",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5f194f12d60f415455b4d242",
              tips: "723评价 月售827份",
              item_id: 6780,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "1",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1737adcf72b69733.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6780,
                  sku_id: 25758,
                  food_id: 25785,
                  restaurant_id: 1,
                  _id: "5f194f12d60f415455b4d243",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 890,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.1,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 49,
              satisfy_count: 133,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-14T06:47:36.360Z",
              specifications: [],
              rating_count: 723,
              month_sales: 827,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5f226f13f3ffc74009e2951e",
              tips: "946评价 月售27份",
              item_id: 6801,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "111"
              },
              image_path: "1739e7f1a9670282.png",
              name: "111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6801,
                  sku_id: 25858,
                  food_id: 25885,
                  restaurant_id: 1,
                  _id: "5f226f13f3ffc74009e2951f",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 226,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 10,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 37,
              satisfy_count: 418,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-29T08:46:27.362Z",
              specifications: [],
              rating_count: 946,
              month_sales: 27,
              description: "1111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 247
        },
        {
          name: "折扣榜",
          description: "折扣更优惠",
          restaurant_id: 1,
          id: 9197,
          foods: [
            {
              _id: "5e003b30de911551beafa45e",
              tips: "759评价 月售461份",
              item_id: 6044,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "16f30e73f4761980.png",
              name: "而不",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "而不",
                  item_id: 6044,
                  sku_id: 24031,
                  food_id: 24058,
                  restaurant_id: 1,
                  _id: "5e16e30a6901211bf3ad9c60",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 327,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 3,
              satisfy_count: 533,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 759,
              month_sales: 461,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e007b40de911551beafa739",
              tips: "420评价 月售621份",
              item_id: 6047,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "16f31e190ff62003.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6047,
                  sku_id: 24375,
                  food_id: 24402,
                  restaurant_id: 1,
                  _id: "5e539808942e5767f50a037d",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e539808942e5767f50a037e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 217,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "dadfa",
                  name: "123",
                  item_id: 6047,
                  sku_id: 24376,
                  food_id: 24403,
                  restaurant_id: 1,
                  _id: "5e539808942e5767f50a037b",
                  specs: [
                    {
                      name: "规格",
                      value: "dadfa",
                      _id: "5e539808942e5767f50a037c"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 963,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 90,
              satisfy_count: 983,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  values: ["默认", "dadfa"],
                  name: "规格"
                }
              ],
              rating_count: 420,
              month_sales: 621,
              description: "adfad",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e0166b0de911551beafaa10",
              tips: "391评价 月售507份",
              item_id: 6049,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "带我去",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f35790f4462025.jpg",
              name: "动物的fgg",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "动物的fgg",
                  item_id: 6049,
                  sku_id: 23726,
                  food_id: 23753,
                  restaurant_id: 1,
                  _id: "5e02ca64f58062216abeb0ba",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 90,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 45,
              satisfy_count: 344,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 391,
              month_sales: 507,
              description: "打威群岛",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e01af8ede911551beafb00c",
              tips: "618评价 月售45份",
              item_id: 6084,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "我去饿",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path:
                "blob:http://localhost:8002/72a4fcdb-a797-41d7-92f1-79c80b3eb103",
              name: "我去恶趣味",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "我去恶趣味",
                  item_id: 6084,
                  sku_id: 24394,
                  food_id: 24421,
                  restaurant_id: 1,
                  _id: "5e54e4f8942e5767f50a071f",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e54e4f8942e5767f50a0720"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 907,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111111",
                  name: "我去恶趣味",
                  item_id: 6084,
                  sku_id: 24395,
                  food_id: 24422,
                  restaurant_id: 1,
                  _id: "5e54e4f8942e5767f50a071d",
                  specs: [
                    {
                      name: "规格",
                      value: "111111",
                      _id: "5e54e4f8942e5767f50a071e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 428,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 59,
              satisfy_count: 273,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  values: ["默认", "111111"],
                  name: "规格"
                }
              ],
              rating_count: 618,
              month_sales: 45,
              description: "请问",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e020111f58062216abeac46",
              tips: "204评价 月售24份",
              item_id: 6129,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "21"
              },
              image_path: "16f3b20f65162114.png",
              name: "1121",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1121",
                  item_id: 6129,
                  sku_id: 23744,
                  food_id: 23771,
                  restaurant_id: 1,
                  _id: "5e0312dbb007cd415b6b5f59",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e0312dbb007cd415b6b5f5a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 757,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.3,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "1121",
                  item_id: 6129,
                  sku_id: 23745,
                  food_id: 23772,
                  restaurant_id: 1,
                  _id: "5e0312dbb007cd415b6b5f57",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e0312dbb007cd415b6b5f58"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 539,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 4.1,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "qqqq",
                  name: "1121",
                  item_id: 6129,
                  sku_id: 23746,
                  food_id: 23773,
                  restaurant_id: 1,
                  _id: "5e0312dbb007cd415b6b5f55",
                  specs: [
                    {
                      name: "规格",
                      value: "qqqq",
                      _id: "5e0312dbb007cd415b6b5f56"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 542,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 44,
              satisfy_count: 309,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "", "qqqq"]
                }
              ],
              rating_count: 204,
              month_sales: 24,
              description: "121",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e01deaef58062216abeaa5e",
              tips: "444评价 月售577份",
              item_id: 6127,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "限时打1折"
              },
              image_path: "170a909657264653.jpg",
              name: "name",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "name",
                  item_id: 6127,
                  sku_id: 24502,
                  food_id: 24529,
                  restaurant_id: 1,
                  _id: "5e608572942e5767f50a2901",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 614,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 67,
              satisfy_count: 803,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [],
              rating_count: 444,
              month_sales: 577,
              description: "好吃不要钱",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e01b9f70c81a71f9cc5f008",
              tips: "540评价 月售188份",
              item_id: 6101,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "zxc",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path:
                "blob:http://localhost:8002/1b8161ae-98b8-4350-abb0-93a6d87d502a",
              name: "cxzcx",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "cxzcx",
                  item_id: 6101,
                  sku_id: 23764,
                  food_id: 23791,
                  restaurant_id: 1,
                  _id: "5e032839b007cd415b6b6014",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 287,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 91,
              satisfy_count: 16,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T06:58:03.912Z",
              specifications: [],
              rating_count: 540,
              month_sales: 188,
              description: "zcx",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e04239e07b4a769035f35aa",
              tips: "403评价 月售7份",
              item_id: 6136,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "域"
              },
              image_path: "16f402b0ed962185.jpg",
              name: "域",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "域",
                  item_id: 6136,
                  sku_id: 23791,
                  food_id: 23818,
                  restaurant_id: 1,
                  _id: "5e0426b407b4a769035f361b",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 908,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 719,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-26T03:02:33.545Z",
              specifications: [],
              rating_count: 403,
              month_sales: 7,
              description: "库",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e016674de911551beafaa0e",
              tips: "588评价 月售106份",
              item_id: 6048,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "额"
              },
              image_path: "16f35781be862024.jpg",
              name: "微软微软",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "微软微软",
                  item_id: 6048,
                  sku_id: 23893,
                  food_id: 23920,
                  restaurant_id: 1,
                  _id: "5e0aeb2e6901211bf3ad7fd0",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 307,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 99,
              satisfy_count: 937,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 588,
              month_sales: 106,
              description: "额外",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e0b11736901211bf3ad801b",
              tips: "618评价 月售849份",
              item_id: 6163,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "16f5b3c2ff962437.jpg",
              name: "1231",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1231",
                  item_id: 6163,
                  sku_id: 23905,
                  food_id: 23932,
                  restaurant_id: 1,
                  _id: "5e0c9f536901211bf3ad80da",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e0c9f536901211bf3ad80db"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 222,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "aaaaaaaaaa",
                  name: "1231",
                  item_id: 6163,
                  sku_id: 23906,
                  food_id: 23933,
                  restaurant_id: 1,
                  _id: "5e0c9f536901211bf3ad80d8",
                  specs: [
                    {
                      name: "规格",
                      value: "aaaaaaaaaa",
                      _id: "5e0c9f536901211bf3ad80d9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 486,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 71,
              satisfy_count: 524,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "aaaaaaaaaa"]
                }
              ],
              rating_count: 618,
              month_sales: 849,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e0d3ebd6901211bf3ad80f2",
              tips: "711评价 月售353份",
              item_id: 6167,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "111111111111",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f63bd152762454.jpg",
              name: "1111111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1111111",
                  item_id: 6167,
                  sku_id: 23911,
                  food_id: 23938,
                  restaurant_id: 1,
                  _id: "5e0da3386901211bf3ad8212",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 516,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 2.1,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 62,
              satisfy_count: 378,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 711,
              month_sales: 353,
              description: "11111111111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e16e9656901211bf3ad9cb8",
              tips: "563评价 月售152份",
              item_id: 6201,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "的"
              },
              image_path: "16f8e5d85dd62856.png",
              name: "是23+",
              __v: 0,
              specfoods: [
                {
                  specs_name: "23-",
                  name: "是23+",
                  item_id: 6201,
                  sku_id: 24063,
                  food_id: 24090,
                  restaurant_id: 1,
                  _id: "5e183ee86901211bf3ada3be",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 880,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 0.1,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 42,
              satisfy_count: 876,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 563,
              month_sales: 152,
              description: "的23-",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e204e4a0236b14725d39380",
              tips: "403评价 月售367份",
              item_id: 6276,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "大师傅"
              },
              image_path: "16fae31d92963192.jpg",
              name: "56456464",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "56456464",
                  item_id: 6276,
                  sku_id: 24160,
                  food_id: 24187,
                  restaurant_id: 1,
                  _id: "5e2818cedb7fe12148569086",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 451,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 49,
              satisfy_count: 487,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                },
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 403,
              month_sales: 367,
              description: "撒旦法",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e369e3adb7fe1214856a64e",
              tips: "932评价 月售768份",
              item_id: 6304,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1700587e5b163508.jpg",
              name: "114414",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "114414",
                  item_id: 6304,
                  sku_id: 24210,
                  food_id: 24237,
                  restaurant_id: 1,
                  _id: "5e36a9eedb7fe1214856a69d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 774,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 31,
              satisfy_count: 449,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [],
              rating_count: 932,
              month_sales: 768,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e4120f5eccd9c1bec9d6177",
              tips: "126评价 月售355份",
              item_id: 6331,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "1"
              },
              image_path: "1702e68d8a763717.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "tt",
                  name: "1",
                  item_id: 6331,
                  sku_id: 24263,
                  food_id: 24290,
                  restaurant_id: 1,
                  _id: "5e4163c0eccd9c1bec9d6213",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 631,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 42,
              satisfy_count: 540,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-06T12:31:15.380Z",
              specifications: [],
              rating_count: 126,
              month_sales: 355,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e421ddceccd9c1bec9d6286",
              tips: "888评价 月售306份",
              item_id: 6332,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "werwerewr",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170324486ec63721.jpg",
              name: "特",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "特",
                  item_id: 6332,
                  sku_id: 24271,
                  food_id: 24298,
                  restaurant_id: 1,
                  _id: "5e429dc7eccd9c1bec9d63fa",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e429dc7eccd9c1bec9d63fb"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 917,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "eee",
                  name: "特",
                  item_id: 6332,
                  sku_id: 24272,
                  food_id: 24299,
                  restaurant_id: 1,
                  _id: "5e429dc7eccd9c1bec9d63f8",
                  specs: [
                    {
                      name: "规格",
                      value: "eee",
                      _id: "5e429dc7eccd9c1bec9d63f9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 167,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 95,
              satisfy_count: 312,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-06T12:31:15.380Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "eee"]
                }
              ],
              rating_count: 888,
              month_sales: 306,
              description: "erwe",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e48d4b067c5596b4931613d",
              tips: "81评价 月售230份",
              item_id: 6347,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1704c7ed2ef63839.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6347,
                  sku_id: 24330,
                  food_id: 24357,
                  restaurant_id: 1,
                  _id: "5e5008bd156c7477e1baf637",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e5008bd156c7477e1baf638"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 737,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "hjlhjklhlkhjlk",
                  name: "1",
                  item_id: 6347,
                  sku_id: 24331,
                  food_id: 24358,
                  restaurant_id: 1,
                  _id: "5e5008bd156c7477e1baf635",
                  specs: [
                    {
                      name: "规格",
                      value: "hjlhjklhlkhjlk",
                      _id: "5e5008bd156c7477e1baf636"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 639,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 775,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-14T05:27:15.179Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "hjlhjklhlkhjlk"]
                }
              ],
              rating_count: 81,
              month_sales: 230,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e58e22e942e5767f50a160b",
              tips: "883评价 月售73份",
              item_id: 6385,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1708b337d6664458.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6385,
                  sku_id: 24456,
                  food_id: 24483,
                  restaurant_id: 1,
                  _id: "5e58e22e942e5767f50a160c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 131,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 23,
              satisfy_count: 925,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 883,
              month_sales: 73,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e68a699942e5767f50a3de2",
              tips: "477评价 月售11份",
              item_id: 6430,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "111",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170c8ca9b2464869.jpg",
              name: "111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6430,
                  sku_id: 24588,
                  food_id: 24615,
                  restaurant_id: 1,
                  _id: "5e690515942e5767f50a3f5e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e690515942e5767f50a3f5f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 565,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111",
                  name: "111",
                  item_id: 6430,
                  sku_id: 24589,
                  food_id: 24616,
                  restaurant_id: 1,
                  _id: "5e690515942e5767f50a3f5c",
                  specs: [
                    {
                      name: "规格",
                      value: "111",
                      _id: "5e690515942e5767f50a3f5d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 25,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 5,
              satisfy_count: 14,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [
                {
                  values: ["默认", "111"],
                  name: "规格"
                }
              ],
              rating_count: 477,
              month_sales: 11,
              description: "111222",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e6903e6942e5767f50a3f42",
              tips: "698评价 月售710份",
              item_id: 6432,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "66"
              },
              image_path: "170ca37598964877.jpg",
              name: "666",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "666",
                  item_id: 6432,
                  sku_id: 24581,
                  food_id: 24608,
                  restaurant_id: 1,
                  _id: "5e6903e6942e5767f50a3f43",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 511,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 26,
              satisfy_count: 605,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 698,
              month_sales: 710,
              description: "66",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e70492b07e5ca4f7d1d8369",
              tips: "573评价 月售606份",
              item_id: 6454,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "noActivity"
              },
              image_path: "170e69df26465061.png",
              name: "testGoods",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "testGoods",
                  item_id: 6454,
                  sku_id: 24634,
                  food_id: 24661,
                  restaurant_id: 1,
                  _id: "5e7074a607e5ca4f7d1d83fd",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7074a607e5ca4f7d1d83fe"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 706,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "12",
                  name: "testGoods",
                  item_id: 6454,
                  sku_id: 24635,
                  food_id: 24662,
                  restaurant_id: 1,
                  _id: "5e7074a607e5ca4f7d1d83fb",
                  specs: [
                    {
                      name: "规格",
                      value: "12",
                      _id: "5e7074a607e5ca4f7d1d83fc"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 620,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 39,
              satisfy_count: 858,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "12"]
                }
              ],
              rating_count: 573,
              month_sales: 606,
              description: "noDetail",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e77401407e5ca4f7d1d9507",
              tips: "123评价 月售189份",
              item_id: 6476,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "1"
              },
              image_path: "17101d1ec4a65245.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6476,
                  sku_id: 24703,
                  food_id: 24730,
                  restaurant_id: 1,
                  _id: "5e77401407e5ca4f7d1d9508",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 88,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.3,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 45,
              satisfy_count: 98,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 123,
              month_sales: 189,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e7982fd6c41e733f7bd6eb9",
              tips: "783评价 月售189份",
              item_id: 6482,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1710abe53b365317.png",
              name: "辣条",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "辣条",
                  item_id: 6482,
                  sku_id: 24786,
                  food_id: 24813,
                  restaurant_id: 1,
                  _id: "5e7b4698dd5b8d23f149450c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 872,
                  sold_out: false,
                  price: 18,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 17,
              satisfy_count: 871,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-23T03:37:58.008Z",
              specifications: [],
              rating_count: 783,
              month_sales: 189,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e798af56c41e733f7bd6efa",
              tips: "818评价 月售690份",
              item_id: 6483,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1710ac68bb065319.png",
              name: "好吃点",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "好吃点",
                  item_id: 6483,
                  sku_id: 24758,
                  food_id: 24785,
                  restaurant_id: 1,
                  _id: "5e798af56c41e733f7bd6efb",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 317,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 6,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 51,
              satisfy_count: 983,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-23T03:37:58.008Z",
              specifications: [],
              rating_count: 818,
              month_sales: 690,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e8439c8dd5b8d23f1495c8e",
              tips: "984评价 月售440份",
              item_id: 6506,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "fdsg",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1713481b12465655.jpeg",
              name: "sss",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "sss",
                  item_id: 6506,
                  sku_id: 24832,
                  food_id: 24859,
                  restaurant_id: 1,
                  _id: "5e855a88dd5b8d23f1495f67",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 775,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 90,
              satisfy_count: 48,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [],
              rating_count: 984,
              month_sales: 440,
              description: "fdsg",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5df9c8d87f5a6f2f4826edc9",
              tips: "916评价 月售868份",
              item_id: 6028,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "舒服的沙发"
              },
              image_path: "16f6549336262468.png",
              name: "232",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "232",
                  item_id: 6028,
                  sku_id: 25539,
                  food_id: 25566,
                  restaurant_id: 1,
                  _id: "5ef84753ac911d2310148376",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ef84753ac911d2310148377"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 224,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "232",
                  item_id: 6028,
                  sku_id: 25540,
                  food_id: 25567,
                  restaurant_id: 1,
                  _id: "5ef84753ac911d2310148374",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5ef84753ac911d2310148375"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 106,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 6,
              satisfy_count: 631,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [
                {
                  values: ["默认", ""],
                  name: "规格"
                }
              ],
              rating_count: 916,
              month_sales: 868,
              description: "合肥海关监管",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e855d8add5b8d23f1495f71",
              tips: "401评价 月售553份",
              item_id: 6508,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "1"
              },
              image_path: "1713f2a391465757.png",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6508,
                  sku_id: 24851,
                  food_id: 24878,
                  restaurant_id: 1,
                  _id: "5e86f440dd5b8d23f14966c7",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e86f440dd5b8d23f14966c8"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 968,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "啊实打实",
                  name: "1",
                  item_id: 6508,
                  sku_id: 24852,
                  food_id: 24879,
                  restaurant_id: 1,
                  _id: "5e86f440dd5b8d23f14966c5",
                  specs: [
                    {
                      name: "规格",
                      value: "啊实打实",
                      _id: "5e86f440dd5b8d23f14966c6"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 933,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 47,
              satisfy_count: 358,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [
                {
                  values: ["默认", "啊实打实"],
                  name: "规格"
                }
              ],
              rating_count: 401,
              month_sales: 553,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e8d2c4e0edd5f2f3159f2e5",
              tips: "31评价 月售545份",
              item_id: 6527,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "12"
              },
              image_path: "171577515f065925.png",
              name: "121",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "121",
                  item_id: 6527,
                  sku_id: 24908,
                  food_id: 24935,
                  restaurant_id: 1,
                  _id: "5e8eced2398a14620f21b49f",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 20,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 6,
              satisfy_count: 814,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-07T14:25:45.429Z",
              specifications: [],
              rating_count: 31,
              month_sales: 545,
              description: "12",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e92e4df4be518044d5edde4",
              tips: "122评价 月售650份",
              item_id: 6549,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "f",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1716dce17a266069.jpg",
              name: "f",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "f",
                  item_id: 6549,
                  sku_id: 24919,
                  food_id: 24946,
                  restaurant_id: 1,
                  _id: "5e92e4df4be518044d5edde5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 44,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 8,
              satisfy_count: 618,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-10T16:30:35.039Z",
              specifications: [],
              rating_count: 122,
              month_sales: 650,
              description: "f",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e95347c4be518044d5ee2de",
              tips: "3评价 月售585份",
              item_id: 6561,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "8.9折"
              },
              image_path: "17176d50a2966151.jpg",
              name: "黄焖鸡米饭",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "黄焖鸡米饭",
                  item_id: 6561,
                  sku_id: 24935,
                  food_id: 24962,
                  restaurant_id: 1,
                  _id: "5e9594724be518044d5ee46f",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e9594724be518044d5ee470"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 273,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "6666",
                  name: "黄焖鸡米饭",
                  item_id: 6561,
                  sku_id: 24936,
                  food_id: 24963,
                  restaurant_id: 1,
                  _id: "5e9594724be518044d5ee46d",
                  specs: [
                    {
                      name: "规格",
                      value: "6666",
                      _id: "5e9594724be518044d5ee46e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 168,
                  sold_out: false,
                  price: 24,
                  promotion_stock: -1,
                  recent_rating: 3.7,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 65,
              satisfy_count: 533,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-10T16:30:35.039Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "6666"]
                }
              ],
              rating_count: 3,
              month_sales: 585,
              description: "正宗 好吃",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e9d2d6278a583389c88383f",
              tips: "273评价 月售977份",
              item_id: 6566,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "5折",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17195f94c3866438.png",
              name: "臭豆腐",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "臭豆腐",
                  item_id: 6566,
                  sku_id: 24947,
                  food_id: 24974,
                  restaurant_id: 1,
                  _id: "5e9d2d6278a583389c883840",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 623,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 31,
              satisfy_count: 132,
              attributes: [],
              is_essential: false,
              server_utc: "2020-04-18T12:58:25.260Z",
              specifications: [],
              rating_count: 273,
              month_sales: 977,
              description: "好吃不贵",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e981c6d4be518044d5eed51",
              tips: "958评价 月售983份",
              item_id: 6564,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "171822f046366173.jpg",
              name: "土豆",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "土豆",
                  item_id: 6564,
                  sku_id: 24950,
                  food_id: 24977,
                  restaurant_id: 1,
                  _id: "5e9d3c8078a583389c88387e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 680,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 99,
              satisfy_count: 783,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-10T16:30:35.039Z",
              specifications: [],
              rating_count: 958,
              month_sales: 983,
              description: "222222222",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e9d3d4778a583389c883880",
              tips: "65评价 月售51份",
              item_id: 6567,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "2222"
              },
              image_path: "1719637380e66440.png",
              name: "22",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "22",
                  item_id: 6567,
                  sku_id: 24952,
                  food_id: 24979,
                  restaurant_id: 1,
                  _id: "5e9d3d4778a583389c883881",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 809,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 51,
              satisfy_count: 931,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-18T12:58:25.260Z",
              specifications: [],
              rating_count: 65,
              month_sales: 51,
              description: "222222222222",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e9fd9d378a583389c884383",
              tips: "913评价 月售830份",
              item_id: 6573,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: " dads",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "171a06ac34866503.png",
              name: "wdwedd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "wdwedd",
                  item_id: 6573,
                  sku_id: 25056,
                  food_id: 25083,
                  restaurant_id: 1,
                  _id: "5eb11a7681d8b2675d1ce1dd",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 206,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 35,
              satisfy_count: 868,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                },
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-18T12:58:25.260Z",
              specifications: [],
              rating_count: 913,
              month_sales: 830,
              description: "asdasd",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5ea0141b78a583389c884474",
              tips: "580评价 月售75份",
              item_id: 6574,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "买一歼十"
              },
              image_path: "171a14e0a9166520.jpg",
              name: "下饭",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "下饭",
                  item_id: 6574,
                  sku_id: 24959,
                  food_id: 24986,
                  restaurant_id: 1,
                  _id: "5ea0141b78a583389c884475",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 819,
                  sold_out: false,
                  price: 24,
                  promotion_stock: -1,
                  recent_rating: 1.3,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 36,
              satisfy_count: 58,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                },
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-18T12:58:25.260Z",
              specifications: [],
              rating_count: 580,
              month_sales: 75,
              description: "起飞咯",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e9fbc6578a583389c884343",
              tips: "662评价 月售458份",
              item_id: 6572,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "kkk",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1719ff7d71366499.jpeg",
              name: "kkk111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "kkk111",
                  item_id: 6572,
                  sku_id: 25076,
                  food_id: 25103,
                  restaurant_id: 1,
                  _id: "5eb5241081d8b2675d1ceee6",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5eb5241081d8b2675d1ceee7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 372,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111",
                  name: "kkk111",
                  item_id: 6572,
                  sku_id: 25077,
                  food_id: 25104,
                  restaurant_id: 1,
                  _id: "5eb5241081d8b2675d1ceee4",
                  specs: [
                    {
                      name: "规格",
                      value: "111",
                      _id: "5eb5241081d8b2675d1ceee5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 393,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 16,
              satisfy_count: 862,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-18T12:58:25.260Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "111"]
                }
              ],
              rating_count: 662,
              month_sales: 458,
              description: "kkk",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5ea781227653d21ef58c0ac0",
              tips: "114评价 月售213份",
              item_id: 6592,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "111111",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "171be5064ac66669.png",
              name: "11111111111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "11111111111",
                  item_id: 6592,
                  sku_id: 25130,
                  food_id: 25157,
                  restaurant_id: 1,
                  _id: "5eb9f54d81d8b2675d1cf4cd",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5eb9f54d81d8b2675d1cf4ce"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 969,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "AA",
                  name: "11111111111",
                  item_id: 6592,
                  sku_id: 25131,
                  food_id: 25158,
                  restaurant_id: 1,
                  _id: "5eb9f54d81d8b2675d1cf4cb",
                  specs: [
                    {
                      name: "规格",
                      value: "AA",
                      _id: "5eb9f54d81d8b2675d1cf4cc"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 364,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 96,
              satisfy_count: 35,
              attributes: [],
              is_essential: false,
              server_utc: "2020-04-26T11:19:50.406Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "AA"]
                }
              ],
              rating_count: 114,
              month_sales: 213,
              description: "1111111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5ea7ddab7653d21ef58c0c6c",
              tips: "444评价 月售166份",
              item_id: 6595,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "测试能不能添加"
              },
              image_path: "171bfb9dbda66693.png",
              name: "一枕华胥",
              __v: 0,
              specfoods: [
                {
                  specs_name: "h",
                  name: "一枕华胥",
                  item_id: 6595,
                  sku_id: 25123,
                  food_id: 25150,
                  restaurant_id: 1,
                  _id: "5eb91b6681d8b2675d1cf426",
                  specs: [
                    {
                      name: "规格",
                      value: "h",
                      _id: "5eb91b6681d8b2675d1cf427"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 526,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "gh",
                  name: "一枕华胥",
                  item_id: 6595,
                  sku_id: 25124,
                  food_id: 25151,
                  restaurant_id: 1,
                  _id: "5eb91b6681d8b2675d1cf424",
                  specs: [
                    {
                      name: "规格",
                      value: "gh",
                      _id: "5eb91b6681d8b2675d1cf425"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 971,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 431,
              attributes: [],
              is_essential: false,
              server_utc: "2020-04-26T11:19:50.406Z",
              specifications: [
                {
                  name: "规格",
                  values: ["h", "gh"]
                }
              ],
              rating_count: 444,
              month_sales: 166,
              description: "79",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5ebe1e2a81d8b2675d1d001c",
              tips: "256评价 月售240份",
              item_id: 6618,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "17216a5d19267104.jpg",
              name: "后台",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "后台",
                  item_id: 6618,
                  sku_id: 25154,
                  food_id: 25181,
                  restaurant_id: 1,
                  _id: "5ebe1e2a81d8b2675d1d001d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 238,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 92,
              satisfy_count: 574,
              attributes: [],
              is_essential: false,
              server_utc: "2020-05-04T07:36:18.436Z",
              specifications: [],
              rating_count: 256,
              month_sales: 240,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5ebe1e3f81d8b2675d1d001e",
              tips: "410评价 月售685份",
              item_id: 6619,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "17216a622ca67105.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6619,
                  sku_id: 25155,
                  food_id: 25182,
                  restaurant_id: 1,
                  _id: "5ebe1e3f81d8b2675d1d001f",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 362,
                  sold_out: false,
                  price: 0,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 46,
              satisfy_count: 771,
              attributes: [],
              is_essential: false,
              server_utc: "2020-05-04T07:36:18.436Z",
              specifications: [],
              rating_count: 410,
              month_sales: 685,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5ec4f5db81d8b2675d1d092b",
              tips: "911评价 月售593份",
              item_id: 6631,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "fdsfds",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "172316066c367194.jpg",
              name: "fsdfdsf",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "fsdfdsf",
                  item_id: 6631,
                  sku_id: 25169,
                  food_id: 25196,
                  restaurant_id: 1,
                  _id: "5ec4f5db81d8b2675d1d092e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ec4f5db81d8b2675d1d092f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 45,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "fdsfds",
                  name: "fsdfdsf",
                  item_id: 6631,
                  sku_id: 25170,
                  food_id: 25197,
                  restaurant_id: 1,
                  _id: "5ec4f5db81d8b2675d1d092c",
                  specs: [
                    {
                      name: "规格",
                      value: "fdsfds",
                      _id: "5ec4f5db81d8b2675d1d092d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 440,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.7,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 13,
              satisfy_count: 728,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-04T07:36:18.436Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "fdsfds"]
                }
              ],
              rating_count: 911,
              month_sales: 593,
              description: "fdsfds",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5ec87dcf81d8b2675d1d0ee7",
              tips: "710评价 月售187份",
              item_id: 6633,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1724528bf4867339.jpg",
              name: "111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6633,
                  sku_id: 25215,
                  food_id: 25242,
                  restaurant_id: 1,
                  _id: "5ecf67d9c2a22c2993e4eb2e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ecf67d9c2a22c2993e4eb2f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 353,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6633,
                  sku_id: 25216,
                  food_id: 25243,
                  restaurant_id: 1,
                  _id: "5ecf67d9c2a22c2993e4eb2c",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ecf67d9c2a22c2993e4eb2d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 55,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 55,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6633,
                  sku_id: 25217,
                  food_id: 25244,
                  restaurant_id: 1,
                  _id: "5ecf67d9c2a22c2993e4eb2a",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ecf67d9c2a22c2993e4eb2b"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 310,
                  sold_out: false,
                  price: 201,
                  promotion_stock: -1,
                  recent_rating: 0.7,
                  packing_fee: 21,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 53,
              satisfy_count: 541,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-04T07:36:18.436Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "默认", "默认"]
                }
              ],
              rating_count: 710,
              month_sales: 187,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5ed74f5011943c38555c0976",
              tips: "881评价 月售189份",
              item_id: 6660,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "vf",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "172790d81cf67573.png",
              name: "的",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "的",
                  item_id: 6660,
                  sku_id: 25278,
                  food_id: 25305,
                  restaurant_id: 1,
                  _id: "5ed9ecba4133f0644a9a6d34",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 558,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 17,
              satisfy_count: 333,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-29T08:07:53.243Z",
              specifications: [],
              rating_count: 881,
              month_sales: 189,
              description: "vf",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5edee40d4133f0644a9a7479",
              tips: "70评价 月售506份",
              item_id: 6686,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "17296aacf6f67840.jpg",
              name: "1122",
              __v: 0,
              specfoods: [
                {
                  specs_name: "新加大声点的饿艾薇儿",
                  name: "1122",
                  item_id: 6686,
                  sku_id: 25412,
                  food_id: 25439,
                  restaurant_id: 1,
                  _id: "5ee88caddd7bf64dcd34e5c5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 571,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 89,
              satisfy_count: 58,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [],
              rating_count: 70,
              month_sales: 506,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5edee5ae4133f0644a9a747b",
              tips: "338评价 月售782份",
              item_id: 6687,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "17296b1351767841.png",
              name: "22233",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "22233",
                  item_id: 6687,
                  sku_id: 25374,
                  food_id: 25401,
                  restaurant_id: 1,
                  _id: "5edee5ae4133f0644a9a747c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 368,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 64,
              satisfy_count: 980,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [],
              rating_count: 338,
              month_sales: 782,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5ee88890dd7bf64dcd34e5a7",
              tips: "833评价 月售865份",
              item_id: 6701,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "172bc55780f68005.jpg",
              name: "353453",
              __v: 0,
              specfoods: [
                {
                  specs_name: "dfasff",
                  name: "353453",
                  item_id: 6701,
                  sku_id: 25508,
                  food_id: 25535,
                  restaurant_id: 1,
                  _id: "5ef729c129f2e165e11a3764",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 310,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 11,
              satisfy_count: 627,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-16T08:34:52.006Z",
              specifications: [],
              rating_count: 833,
              month_sales: 865,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5ef1f1f129f2e165e11a2c44",
              tips: "318评价 月售131份",
              item_id: 6720,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "fdas"
              },
              image_path: "172e11914e068649.jpg",
              name: "df da",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "df da",
                  item_id: 6720,
                  sku_id: 25521,
                  food_id: 25548,
                  restaurant_id: 1,
                  _id: "5ef77eec29f2e165e11a37e0",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 149,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 83,
              satisfy_count: 88,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-19T09:53:12.204Z",
              specifications: [],
              rating_count: 318,
              month_sales: 131,
              description: "dasf ",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5f110ed5d60f415455b4c68a",
              tips: "84评价 月售280份",
              item_id: 6764,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "7676"
              },
              image_path: "1735aa1e9e769530.jpg",
              name: "776",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "776",
                  item_id: 6764,
                  sku_id: 25699,
                  food_id: 25726,
                  restaurant_id: 1,
                  _id: "5f110ed5d60f415455b4c68b",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 569,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 48,
              satisfy_count: 404,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-14T06:47:36.360Z",
              specifications: [],
              rating_count: 84,
              month_sales: 280,
              description: "76",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5f1a3558d5bf93139ddcc293",
              tips: "364评价 月售455份",
              item_id: 6782,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "11",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "173996f1aad70195.jpg",
              name: "7777",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "7777",
                  item_id: 6782,
                  sku_id: 25835,
                  food_id: 25862,
                  restaurant_id: 1,
                  _id: "5f212292d5bf93139ddccce3",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 962,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 375,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-23T15:18:34.719Z",
              specifications: [],
              rating_count: 364,
              month_sales: 455,
              description: "11",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5dfdae247f5a6f2f48270819",
              tips: "187评价 月售469份",
              item_id: 6040,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "sss",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f26f04cf961916.png",
              name: "小米",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "小米",
                  item_id: 6040,
                  sku_id: 25804,
                  food_id: 25831,
                  restaurant_id: 1,
                  _id: "5f1d9b3bd5bf93139ddcc6ed",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5f1d9b3bd5bf93139ddcc6ee"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 305,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111",
                  name: "小米",
                  item_id: 6040,
                  sku_id: 25805,
                  food_id: 25832,
                  restaurant_id: 1,
                  _id: "5f1d9b3bd5bf93139ddcc6eb",
                  specs: [
                    {
                      name: "规格",
                      value: "111",
                      _id: "5f1d9b3bd5bf93139ddcc6ec"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 736,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 84,
              satisfy_count: 351,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "111"]
                }
              ],
              rating_count: 187,
              month_sales: 469,
              description: "sdsdsd",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5f1f95f1d5bf93139ddcc9e6",
              tips: "97评价 月售715份",
              item_id: 6796,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "123"
              },
              image_path: "1739361c7f870097.jpg",
              name: "21330000",
              __v: 0,
              specfoods: [
                {
                  specs_name: "33",
                  name: "21330000",
                  item_id: 6796,
                  sku_id: 25842,
                  food_id: 25869,
                  restaurant_id: 1,
                  _id: "5f2235bbf3ffc74009e2942b",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 68,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 47,
              satisfy_count: 174,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-23T15:18:34.719Z",
              specifications: [],
              rating_count: 97,
              month_sales: 715,
              description: "132132",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5ed5fb8b11943c38555c057e",
              tips: "828评价 月售464份",
              item_id: 6656,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "22"
              },
              image_path: "17273de8d8567542.jpg",
              name: "23223",
              __v: 0,
              specfoods: [
                {
                  specs_name: "2",
                  name: "23223",
                  item_id: 6656,
                  sku_id: 25849,
                  food_id: 25876,
                  restaurant_id: 1,
                  _id: "5f2267f3f3ffc74009e2949a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 565,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.1,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 7,
              satisfy_count: 356,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-29T08:07:53.243Z",
              specifications: [],
              rating_count: 828,
              month_sales: 464,
              description: "2222",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5f229890f3ffc74009e295dd",
              tips: "827评价 月售170份",
              item_id: 6805,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "323"
              },
              image_path: "1739f23c90f70347.png",
              name: "22323232",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "22323232",
                  item_id: 6805,
                  sku_id: 25873,
                  food_id: 25900,
                  restaurant_id: 1,
                  _id: "5f238987f3ffc74009e296e5",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5f238987f3ffc74009e296e6"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 417,
                  sold_out: false,
                  price: 23,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "22323232",
                  item_id: 6805,
                  sku_id: 25874,
                  food_id: 25901,
                  restaurant_id: 1,
                  _id: "5f238987f3ffc74009e296e3",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5f238987f3ffc74009e296e4"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 705,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "22323232",
                  item_id: 6805,
                  sku_id: 25875,
                  food_id: 25902,
                  restaurant_id: 1,
                  _id: "5f238987f3ffc74009e296e1",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5f238987f3ffc74009e296e2"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 189,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 92,
              satisfy_count: 876,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-29T08:46:27.362Z",
              specifications: [
                {
                  values: ["默认", "", ""],
                  name: "规格"
                }
              ],
              rating_count: 827,
              month_sales: 170,
              description: "232",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 211
        },
        {
          name: "好吃的😋",
          description: "舒服的沙发",
          restaurant_id: 1,
          id: 9198,
          foods: [
            {
              _id: "5df9c9827f5a6f2f4826eddd",
              tips: "730评价 月售574份",
              item_id: 6030,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "是对方是否"
              },
              image_path: "16f17bb126261620.jpg",
              name: "炸鸡",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "炸鸡",
                  item_id: 6030,
                  sku_id: 24400,
                  food_id: 24427,
                  restaurant_id: 1,
                  _id: "5e5617a7942e5767f50a0b07",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e5617a7942e5767f50a0b08"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 437,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "234",
                  name: "炸鸡",
                  item_id: 6030,
                  sku_id: 24401,
                  food_id: 24428,
                  restaurant_id: 1,
                  _id: "5e5617a7942e5767f50a0b05",
                  specs: [
                    {
                      name: "规格",
                      value: "234",
                      _id: "5e5617a7942e5767f50a0b06"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 452,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 69,
              satisfy_count: 714,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "234"]
                }
              ],
              rating_count: 730,
              month_sales: 574,
              description:
                "在最美的时光遇见了你。张爱玲说，爱的同时便会背负憎恨的风险，我遇见你，就好像今天遇见了这朵美丽的花朵一样",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e00544ade911551beafa4a3",
              tips: "126评价 月售912份",
              item_id: 6045,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16f31494e9d61982.png",
              name: "斌哥",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "斌哥",
                  item_id: 6045,
                  sku_id: 23667,
                  food_id: 23694,
                  restaurant_id: 1,
                  _id: "5e006fa5de911551beafa5ae",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 907,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 88,
              satisfy_count: 554,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 126,
              month_sales: 912,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e017c3ade911551beafab16",
              tips: "333评价 月售67份",
              item_id: 6051,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "请问"
              },
              image_path: "16f35cd484262037.jpg",
              name: "请问",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "请问",
                  item_id: 6051,
                  sku_id: 23686,
                  food_id: 23713,
                  restaurant_id: 1,
                  _id: "5e017f41de911551beafab4c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 219,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 91,
              satisfy_count: 728,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 333,
              month_sales: 67,
              description: "完全恶气",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e01b3579d694e1ef8e0dd40",
              tips: "858评价 月售423份",
              item_id: 6089,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "d",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path:
                "blob:http://localhost:8002/14aef1f9-ecea-48b4-a900-43b72f061028",
              name: "dwd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "dwd",
                  item_id: 6089,
                  sku_id: 23774,
                  food_id: 23801,
                  restaurant_id: 1,
                  _id: "5e032903b007cd415b6b6021",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 834,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 91,
              satisfy_count: 674,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T06:41:28.965Z",
              specifications: [],
              rating_count: 858,
              month_sales: 423,
              description: "d",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e01b6d77954531f1e6571d9",
              tips: "103评价 月售492份",
              item_id: 6097,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "无"
              },
              image_path: "16f36b20cf962058.jpg",
              name: "大龙虾",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "大龙虾",
                  item_id: 6097,
                  sku_id: 24084,
                  food_id: 24111,
                  restaurant_id: 1,
                  _id: "5e1d37896901211bf3adaf56",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 149,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 88,
              satisfy_count: 378,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T06:43:02.568Z",
              specifications: [],
              rating_count: 103,
              month_sales: 492,
              description: "好吃1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e0183e6de911551beafac07",
              tips: "82评价 月售461份",
              item_id: 6052,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "大王",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f35eb2bdc62046.jpg",
              name: "大王得到1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "大王得到1",
                  item_id: 6052,
                  sku_id: 23723,
                  food_id: 23750,
                  restaurant_id: 1,
                  _id: "5e02c9fdf58062216abeb0b5",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e02c9fdf58062216abeb0b6"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 278,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "agadgqewttttttttttttttttttt",
                  name: "大王得到1",
                  item_id: 6052,
                  sku_id: 23724,
                  food_id: 23751,
                  restaurant_id: 1,
                  _id: "5e02c9fdf58062216abeb0b3",
                  specs: [
                    {
                      name: "规格",
                      value: "agadgqewttttttttttttttttttt",
                      _id: "5e02c9fdf58062216abeb0b4"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 3,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 41,
              satisfy_count: 824,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  values: ["默认", "agadgqewttttttttttttttttttt"],
                  name: "规格"
                }
              ],
              rating_count: 82,
              month_sales: 461,
              description: "的dagag",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e05f5196901211bf3ad77d9",
              tips: "54评价 月售289份",
              item_id: 6149,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f4740634462332.jpg",
              name: "辣条",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "辣条",
                  item_id: 6149,
                  sku_id: 23859,
                  food_id: 23886,
                  restaurant_id: 1,
                  _id: "5e05f5196901211bf3ad77da",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 869,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 82,
              satisfy_count: 782,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 54,
              month_sales: 289,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e0b16c26901211bf3ad8029",
              tips: "498评价 月售792份",
              item_id: 6165,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16f5b50eb6462439.jpg",
              name: "asdfg",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "asdfg",
                  item_id: 6165,
                  sku_id: 23900,
                  food_id: 23927,
                  restaurant_id: 1,
                  _id: "5e0c6e8a6901211bf3ad80ab",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e0c6e8a6901211bf3ad80ac"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 129,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "sda",
                  name: "asdfg",
                  item_id: 6165,
                  sku_id: 23901,
                  food_id: 23928,
                  restaurant_id: 1,
                  _id: "5e0c6e8a6901211bf3ad80a9",
                  specs: [
                    {
                      name: "规格",
                      value: "sda",
                      _id: "5e0c6e8a6901211bf3ad80aa"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 850,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 9,
              satisfy_count: 704,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "sda"]
                }
              ],
              rating_count: 498,
              month_sales: 792,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e0fd56e6901211bf3ad8519",
              tips: "669评价 月售607份",
              item_id: 6180,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "是多少的我也不知道"
              },
              image_path: "16f6dd9a21462510.jpg",
              name: "甜食",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "甜食",
                  item_id: 6180,
                  sku_id: 23929,
                  food_id: 23956,
                  restaurant_id: 1,
                  _id: "5e0fd56e6901211bf3ad851a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 386,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 74,
              satisfy_count: 946,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 669,
              month_sales: 607,
              description: "好吃",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e13e57c6901211bf3ad8ddd",
              tips: "444评价 月售208份",
              item_id: 6188,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "舌尖上的狂欢",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f7db8707862636.png",
              name: "舌尖上的狂欢",
              __v: 0,
              specfoods: [
                {
                  specs_name: "gg123",
                  name: "舌尖上的狂欢",
                  item_id: 6188,
                  sku_id: 23963,
                  food_id: 23990,
                  restaurant_id: 1,
                  _id: "5e1430846901211bf3ad8fb6",
                  specs: [
                    {
                      name: "规格",
                      value: "gg123",
                      _id: "5e1430846901211bf3ad8fb7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 274,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "gg224",
                  name: "舌尖上的狂欢",
                  item_id: 6188,
                  sku_id: 23964,
                  food_id: 23991,
                  restaurant_id: 1,
                  _id: "5e1430846901211bf3ad8fb4",
                  specs: [
                    {
                      name: "规格",
                      value: "gg224",
                      _id: "5e1430846901211bf3ad8fb5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 354,
                  sold_out: false,
                  price: 17,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 74,
              satisfy_count: 275,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                },
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["gg123", "gg224"],
                  name: "规格"
                }
              ],
              rating_count: 444,
              month_sales: 208,
              description: "舌尖上的狂欢",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e0f0b856901211bf3ad84b6",
              tips: "183评价 月售945份",
              item_id: 6179,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "3131"
              },
              image_path: "16f6ac4e94962502.png",
              name: "豹子",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "豹子",
                  item_id: 6179,
                  sku_id: 24004,
                  food_id: 24031,
                  restaurant_id: 1,
                  _id: "5e1584d66901211bf3ad954f",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e1584d66901211bf3ad9550"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 676,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.9,
                  packing_fee: 6,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "3223",
                  name: "豹子",
                  item_id: 6179,
                  sku_id: 24005,
                  food_id: 24032,
                  restaurant_id: 1,
                  _id: "5e1584d66901211bf3ad954d",
                  specs: [
                    {
                      name: "规格",
                      value: "3223",
                      _id: "5e1584d66901211bf3ad954e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 284,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 73,
              satisfy_count: 123,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "3223"]
                }
              ],
              rating_count: 183,
              month_sales: 945,
              description: "热销来袭～",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e16d5e06901211bf3ad9b69",
              tips: "305评价 月售537份",
              item_id: 6198,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "士大夫",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f893344b862790.png",
              name: "士大夫",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "士大夫",
                  item_id: 6198,
                  sku_id: 24051,
                  food_id: 24078,
                  restaurant_id: 1,
                  _id: "5e18260c6901211bf3ada29e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e18260c6901211bf3ada29f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 435,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "士大夫",
                  name: "士大夫",
                  item_id: 6198,
                  sku_id: 24052,
                  food_id: 24079,
                  restaurant_id: 1,
                  _id: "5e18260c6901211bf3ada29c",
                  specs: [
                    {
                      name: "规格",
                      value: "士大夫",
                      _id: "5e18260c6901211bf3ada29d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 514,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "123",
                  name: "士大夫",
                  item_id: 6198,
                  sku_id: 24053,
                  food_id: 24080,
                  restaurant_id: 1,
                  _id: "5e18260c6901211bf3ada29a",
                  specs: [
                    {
                      name: "规格",
                      value: "123",
                      _id: "5e18260c6901211bf3ada29b"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 151,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 100,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "士大夫",
                  item_id: 6198,
                  sku_id: 24054,
                  food_id: 24081,
                  restaurant_id: 1,
                  _id: "5e18260c6901211bf3ada298",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e18260c6901211bf3ada299"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 907,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 6,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 36,
              satisfy_count: 877,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["默认", "士大夫", "123", ""],
                  name: "规格"
                }
              ],
              rating_count: 305,
              month_sales: 537,
              description: "士大夫",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e202c460236b14725d39302",
              tips: "191评价 月售697份",
              item_id: 6231,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16fadacfc5e63162.jpg",
              name: "柔荑花",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "柔荑花",
                  item_id: 6231,
                  sku_id: 24148,
                  food_id: 24175,
                  restaurant_id: 1,
                  _id: "5e2570550236b14725d39cee",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 554,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 85,
              satisfy_count: 894,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 191,
              month_sales: 697,
              description: "trteteteteteterte",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e204ca00236b14725d39379",
              tips: "170评价 月售711份",
              item_id: 6275,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "的说法的说法大"
              },
              image_path: "16fae2b5e9b63191.jpg",
              name: "范德萨",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "范德萨",
                  item_id: 6275,
                  sku_id: 24172,
                  food_id: 24199,
                  restaurant_id: 1,
                  _id: "5e2d6a8adb7fe12148569550",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e2d6a8adb7fe12148569551"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 706,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "3216546",
                  name: "范德萨",
                  item_id: 6275,
                  sku_id: 24173,
                  food_id: 24200,
                  restaurant_id: 1,
                  _id: "5e2d6a8adb7fe1214856954e",
                  specs: [
                    {
                      name: "规格",
                      value: "3216546",
                      _id: "5e2d6a8adb7fe1214856954f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 362,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 9,
              satisfy_count: 690,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [
                {
                  values: ["默认", "3216546"],
                  name: "规格"
                }
              ],
              rating_count: 170,
              month_sales: 711,
              description: "士大夫bjhgjbkhhjb",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e2bea4edb7fe12148569278",
              tips: "946评价 月售643份",
              item_id: 6296,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "12"
              },
              image_path: "16fdb8b571063409.jpg",
              name: "1234",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1234",
                  item_id: 6296,
                  sku_id: 24189,
                  food_id: 24216,
                  restaurant_id: 1,
                  _id: "5e304329db7fe12148569b76",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 196,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 997,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [],
              rating_count: 946,
              month_sales: 643,
              description: "12",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e312ed3db7fe12148569bd0",
              tips: "239评价 月售974份",
              item_id: 6299,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "首单7折"
              },
              image_path: "16ff01efbe063459.jpg",
              name: "蛋包饭",
              __v: 0,
              specfoods: [
                {
                  specs_name: "asdfasdf",
                  name: "蛋包饭",
                  item_id: 6299,
                  sku_id: 24192,
                  food_id: 24219,
                  restaurant_id: 1,
                  _id: "5e3134b6db7fe12148569bd4",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 182,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 7,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 2,
              satisfy_count: 141,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [],
              rating_count: 239,
              month_sales: 974,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e33ec48db7fe1214856a234",
              tips: "136评价 月售870份",
              item_id: 6301,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16ffad30c6c63483.jpg",
              name: "13",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "13",
                  item_id: 6301,
                  sku_id: 24207,
                  food_id: 24234,
                  restaurant_id: 1,
                  _id: "5e36808bdb7fe1214856a4cf",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e36808bdb7fe1214856a4d0"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 290,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "13",
                  item_id: 6301,
                  sku_id: 24208,
                  food_id: 24235,
                  restaurant_id: 1,
                  _id: "5e36808bdb7fe1214856a4cd",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e36808bdb7fe1214856a4ce"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 495,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 29,
              satisfy_count: 48,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [
                {
                  values: ["默认", ""],
                  name: "规格"
                }
              ],
              rating_count: 136,
              month_sales: 870,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e464ecc67c5596b49315d76",
              tips: "725评价 月售494份",
              item_id: 6339,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "123"
              },
              image_path: "17042a3805d63801.jpg",
              name: "食物食物 发是发v",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "食物食物 发是发v",
                  item_id: 6339,
                  sku_id: 24294,
                  food_id: 24321,
                  restaurant_id: 1,
                  _id: "5e466bb767c5596b49315de0",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e466bb767c5596b49315de1"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 372,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "1",
                  name: "食物食物 发是发v",
                  item_id: 6339,
                  sku_id: 24295,
                  food_id: 24322,
                  restaurant_id: 1,
                  _id: "5e466bb767c5596b49315dde",
                  specs: [
                    {
                      name: "规格",
                      value: "1",
                      _id: "5e466bb767c5596b49315ddf"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 236,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 84,
              satisfy_count: 511,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-14T05:27:15.179Z",
              specifications: [
                {
                  values: ["默认", "1"],
                  name: "规格"
                }
              ],
              rating_count: 725,
              month_sales: 494,
              description: "123",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e4696e367c5596b49315ec5",
              tips: "961评价 月售780份",
              item_id: 6344,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "买一送一",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17043bd6cef63828.jpg",
              name: "测试vvc3",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "测试vvc3",
                  item_id: 6344,
                  sku_id: 24325,
                  food_id: 24352,
                  restaurant_id: 1,
                  _id: "5e4f73fd156c7477e1baf2c1",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 940,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 0.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 85,
              satisfy_count: 367,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-14T05:27:15.179Z",
              specifications: [],
              rating_count: 961,
              month_sales: 780,
              description: "西瓜",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e47b6b767c5596b49316012",
              tips: "118评价 月售17份",
              item_id: 6345,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "1704821cdc263837.png",
              name: "asfd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "asfd",
                  item_id: 6345,
                  sku_id: 24301,
                  food_id: 24328,
                  restaurant_id: 1,
                  _id: "5e47b6b767c5596b49316013",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 414,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 441,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-14T05:27:15.179Z",
              specifications: [],
              rating_count: 118,
              month_sales: 17,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e4be3f47965b007640752d4",
              tips: "756评价 月售19份",
              item_id: 6354,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "yyy",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1705872724863888.jpg",
              name: "yyy",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "yyy",
                  item_id: 6354,
                  sku_id: 24315,
                  food_id: 24342,
                  restaurant_id: 1,
                  _id: "5e4be3f47965b007640752d5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 496,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 30,
              satisfy_count: 549,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-17T04:35:16.999Z",
              specifications: [],
              rating_count: 756,
              month_sales: 19,
              description: "yyy",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e51eab0156c7477e1bafd0d",
              tips: "110评价 月售335份",
              item_id: 6361,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "1706ffccc1364134.jpg",
              name: "汉堡王das",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "汉堡王das",
                  item_id: 6361,
                  sku_id: 24348,
                  food_id: 24375,
                  restaurant_id: 1,
                  _id: "5e523c4f156c7477e1bafe8b",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e523c4f156c7477e1bafe8c"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 353,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "asd",
                  name: "汉堡王das",
                  item_id: 6361,
                  sku_id: 24349,
                  food_id: 24376,
                  restaurant_id: 1,
                  _id: "5e523c4f156c7477e1bafe89",
                  specs: [
                    {
                      name: "规格",
                      value: "asd",
                      _id: "5e523c4f156c7477e1bafe8a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 528,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "asdasd",
                  name: "汉堡王das",
                  item_id: 6361,
                  sku_id: 24350,
                  food_id: 24377,
                  restaurant_id: 1,
                  _id: "5e523c4f156c7477e1bafe87",
                  specs: [
                    {
                      name: "规格",
                      value: "asdasd",
                      _id: "5e523c4f156c7477e1bafe88"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 886,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 40,
              satisfy_count: 100,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-21T05:41:05.200Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "asd", "asdasd"]
                }
              ],
              rating_count: 110,
              month_sales: 335,
              description: "asdasdasd",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e538773942e5767f50a0333",
              tips: "987评价 月售79份",
              item_id: 6365,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "235"
              },
              image_path: "1707689770064170.jpg",
              name: "214234",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "214234",
                  item_id: 6365,
                  sku_id: 24384,
                  food_id: 24411,
                  restaurant_id: 1,
                  _id: "5e53f5c2942e5767f50a04f6",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e53f5c2942e5767f50a04f7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 742,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "adfafda",
                  name: "214234",
                  item_id: 6365,
                  sku_id: 24385,
                  food_id: 24412,
                  restaurant_id: 1,
                  _id: "5e53f5c2942e5767f50a04f4",
                  specs: [
                    {
                      name: "规格",
                      value: "adfafda",
                      _id: "5e53f5c2942e5767f50a04f5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 419,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "433",
                  name: "214234",
                  item_id: 6365,
                  sku_id: 24386,
                  food_id: 24413,
                  restaurant_id: 1,
                  _id: "5e53f5c2942e5767f50a04f2",
                  specs: [
                    {
                      name: "规格",
                      value: "433",
                      _id: "5e53f5c2942e5767f50a04f3"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 870,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 16,
              satisfy_count: 567,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "adfafda", "433"]
                }
              ],
              rating_count: 987,
              month_sales: 79,
              description: "3146",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e57628e942e5767f50a0e6f",
              tips: "468评价 月售688份",
              item_id: 6376,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "ad"
              },
              image_path: "1708558c63064358.png",
              name: "怎么样才能删除",
              __v: 0,
              specfoods: [
                {
                  specs_name: "aaaa",
                  name: "怎么样才能删除",
                  item_id: 6376,
                  sku_id: 24439,
                  food_id: 24466,
                  restaurant_id: 1,
                  _id: "5e58bc23942e5767f50a1410",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 330,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 22,
              satisfy_count: 275,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 468,
              month_sales: 688,
              description: "666",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e58cea5942e5767f50a1561",
              tips: "818评价 月售275份",
              item_id: 6383,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "2",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1708ae6a2c864445.png",
              name: "111111111111111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111111111111111",
                  item_id: 6383,
                  sku_id: 24453,
                  food_id: 24480,
                  restaurant_id: 1,
                  _id: "5e58cea5942e5767f50a1564",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e58cea5942e5767f50a1565"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 967,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "111111111111111",
                  item_id: 6383,
                  sku_id: 24454,
                  food_id: 24481,
                  restaurant_id: 1,
                  _id: "5e58cea5942e5767f50a1562",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e58cea5942e5767f50a1563"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 589,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 74,
              satisfy_count: 488,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                },
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", ""]
                }
              ],
              rating_count: 818,
              month_sales: 275,
              description: "3",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e5e0d34942e5767f50a21ac",
              tips: "106评价 月售321份",
              item_id: 6398,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "5"
              },
              image_path: "1709f6366a664552.png",
              name: "34",
              __v: 0,
              specfoods: [
                {
                  specs_name: "234",
                  name: "34",
                  item_id: 6398,
                  sku_id: 24478,
                  food_id: 24505,
                  restaurant_id: 1,
                  _id: "5e5e8678942e5767f50a2306",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 134,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 44,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 85,
              satisfy_count: 615,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 106,
              month_sales: 321,
              description: "34",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e5f627d942e5767f50a25fe",
              tips: "296评价 月售493份",
              item_id: 6403,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "170a498bf7564608.jpg",
              name: "黄焖鸡",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "黄焖鸡",
                  item_id: 6403,
                  sku_id: 24486,
                  food_id: 24513,
                  restaurant_id: 1,
                  _id: "5e5f627d942e5767f50a25ff",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 706,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 87,
              satisfy_count: 240,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 296,
              month_sales: 493,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e63000e942e5767f50a3149",
              tips: "345评价 月售913份",
              item_id: 6419,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "sdf"
              },
              image_path: "170b36faab864732.png",
              name: "aaa",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "aaa",
                  item_id: 6419,
                  sku_id: 24538,
                  food_id: 24565,
                  restaurant_id: 1,
                  _id: "5e635e4b942e5767f50a32a5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 773,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 13,
              satisfy_count: 735,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 345,
              month_sales: 913,
              description: "sdf",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e6a0983942e5767f50a41fa",
              tips: "992评价 月售867份",
              item_id: 6435,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "1"
              },
              image_path: "170ce350a9464896.jpg",
              name: "多少度",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "多少度",
                  item_id: 6435,
                  sku_id: 24593,
                  food_id: 24620,
                  restaurant_id: 1,
                  _id: "5e6a0983942e5767f50a41fb",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 972,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 47,
              satisfy_count: 932,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 992,
              month_sales: 867,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e71944e07e5ca4f7d1d874f",
              tips: "932评价 月售878份",
              item_id: 6457,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "170ebab65c965097.jpg",
              name: "ddx1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ddx1",
                  item_id: 6457,
                  sku_id: 24805,
                  food_id: 24832,
                  restaurant_id: 1,
                  _id: "5e80969fdd5b8d23f14952d2",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e80969fdd5b8d23f14952d3"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 794,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "haowan ",
                  name: "ddx1",
                  item_id: 6457,
                  sku_id: 24806,
                  food_id: 24833,
                  restaurant_id: 1,
                  _id: "5e80969fdd5b8d23f14952d0",
                  specs: [
                    {
                      name: "规格",
                      value: "haowan ",
                      _id: "5e80969fdd5b8d23f14952d1"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 114,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 51,
              satisfy_count: 142,
              attributes: [],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "haowan "]
                }
              ],
              rating_count: 932,
              month_sales: 878,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e0594ad7f4f8e7628d7f2ac",
              tips: "647评价 月售372份",
              item_id: 6145,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16f45ccc1ea62280.jpg",
              name: "东莞理工学院城市学院",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "东莞理工学院城市学院",
                  item_id: 6145,
                  sku_id: 24665,
                  food_id: 24692,
                  restaurant_id: 1,
                  _id: "5e7362b807e5ca4f7d1d8d10",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7362b807e5ca4f7d1d8d11"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 909,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "东莞理工学院城市学院",
                  item_id: 6145,
                  sku_id: 24666,
                  food_id: 24693,
                  restaurant_id: 1,
                  _id: "5e7362b807e5ca4f7d1d8d0e",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e7362b807e5ca4f7d1d8d0f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 557,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.3,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "3123123",
                  name: "东莞理工学院城市学院",
                  item_id: 6145,
                  sku_id: 24667,
                  food_id: 24694,
                  restaurant_id: 1,
                  _id: "5e7362b807e5ca4f7d1d8d0c",
                  specs: [
                    {
                      name: "规格",
                      value: "3123123",
                      _id: "5e7362b807e5ca4f7d1d8d0d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 412,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "东莞理工学院城市学院",
                  name: "东莞理工学院城市学院",
                  item_id: 6145,
                  sku_id: 24668,
                  food_id: 24695,
                  restaurant_id: 1,
                  _id: "5e7362b807e5ca4f7d1d8d0a",
                  specs: [
                    {
                      name: "规格",
                      value: "东莞理工学院城市学院",
                      _id: "5e7362b807e5ca4f7d1d8d0b"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 880,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 30,
              satisfy_count: 869,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-26T09:00:58.100Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "", "3123123", "东莞理工学院城市学院"]
                }
              ],
              rating_count: 647,
              month_sales: 372,
              description: "广东莞理工学院城市学院",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e77564c07e5ca4f7d1d9550",
              tips: "447评价 月售751份",
              item_id: 6477,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "123"
              },
              image_path: "1710229188965246.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6477,
                  sku_id: 24714,
                  food_id: 24741,
                  restaurant_id: 1,
                  _id: "5e7880fa6c41e733f7bd6be1",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 137,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 96,
              satisfy_count: 417,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 447,
              month_sales: 751,
              description: "123",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e7d6d4ddd5b8d23f1494bfd",
              tips: "553评价 月售338份",
              item_id: 6499,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "2"
              },
              image_path: "1712eb1be2565588.jpg",
              name: "2",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "2",
                  item_id: 6499,
                  sku_id: 24810,
                  food_id: 24837,
                  restaurant_id: 1,
                  _id: "5e82d65fdd5b8d23f14957f6",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 51,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 9,
              satisfy_count: 994,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [],
              rating_count: 553,
              month_sales: 338,
              description: "2",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e87334cdd5b8d23f149684e",
              tips: "751评价 月售747份",
              item_id: 6517,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "171d36e61e966815.jpg",
              name: "巧克力",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "巧克力",
                  item_id: 6517,
                  sku_id: 25050,
                  food_id: 25077,
                  restaurant_id: 1,
                  _id: "5eace90f7653d21ef58c1553",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 456,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 50,
              satisfy_count: 686,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [],
              rating_count: 751,
              month_sales: 747,
              description: "r",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e950af54be518044d5ee1b9",
              tips: "422评价 月售394份",
              item_id: 6560,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "123123",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1717632e3bc66144.jpg",
              name: "很好很好",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "很好很好",
                  item_id: 6560,
                  sku_id: 24933,
                  food_id: 24960,
                  restaurant_id: 1,
                  _id: "5e950af54be518044d5ee1ba",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 306,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 3,
              satisfy_count: 702,
              attributes: [],
              is_essential: false,
              server_utc: "2020-04-10T16:30:35.039Z",
              specifications: [],
              rating_count: 422,
              month_sales: 394,
              description: "123123",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e96da6a4be518044d5ee7ad",
              tips: "514评价 月售659份",
              item_id: 6563,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "11"
              },
              image_path: "1717d4534f766169.png",
              name: "11112",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "11112",
                  item_id: 6563,
                  sku_id: 24943,
                  food_id: 24970,
                  restaurant_id: 1,
                  _id: "5e9835cb4be518044d5eeddb",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 939,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 44,
              satisfy_count: 340,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-10T16:30:35.039Z",
              specifications: [],
              rating_count: 514,
              month_sales: 659,
              description: "111231",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5eb8c50d81d8b2675d1cf290",
              tips: "869评价 月售894份",
              item_id: 6610,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "1234"
              },
              image_path: "17201c18cf866988.png",
              name: "馋嘴蛙",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "馋嘴蛙",
                  item_id: 6610,
                  sku_id: 25118,
                  food_id: 25145,
                  restaurant_id: 1,
                  _id: "5eb912d381d8b2675d1cf3b7",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 332,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 98,
              satisfy_count: 196,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-04T07:36:18.436Z",
              specifications: [],
              rating_count: 869,
              month_sales: 894,
              description: "213",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5ed1b3e011943c38555bfe36",
              tips: "361评价 月售469份",
              item_id: 6645,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "啊对方说的方式"
              },
              image_path: "1726326316467474.jpg",
              name: "树菜",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "树菜",
                  item_id: 6645,
                  sku_id: 25226,
                  food_id: 25253,
                  restaurant_id: 1,
                  _id: "5ed2116d11943c38555bfec9",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 520,
                  sold_out: false,
                  price: 58,
                  promotion_stock: -1,
                  recent_rating: 0.8,
                  packing_fee: 28,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 27,
              satisfy_count: 204,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-29T08:07:53.243Z",
              specifications: [],
              rating_count: 361,
              month_sales: 469,
              description: "阿斯顿发大发",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5ed455c111943c38555c014a",
              tips: "135评价 月售163份",
              item_id: 6650,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "33",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1726d6f087c67504.jpg",
              name: "33",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "33",
                  item_id: 6650,
                  sku_id: 25298,
                  food_id: 25325,
                  restaurant_id: 1,
                  _id: "5ed9f7b44133f0644a9a6dfb",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 858,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.8,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 47,
              satisfy_count: 155,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-29T08:07:53.243Z",
              specifications: [],
              rating_count: 135,
              month_sales: 163,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5edb24854133f0644a9a70d5",
              tips: "682评价 月售664份",
              item_id: 6679,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "好的",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1728806be3367765.jpg",
              name: "炸土豆",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "炸土豆",
                  item_id: 6679,
                  sku_id: 25341,
                  food_id: 25368,
                  restaurant_id: 1,
                  _id: "5edb24854133f0644a9a70d6",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 777,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 36,
              satisfy_count: 213,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [],
              rating_count: 682,
              month_sales: 664,
              description: "大萨达",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5edb8e334133f0644a9a7162",
              tips: "229评价 月售551份",
              item_id: 6681,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "无",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1728ce8592467796.jpg",
              name: "卡姿兰",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "卡姿兰",
                  item_id: 6681,
                  sku_id: 25370,
                  food_id: 25397,
                  restaurant_id: 1,
                  _id: "5ede2ae34133f0644a9a73e3",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ede2ae34133f0644a9a73e4"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 388,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "31213",
                  name: "卡姿兰",
                  item_id: 6681,
                  sku_id: 25371,
                  food_id: 25398,
                  restaurant_id: 1,
                  _id: "5ede2ae34133f0644a9a73e1",
                  specs: [
                    {
                      name: "规格",
                      value: "31213",
                      _id: "5ede2ae34133f0644a9a73e2"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 814,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 67,
              satisfy_count: 152,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [
                {
                  values: ["默认", "31213"],
                  name: "规格"
                }
              ],
              rating_count: 229,
              month_sales: 551,
              description: "卡姿兰大眼睛你值得拥有",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5edf32734133f0644a9a7625",
              tips: "889评价 月售211份",
              item_id: 6689,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "17297dc6ccc67873.jpg",
              name: "火山飘雪",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "火山飘雪",
                  item_id: 6689,
                  sku_id: 25383,
                  food_id: 25410,
                  restaurant_id: 1,
                  _id: "5edf7a854133f0644a9a776d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 320,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 18,
              satisfy_count: 871,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [],
              rating_count: 889,
              month_sales: 211,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5ee31c8b4686b752e29ff8fc",
              tips: "745评价 月售55份",
              item_id: 6698,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "fgfhj"
              },
              image_path: "172a726498d67980.png",
              name: "1234561256",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1234561256",
                  item_id: 6698,
                  sku_id: 25550,
                  food_id: 25577,
                  restaurant_id: 1,
                  _id: "5ef85158ac911d23101483fb",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ef85158ac911d23101483fc"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 247,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "ddd",
                  name: "1234561256",
                  item_id: 6698,
                  sku_id: 25551,
                  food_id: 25578,
                  restaurant_id: 1,
                  _id: "5ef85158ac911d23101483f9",
                  specs: [
                    {
                      name: "规格",
                      value: "ddd",
                      _id: "5ef85158ac911d23101483fa"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 700,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 97,
              satisfy_count: 8,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-12T06:04:25.680Z",
              specifications: [
                {
                  values: ["默认", "ddd"],
                  name: "规格"
                }
              ],
              rating_count: 745,
              month_sales: 55,
              description: "请问",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5ef06e7729f2e165e11a2593",
              tips: "964评价 月售298份",
              item_id: 6718,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "qwerty"
              },
              image_path: "172e0590b5668632.jpg",
              name: "qwerty",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "qwerty",
                  item_id: 6718,
                  sku_id: 25469,
                  food_id: 25496,
                  restaurant_id: 1,
                  _id: "5ef214dd29f2e165e11a2ca5",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ef214dd29f2e165e11a2ca6"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 562,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "a",
                  name: "qwerty",
                  item_id: 6718,
                  sku_id: 25470,
                  food_id: 25497,
                  restaurant_id: 1,
                  _id: "5ef214dd29f2e165e11a2ca3",
                  specs: [
                    {
                      name: "规格",
                      value: "a",
                      _id: "5ef214dd29f2e165e11a2ca4"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 810,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "b",
                  name: "qwerty",
                  item_id: 6718,
                  sku_id: 25471,
                  food_id: 25498,
                  restaurant_id: 1,
                  _id: "5ef214dd29f2e165e11a2ca1",
                  specs: [
                    {
                      name: "规格",
                      value: "b",
                      _id: "5ef214dd29f2e165e11a2ca2"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 329,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 2.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "55",
                  name: "qwerty",
                  item_id: 6718,
                  sku_id: 25472,
                  food_id: 25499,
                  restaurant_id: 1,
                  _id: "5ef214dd29f2e165e11a2c9f",
                  specs: [
                    {
                      name: "规格",
                      value: "55",
                      _id: "5ef214dd29f2e165e11a2ca0"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 596,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "9",
                  name: "qwerty",
                  item_id: 6718,
                  sku_id: 25473,
                  food_id: 25500,
                  restaurant_id: 1,
                  _id: "5ef214dd29f2e165e11a2c9d",
                  specs: [
                    {
                      name: "规格",
                      value: "9",
                      _id: "5ef214dd29f2e165e11a2c9e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 193,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 77,
              satisfy_count: 264,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-19T09:53:12.204Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "a", "b", "55", "9"]
                }
              ],
              rating_count: 964,
              month_sales: 298,
              description: "qwerty",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5ee8e258dd7bf64dcd34e6e0",
              tips: "322评价 月售149份",
              item_id: 6702,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "172bdb4151968010.jpeg",
              name: "300",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "300",
                  item_id: 6702,
                  sku_id: 25486,
                  food_id: 25513,
                  restaurant_id: 1,
                  _id: "5ef46f9529f2e165e11a338a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 781,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 76,
              satisfy_count: 580,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-16T08:34:52.006Z",
              specifications: [],
              rating_count: 322,
              month_sales: 149,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5ee21915deb3f5424a968454",
              tips: "371评价 月售82份",
              item_id: 6696,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "qwe",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "172a3320f9367960.jpg",
              name: "qwe2222222222",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "qwe2222222222",
                  item_id: 6696,
                  sku_id: 25506,
                  food_id: 25533,
                  restaurant_id: 1,
                  _id: "5ef7119929f2e165e11a3741",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5ef7119929f2e165e11a3742"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 686,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.2,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "qwe2222222222",
                  item_id: 6696,
                  sku_id: 25507,
                  food_id: 25534,
                  restaurant_id: 1,
                  _id: "5ef7119929f2e165e11a373f",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5ef7119929f2e165e11a3740"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 428,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 77,
              satisfy_count: 355,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-11T09:28:18.148Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", ""]
                }
              ],
              rating_count: 371,
              month_sales: 82,
              description: "qwe",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5efae109a6248b771743fae3",
              tips: "364评价 月售136份",
              item_id: 6732,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "大甩卖"
              },
              image_path: "17303fecb6568953.jpg",
              name: "千年老乌龟",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "千年老乌龟",
                  item_id: 6732,
                  sku_id: 25603,
                  food_id: 25630,
                  restaurant_id: 1,
                  _id: "5efc9a6b96a3d461bd878f05",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5efc9a6b96a3d461bd878f06"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 271,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "222",
                  name: "千年老乌龟",
                  item_id: 6732,
                  sku_id: 25604,
                  food_id: 25631,
                  restaurant_id: 1,
                  _id: "5efc9a6b96a3d461bd878f03",
                  specs: [
                    {
                      name: "规格",
                      value: "222",
                      _id: "5efc9a6b96a3d461bd878f04"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 822,
                  sold_out: false,
                  price: 200,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 100,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "千年老乌龟",
                  item_id: 6732,
                  sku_id: 25605,
                  food_id: 25632,
                  restaurant_id: 1,
                  _id: "5efc9a6b96a3d461bd878f01",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5efc9a6b96a3d461bd878f02"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 115,
                  sold_out: false,
                  price: 2066,
                  promotion_stock: -1,
                  recent_rating: 2.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 75,
              satisfy_count: 576,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-29T06:46:55.522Z",
              specifications: [
                {
                  values: ["默认", "222", ""],
                  name: "规格"
                }
              ],
              rating_count: 364,
              month_sales: 136,
              description: "666",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5f01ceb3633ba675501d10ec",
              tips: "802评价 月售738份",
              item_id: 6747,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "asd"
              },
              image_path: "1731f0f761f69259.jpg",
              name: "辣条",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "辣条",
                  item_id: 6747,
                  sku_id: 25633,
                  food_id: 25660,
                  restaurant_id: 1,
                  _id: "5f01ceb3633ba675501d10ed",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 397,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 99,
              satisfy_count: 501,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-03T01:04:17.389Z",
              specifications: [],
              rating_count: 802,
              month_sales: 738,
              description: "可辣了",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5f04188cef3e3335ea8f3794",
              tips: "266评价 月售61份",
              item_id: 6757,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "123",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1732c49bbd769335.jpg",
              name: "小鸟伏特加67",
              __v: 0,
              specfoods: [
                {
                  specs_name: "4",
                  name: "小鸟伏特加67",
                  item_id: 6757,
                  sku_id: 25854,
                  food_id: 25881,
                  restaurant_id: 1,
                  _id: "5f22695ff3ffc74009e294c8",
                  specs: [
                    {
                      name: "规格",
                      value: "4",
                      _id: "5f22695ff3ffc74009e294c9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 599,
                  sold_out: false,
                  price: 27,
                  promotion_stock: -1,
                  recent_rating: 0.3,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "232",
                  name: "小鸟伏特加67",
                  item_id: 6757,
                  sku_id: 25855,
                  food_id: 25882,
                  restaurant_id: 1,
                  _id: "5f22695ff3ffc74009e294c6",
                  specs: [
                    {
                      name: "规格",
                      value: "232",
                      _id: "5f22695ff3ffc74009e294c7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 591,
                  sold_out: false,
                  price: 17,
                  promotion_stock: -1,
                  recent_rating: 0,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "343434",
                  name: "小鸟伏特加67",
                  item_id: 6757,
                  sku_id: 25856,
                  food_id: 25883,
                  restaurant_id: 1,
                  _id: "5f22695ff3ffc74009e294c4",
                  specs: [
                    {
                      name: "规格",
                      value: "343434",
                      _id: "5f22695ff3ffc74009e294c5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 69,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "8989",
                  name: "小鸟伏特加67",
                  item_id: 6757,
                  sku_id: 25857,
                  food_id: 25884,
                  restaurant_id: 1,
                  _id: "5f22695ff3ffc74009e294c2",
                  specs: [
                    {
                      name: "规格",
                      value: "8989",
                      _id: "5f22695ff3ffc74009e294c3"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 57,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 36,
              satisfy_count: 924,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-06T08:37:54.295Z",
              specifications: [
                {
                  name: "规格",
                  values: ["4", "232", "343434", "8989"]
                }
              ],
              rating_count: 266,
              month_sales: 61,
              description: "Z",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5f1952cdd60f415455b4d247",
              tips: "404评价 月售347份",
              item_id: 6781,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "qq"
              },
              image_path: "1737aeb832c69734.png",
              name: "qqq",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "qqq",
                  item_id: 6781,
                  sku_id: 25795,
                  food_id: 25822,
                  restaurant_id: 1,
                  _id: "5f1b9da8d5bf93139ddcc50a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 243,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 51,
              satisfy_count: 82,
              attributes: [],
              is_essential: false,
              server_utc: "2020-07-14T06:47:36.360Z",
              specifications: [],
              rating_count: 404,
              month_sales: 347,
              description: "qq66",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5f229890f3ffc74009e295db",
              tips: "308评价 月售615份",
              item_id: 6804,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "323",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1739f23c90f70347.png",
              name: "22323232",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "22323232",
                  item_id: 6804,
                  sku_id: 25864,
                  food_id: 25891,
                  restaurant_id: 1,
                  _id: "5f229890f3ffc74009e295dc",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 228,
                  sold_out: false,
                  price: 23,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 11,
              satisfy_count: 819,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-29T08:46:27.362Z",
              specifications: [],
              rating_count: 308,
              month_sales: 615,
              description: "232",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5f2298f3f3ffc74009e295e6",
              tips: "820评价 月售384份",
              item_id: 6806,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "23",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1739f25671c70348.png",
              name: "2323",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "2323",
                  item_id: 6806,
                  sku_id: 25866,
                  food_id: 25893,
                  restaurant_id: 1,
                  _id: "5f2298f3f3ffc74009e295e7",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 717,
                  sold_out: false,
                  price: 26,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 8,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 3,
              satisfy_count: 632,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-29T08:46:27.362Z",
              specifications: [],
              rating_count: 820,
              month_sales: 384,
              description: "23232",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5f236978f3ffc74009e2966d",
              tips: "846评价 月售815份",
              item_id: 6808,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "123",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "173a3ff708d70396.png",
              name: "毛毛测试",
              __v: 0,
              specfoods: [
                {
                  specs_name: "3333",
                  name: "毛毛测试",
                  item_id: 6808,
                  sku_id: 25896,
                  food_id: 25923,
                  restaurant_id: 1,
                  _id: "5f23d970f3ffc74009e29823",
                  specs: [
                    {
                      name: "规格",
                      value: "3333",
                      _id: "5f23d970f3ffc74009e29824"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 6,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "4444",
                  name: "毛毛测试",
                  item_id: 6808,
                  sku_id: 25897,
                  food_id: 25924,
                  restaurant_id: 1,
                  _id: "5f23d970f3ffc74009e29821",
                  specs: [
                    {
                      name: "规格",
                      value: "4444",
                      _id: "5f23d970f3ffc74009e29822"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 507,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.2,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "555",
                  name: "毛毛测试",
                  item_id: 6808,
                  sku_id: 25898,
                  food_id: 25925,
                  restaurant_id: 1,
                  _id: "5f23d970f3ffc74009e2981f",
                  specs: [
                    {
                      name: "规格",
                      value: "555",
                      _id: "5f23d970f3ffc74009e29820"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 498,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "6666",
                  name: "毛毛测试",
                  item_id: 6808,
                  sku_id: 25899,
                  food_id: 25926,
                  restaurant_id: 1,
                  _id: "5f23d970f3ffc74009e2981d",
                  specs: [
                    {
                      name: "规格",
                      value: "6666",
                      _id: "5f23d970f3ffc74009e2981e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 36,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 6,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 58,
              satisfy_count: 277,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-29T08:46:27.362Z",
              specifications: [
                {
                  name: "规格",
                  values: ["3333", "4444", "555", "6666"]
                }
              ],
              rating_count: 846,
              month_sales: 815,
              description: "毛毛蛋蛋",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 177
        },
        {
          name: "招牌",
          description: "招牌商品",
          restaurant_id: 1,
          id: 9200,
          foods: [
            {
              _id: "5df9c9fc7f5a6f2f4826ede7",
              tips: "593评价 月售414份",
              item_id: 6031,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "是的方法"
              },
              image_path: "16f17bcf1d161623.jpg",
              name: "佛跳墙",
              __v: 0,
              specfoods: [
                {
                  specs_name: "4个份",
                  name: "佛跳墙",
                  item_id: 6031,
                  sku_id: 24835,
                  food_id: 24862,
                  restaurant_id: 1,
                  _id: "5e85a2d0dd5b8d23f149618e",
                  specs: [
                    {
                      name: "规格",
                      value: "4个份",
                      _id: "5e85a2d0dd5b8d23f149618f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 646,
                  sold_out: false,
                  price: 80,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "6646",
                  name: "佛跳墙",
                  item_id: 6031,
                  sku_id: 24836,
                  food_id: 24863,
                  restaurant_id: 1,
                  _id: "5e85a2d0dd5b8d23f149618c",
                  specs: [
                    {
                      name: "规格",
                      value: "6646",
                      _id: "5e85a2d0dd5b8d23f149618d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 522,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 24,
              satisfy_count: 80,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [
                {
                  values: ["4个份", "6646"],
                  name: "规格"
                }
              ],
              rating_count: 593,
              month_sales: 414,
              description:
                "世间万物有光的地方必有影567，正因为想要守护爱，才会衍生出憎恨，它们彼此间存在着因果关系",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e0166b1de911551beafaa12",
              tips: "100评价 月售184份",
              item_id: 6050,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "带我去",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f35790f4462025.jpg",
              name: "动物的",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "动物的",
                  item_id: 6050,
                  sku_id: 23683,
                  food_id: 23710,
                  restaurant_id: 1,
                  _id: "5e01701bde911551beafaa92",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e01701bde911551beafaa93"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 285,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "动物的",
                  item_id: 6050,
                  sku_id: 23684,
                  food_id: 23711,
                  restaurant_id: 1,
                  _id: "5e01701bde911551beafaa90",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e01701bde911551beafaa91"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 124,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 11,
              satisfy_count: 431,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  values: ["默认", ""],
                  name: "规格"
                }
              ],
              rating_count: 100,
              month_sales: 184,
              description: "打威群岛",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e018b14de911551beafad0f",
              tips: "69评价 月售295份",
              item_id: 6054,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "单位"
              },
              image_path: "16f360745c262050.jpg",
              name: "行啊",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "行啊",
                  item_id: 6054,
                  sku_id: 23691,
                  food_id: 23718,
                  restaurant_id: 1,
                  _id: "5e018b14de911551beafad10",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 207,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 1,
              satisfy_count: 841,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 69,
              month_sales: 295,
              description: "大旗网·",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e01ae08de911551beafafe7",
              tips: "940评价 月售515份",
              item_id: 6083,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "谔谔",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f368465cf62055.jpg",
              name: "呃1额",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "呃1额",
                  item_id: 6083,
                  sku_id: 23770,
                  food_id: 23797,
                  restaurant_id: 1,
                  _id: "5e03289db007cd415b6b601e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 281,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 28,
              satisfy_count: 330,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 940,
              month_sales: 515,
              description: "额为",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e01ccacf58062216abea832",
              tips: "971评价 月售748份",
              item_id: 6116,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "dd"
              },
              image_path: "16f3707760262072.jpg",
              name: "dqwdw",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "dqwdw",
                  item_id: 6116,
                  sku_id: 23704,
                  food_id: 23731,
                  restaurant_id: 1,
                  _id: "5e01ccacf58062216abea833",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 987,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 85,
              satisfy_count: 886,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [],
              rating_count: 971,
              month_sales: 748,
              description: "d",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e01cdb3f58062216abea856",
              tips: "439评价 月售109份",
              item_id: 6118,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "d",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170a909c09664654.jpg",
              name: "dd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "dd",
                  item_id: 6118,
                  sku_id: 24503,
                  food_id: 24530,
                  restaurant_id: 1,
                  _id: "5e60858b942e5767f50a2903",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 460,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 22,
              satisfy_count: 644,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [],
              rating_count: 439,
              month_sales: 109,
              description: "d",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e17f6776901211bf3ada0cb",
              tips: "79评价 月售376份",
              item_id: 6207,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "234234",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f8e1c564162845.jpg",
              name: "2342",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "2342",
                  item_id: 6207,
                  sku_id: 24061,
                  food_id: 24088,
                  restaurant_id: 1,
                  _id: "5e183ee46901211bf3ada3bb",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e183ee46901211bf3ada3bc"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 857,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "rrrrr",
                  name: "2342",
                  item_id: 6207,
                  sku_id: 24062,
                  food_id: 24089,
                  restaurant_id: 1,
                  _id: "5e183ee46901211bf3ada3b9",
                  specs: [
                    {
                      name: "规格",
                      value: "rrrrr",
                      _id: "5e183ee46901211bf3ada3ba"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 99,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 67,
              satisfy_count: 451,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["默认", "rrrrr"],
                  name: "规格"
                }
              ],
              rating_count: 79,
              month_sales: 376,
              description: "234234",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e2128210236b14725d394e1",
              tips: "184评价 月售796份",
              item_id: 6277,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "ggggggg",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16fb184c38163200.png",
              name: "ggg",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ggg",
                  item_id: 6277,
                  sku_id: 24318,
                  food_id: 24345,
                  restaurant_id: 1,
                  _id: "5e4cc5287965b0076407540b",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e4cc5287965b0076407540c"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 982,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "反倒是",
                  name: "ggg",
                  item_id: 6277,
                  sku_id: 24319,
                  food_id: 24346,
                  restaurant_id: 1,
                  _id: "5e4cc5287965b00764075409",
                  specs: [
                    {
                      name: "规格",
                      value: "反倒是",
                      _id: "5e4cc5287965b0076407540a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 367,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 94,
              satisfy_count: 14,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [
                {
                  values: ["默认", "反倒是"],
                  name: "规格"
                }
              ],
              rating_count: 184,
              month_sales: 796,
              description: "ggggggggggg",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e018b94de911551beafad3f",
              tips: "149评价 月售121份",
              item_id: 6055,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "额外人",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f3609326462051.jpg",
              name: "让r热热恶人",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "让r热热恶人",
                  item_id: 6055,
                  sku_id: 24250,
                  food_id: 24277,
                  restaurant_id: 1,
                  _id: "5e3ab147c9a05328e662220d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 918,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 61,
              satisfy_count: 523,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 149,
              month_sales: 121,
              description: "却热情",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e3d6a64eccd9c1bec9d5c39",
              tips: "212评价 月售755份",
              item_id: 6327,
              category_id: 9200,
              restaurant_id: 1,
              activity: null,
              image_path: "1701fe717f863642.jpg",
              name: "123123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24506,
                  food_id: 24533,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a29a6",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e60ae40942e5767f50a29a7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 413,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "各人给",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24507,
                  food_id: 24534,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a29a4",
                  specs: [
                    {
                      name: "规格",
                      value: "各人给",
                      _id: "5e60ae40942e5767f50a29a5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 181,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "国人通过",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24508,
                  food_id: 24535,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a29a2",
                  specs: [
                    {
                      name: "规格",
                      value: "国人通过",
                      _id: "5e60ae40942e5767f50a29a3"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 929,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "入股",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24509,
                  food_id: 24536,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a29a0",
                  specs: [
                    {
                      name: "规格",
                      value: "入股",
                      _id: "5e60ae40942e5767f50a29a1"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 232,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "非共和国",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24510,
                  food_id: 24537,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a299e",
                  specs: [
                    {
                      name: "规格",
                      value: "非共和国",
                      _id: "5e60ae40942e5767f50a299f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 581,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "沟通",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24511,
                  food_id: 24538,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a299c",
                  specs: [
                    {
                      name: "规格",
                      value: "沟通",
                      _id: "5e60ae40942e5767f50a299d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 969,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 5,
              satisfy_count: 836,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-06T12:31:15.380Z",
              specifications: [
                {
                  values: [
                    "默认",
                    "各人给",
                    "国人通过",
                    "入股",
                    "非共和国",
                    "沟通"
                  ],
                  name: "规格"
                }
              ],
              rating_count: 212,
              month_sales: 755,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e58c142942e5767f50a1470",
              tips: "750评价 月售810份",
              item_id: 6381,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "ttt"
              },
              image_path: "1708ab2ffca64434.png",
              name: "ttt",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ttt",
                  item_id: 6381,
                  sku_id: 24606,
                  food_id: 24633,
                  restaurant_id: 1,
                  _id: "5e6b14c0942e5767f50a4449",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 230,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 33,
              satisfy_count: 443,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 750,
              month_sales: 810,
              description: "tttt",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e70b70c07e5ca4f7d1d84cd",
              tips: "267评价 月售806份",
              item_id: 6456,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "没有",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170e84aba6a65086.jpeg",
              name: "11111111111111111111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "11111111111111111111",
                  item_id: 6456,
                  sku_id: 24775,
                  food_id: 24802,
                  restaurant_id: 1,
                  _id: "5e7b447add5b8d23f14944f8",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7b447add5b8d23f14944f9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 24,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "ASD AS D",
                  name: "11111111111111111111",
                  item_id: 6456,
                  sku_id: 24776,
                  food_id: 24803,
                  restaurant_id: 1,
                  _id: "5e7b447add5b8d23f14944f6",
                  specs: [
                    {
                      name: "规格",
                      value: "ASD AS D",
                      _id: "5e7b447add5b8d23f14944f7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 652,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 76,
              satisfy_count: 224,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "ASD AS D"]
                }
              ],
              rating_count: 267,
              month_sales: 806,
              description: "111111111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e7bfb67dd5b8d23f14945f9",
              tips: "42评价 月售486份",
              item_id: 6492,
              category_id: 9200,
              restaurant_id: 1,
              activity: null,
              image_path: "17121ce275365484.png",
              name: "20200326",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "20200326",
                  item_id: 6492,
                  sku_id: 24804,
                  food_id: 24831,
                  restaurant_id: 1,
                  _id: "5e7f7025dd5b8d23f14950d8",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 952,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 82,
              satisfy_count: 310,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [],
              rating_count: 42,
              month_sales: 486,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e8358cedd5b8d23f1495a6e",
              tips: "680评价 月售943份",
              item_id: 6505,
              category_id: 9200,
              restaurant_id: 1,
              activity: null,
              image_path: "171354f38bf65674.png",
              name: "1232132233333333",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1232132233333333",
                  item_id: 6505,
                  sku_id: 24878,
                  food_id: 24905,
                  restaurant_id: 1,
                  _id: "5e8af6cac5780f6b71681447",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 310,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 63,
              satisfy_count: 457,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [],
              rating_count: 680,
              month_sales: 943,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e9eab4778a583389c883fb4",
              tips: "85评价 月售166份",
              item_id: 6570,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "123"
              },
              image_path: "1719bccef2766466.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6570,
                  sku_id: 24955,
                  food_id: 24982,
                  restaurant_id: 1,
                  _id: "5e9eab4778a583389c883fb5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 352,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 96,
              satisfy_count: 814,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-04-18T12:58:25.260Z",
              specifications: [],
              rating_count: 85,
              month_sales: 166,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5ece0f15c2a22c2993e4e592",
              tips: "160评价 月售801份",
              item_id: 6638,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "12121",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17254eaff2167405.png",
              name: "121212222222222",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "121212222222222",
                  item_id: 6638,
                  sku_id: 25617,
                  food_id: 25644,
                  restaurant_id: 1,
                  _id: "5efe8d89633ba675501d0ca8",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5efe8d89633ba675501d0ca9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 706,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "8999",
                  name: "121212222222222",
                  item_id: 6638,
                  sku_id: 25618,
                  food_id: 25645,
                  restaurant_id: 1,
                  _id: "5efe8d89633ba675501d0ca6",
                  specs: [
                    {
                      name: "规格",
                      value: "8999",
                      _id: "5efe8d89633ba675501d0ca7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 977,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 63,
              satisfy_count: 970,
              attributes: [],
              is_essential: false,
              server_utc: "2020-05-26T02:45:36.559Z",
              specifications: [
                {
                  values: ["默认", "8999"],
                  name: "规格"
                }
              ],
              rating_count: 160,
              month_sales: 801,
              description: "121212",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5ed5f0e411943c38555c04d6",
              tips: "211评价 月售733份",
              item_id: 6655,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "adc",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17273b519de67538.png",
              name: "adc",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "adc",
                  item_id: 6655,
                  sku_id: 25257,
                  food_id: 25284,
                  restaurant_id: 1,
                  _id: "5ed85f3d4133f0644a9a6617",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 189,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 14,
              satisfy_count: 204,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                },
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-29T08:07:53.243Z",
              specifications: [],
              rating_count: 211,
              month_sales: 733,
              description: "adc",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5ed9f3d74133f0644a9a6da4",
              tips: "964评价 月售266份",
              item_id: 6668,
              category_id: 9200,
              restaurant_id: 1,
              activity: null,
              image_path: "17283427e9167720.jpg",
              name: "22344",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "22344",
                  item_id: 6668,
                  sku_id: 25321,
                  food_id: 25348,
                  restaurant_id: 1,
                  _id: "5eda3c9b4133f0644a9a6f1b",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5eda3c9b4133f0644a9a6f1c"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 671,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "yyyy",
                  name: "22344",
                  item_id: 6668,
                  sku_id: 25322,
                  food_id: 25349,
                  restaurant_id: 1,
                  _id: "5eda3c9b4133f0644a9a6f19",
                  specs: [
                    {
                      name: "规格",
                      value: "yyyy",
                      _id: "5eda3c9b4133f0644a9a6f1a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 667,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "yyyy",
                  name: "22344",
                  item_id: 6668,
                  sku_id: 25323,
                  food_id: 25350,
                  restaurant_id: 1,
                  _id: "5eda3c9b4133f0644a9a6f17",
                  specs: [
                    {
                      name: "规格",
                      value: "yyyy",
                      _id: "5eda3c9b4133f0644a9a6f18"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 569,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 81,
              satisfy_count: 87,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [
                {
                  values: ["默认", "yyyy", "yyyy"],
                  name: "规格"
                }
              ],
              rating_count: 964,
              month_sales: 266,
              description: "yyy",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5edc58234133f0644a9a71ed",
              tips: "81评价 月售44份",
              item_id: 6683,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "da",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17297165fdb67868.jpg",
              name: "cassssss",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "cassssss",
                  item_id: 6683,
                  sku_id: 25375,
                  food_id: 25402,
                  restaurant_id: 1,
                  _id: "5edeff974133f0644a9a7553",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 860,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 20,
              satisfy_count: 764,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [],
              rating_count: 81,
              month_sales: 44,
              description: "da",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5edda6e64133f0644a9a72fe",
              tips: "454评价 月售11份",
              item_id: 6684,
              category_id: 9200,
              restaurant_id: 1,
              activity: null,
              image_path: "17291d4066b67809.png",
              name: "测试",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "测试",
                  item_id: 6684,
                  sku_id: 25363,
                  food_id: 25390,
                  restaurant_id: 1,
                  _id: "5eddf3bf4133f0644a9a7387",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5eddf3bf4133f0644a9a7388"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 453,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "123",
                  name: "测试",
                  item_id: 6684,
                  sku_id: 25364,
                  food_id: 25391,
                  restaurant_id: 1,
                  _id: "5eddf3bf4133f0644a9a7385",
                  specs: [
                    {
                      name: "规格",
                      value: "123",
                      _id: "5eddf3bf4133f0644a9a7386"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 313,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 61,
              satisfy_count: 566,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "123"]
                }
              ],
              rating_count: 454,
              month_sales: 11,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5edb255a4133f0644a9a70d7",
              tips: "854评价 月售863份",
              item_id: 6680,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "特价"
              },
              image_path: "1728809ebb967766.jpg",
              name: "土",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "土",
                  item_id: 6680,
                  sku_id: 25396,
                  food_id: 25423,
                  restaurant_id: 1,
                  _id: "5ee22f8326de726c486c6477",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 881,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 79,
              satisfy_count: 474,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [],
              rating_count: 854,
              month_sales: 863,
              description: "佳肴",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5edf7c984133f0644a9a7775",
              tips: "318评价 月售161份",
              item_id: 6693,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "23443243",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17298fec42267889.jpg",
              name: "342424327",
              __v: 0,
              specfoods: [
                {
                  specs_name: "asd ",
                  name: "342424327",
                  item_id: 6693,
                  sku_id: 25409,
                  food_id: 25436,
                  restaurant_id: 1,
                  _id: "5ee36729e44da40941113205",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 531,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 51,
              satisfy_count: 951,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                },
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [],
              rating_count: 318,
              month_sales: 161,
              description: "234432432423432324342342342342",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5f18de23d60f415455b4d10d",
              tips: "956评价 月售352份",
              item_id: 6777,
              category_id: 9200,
              restaurant_id: 1,
              activity: null,
              image_path: "1737923bcc269696.jpg",
              name: "111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6777,
                  sku_id: 25754,
                  food_id: 25781,
                  restaurant_id: 1,
                  _id: "5f18de23d60f415455b4d10e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 561,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 50,
              satisfy_count: 152,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-14T06:47:36.360Z",
              specifications: [],
              rating_count: 956,
              month_sales: 352,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 77
        },
        {
          name: "测试榜",
          description: "测试用",
          restaurant_id: 1,
          id: 9253,
          foods: [
            {
              _id: "5e0985dc6901211bf3ad7d21",
              tips: "471评价 月售691份",
              item_id: 6159,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "wqeewq",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f5532bb5762391.jpg",
              name: "qeqwqw",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "qeqwqw",
                  item_id: 6159,
                  sku_id: 23884,
                  food_id: 23911,
                  restaurant_id: 1,
                  _id: "5e0985dc6901211bf3ad7d22",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 361,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 18,
              satisfy_count: 622,
              attributes: [null],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 471,
              month_sales: 691,
              description: "wqe",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e158a176901211bf3ad9582",
              tips: "585评价 月售883份",
              item_id: 6195,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "3543"
              },
              image_path: "16f84cd66a862742.jpg",
              name: "343535555",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "343535555",
                  item_id: 6195,
                  sku_id: 24017,
                  food_id: 24044,
                  restaurant_id: 1,
                  _id: "5e15b5986901211bf3ad97ff",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 755,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 4,
              satisfy_count: 365,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 585,
              month_sales: 883,
              description: "33",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e204c6b0236b14725d39377",
              tips: "909评价 月售995份",
              item_id: 6274,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "第三方",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16fae2aa18e63190.jpg",
              name: "阿斯蒂芬a",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "阿斯蒂芬a",
                  item_id: 6274,
                  sku_id: 24111,
                  food_id: 24138,
                  restaurant_id: 1,
                  _id: "5e204c6b0236b14725d39378",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 225,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 34,
              satisfy_count: 373,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 909,
              month_sales: 995,
              description: "的说法",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e23c6b00236b14725d399d6",
              tips: "988评价 月售720份",
              item_id: 6281,
              category_id: 9253,
              restaurant_id: 1,
              activity: null,
              image_path: "16fbbc018cf63313.jpg",
              name: "hffchx132",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "hffchx132",
                  item_id: 6281,
                  sku_id: 24164,
                  food_id: 24191,
                  restaurant_id: 1,
                  _id: "5e2b06fcdb7fe12148569255",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 463,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 20,
              satisfy_count: 124,
              attributes: [],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 988,
              month_sales: 720,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5df9c9227f5a6f2f4826edd0",
              tips: "829评价 月售442份",
              item_id: 6029,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "的沙发舒服",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f17b95dfa61619.jpg",
              name: "番茄炒蛋",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "番茄炒蛋",
                  item_id: 6029,
                  sku_id: 24573,
                  food_id: 24600,
                  restaurant_id: 1,
                  _id: "5e688dcc942e5767f50a3cce",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 152,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 94,
              satisfy_count: 16,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [],
              rating_count: 829,
              month_sales: 442,
              description:
                "琳她曾经是我唯一的光明，失去了琳之后，我所看到地狱。这个世界里全是灰烬没有希望，即使我顶着斑的名字走遍世界各地，但是看到的只是更加让我确信这一点，就算我拥有着写轮眼还是什么都看不到",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e5df71f942e5767f50a2133",
              tips: "743评价 月售673份",
              item_id: 6397,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "test",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1709f0d18b964550.jpg",
              name: "test",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "test",
                  item_id: 6397,
                  sku_id: 24498,
                  food_id: 24525,
                  restaurant_id: 1,
                  _id: "5e5fe7a5942e5767f50a285d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 553,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 22,
              satisfy_count: 133,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 743,
              month_sales: 673,
              description: "test",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e5f6227942e5767f50a25f3",
              tips: "496评价 月售951份",
              item_id: 6402,
              category_id: 9253,
              restaurant_id: 1,
              activity: null,
              image_path: "170a4978b4f64607.jpg",
              name: "测试1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "50",
                  name: "测试1",
                  item_id: 6402,
                  sku_id: 24527,
                  food_id: 24554,
                  restaurant_id: 1,
                  _id: "5e61e8f0942e5767f50a2d8f",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 6,
                  sold_out: false,
                  price: 32,
                  promotion_stock: -1,
                  recent_rating: 0.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 15,
              satisfy_count: 291,
              attributes: [],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 496,
              month_sales: 951,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e70468807e5ca4f7d1d8318",
              tips: "725评价 月售397份",
              item_id: 6453,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "测试上午"
              },
              image_path: "170e6936dc665059.png",
              name: "测试事务",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "测试事务",
                  item_id: 6453,
                  sku_id: 24631,
                  food_id: 24658,
                  restaurant_id: 1,
                  _id: "5e70468807e5ca4f7d1d8319",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 575,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 74,
              satisfy_count: 798,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 725,
              month_sales: 397,
              description: "测试稍微",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e7c672fdd5b8d23f14948d2",
              tips: "23评价 月售465份",
              item_id: 6496,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "11",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17115f30a4865415.jpg",
              name: "11",
              __v: 0,
              specfoods: [
                {
                  specs_name: "ewqe ",
                  name: "11",
                  item_id: 6496,
                  sku_id: 24795,
                  food_id: 24822,
                  restaurant_id: 1,
                  _id: "5e7c6bebdd5b8d23f14948f7",
                  specs: [
                    {
                      name: "规格",
                      value: "ewqe ",
                      _id: "5e7c6bebdd5b8d23f14948f8"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 782,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "rr ",
                  name: "11",
                  item_id: 6496,
                  sku_id: 24796,
                  food_id: 24823,
                  restaurant_id: 1,
                  _id: "5e7c6bebdd5b8d23f14948f5",
                  specs: [
                    {
                      name: "规格",
                      value: "rr ",
                      _id: "5e7c6bebdd5b8d23f14948f6"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 595,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 92,
              satisfy_count: 229,
              attributes: [],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [
                {
                  values: ["ewqe ", "rr "],
                  name: "规格"
                }
              ],
              rating_count: 23,
              month_sales: 465,
              description: "111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5eb3f01781d8b2675d1ceb22",
              tips: "240评价 月售238份",
              item_id: 6607,
              category_id: 9253,
              restaurant_id: 1,
              activity: null,
              image_path: "171eee1d80066885.jpg",
              name: "大还丹",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "大还丹",
                  item_id: 6607,
                  sku_id: 25140,
                  food_id: 25167,
                  restaurant_id: 1,
                  _id: "5eba09aa81d8b2675d1cf53e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 416,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 77,
              satisfy_count: 23,
              attributes: [],
              is_essential: false,
              server_utc: "2020-05-04T07:36:18.436Z",
              specifications: [],
              rating_count: 240,
              month_sales: 238,
              description: "回复生命值",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5ed8ae274133f0644a9a6795",
              tips: "708评价 月售491份",
              item_id: 6663,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "33",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17283681b6d67729.png",
              name: "22",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "22",
                  item_id: 6663,
                  sku_id: 25628,
                  food_id: 25655,
                  restaurant_id: 1,
                  _id: "5f003017633ba675501d0f75",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5f003017633ba675501d0f76"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 451,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "啊啊啊",
                  name: "22",
                  item_id: 6663,
                  sku_id: 25629,
                  food_id: 25656,
                  restaurant_id: 1,
                  _id: "5f003017633ba675501d0f73",
                  specs: [
                    {
                      name: "规格",
                      value: "啊啊啊",
                      _id: "5f003017633ba675501d0f74"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 965,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 47,
              satisfy_count: 236,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-03T08:27:27.566Z",
              specifications: [
                {
                  values: ["", "啊啊啊"],
                  name: "规格"
                }
              ],
              rating_count: 708,
              month_sales: 491,
              description: "22",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5f02db13d2ff6678bd7f0780",
              tips: "463评价 月售324份",
              item_id: 6752,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "11",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1732326e21e69280.png",
              name: "11",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "11",
                  item_id: 6752,
                  sku_id: 25652,
                  food_id: 25679,
                  restaurant_id: 1,
                  _id: "5f02db13d2ff6678bd7f0781",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 405,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 62,
              satisfy_count: 264,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-05T16:49:46.627Z",
              specifications: [],
              rating_count: 463,
              month_sales: 324,
              description: "11",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5f16424ad60f415455b4cb1a",
              tips: "723评价 月售673份",
              item_id: 6771,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "232",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1736ef1b05869617.png",
              name: "文件66666666666666666",
              __v: 0,
              specfoods: [
                {
                  specs_name: "3232",
                  name: "文件66666666666666666",
                  item_id: 6771,
                  sku_id: 25781,
                  food_id: 25808,
                  restaurant_id: 1,
                  _id: "5f1aa213d5bf93139ddcc438",
                  specs: [
                    {
                      name: "规格",
                      value: "3232",
                      _id: "5f1aa213d5bf93139ddcc439"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 537,
                  sold_out: false,
                  price: 24,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "we",
                  name: "文件66666666666666666",
                  item_id: 6771,
                  sku_id: 25782,
                  food_id: 25809,
                  restaurant_id: 1,
                  _id: "5f1aa213d5bf93139ddcc436",
                  specs: [
                    {
                      name: "规格",
                      value: "we",
                      _id: "5f1aa213d5bf93139ddcc437"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 62,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.5,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 94,
              satisfy_count: 929,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-14T06:47:36.360Z",
              specifications: [
                {
                  values: ["3232", "we"],
                  name: "规格"
                }
              ],
              rating_count: 723,
              month_sales: 673,
              description: "342111166666666666666666666666",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5f20e086d5bf93139ddccc4c",
              tips: "778评价 月售705份",
              item_id: 6797,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "对对对"
              },
              image_path: "1739e5daddb70253.png",
              name: "safas111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "fasfa",
                  name: "safas111",
                  item_id: 6797,
                  sku_id: 25843,
                  food_id: 25870,
                  restaurant_id: 1,
                  _id: "5f22662ef3ffc74009e29493",
                  specs: [
                    {
                      name: "规格",
                      value: "fasfa",
                      _id: "5f22662ef3ffc74009e29494"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 353,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "34343",
                  name: "safas111",
                  item_id: 6797,
                  sku_id: 25844,
                  food_id: 25871,
                  restaurant_id: 1,
                  _id: "5f22662ef3ffc74009e29491",
                  specs: [
                    {
                      name: "规格",
                      value: "34343",
                      _id: "5f22662ef3ffc74009e29492"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 885,
                  sold_out: false,
                  price: 23,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "4343",
                  name: "safas111",
                  item_id: 6797,
                  sku_id: 25845,
                  food_id: 25872,
                  restaurant_id: 1,
                  _id: "5f22662ef3ffc74009e2948f",
                  specs: [
                    {
                      name: "规格",
                      value: "4343",
                      _id: "5f22662ef3ffc74009e29490"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 788,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 2.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "344343",
                  name: "safas111",
                  item_id: 6797,
                  sku_id: 25846,
                  food_id: 25873,
                  restaurant_id: 1,
                  _id: "5f22662ef3ffc74009e2948d",
                  specs: [
                    {
                      name: "规格",
                      value: "344343",
                      _id: "5f22662ef3ffc74009e2948e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 435,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 62,
              satisfy_count: 491,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-23T15:18:34.719Z",
              specifications: [
                {
                  values: ["fasfa", "34343", "4343", "344343"],
                  name: "规格"
                }
              ],
              rating_count: 778,
              month_sales: 705,
              description: "fsafa113",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 50
        },
        {
          name: "tytryu",
          description: "rtyr ",
          restaurant_id: 1,
          id: 9258,
          foods: [
            {
              _id: "5e01a46ade911551beafaedc",
              tips: "175评价 月售301份",
              item_id: 6073,
              category_id: 9258,
              restaurant_id: 1,
              activity: {
                image_text: "我的",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f3669c52d62053.jpg",
              name: "饿我去",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "饿我去",
                  item_id: 6073,
                  sku_id: 23693,
                  food_id: 23720,
                  restaurant_id: 1,
                  _id: "5e01a46ade911551beafaedd",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 790,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 27,
              satisfy_count: 214,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 175,
              month_sales: 301,
              description: "胃",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e783d166c41e733f7bd6a5b",
              tips: "156评价 月售845份",
              item_id: 6479,
              category_id: 9258,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "5月20号"
              },
              image_path: "17105db879165263.jpg",
              name: "辣条",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "辣条",
                  item_id: 6479,
                  sku_id: 24753,
                  food_id: 24780,
                  restaurant_id: 1,
                  _id: "5e7974ba6c41e733f7bd6e56",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7974ba6c41e733f7bd6e57"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 914,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "qwerqwer",
                  name: "辣条",
                  item_id: 6479,
                  sku_id: 24754,
                  food_id: 24781,
                  restaurant_id: 1,
                  _id: "5e7974ba6c41e733f7bd6e54",
                  specs: [
                    {
                      name: "规格",
                      value: "qwerqwer",
                      _id: "5e7974ba6c41e733f7bd6e55"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 46,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 42,
              satisfy_count: 631,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-23T03:37:58.008Z",
              specifications: [
                {
                  values: ["默认", "qwerqwer"],
                  name: "规格"
                }
              ],
              rating_count: 156,
              month_sales: 845,
              description: "额嗯嗯呢",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5f04189aef3e3335ea8f3796",
              tips: "405评价 月售464份",
              item_id: 6758,
              category_id: 9258,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "大萨达撒"
              },
              image_path: "17370c6770669659.jpg",
              name: "爬",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "爬",
                  item_id: 6758,
                  sku_id: 25740,
                  food_id: 25767,
                  restaurant_id: 1,
                  _id: "5f16b9fbd60f415455b4cd19",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5f16b9fbd60f415455b4cd1a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 182,
                  sold_out: false,
                  price: 1,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 100,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "爬",
                  item_id: 6758,
                  sku_id: 25741,
                  food_id: 25768,
                  restaurant_id: 1,
                  _id: "5f16b9fbd60f415455b4cd17",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5f16b9fbd60f415455b4cd18"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 568,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "dg",
                  name: "爬",
                  item_id: 6758,
                  sku_id: 25742,
                  food_id: 25769,
                  restaurant_id: 1,
                  _id: "5f16b9fbd60f415455b4cd15",
                  specs: [
                    {
                      name: "规格",
                      value: "dg",
                      _id: "5f16b9fbd60f415455b4cd16"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 873,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "ert",
                  name: "爬",
                  item_id: 6758,
                  sku_id: 25743,
                  food_id: 25770,
                  restaurant_id: 1,
                  _id: "5f16b9fbd60f415455b4cd13",
                  specs: [
                    {
                      name: "规格",
                      value: "ert",
                      _id: "5f16b9fbd60f415455b4cd14"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 969,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 4.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 78,
              satisfy_count: 249,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-06T08:37:54.295Z",
              specifications: [
                {
                  values: ["默认", "", "dg", "ert"],
                  name: "规格"
                }
              ],
              rating_count: 405,
              month_sales: 464,
              description: "米其林大厨刘雨杭亲自试吃 ！强力推荐！不买后悔三年",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 6
        },
        {
          name: "5后天",
          description: "GRE",
          restaurant_id: 1,
          id: 9273,
          foods: [
            {
              _id: "5e16e2c16901211bf3ad9c5c",
              tips: "333评价 月售126份",
              item_id: 6199,
              category_id: 9273,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "我去。。。"
              },
              image_path: "16f8b5c18d462815.jpg",
              name: "猪猪侠",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "猪猪侠",
                  item_id: 6199,
                  sku_id: 24086,
                  food_id: 24113,
                  restaurant_id: 1,
                  _id: "5e1d7a886901211bf3adb0a8",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e1d7a886901211bf3adb0a9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 523,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "辣条",
                  name: "猪猪侠",
                  item_id: 6199,
                  sku_id: 24087,
                  food_id: 24114,
                  restaurant_id: 1,
                  _id: "5e1d7a886901211bf3adb0a6",
                  specs: [
                    {
                      name: "规格",
                      value: "辣条",
                      _id: "5e1d7a886901211bf3adb0a7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 562,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 31,
              satisfy_count: 468,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["默认", "辣条"],
                  name: "规格"
                }
              ],
              rating_count: 333,
              month_sales: 126,
              description: "超级好吃",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5f02da1cd2ff6678bd7f0778",
              tips: "671评价 月售228份",
              item_id: 6751,
              category_id: 9273,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "111"
              },
              image_path: "1732323c96569279.png",
              name: "11",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "11",
                  item_id: 6751,
                  sku_id: 25660,
                  food_id: 25687,
                  restaurant_id: 1,
                  _id: "5f043524ef3e3335ea8f37db",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5f043524ef3e3335ea8f37dc"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 443,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "配送费",
                  name: "11",
                  item_id: 6751,
                  sku_id: 25661,
                  food_id: 25688,
                  restaurant_id: 1,
                  _id: "5f043524ef3e3335ea8f37d9",
                  specs: [
                    {
                      name: "规格",
                      value: "配送费",
                      _id: "5f043524ef3e3335ea8f37da"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 939,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 50,
              satisfy_count: 483,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-05T16:49:46.627Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "配送费"]
                }
              ],
              rating_count: 671,
              month_sales: 228,
              description: "11",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5efc5e7096a3d461bd878e69",
              tips: "818评价 月售192份",
              item_id: 6738,
              category_id: 9273,
              restaurant_id: 1,
              activity: {
                image_text: "dsds",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17309d0f04469140.jpg",
              name: "ds",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "ds",
                  item_id: 6738,
                  sku_id: 25673,
                  food_id: 25700,
                  restaurant_id: 1,
                  _id: "5f09d76351e0d916d7a599e3",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 933,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 28,
              satisfy_count: 407,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-06-30T08:41:05.483Z",
              specifications: [],
              rating_count: 818,
              month_sales: 192,
              description: "sdsd",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 16
        },
        {
          name: "d1d1",
          description: "d1d1",
          restaurant_id: 1,
          id: 9295,
          foods: [
            {
              _id: "5e007accde911551beafa735",
              tips: "46评价 月售90份",
              item_id: 6046,
              category_id: 9295,
              restaurant_id: 1,
              activity: null,
              image_path: "16f3233b38f62010.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6046,
                  sku_id: 24121,
                  food_id: 24148,
                  restaurant_id: 1,
                  _id: "5e216b080236b14725d39686",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e216b080236b14725d39687"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 780,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "我的名字",
                  name: "1",
                  item_id: 6046,
                  sku_id: 24122,
                  food_id: 24149,
                  restaurant_id: 1,
                  _id: "5e216b080236b14725d39684",
                  specs: [
                    {
                      name: "规格",
                      value: "我的名字",
                      _id: "5e216b080236b14725d39685"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 241,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 99,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 39,
              satisfy_count: 764,
              attributes: [],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  values: ["默认", "我的名字"],
                  name: "规格"
                }
              ],
              rating_count: 46,
              month_sales: 90,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e674419942e5767f50a39cc",
              tips: "759评价 月售440份",
              item_id: 6424,
              category_id: 9295,
              restaurant_id: 1,
              activity: {
                image_text: "4567",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170c361f0fc64831.jpg",
              name: "4567",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "4567",
                  item_id: 6424,
                  sku_id: 24564,
                  food_id: 24591,
                  restaurant_id: 1,
                  _id: "5e674419942e5767f50a39cd",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 572,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 88,
              satisfy_count: 525,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 759,
              month_sales: 440,
              description: "4567",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5f1a4b5dd5bf93139ddcc2de",
              tips: "236评价 月售41份",
              item_id: 6783,
              category_id: 9295,
              restaurant_id: 1,
              activity: null,
              image_path: "1737eb6574d69742.jpg",
              name: "哈哈hahaha",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "哈哈hahaha",
                  item_id: 6783,
                  sku_id: 25824,
                  food_id: 25851,
                  restaurant_id: 1,
                  _id: "5f1fdc21d5bf93139ddccb0b",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 631,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 50,
              satisfy_count: 667,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-23T15:18:34.719Z",
              specifications: [],
              rating_count: 236,
              month_sales: 41,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 4
        },
        {
          name: "鲁班",
          description: "单位",
          restaurant_id: 1,
          id: 9300,
          foods: [
            {
              _id: "5efeff7c633ba675501d0e88",
              tips: "455评价 月售610份",
              item_id: 6745,
              category_id: 9300,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "s"
              },
              image_path: "173141612df69213.png",
              name: "sb",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "sb",
                  item_id: 6745,
                  sku_id: 25627,
                  food_id: 25654,
                  restaurant_id: 1,
                  _id: "5f002fc5633ba675501d0f6e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 282,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.1,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 69,
              satisfy_count: 215,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-07-03T01:04:17.389Z",
              specifications: [],
              rating_count: 455,
              month_sales: 610,
              description: "sb",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 3
        },
        {
          name: "ee",
          description: "",
          restaurant_id: 1,
          id: 9307,
          foods: [
            {
              _id: "5eec2e63dd7bf64dcd34ef13",
              tips: "423评价 月售360份",
              item_id: 6712,
              category_id: 9307,
              restaurant_id: 1,
              activity: {
                image_text: "123",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "172cb1f1a3068386.png",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6712,
                  sku_id: 25437,
                  food_id: 25464,
                  restaurant_id: 1,
                  _id: "5eeecce329f2e165e11a200a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 518,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 0,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 30,
              satisfy_count: 922,
              attributes: [],
              is_essential: false,
              server_utc: "2020-06-16T08:34:52.006Z",
              specifications: [],
              rating_count: 423,
              month_sales: 360,
              description: "123",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 2
        },
        {
          name: "美食",
          description: "好吃的",
          restaurant_id: 1,
          id: 9312,
          foods: [
            {
              _id: "5eccc6dfc2a22c2993e4df3f",
              tips: "557评价 月售146份",
              item_id: 6635,
              category_id: 9312,
              restaurant_id: 1,
              activity: {
                image_text: "是",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1724fe8e9b667375.jpeg",
              name: "是11",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "是11",
                  item_id: 6635,
                  sku_id: 25224,
                  food_id: 25251,
                  restaurant_id: 1,
                  _id: "5ed0cddd11943c38555bfd7c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 375,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 50,
              satisfy_count: 414,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-05-26T02:45:36.559Z",
              specifications: [],
              rating_count: 557,
              month_sales: 146,
              description: "是",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 2
        },
        {
          name: "smg",
          description: "bzd",
          restaurant_id: 1,
          id: 9475,
          foods: [
            {
              _id: "5e61cd2c942e5767f50a2ce7",
              tips: "537评价 月售248份",
              item_id: 6417,
              category_id: 9475,
              restaurant_id: 1,
              activity: {
                image_text: "123",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170ae09582a64679.jpg",
              name: "lsj",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "lsj",
                  item_id: 6417,
                  sku_id: 24525,
                  food_id: 24552,
                  restaurant_id: 1,
                  _id: "5e61ce43942e5767f50a2d1d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 598,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 86,
              satisfy_count: 820,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 537,
              month_sales: 248,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 1
        },
        {
          name: "asd",
          description: "dqef",
          restaurant_id: 1,
          id: 9638,
          foods: [
            {
              _id: "5e3d0d30eccd9c1bec9d5b37",
              tips: "784评价 月售381份",
              item_id: 6325,
              category_id: 9638,
              restaurant_id: 1,
              activity: null,
              image_path: "1701e7ba51c63624.jpg",
              name: "ssss",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ssss",
                  item_id: 6325,
                  sku_id: 24253,
                  food_id: 24280,
                  restaurant_id: 1,
                  _id: "5e3d0d30eccd9c1bec9d5b38",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 704,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 100,
              satisfy_count: 452,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-06T12:31:15.380Z",
              specifications: [],
              rating_count: 784,
              month_sales: 381,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 1
        },
        {
          name: "花蝴蝶",
          description: "萍乡花蝴蝶，你值得拥有呀",
          restaurant_id: 1,
          id: 9768,
          foods: [
            {
              _id: "5e5ba9f7942e5767f50a1c53",
              tips: "30评价 月售730份",
              item_id: 6391,
              category_id: 9768,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "11"
              },
              image_path: "170960fe26564486.jpg",
              name: "1111liu",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1111liu",
                  item_id: 6391,
                  sku_id: 24470,
                  food_id: 24497,
                  restaurant_id: 1,
                  _id: "5e5be360942e5767f50a1cee",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 606,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 6,
              satisfy_count: 820,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 30,
              month_sales: 730,
              description: "11liu",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 2
        },
        {
          name: "这是厉害对的",
          description: "哈哈哈",
          restaurant_id: 1,
          id: 10131,
          foods: [
            {
              _id: "5ea781887653d21ef58c0ac2",
              tips: "921评价 月售20份",
              item_id: 6593,
              category_id: 10131,
              restaurant_id: 1,
              activity: null,
              image_path: "171be51fa0b66670.png",
              name: "lklklklk",
              __v: 0,
              specfoods: [
                {
                  specs_name: "222",
                  name: "lklklklk",
                  item_id: 6593,
                  sku_id: 25136,
                  food_id: 25163,
                  restaurant_id: 1,
                  _id: "5eb9f57481d8b2675d1cf4e0",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 519,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 29,
              satisfy_count: 798,
              attributes: [],
              is_essential: false,
              server_utc: "2020-04-26T11:19:50.406Z",
              specifications: [],
              rating_count: 921,
              month_sales: 20,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 6
        }
      ],
      scrollY: 0, //获取实时滚动位置
      heightList: [] //获取每一个li的高度 };
    };
  },
  computed: {
    //左右联动
    currentIndex() {
        const index = this.heightList.findIndex((item, index) => {
          this._initLeftScroll(index)
        return (
          this.scrollY >= this.heightList[index] &&
          this.scrollY < this.heightList[index + 1]
        );
      });
      return index > 0 ? index : 0;
    }
  },
  watch: {},
  methods: {
    //点击左侧菜单
   selectLeft(index) { 
    //  this.currentIndex = index
     this.scrollY = this.heightList[index];
     //右侧滚到相应位置
        this.goodmenu.scrollTo(0,-this.scrollY,200)  
        },
    changeTab(index) {
      this.active = index;
    },
    //左右联调 滑动右边，左边跟着滚动
    _initLeftScroll(index){
      let menu = this.$refs.lItem;
      let el = menu[index];
      this.menuList.scrollToElement(el,300,0,-300)
    },
    //初始化 better-scroll
    _scrollInit() {
      this.menuList = new BScroll(this.$refs.goodMenu, {
        click: true
      });

      this.goodmenu = new BScroll(this.$refs.goodList, {
        probeType: 3
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
    },
  },

  created() {
    //因为 _scrollInit函数需要操作DOM，因此必须在DOM元素存在文档中才能获取DOM节点
    //因此在 nextTick回调函数里面调用可以是实现此功能
    this.$nextTick(() => {
      this._scrollInit();
      this.getHeight();
    });
  },
  mounted() {}
}
</script>

<style scoped>
.arrow_left{
        color: #fff;
    font-size: 23px;
    position:absolute;
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