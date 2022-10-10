<template>
  <div
    class="bg_yellow flex_center food_top flex_row padding_10 grow_0 topNav"
    :class="topBG ? 'topBG' : '11'"
  >
    <!-- @click="this.router.back();" -->
    <!--top_show为0不显示返回按钮  -->
    <span
      class="arrow_left food_arrow_left van-icon van-icon-arrow-left van-nav-bar__arrow span_black"
      @click="back"
      v-show="top_show != 0"
    ></span>
    <div class="flex_center span_black font15">{{ nav_title }}</div>
  </div>
</template>

<script>
import {getStore, back, setHistory} from "../config/mUtils";

export default {
  components: {},
  props: [
    "nav_title",
    "top_show",
    "topBG",
    "restaurant_id",
    "restaurant_name",
    "user_id",
  ],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    back() {
      back(this);
    },
  },
};
</script>

<style scoped>
.arrow_left {
  font-size: 18px;
}

.food_arrow_left {
  position: absolute !important;
  left: 6px;
}

.topBG {
  background: white !important;
}

.food_top {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 28px;
  z-index: 2021;
}
</style>
