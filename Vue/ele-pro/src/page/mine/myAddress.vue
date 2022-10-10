<template>
  <div class="myAddress flex_column fixed_full">
    <Top :nav_title="nav_title" topBG="true" ></Top>
    <div class="common_container">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text=""
        default-tag-text="默认"
        @add="toURL"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { getStore, setStore, isNotBlank,setHistory } from "../../config/mUtils.js";

const qs = require("qs");
export default {
  inject: ["reload"], //注入App里的reload方法
  components: { Top },
  data() {
    return {
      nav_title: "我的收货地址",
      chosenAddressId: "1",
      list: [],
      disabledList: [],
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getList();
  },
  mounted() {
    setHistory(this);
  },
  methods: {

    toURL() {
      this.$router.replace({ path: "/addressCreate", query: { type: "create" } });
    },
    getList() {
      let that = this;
      let name = getStore("loginUserInfo") && JSON.parse(getStore("loginUserInfo")).name;
      let data = qs.stringify({ name: name });
      this.$axios.post("/api/getAddressList", data).then((res) => {
        if (isNotBlank(res) && isNotBlank(res.data)) {
          var arr = res.data;
          var arrList = [];
          for (let i = 0; i < arr.length; i++) {
            let detail_address = arr[i].detail_address ? arr[i].detail_address : "";

            let obj = {
              id: arr[i].id,
              name: arr[i].name,
              tel: arr[i].phone,
              isDefault: arr[i].isDefault == "1" ? true : false,
              address: arr[i].province + arr[i].city + arr[i].down_town + detail_address,
            };
            that.list.push(obj);
          }
        }
      });
    },
    onEdit(item, index) {
      this.$router.replace({
        path: "/addressCreate",
        query: { type: "edit", id: item.id },
      });
      //   Toast('编辑地址:' + index);
    },
  },
};
</script>

<style>
.van-address-item .van-icon:nth-child(1) {
  display: none;
}
.van-button__text {
  color: #fff;
}
</style>
