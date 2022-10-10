<template>
  <div class="personal_center flex_column fixed_full bg_gray">
    <Top :nav_title="nav_title"></Top>
    <div
      class="common_container personal_center_container padding_10_left_right bg_white margin_top_10"
    >
      <div
        v-for="(item, index) in showDataList"
        :key="index"
        class="personal_center_container_item flex_row_center rel border_bottom padding_10_top_bottom flex_center_col flex_between"
        @click="turnPage(item.pageName)"
      >
        <span class="font15">{{ item.title }}</span>

        <div class="flex_center_col flex_between">
          <span class="right_10" v-if="item.type == 'text'">{{ item.description }}</span>

          <img
            v-else-if="item.type == 'img'"
            :src="item.imgSrc"
            alt=""
            class="circle head_img width_height_30 right_10"
          />
          <van-icon
            name="arrow"
            color="#c8c9cc"
            size="14"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import {getStore, setStore, isNotBlank, setHistory} from "../../config/mUtils.js";
import {
  global,
} from '../../../config/index'

let pathFinally = (global.PRODUCTFLAG ? (global.PRODUCTIP + '/') : '') + 'static/images/';
export default {
  components: {Top},
  data() {
    return {
      pathFinally: pathFinally,
      showDataList: [],
      nav_title: "个人中心",
      loginUserInfo: "",
      loginName: "",
      sign: "欢迎回来",
      img_url: "../../" + pathFinally + "default_headImg.svg",
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getLoginInfo();
  },
  mounted() {
    setHistory(this);
  },
  methods: {

    getLoginInfo() {
      this.loginUserInfo =
        (getStore("loginUserInfo") && JSON.parse(getStore("loginUserInfo"))) || "";
      this.setShowDataList(
        "img",
        "头像",
        (this.loginUserInfo && this.loginUserInfo.img_url) || "",
        ""
      );
      this.setShowDataList(
        "text",
        "昵称",
        (this.loginUserInfo && this.loginUserInfo.name) || "",
        ""
      );

      this.setShowDataList(
        "text",
        "个性签名",
        (this.loginUserInfo && this.loginUserInfo.sign) || "",
        ""
      );

      this.setShowDataList("text", "收货地址", "添加/修改", "myAddress");
    },
    turnPage(pageName) {
      this.$router.replace({
        name: pageName,
      });
    },
    setShowDataList(type, title, propertyVal, pageName) {
      let obj = {
        type,
        title,
        pageName,
      };
      if (type == "text") {
        obj.description = propertyVal;
      } else if (type == "img") {
        obj.imgSrc = propertyVal;
      }
      this.showDataList.push(obj);
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
