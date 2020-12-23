<template>
  <div
    class='mine flex_column fixed_full'
  >
    <Top :nav_title='nav_title' :top_show="0"></Top>
    <div class="mine_content">
      <div class="mine_content_top bg_yellow rel flex_center">
        <div class="self_center flex_row bg_yellow abs bg_white border_radius_5 padding_20 margin_top_20">
          <img
            src=""
            alt=""
            class="bg_yellow circle head_img margin_right_10"
          >
            <div class="flex_column_center bg_white">
              <span class="span_black margin_bottom_5 font16">一身都是月</span>
              <span class="font12 color_gray ell">危卧病榻，难有无神论者</span>
            </div>
        </div>

      </div>
      <div class="mine_container margin_10">
        <div class="mine_container_item rel flex_row_center padding_20_top_bottom border_bottom">关于我们
          <span class="arrow_right span_black abs"></span>
        </div>
        <div class="mine_container_item rel flex_row_center padding_20_top_bottom border_bottom">意见反馈
          <span class="arrow_right span_black abs"></span>
        </div>
        <div class="mine_container_item rel flex_row_center padding_20_top_bottom border_bottom">设置
          <span class="arrow_right span_black abs"></span>
        </div>
      </div>
    </div>
    <TabBottom :active="active">
    </TabBottom>
    </div>
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";
import Top from "@/components/Top.vue";

export default {
  data() {
    return {
      nav_title: "我的",
      active: 3
    };
  },
  components: { TabBottom, Top },
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
.arrow_right{
  right: 0;
}
.mine_container_item:nth-child(1) {
  margin-top: 40px;
}
.head_img {
  height: 50px;
  width: 50px;
}
.mine_content_top {
  height: 10%;
}
.self_center {
  width: 82%;
  overflow: hidden;
  box-shadow: 1px 4px 11px #999;
}
.mine_content {
  flex-grow: 1;
}
</style>