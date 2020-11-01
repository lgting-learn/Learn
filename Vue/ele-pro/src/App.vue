<template>

  <!-- <div class="index_main fixed_full"> -->
  <router-view></router-view>
  <!-- </div> -->
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";
export default {
  name: "App",
  components: {
    TabBottom
  },
  data() {
    return { nav_title: "外卖" };
  },
  methods: {
    changeTitle(title) {
      this.nav_title = title;
    },
    onClickLeft: function() {}
  }
};
</script>

<style>
#app {
}

.van-nav-bar .van-icon {
  color: #fff;
  font-size: 21px;
}
.nav_index .van-ellipsis {
  color: #fff;
}
</style>
