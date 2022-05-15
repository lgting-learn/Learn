<template>
  <div
    class='settings fixed_full flex_column bg_gray'
  >
    <Top
      nav_title='设置'
      topBG="true"
    ></Top>
      <div class="container common_container">
        <div class="top flex_column">
          <div
            class="top_item_wrap"
            v-for="(item,index) in itemList"
            :key="index"
          >
          <!-- :class="[item.topFlag?'margin_top_10':'',item.lineFlag?'border_bottom':'']"
              v-show="item.showFlag" -->
            <div
              class="top_item flex_column_center bg_white padding_10 rel"
              
            >

              <span class="span_black">{{item.title}}</span>
              <span class="font11_left color_gray">{{item.desc}}</span>
              <van-icon
                name="arrow"
                color="gray"
                class="arrow_right_vant"
                size="16"
              />

        </div>
      </div>
      </div>
      </div>
      <div
        class="flex_center bg_yellow border_radius_10 padding_10_top_bottom signout"
        @click="signOut"
        v-show="loginUserInfo"
      >
        <span class="font12 span_black">退出账号</span>
        </div>
        </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { Dialog } from "vant";
import {
  getStore,
  setStore,
  preventXSS,
  isNotBlank
} from "../../config/mUtils.js";
export default {
  components: { Top },
  data() {
    return {
      loginUserInfo: "",
      itemList: [
        {
          title: "个人信息",
          desc: "头像、昵称、收货地址",
          topFlag: true,
          lineFlag: true,
          showFlag: true
        },
        {
          title: "账号与安全",
          desc: "修改密码、修改手机号码、账号绑定管理",
          showFlag: true
        },
        {
          title: "支付设置",
          desc: "",
          topFlag: true,
          lineFlag: true,
          showFlag: true
        },
        { title: "通用", desc: "", showFlag: true },
        { title: "关于ELEPRO", desc: "", topFlag: true, showFlag: true }
      ]
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
        message: "退出后将不能查看订单，\n确认退出吗？"
      })
        .then(() => {
          setStore("loginUserInfo", "");
          that.$router.replace({ path: "/mine" });
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style >
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




<template>
  <div
    class='settings fixed_full flex_column bg_gray'
  >
    <Top
      nav_title='设置'
      topBG="true"
    ></Top>
      <div class="container common_container">
        <div class="top flex_column">
          <div
            class="top_item flex_column_center bg_white padding_10 rel"
            v-for="(item,index) in itemList"
            :key="index"
            :class="[item.topFlag?'margin_top_10':'',item.lineFlag?'border_bottom':'']"
            v-show="item.showFlag"
          >

            <span>{{item.title}}</span>
            <span class="font11_left color_gray">{{item.desc}}</span>
            <span class="arrow_right span_black abs "></span>

        </div>
      </div>
      </div>
      <div
        class="flex_center bg_yellow border_radius_10 padding_10_top_bottom signout"
        @click="signOut"
        v-show="loginUserInfo"
      >
        <span class="font12 span_black">退出账号</span>
        </div>
        </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { Dialog } from "vant";
import {
  getStore,
  setStore,
  preventXSS,
  isNotBlank
} from "../../config/mUtils.js";
export default {
  components: { Top },
  data() {
    return {
      loginUserInfo: "",
      itemList: [
        {
          title: "个人信息",
          desc: "头像、昵称、收货地址",
          topFlag: true,
          lineFlag: true,
          showFlag: true
        },
        {
          title: "账号与安全",
          desc: "修改密码、修改手机号码、账号绑定管理",
          showFlag: true
        },
        {
          title: "支付设置",
          desc: "",
          topFlag: true,
          lineFlag: true,
          showFlag: true
        },
        { title: "通用", desc: "", showFlag: true },
        { title: "关于ELEPRO", desc: "", topFlag: true, showFlag: true }
      ]
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
        message: "退出后将不能查看订单，\n确认退出吗？"
      })
        .then(() => {
          setStore("loginUserInfo", "");
          that.$router.replace({ path: "/mine" });
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<style scoped>
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