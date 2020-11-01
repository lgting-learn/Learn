<template>
  <div
    class='mine flex_column fixed_full'
  >
    <van-nav-bar
      :title="nav_title"
      right-text="按钮"
      left-arrow
    @click="$router.go(-1);"
      class="bg_blue span_white nav_index"
    />
    <div class="mine_content">我的</div>
    <TabBottom :active="active">
    </TabBottom>
    </div>
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";

export default {
  data() {
    return {
      nav_title: "我的",
      active: 3
    };
  },
  components: { TabBottom },
  computed: {},
  watch: {},
  methods: {
    onClickLeft: function() {}
  },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.mine_content {
  flex-grow: 1;
}
</style>