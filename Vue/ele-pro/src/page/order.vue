<template>
  <div
    class='order flex_column fixed_full'
  >
           <Top :nav_title='nav_title' :top_show="0"></Top>

    <div class="order_content">订单</div>

    <TabBottom
      :nav_title="nav_title"
      :active="active"
    ></TabBottom>
      </div>
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";
import Top from "@/components/Top.vue";

export default {
  data() {
    return {
      nav_title: "订单",
      active: 2
    };
  },
  components: { TabBottom,Top },
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