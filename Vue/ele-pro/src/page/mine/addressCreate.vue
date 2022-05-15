<template>
  <div class='addressCreate'>
    <Top
      :nav_title='nav_title'
      topBG="true"
    ></Top>
      <div class="common_container">

        <van-address-edit
          :area-list="areaList"
          :address-info="AddressInfo"
          :show-postal="false"
          show-delete
          show-set-default
          show-search-result
          :search-result="searchResult"
          :area-columns-placeholder="['请选择', '请选择', '请选择']"
          @save="onSave"
          @delete="onDelete"
          @change-detail="onChangeDetail"
        />
      </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Top from "@/components/Top.vue";
const qs = require("qs");
import { getStore, setStore, isNotBlank } from "../../config/mUtils.js";
import areaList from "../../assets/js/area.js";
export default {
  components: { Top },
  data() {
    return {
      type: this.$route.query.type, //edti编辑 create创建
      nav_title:
        this.$route.query.type == "edit" ? "编辑收货地址" : "新建收货地址",
      topBG: true,
      areaList, //地区列表
      AddressInfo: {}, //收货人信息初始值
      searchResult: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.getData();
  },
  mounted() {},
  methods: {
    //数据回显
    getData() {
      let that = this;
      let id = this.$route.query.id;
      let data = qs.stringify({ id: id });
      this.$axios.post("/api/getAddressSingle", data).then(res => {
        if (isNotBlank(res) && isNotBlank(res.data)) {
          let result = res.data;
          let detail_address = result.detail_address
            ? result.detail_address
            : "";

          let obj = {
            id: result.id,
            name: result.name,
            tel: result.phone,
            isDefault: result.isDefault == 1 ? true : false,
            areaCode: result.areaCode, //区
            addressDetail: detail_address
          };
          that.AddressInfo = obj;
        }
      });
    },

    onSave(content) {
      let that = this;
      var name = content.name;
      var tel = content.tel;
      var isDefault = content.isDefault == true ? "1" : "0";
      var addressDetail = content.addressDetail;
      var id = content.id;
      var province = content.province;
      var county = content.county;
      var city = content.city;
      var areaCode = content.areaCode;
      let obj = {
        name: name,
        tel: tel,
        isDefault: isDefault,
        areaCode: areaCode,
        addressDetail: addressDetail,
        id: id,
        province: province,
        county: county,
        city: city
      };
      let data = "";
      if (this.type == "edit") {
        obj.type = "edit";
        data = qs.stringify(obj);
        this.$axios.post("/api/editAddress", data).then(res => {
          if (isNotBlank(res) && isNotBlank(res.data)) {
            that.$router.replace({ path: "/myAddress" });
            Toast("地址修改成功");
          }
        });
      } else {
        obj.type = "create";
        obj.user_register_id = getStore("loginUserInfo")&&JSON.parse(getStore("loginUserInfo")).id; //传入用户id
        data = qs.stringify(obj);
        this.$axios.post("/api/editAddress", data).then(res => {
          if (isNotBlank(res) && isNotBlank(res.data)) {
            that.$router.replace({ path: "/myAddress" });
            Toast("地址添加成功");
          }
        });
      }
    },
    onDelete(content) {
      let that = this;
      let id = content.id;
      let data = qs.stringify({ id: id });
      this.$axios.post("/api/deleteAddress", data).then(res => {
        if (isNotBlank(res) && isNotBlank(res.data)) {
          Toast("删除成功");
          that.$router.replace({ path: "/myAddress" });
        }
      });
    },
    onChangeDetail(val) {
      // if (val) {
      //   this.searchResult = [
      //     {
      //       name: "黄龙万科中心",
      //       address: "杭州市西湖区"
      //     }
      //   ];
      // } else {
      //   this.searchResult = [];
      // }
    }
  }
};
</script>

<style>

.van-button--default .van-button__text {
  color: #333;
}
.van-button--danger .van-button__text:nth-child(1) {
  color: white;
}
.addressCreate .van-switch{
      width: 48px;
    height: 24px;
}
.van-switch__node {
  width: 24px;
  height: 24px;
}
.van-switch--on .van-switch__node {
  transform: translateX(24px);
}
</style>