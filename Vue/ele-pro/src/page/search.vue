<template>
  <div
    class='search flex_column fixed_full'
  >
    <van-nav-bar
      :title="nav_title"
      right-text="按钮"
      left-arrow
     @click="$router.go(-1);"
      class="bg_blue span_white nav_index fixed_top"
    />
    <div class="search_content">搜索</div>

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
      nav_title: "搜索",
      active: 1
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
.search_content {
  flex-grow: 1;
}
</style>