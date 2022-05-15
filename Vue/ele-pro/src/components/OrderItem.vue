<template>
  <div class="order_content common_container common_container">
    <van-tabs v-model="active" animated @click="clickTab">
      <van-tab v-for="(item, index) in titleTitle" :title="item.title" :key="index">
        <div class="order_detail grow_1">
          <van-list
            v-model="finished"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <div class="order_container flex_column">
              <div
                class="order_item flex_column bg_white margin_10_left_right padding_10 border_radius_10"
                v-for="(item, index) in orderDetailCur"
                :key="index"
                @click.stop="toConfirmOrder(item.id)"
              >
                <div
                  class="order_item_top flex_row_center rel padding_10_top_bottom border_bottom_order border_bottom"
                >
                  <van-image
                    fit="cover"
                    round
                    :src="item.shop_img"
                    lazy-load
                    alt=""
                    class="width_height_20 circle"
                  />
                  <div
                    class="order_item_top_desc flex_row_center rel padding_5 font12 span_black"
                  >
                    {{ item.restaurant_name }}
                    <van-icon
                      name="arrow"
                      color="gray"
                      class="arrow_right_vant arrow_right_vant_order"
                      size="14"
                    />
                  </div>
                  <span class="appraise abs flex_center font11_right">待评价</span>
                </div>
                <div class="order_item_center flex_row_center">
                  <van-image
                    fit="cover"
                    round
                    :src="item.shop_img"
                    lazy-load
                    alt=""
                    class="width_height_50 border_radius_5 shop_img_big"
                  />
                  <div class="flex_column">
                    <span>下单时间：{{ item.trading_time }}</span>
                    <span>总价：￥{{ item.all_price }}</span>
                  </div>
                </div>
                <div class="order_item_btm flex_row flex_end">
                  <div
                    class="padding_3 border_all border_radius_5 flex_center font12 margin_right_5"
                  >
                    <span
                      class="flex_center font11_center"
                      @click.stop="toUserRate(item.restaurant_id, item.id)"
                      >评价</span
                    >
                  </div>
                  <div class="padding_3 border_radius_5 flex_center font12 bg_yellow">
                    <span class="flex_center font11_center">再来一单</span>
                  </div>
                </div>
              </div>
            </div>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: {
    titleTitle: Array,
    orderDetailCur: Array,
    finished: Boolean,
    active: Number,
  },

  data() {
    return {};
  },
  methods: {
    clickTab(index) {
      this.$emit("clickTab", index);
    },
    onLoad() {
      this.$emit("onLoad", index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.auxiliary_div {
  display: none;
  width: 100%;
  height: 10px;
  background: rebeccapurple;
  position: absolute;
  top: 0;
  z-index: 100;
}
.order .arrow_right_vant_order {
  /* right: 5px; */
  position: inherit !important;
  /* top:6px; */
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
.shop_img_big {
  margin-right: 10px;
}
.order_content .van-tabs .van-tabs__content {
  top: 30px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  overflow-y: auto !important;
}
.order_content .van-tabs .van-tabs__wrap {
  flex-grow: 0 !important;
  position: relative;
  height: 30px !important;
  /* height: 200px !important; */
}
.order_content .van-tabs {
  display: flex !important;
  flex-direction: column !important;
  height: 100% !important;
}
.order_detail {
  overflow-y: auto !important;
}
.order_content {
  overflow-y: hidden !important;
  display: flex;
  flex-direction: column;
}
.van-field__control::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 14px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: left !important;
}
.van-field__control:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 14px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: left !important;
}
.van-field__control::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 14px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: left !important;
}
.van-field__control:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 14px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: left !important;
}
.van-search {
  /* padding: 0.2rem 0.375rem; */
  height: 42px;
  position: relative;
}
.van-search .van-cell {
  padding: 0rem 0rem 0rem 0;
}

.van-search {
  flex-grow: 0 !important;
}

.order_item {
  margin-top: 5px !important;
  padding-top: 0 !important;
}
.order_item_btm span {
  width: 64px;
}
.border_bottom_order {
  margin-bottom: 10px;
}
.order_item_top_desc {
  padding-right: 20px;
  justify-content: flex-start;
}
.appraise {
  right: 0px;
}
.van-tabs__line {
  background-color: #ffc300 !important;
}
.van-tabs__wrap {
  height: 30px !important;
  /* position: relative !important; */
}
.van-tabs__nav {
  /* position: absolute!important;
  top: 30px!important;
  left: 0!important;
  right: 0!important;
    background: #f6f6f6; */
  flex-grow: 0 !important;
}
.van-tab {
  font-size: 12px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: center !important;
}
.van-tabs--line {
  background: #f6f6f6 !important;
}
</style>
