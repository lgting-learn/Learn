<template>
  <div class="mine flex_column fixed_full">
    <Top :nav_title="nav_title" :top_show="0"></Top>
    <div class="mine_content common_container">
      <div class="mine_content_top bg_yellow rel flex_center">
        <div
          class="self_center flex_row bg_yellow abs bg_white border_radius_5"
          @click="turnLoginOrCenter"
        >
          <img :src="img_url" alt="" class="circle head_img margin_right_10 margin_20" />
          <div class="flex_column_center bg_white">
            <span class="span_black margin_bottom_5 font16">{{ loginName }}</span>
            <span class="font12 color_gray ell">{{ sign }}</span>
          </div>
        </div>
      </div>
      <div class="mine_container">
        <div
          class="mine_container_item rel flex_row_center padding_15_top_bottom border_bottom font15 span_black"
          @click="aboutUs"
        >
          关于我们
          <!-- 
      class="arrow_left food_arrow_left van-icon van-icon-arrow-left van-nav-bar__arrow span_black"

           -->
          <!-- <span class="arrow"></span> -->
          <van-icon name="arrow" color="gray" class="arrow_right_vant" size="16" />
        </div>
        <div
          class="mine_container_item rel flex_row_center padding_15_top_bottom border_bottom font15 span_black"
          @click="feedBack"
        >
          意见反馈
          <van-icon name="arrow" color="gray" class="arrow_right_vant" size="16" />
        </div>
        <div
          class="mine_container_item rel flex_row_center padding_15_top_bottom border_bottom font15 span_black"
          @click="turnSettings"
        >
          设置
          <van-icon name="arrow" color="gray" class="arrow_right_vant" size="16" />
        </div>
      </div>
    </div>
    <TabBottom :active="active"> </TabBottom>
  </div>
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";
import Top from "@/components/Top.vue";
import { Toast } from "vant";
import { getStore, setStore, isNotBlank } from "../config/mUtils.js";
let qs = require("qs");
export default {
  data() {
    return {
      loginFlag: false,
      loginName: "登录/注册", //登陆状态
      nav_title: "我的",
      active: 3,
      sign: "欢迎回来", //个签
      img_url: "../../static/images/default_headImg.svg", //用户头像
    };
  },
  components: { TabBottom, Top },
  computed: {},
  watch: {},
  methods: {
    // 未登录=>登录页面
    // 登录=>个人中心
    turnLoginOrCenter() {
      if (this.loginFlag) {
        this.$router.replace({
          path: "/personalCenter",
          query: {
            backPageName: "mine",
          },
        });
      } else {
        this.$router.replace({
          path: "/login",
          query: {
            backPageName: "mine",
          },
        });
      }
    },
    // 跳转设置页面
    turnSettings() {
      this.$router.replace({
        path: "/settings",
        query: {
          backPageName: "mine",
        },
      });
    },
    //关于我们
    aboutUs() {
      Toast("没什么好了解的");
    },
    //意见反馈
    feedBack() {
      Toast("反馈了也不听");
    },
    onClickLeft () {},
    //跳转个人中心
    turnPersonCenetr() {},
    getLoginInfo() {
      this.loginUserInfo =
        getStore("loginUserInfo") && JSON.parse(getStore("loginUserInfo"));
      if (this.loginUserInfo) {
        this.loginFlag = true;
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
  created() {
    this.getLoginInfo();
  },
  mounted() {},
};
</script>

<style scoped>
.common_container {
  position: relative !important;
  top: 0 !important;
}
.mine_content_top {
  /* padding-top: 6px; */
}
.arrow_right {
  right: 0;
}
.mine_container {
  margin-left: 3%;
  margin-right: 3%;
}
.mine_container_item:nth-child(1) {
  margin-top: 40px;
}
.head_img {
  height: 50px;
  width: 50px;
  margin-right: 10px !important;
}
.mine_content {
  flex-grow: 1;
  height: 100%;
}
.mine_content_top {
  position: relative;
  /* 失效原因 父元素mine_content也需要设置高度 */
  height: 10%;
}
.self_center {
  width: 94%;
  overflow: hidden;
  box-shadow: 1px 4px 11px #999;
  z-index: 1001;
  top: 0;
}
</style>
