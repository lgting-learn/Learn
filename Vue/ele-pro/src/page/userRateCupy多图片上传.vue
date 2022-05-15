<template>
  <div
    class='userRate flex_column bg_gray fixed_full'
  >
    <Top :nav_title='评价'></Top>
    <div class="bg_white margin_10 border_radius_5 padding_10 common_container">
      <div class="font16 divspan_black weight_600 border_bottom padding_btm_10">您对商家/菜品满意吗？</div>

      <div class="shop_rate margin_top_10 ">
        <div class="flex_row padding_btm_10 flex_row_center">
          <img
            :src="shop_img"
            alt=""
            class="width_height_30 margin_right_5 border_radius_5"
          />
          <span class="">{{restaurant_name}}</span>
        </div>
        <div class="rate_detail ">
          <div class="rate_detail_item margin_bottom_10 flex_start flex_row flex_center">
            <span class="span_black margin_right_10">评分</span>
            <van-rate
              v-model="rateValue"
              :size="25"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <span class="margin_left_10 font11_left">满意</span>
          </div>
          <div class="rate_detail_item margin_bottom_10 flex_start flex_row flex_center">
            <span class="span_black margin_right_10">口味</span>
            <van-rate
              v-model="tasteValue"
              :size="25"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <span class="margin_left_10 font11_left">满意</span>
          </div>
          <div class="rate_detail_item margin_bottom_10 flex_start flex_row flex_center">
            <span class="span_black margin_right_10">包装 </span>
            <van-rate
              v-model="packValue"
              :size="25"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <span class="margin_left_10 font11_left">满意</span>
          </div>

        </div>
        <div class="bg_gray border_radius_5 padding_10 flex_column rate_detail_photo margin_top_10">
          <!-- <input class="margin_bottom_10 rate_ipt" placeholder="口味赞，包装好，推荐给大家"/> -->
          <textarea
            v-model="appraise_detail"
            rows="3"
            cols=""
            class="margin_bottom_10 rate_ipt"
            placeholder="口味赞，包装好，推荐给大家"
          ></textarea>
            <van-uploader
              v-model="fileList"
              multiple
              :max-count="maxCount"
              :max-size="500 * 1024"
              @oversize="onOversize"
              :after-read="afterRead"
            />
        </div>

      </div>
      <div class="flex_center margin_top_10">
        <div
          class="bg_yellow commit span_black border_radius_5 flex_center"
          @click="submit"
        >提交</div>
    </div>
    </div>

    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { getStore, setStore, isNotBlank } from "../config/mUtils.js";
//引入oss
var OSS = require("ali-oss");
import { Toast } from "vant";
const qs = require("qs");
export default {
  components: { Top },
  data() {
    return {
      shop_img: "",
      restaurant_name: "",
      appraise_detail: "", //评价
      rateValue: 0, //评分
      tasteValue: 0, //口味
      packValue: 0, //包装
      maxCount: 9, //图片最多上传九张
      url: [],
      fileList: [
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true }
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
      //来自订单页面
      let data = qs.stringify({ order_id: this.$route.query.order_id });
      let that = this;
      this.$axios.post("/api/getOrderDetail", data).then(res => {
        that.amountList = JSON.parse(res.data[0].order_detail);
        // this.foodsPrice = res.data[0].all_price;
        this.shop_img = res.data[0].shop_img;
        this.restaurant_name = res.data[0].restaurant_name;
      });
    },
    afterRead(file) {
      let that = this;
      // file.status = "uploading";
      // file.message = "上传中...";
      let data = qs.stringify({});
      // const client = new OSS({
      //   endpoint: "oss-cn-beijing.aliyuncs.com",
      //   region: "oss-cn-beijing",
      //   accessKeyId: "LTAIHoVuVW18g0cf",
      //   accessKeySecret: "IHoKwxkmPc6eNcQsOyCK7nTjYBB4C1",
      //   bucket: "user-mobile"
      // });
      // let imgName = new Date() + file.file.name;
      // client.multipartUpload(imgName, file.file).then(res => {
      //   that.url = res.res.requestUrls[0];
      //   file.status = "success";
      //   file.message = "上传成功";
      // });
    },
    submit() {
      let userInfo = getStore("loginUserInfo")&&JSON.parse(getStore("loginUserInfo"));
      debugger;
      console.log("11==" + this.fileList);
      const client = new OSS({
        endpoint: "oss-cn-beijing.aliyuncs.com",
        region: "oss-cn-beijing",
        accessKeyId: "LTAIHoVuVW18g0cf",
        accessKeySecret: "IHoKwxkmPc6eNcQsOyCK7nTjYBB4C1",
        bucket: "user-mobile"
      });
      // for (let i = 0; i < this.fileList.length; i++) {
      this.uploadOss(client, this.fileList, 0, this);
      // }
      // let data = qs.stringify({
      //   restaurant_id: this.$route.query.restaurant_id,
      //   user_name: userInfo.name,
      //   head_img: userInfo.img_url,
      //   rateValue: this.rateValue,
      //   tasteValue: this.tasteValue,
      //   packValue: this.packValue,
      //   appraise_time: Date.now(), //当前时间
      //   appraise_detail: this.appraise_detail,
      //   appraise_img: this.url //评论图片
      // });
      // let that = this;
      // this.$axios.post("/api/setAppraise", data).then(res => {
      //   if (
      //     isNotBlank(res) &&
      //     isNotBlank(res.data) &&
      //     isNotBlank(res.data.result)
      //   ) {
      //     that.$router.replace({ path: "/order" });
      //     Toast("评价成功");
      //   }
      // });
    },
    onOversize(file) {
      Toast("文件大小不能超过 500kb");
    },
    uploadOss(client, file, index, that) {
      // for (let i = 0; i < this.fileList.length; i++) {
      debugger;
      let imgName = new Date() + that.fileList[index].file.name;
      if (that.url.length == that.fileList.length) {
        let data = qs.stringify({
          restaurant_id: that.$route.query.restaurant_id,
          user_name: userInfo.name,
          head_img: userInfo.img_url,
          rateValue: that.rateValue,
          tasteValue: that.tasteValue,
          packValue: that.packValue,
          appraise_time: Date.now(), //当前时间
          appraise_detail: that.appraise_detail,
          appraise_img: that.url //评论图片
        });
        that.$axios.post("/api/setAppraise", data).then(res => {
          if (
            isNotBlank(res) &&
            isNotBlank(res.data) &&
            isNotBlank(res.data.result)
          ) {
            that.$router.replace({ path: "/order" });
            Toast("评价成功");
          }
        });
        return
      }
      client.multipartUpload(imgName, that.fileList[index].file).then(res => {
        ++index;
        that.uploadOss(file, index);
        that.url.push(res.res.requestUrls[0]);
        that.fileList[index].status = "success";
        that.fileList[index].message = "上传成功";
      });
    }
  }
};
</script>

<style>
.userRate .rate_ipt {
  padding: 3px 0;
  background: #f6f6f6;
  border: 0 solid;
}
.userRate .commit {
  padding: 5px 20px;
}
.userRate .van-rate__item:not(:last-child) {
  padding-right: 10px !important;
}
.rate_detail_photo {
  padding-bottom: 0 !important;
}
</style>