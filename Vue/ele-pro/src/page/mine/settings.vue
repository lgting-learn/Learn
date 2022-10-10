<template>
  <div class="settings fixed_full flex_column bg_gray">
    <Top nav_title="设置" topBG="true"></Top>
    <div class="container common_container">
      <div class="top flex_column">
        <div
          class="top_item flex_column_center bg_white padding_12 rel"
          v-for="(item, index) in itemList"
          :key="index"
          :class="[
            item.topFlag ? 'margin_top_10' : '',
            item.hideBtm ? 'padding_0_bottom' : '',
          ]"
          v-show="item.showFlag"
        >
          <span class="span_black font15">{{ item.title }}</span>

          <span class="font11_left color_gray">{{ item.desc }}</span>
          <van-icon
            name="arrow"
            color="#c8c9cc"
            class="arrow_right_vant arrow_right_vant_set"
            size="14"
          />
          <div :class="item.lineFlag ? 'border_bottom margin_top_12' : ''"></div>
        </div>
      </div>
    </div>
    <div
      class="flex_center bg_yellow border_radius_10 padding_15_top_bottom signout"
      @click="signOut"
      v-show="loginUserInfo"
    >
      <span class="font14 span_black">{{ logOut }}</span>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { Dialog } from "vant";
import { getStore, setStore, isNotBlank } from "../../config/mUtils.js";
export default {
  components: { Top },
  data() {
    return {
      logOut: "退出账号",
      loginUserInfo: "",
      // 上一个页面
      itemList: [
        {
          title: "个人信息",
          desc: "头像、昵称、收货地址",
          topFlag: true,
          lineFlag: true,
          showFlag: true,
          hideBtm: true,
        },
        {
          title: "账号与安全",
          desc: "修改密码、修改手机号码、账号绑定管理",
          showFlag: true,
        },
        {
          title: "支付设置",
          desc: "",
          topFlag: true,
          lineFlag: true,
          showFlag: true,
          hideBtm: true,

        },
        { title: "通用", desc: "", showFlag: true },
        {
          title: "关于Time To Hungry",
          desc: "",
          topFlag: true,
          showFlag: true,
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {

    this.initPage();
  },
  mounted() {},
  methods: {

    initPage() {
      if (isNotBlank(getStore("loginUserInfo"))) {
        this.loginUserInfo = JSON.parse(getStore("loginUserInfo"));
      } else {
        for (let i = 0; i < this.itemList.length; i++) {
          if (i < 3) {
            this.itemList[i].showFlag = false;
          }
        }
      }
    },
    signOut() {
      let that = this;
      Dialog.confirm({
        message: "退出后将不能查看订单，\n确认退出吗？",
      })
        .then(() => {
          setStore("loginUserInfo", "");
          that.$router.replace({ path: "/mine" });
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style scoped>
.top_item.padding_0_bottom {
  padding-bottom: 0px !important;
}
.arrow_right_vant_set {
  position: absolute !important;
  right: 8px;
}
.common_container {
  position: relative !important;
  top: 0 !important;
}

.top_item .arrow_right {
  right: 10px;
}

.signout {
  bottom: 20px;
  position: fixed;
  width: 94%;
  margin-left: -47%;
  left: 50%;
}
.settings .arrow_left {
  position: absolute;
}
</style>
