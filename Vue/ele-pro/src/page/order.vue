<template>
  <div
    class='order flex_column fixed_full'
  >
    <van-nav-bar
      :title="nav_title"
      right-text="按钮"
      left-arrow
     @click="$router.go(-1);"
      class="bg_blue span_white nav_index"
    />
    <div class="order_content">订单</div>

    <TabBottom
      :nav_title="nav_title"
      :active="active"
    ></TabBottom>
      </div>
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";

export default {
  data() {
    return {
      nav_title: "订单",
      active: 2
    };
  },
  components: { TabBottom },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
.order_content {
  flex-grow: 1;
}
</style>