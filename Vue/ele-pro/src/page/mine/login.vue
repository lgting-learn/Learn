<template>
  <div class="login bg_red flex_column_center">
    <div
      class="login_container flex_column_center border_radius_20 rel"
      :class="loginOrRegister == 'login' ? '' : 'login_container_reg'"
    >
      <div class="loginOrRegister flex_between padding_5_top_bottom abs">
        <span
          class="grow_1 flex_center span_black"
          @click="changeLoginOrReg('login')"
          :class="loginOrRegister == 'login' ? 'span_red' : ''"
          >登陆</span
        >
        <span
          class="grow_1 flex_center span_black"
          @click="changeLoginOrReg('register')"
          :class="loginOrRegister == 'register' ? 'span_red' : ''"
          >注册</span
        >
      </div>
      <div
        :class="loginOrRegister == 'login' ? '' : 'hei_20'"
        class="login_name_out padding_10_left_right login_item border_radius_20 margin_bottom_10 flex_row_center bg_white"
      >
        <img
          src="../../../static/images/login_user.svg"
          alt=""
          class="login_user width_height_20"
        />
        <input
          class="login_name login_item_ipt border_radius_20"
          placeholder="请输入用户名"
          v-model="userName"
        />
      </div>
      <div
        :class="[loginOrRegister == 'login' ? '' : 'margin_bottom_10 hei_20']"
        class="login_name_out padding_10_left_right login_item border_radius_20 flex_row_center bg_white"
      >
        <img
          src="../../../static/images/login_psw.svg"
          alt=""
          class="login_user width_height_20"
        />
        <input
          class="login_name login_item_ipt border_radius_20"
          placeholder="请输入密码"
          v-model="userPsw"
          type="password"
        />
      </div>
      <div
        :class="loginOrRegister == 'login' ? '' : 'hei_20'"
        v-show="loginOrRegister != 'login'"
        class="login_name_out padding_10_left_right login_item border_radius_20 flex_row_center bg_white"
      >
        <img
          src="../../../static/images/login_psw.svg"
          alt=""
          class="login_user width_height_20"
        />
        <input
          class="login_name login_item_ipt border_radius_20"
          placeholder="请再次输入密码"
          v-model="userPswAgain"
          type="password"
        />
      </div>

      <div
        class="img_wrap_out width_height_60 flex_center circle abs bg_red"
        @click="clickCommit"
      >
        <div class="img_wrap width_height_50 flex_center circle">
          <img src="../../../static/images/choose.svg" alt="" class="width_height_20" />
        </div>
      </div>
    </div>
    <div class="account_tag flex_row_center">
      <div class="tab_line bg_white"></div>
      <span class="span_white font11_center flex_center">登录帐号</span>
      <div class="tab_line bg_white"></div>
    </div>
    <div class="flex_row abs login_method">
      <img
        :src="item.img_url"
        alt=""
        class="width_height_30"
        :class="index != 2 ? 'margin_right_20' : ''"
        v-for="(item, index) in imgBtmList"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
var qs = require("qs");
import {
  getStore,
  setStore,
  preventXSS,
  isNotBlank,
  amendHeight,
} from "../../config/mUtils.js";

export default {
  data() {
    return {
      oldHeight:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      newHeight: 0,
      input_editor: 0,
      showTip: false, //错误实体弹出框
      errorMsg: "", //错误提示信息
      userName: "",
      userPsw: "",
      userPswAgain: "",
      loginOrRegister: "login",
      imgBtmList: [
        { img_url: "../../../static/images/login_phone1.svg" },
        { img_url: "../../../static/images/login_wechat.svg" },
        { img_url: "../../../static/images/login_qq.svg" },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // !!!解决输入法压缩整个页面布局
    amendHeight(this.oldHeight, "login");
  },
  methods: {
    showPopup() {},
    changeLoginOrReg(type) {
      this.loginOrRegister = type;
      this.userName = "";
      this.userPsw = "";
      this.userPswAgain = "";
    },
    clickCommit() {
      let that = this;
      let loginOrRegister = that.loginOrRegister;
      let userName = that.userName.trim(); // 去掉前后空格`
      let userPsw = that.userPsw.trim();
      let registerTime = Date.now();
      if (!isNotBlank(userName) || !isNotBlank(userPsw)) {
        Toast("用户名或密码不能为空");
        return false;
      }

      if (
        !preventXSS(userName) ||
        !preventXSS(userPsw) ||
        (loginOrRegister == "register" && !preventXSS(this.userPswAgain))
      ) {
        Toast("操作失败，存在特殊字符<>'\"!＆＃( )%\\");
        return false;
      }

      if (loginOrRegister == "register") {
        if (!isNotBlank(this.userPswAgain) || !isNotBlank(userPsw)) {
          Toast("再次输入密码不能为空");
          return false;
        }
        // 判断两次密码是否一致
        if (loginOrRegister == "register" && userPsw != this.userPswAgain) {
          Toast("两次密码不一致!");
          return false;
        }
      }
      let data = qs.stringify({
        type: loginOrRegister,
        name: userName,
        psw: userPsw,
        register_time: registerTime, // 注册时间
      });

      this.$axios.post("/api/login", data).then((res) => {
        if (res && res.data.result) {
          // 登录成功跳转到首页
          data = qs.stringify({ name: userName });
          that.$axios.post("/api/getUserInfo", data).then((res) => {
            that.$router.replace({ path: "/mine" });
            that.sign = res.data.sign;
            that.img_url = res.data.img_url;
            setStore("loginUserInfo", res.data);
          });
        } else {
          that.showTip = true;
          that.errorMsg = res.data.msg;
          Toast(that.errorMsg);
        }
      });
    },
    // 防止xss注入
    preventXSS() {},
  },
};
</script>

<style scoped>
.span_red {
  color: #ff461d !important;
}
.loginOrRegister {
  width: 100%;
  top: 10px;
}
.login_arrow {
  top: 16px;
  color: #fff !important;
  position: absolute;
  top: 12px;
}
.login_method {
  bottom: 7%;
}
.login_name_out {
  /* margin: 0 20px; */
}
.login_item_ipt {
  height: 100%;
  width: 100%;
  border: 0px;
}

.account_tag span {
  width: 24%;
}
.account_tag {
  width: 80%;
  justify-content: center;
}
.tab_line {
  height: 1px;
  width: 38%;
}
.account_tag {
  margin-top: 40px;
}
.img_wrap_out {
  bottom: -30px;
}
.img_wrap {
  /* bottom: -30px; */
  background: rgba(255, 255, 255, 0.4);
}
.img_wrap img {
  /* width: 20px; */
}
.login_container_reg {
  height: 41% !important;
}
.hei_20 {
  height: 18% !important;
}

.login_container {
  width: 80%;
  height: 33%;
  background: rgba(255, 255, 255, 0.4);
  align-items: center;
}
.login_item {
  width: 80%;
  height: 22%;
  border: 0px;
}
.login {
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
</style>
