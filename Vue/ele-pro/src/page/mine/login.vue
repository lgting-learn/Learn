<template>
  <div class="login bg_red flex_column_center">
    <div class="topTip flex_row_center">
      <span class="span_white font11_center flex_center font23">{{ topTip }}</span>
    </div>
    <div
      class="login_container flex_column_center border_radius_20 rel"
      :class="[
        loginOrRegister == 'login' ? '' : 'login_container_reg',
        loginOrRegister == 'login' ? 'height_28' : 'height_42',
      ]"
    >
      <div
        class="ipt_container_top loginOrRegister flex_between flex_center"
        :class="loginOrRegister == 'login' ? 'padding_5_top_bottom' : ''"
      >
        <span
          v-for="(item, index) in showDataList.tabs"
          :key="index"
          class="grow_1 flex_center font16"
          @click="changeLoginOrReg(item.type)"
          :class="loginOrRegister == item.type ? 'span_white weight_600' : 'span_black'"
        >{{ item.title }}</span
        >
      </div>
      <div
        class="ipt_container_center flex_center_row"
        :class="loginOrRegister == 'login' ? 'ipt_container_center_unset' : ''"
      >
        <div
          v-for="(item, index) in currentList"
          :key="index"
          class="login_name_out padding_10_left_right login_item border_radius_20 flex_row_center bg_white"
          :class="[
            loginOrRegister == item.type ? 'span_white weight_600' : 'span_black',
            loginOrRegister == 'login' ? 'height_42' : 'height_28',
            loginOrRegister == 'login' && item.type == 'userName'
              ? 'margin_bottom_10'
              : '',
          ]"
        >
          <img :src="item.src" alt="" class="login_user width_height_20"/>
          <input
            class="login_name login_item_ipt border_radius_20"
            :placeholder="item.placeholder"
            :key="loginOrRegister + index"
            v-model="item.modelName"
            :type="item.iptType"
          />
        </div>
      </div>

      <div class="ipt_container_btm"></div>
      <div
        class="img_wrap_out width_height_60 flex_center circle bg_red"
        @click="clickCommit"
      >
        <div class="img_wrap width_height_50 flex_center circle">
          <img :src="'../../../' +pathFinally+'choose.svg'" alt="" class="width_height_20" />
        </div>
      </div>
    </div>
    <div class="account_tag flex_row_center">
      <div class="tab_line bg_white"></div>
      <span class="span_white font11_center flex_center">{{ bottomTip }}</span>
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
import {
  global,
} from '../../../config/index'
import {Toast} from "vant";

let pathFinally = (global.PRODUCTFLAG ? (global.PRODUCTIP + '/') : '') + 'static/images/';
var qs = require("qs");
import {setStore, preventXSS, isNotBlank, amendHeight} from "../../config/mUtils.js";

export default {
  data() {
    return {
      pathFinally:pathFinally,
      topTip: "Time To Hungry",
      bottomTip: "登录帐号",
      showDataList: {
        tabs: [
          {type: "login", title: "登录"},
          {type: "register", title: "注册"},
        ],
        options: [
          {
            iptType: "",
            type: "userName",
            // placeholder: "请输入用户名",
            placeholder: "请输入1",
            src: "../../../" + pathFinally + "login_user.svg",
            modelName: "",
          },
          {
            iptType: "password",
            type: "password",
            // placeholder: "请输入密码",
            placeholder: "请输入1",
            src: "../../../" + pathFinally + "login_psw.svg",
            modelName: "",
          },
          {
            iptType: "password",
            type: "passwordAgain",
            placeholder: "请再次输入密码",
            src: "../../../" + pathFinally + "login_psw.svg",
            modelName: "",
          },
        ],
      },

      oldHeight:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      loginOrRegister: "login",
      imgBtmList: [
        {img_url: "../../../" + pathFinally + "login_phone1.svg"},
        {img_url: "../../../" + pathFinally + "login_wechat.svg"},
        {img_url: "../../../" + pathFinally + "login_qq.svg"},
      ],
    };
  },
  computed: {
    currentList() {
      let index = 0;
      let tempArr = this.showDataList.options;
      if (this.loginOrRegister == "login") {
        return tempArr.slice(0, 2);
      } else if (this.loginOrRegister == "register") {
        return tempArr;
      }
    },
  },
  watch: {},
  created() {
  },
  mounted() {
    // !!!解决输入法压缩整个页面布局
    amendHeight(this.oldHeight, "login");
  },
  methods: {
    showPopup() {
    },
    changeLoginOrReg(type) {
      this.loginOrRegister = type;
      let tempArr = this.showDataList;
      // 避免另一个tab输入框的值渲染到当前tab
      for (let i = 0; i < tempArr.options.length; i++) {
        tempArr.options[i].modelName = "";
      }
      this.showDataList = tempArr;
    },
    clickCommit() {
      let loginOrRegister = this.loginOrRegister;
      let userName = this.showDataList.options[0].modelName.trim(); // 去掉前后空格`
      let userPsw = this.showDataList.options[1].modelName.trim();
      let userPswAgain = this.showDataList.options[2].modelName.trim();
      let registerTime = Date.now();
      if (!isNotBlank(userName) || !isNotBlank(userPsw)) {
        Toast("用户名或密码不能为空");
        return false;
      }

      if (
        !preventXSS(userName) ||
        !preventXSS(userPsw) ||
        (loginOrRegister == "register" && !preventXSS(userPswAgain))
      ) {
        Toast("操作失败，存在特殊字符<>'\"!＆＃( )%\\");
        return false;
      }

      if (loginOrRegister == "register") {
        if (!isNotBlank(userPswAgain) || !isNotBlank(userPsw)) {
          Toast("再次输入密码不能为空");
          return false;
        }
        // 判断两次密码是否一致
        if (loginOrRegister == "register" && userPsw != userPswAgain) {
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
      let that = this;
      this.$axios.post("/api/login", data).then((res) => {
        if (res && res.data.result) {
          // 登录成功跳转到首页
          data = qs.stringify({name: userName});
          that.$axios.post("/api/getUserInfo", data).then((res) => {
            that.$router.replace({path: "/mine"});
            that.sign = res.data.sign;
            that.img_url = res.data.img_url;
            setStore("loginUserInfo", res.data);
          });
        } else {
          res.data.msg && Toast(res.data.msg);
        }
      });
    },
    // 防止xss注入
    preventXSS() {
    },
  },
};
</script>

<style scoped>
.height_42 {
  height: 42%;
}

.height_28 {
  height: 28%;
}

.topTip {
  position: absolute;
  top: 100px;
}

.ipt_container_center,
.ipt_container_btm {
  width: 100%;
}

.ipt_container_center.ipt_container_center_unset {
  justify-content: unset;
}

.ipt_container_top {
  height: 20%;
}

.ipt_container_center {
  height: 65%;
  /* padding-bottom: 25px; */
  justify-content: space-between;
}

.ipt_container_btm {
  height: 15%;
}

.span_red {
  color: #ff461d !important;
}

.loginOrRegister {
  width: 100%;
  /* top: 10px; */
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

.login_fir_input {
  /* ma */
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
  top: 100%;
  position: absolute;
  margin-top: -25px;
}

.img_wrap {
  background: rgba(255, 255, 255, 0.4);
}

.login_container_reg {
  height: 43% !important;
}

.login_container {
  width: 80%;
  height: 32%;
  background: rgba(255, 255, 255, 0.4);
  align-items: center;
}

.login_container input {
  padding-left: 3px;
}

.login_item {
  width: 80%;
  /* height: 30%; */
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
