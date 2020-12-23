<template>
    <div class="bg_yellow food_top flex_row padding_10 grow_0 flex_center">
      <!--top_show为0不显示返回按钮  -->
        <span
            class="arrow_left food_arrow_left van-icon van-icon-arrow-left van-nav-bar__arrow span_black"
            @click="$router.go(-1);"
            v-show="top_show!=0"
        ></span>
            <div class="flex_center span_black font16 weight_600" >{{nav_title}}</div>
    </div>
</template>

<script>
export default {
  components: {},
  props:["nav_title","top_show"],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>