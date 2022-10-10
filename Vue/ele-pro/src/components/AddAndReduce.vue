<!--
添加、减少按钮

-->
<template>
  <div class='addAndReduce'>
    <div class="flex_row  food_num">
      <div
        class="bg_yellow border_radius_50 span_black num_change num_reduce flex_center"
        @click="numChange(0,itemss.id,itemss.restaurant_id)"
        v-show="itemss.buy_number>0"
      >-</div>
    <div
      class="num_show"
      v-show="itemss.buy_number>0"
    >{{itemss.buy_number}}</div>
  <div
    class="bg_yellow border_radius_50 span_black num_change num_add flex_center"
    @click="numChange(1,itemss.id,itemss.restaurant_id)"
  >+</div>
    </div>
    </div>
</template>

<script>
let qs = require("qs");

export default {
  name: "AddAndReduce",
  props: ["itemss", "restaurant_id"],
  components: {},
  data() {
    return {
      goodList: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    //改变食品选购数量
    numChange(type, id, restaurant_id) {
      let that = this;
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
          //更新父组件
          that.$emit("getFoodClassify", that.goodList);
          that.getFoodsTotal(that.goodList, that);
        });
      });
    }, //获取食品总数量
    getFoodsTotal(arr, that) {
      let num = 0;
      let price = 0;
      let amountList = []; //食品结算清单
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
      that.$emit("getFoodsTotal", num, price.toFixed(2));
      that.$emit("getAmountList", amountList);
    }
  },
  created() {
    let that = this;
    let data = qs.stringify({ restaurant_id: this.restaurant_id });
    //获取左侧菜单
    // this.$axios.post("/api/shopFoodClassify", data).then(function(res) {
    //   that.goodList = res.data;
    //   that.$emit("getFoodClassify", that.goodList);
    //   that.getFoodsTotal(that.goodList, that);
    // });
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
</style>
