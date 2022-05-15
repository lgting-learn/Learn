<template>
  <div class="personal_center flex_column fixed_full bg_gray">
    <Top :nav_title="nav_title" :backPageName="backPageName"></Top>
    <div
      class="common_container personal_center_container padding_10_left_right bg_white margin_top_10"
    >
      <router-link
        class="personal_center_container_item flex_row_center rel border_bottom padding_15_top_bottom"
        to=""
      >
        <span class="font15">头像</span>
        <img :src="img_url" alt="" class="circle head_img width_height_30 abs right_10" />
        <span class="arrow_right span_black abs"></span>
      </router-link>
      <router-link
        class="personal_center_container_item flex_row_center rel border_bottom padding_10_top_bottom"
        to=""
      >
        <span class="font15">昵称</span>
        <span class="abs right_10 font11_right">{{ loginName }}</span>
        <span class="arrow_right span_black abs"></span>
      </router-link>
      <router-link
        class="personal_center_container_item flex_row_center rel border_bottom padding_10_top_bottom"
        to=""
      >
        <span class="font15">个性签名</span>
        <span class="abs right_10 font11_right">{{ sign }}</span>
        <span class="arrow_right span_black abs"></span>
      </router-link>
      <router-link
        class="personal_center_container_item flex_row_center rel padding_10_top_bottom"
        to="/myAddress"
      >
        <span class="font15">收货地址</span>
        <span class="abs right_10 font11_right">添加/修改</span>
        <span class="arrow_right span_black abs"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { getStore, setStore, isNotBlank } from "../config/mUtils.js";
export default {
  components: { Top },
  data() {
    return {
      nav_title: "个人中心 ",
      loginUserInfo: "",
      loginName: "",
      sign: "欢迎回来",
      img_url: "../../static/images/default_headImg.svg",
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getLoginInfo();
    this.getBackPageName();
  },
  mounted() {},
  methods: {
    getBackPageName() {
      this.backPageName = this.$route.query.backPageName || "";
    },
    getLoginInfo() {
      this.loginUserInfo =
        getStore("loginUserInfo") && JSON.parse(getStore("loginUserInfo"));
      if (this.loginUserInfo) {
        this.loginName = this.loginUserInfo.name;
        if (isNotBlank(this.loginUserInfo.sign)) {
          this.sign = this.loginUserInfo.sign;
        }
        if (isNotBlank(this.loginUserInfo.img_url)) {
          this.img_url = this.loginUserInfo.img_url;
        }
      }
    },
  },
};
</script>

<style>
.personal_center .van-nav-bar__arrow {
  position: absolute;
}
.personal_center_container_item span:nth-child(1) {
}
.personal_center_container {
  padding-bottom: 0;
}
.personal_center .common_container {
  bottom: 0;
  position: relative;
  margin-top: 0;
}
.personal_center .arrow_right {
  right: 0;
}
</style>
