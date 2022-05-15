<template>

  <div class="">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>

    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view> 
  </div>

</template>

<script>
import TabBottom from "@/components/TabBottom.vue";
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  components: {
    TabBottom
  },
  data() {
    return {
      nav_title: "外卖",
      isRouterAlive: true,
      isShow: true
    };
  },
  methods: {
    // 刷新当前页
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
        this.isShow = false;
      });
    },
    changeTitle(title) {
      this.nav_title = title;
    },
    onClickLeft() {}
  },
  created() {}
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
