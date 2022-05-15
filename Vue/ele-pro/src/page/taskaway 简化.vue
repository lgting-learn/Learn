<template>
  <div class="wrap">
    <div class="swiper">swiper</div>
    <div class="split taskaway_split"></div>
    <div class="container" :class="{ flexContainer: isFixed }">
      <div class="box_fixed broadcast" id="boxFixed" :class="{ is_fixed: isFixed }">
        广播
      </div>
      <div class="contentItem" :class="{ grow_1: isFixed }">
        <div v-for="item in 20" :key="item" class="item">item{{ item }}</div>
      </div>
      <div class="toolBar">工具栏</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isFixed: false,
      offsetTop: 0,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  },
  methods: {
    initHeight() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-bottom: 50px;
}
.swiper {
  font-size: 16px;
  padding: 60px 20px;
  text-align: center;
  background-color: aquamarine;
}
.broadcast,
.toolBar {
  text-align: center;
  background: cadetblue;
  color: #fff;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.toolBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.contentItem {
  flex: 1;
  overflow-y: scroll;
}
.item {
  padding: 10px;
  background: aqua;
}

.is_fixed {
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 999;
}
</style>
