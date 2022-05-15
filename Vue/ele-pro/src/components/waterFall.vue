<template>
  <keep-alive>
    <div
      id="waterFall"
      class="waterFall"
      :style="{ margin: waterFulpadding + 'px' }"
    ></div>
  </keep-alive>
</template>

<script>
import { throttle, getStore, setStore, isNotBlank } from "../config/mUtils.js";
export default {
  props: [
    "imgsArr",
    "columns",
    "waterFullBottom",
    "waterFulpadding",
    "shop_start",
    "shop_limit",
  ],
  components: {},
  data() {
    return {
      // 请求数据锁
      isInProcessing: false,
      // 请求数据的图片渲染
      isImgLoading: false,
      // 瀑布流高度
      maxItemAllHei: 0,
      scrollHeight: 0, //滚动视图总高度
      nums: 0,
      index: 30,
    };
  },
  computed: {},

  watch: {
    // created与mounted未必获取的到axios返回的数据imgsArr，因此使用watch监听
    imgsArr: function (newVal, oldNew) {
      newVal && this.preLoadImages();
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", throttle(this.handleScrollTaskAway, 30), true);
    });
  },
  methods: {
    changeIsInProcessing: function (flagIn) {
      this.isInProcessing = flagIn;
    },
    //!!!第一次触底前 移除瀑布流内部的滑动，只保留外层的滑动
    handleScrollTaskAway(e) {
      // this.$emit("broadcastCell");

      // 滚动视图高度(也就是当前元素的真实高度)-splitBottom高度
      this.scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // 可见区域高度-吸顶元素
      let clientHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      // 滚动条顶部到浏览器顶部高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 数据正在加载+上次请求图片未渲染完成 触底不请求数据
      if (
        clientHeight + scrollTop >= this.scrollHeight &&
        !this.isInProcessing &&
        !this.isImgLoading
      ) {
        this.isInProcessing = true;
        this.isImgLoading = true;
        this.$emit("getData");
      }
    },

    // 计算瀑布流 块位置
    calItemPosition() {
      var maxIndex = 0;
      var minIndex = 0;
      let arrH =
        (this.shop_start != this.shop_limit && JSON.parse(getStore("arrH"))) || [];
      // 1 确定图片的宽度 - 左中右空白padding
      let pageWidth = this.getClient().width - this.waterFulpadding * 3;
      //得到item的宽度
      let itemWidth = parseInt(pageWidth / this.columns);
      for (
        let itemIndex = this.shop_start - this.shop_limit, imgsArrIndex = 0;
        imgsArrIndex < this.imgsArr.length;
        itemIndex++, imgsArrIndex++
      ) {
        console.log("itemIndex=" + itemIndex + " " + this.shop_start);
        let itemObj = this.imgsArr[imgsArrIndex];
        let oItemHtml = `<div class="item" style="width:${itemWidth}px">
      <img src="${itemObj && itemObj.src}" alt="" />

      <div class="img-info padding_10">
        <p class="some-info weight_600 color_black3"> ${itemObj && itemObj.info} </p>
        <div class="flex_row_center">
          <p
            class="some-info font10_left color_org task_score margin_right_5 flex_center"
          >
            ${itemObj && itemObj.score} 分
          </p>
          <p class="some-info font10_left color_gray ellipsis task_introduce flex_center">
            ${(itemObj && itemObj.introduce) || ""}
          </p>
        </div>
        <div class="flex_row_center">
          <div class="some-info font10_left color_gray ellipsis task_item_btm">
             人均￥${itemObj.per_capita} | 月售 ${itemObj.month_sales}
          </div>
        </div>
      </div>
    </div> `;

        $(".waterFall").append(oItemHtml);
        let height = itemObj && itemObj.height; //获取原始图片高度
        let width = itemObj && itemObj.width; //获取原始图片宽

        // 压缩比
        let rate = width / itemWidth;
        // 瀑布流图片容器宽度
        itemObj.itemW = itemWidth;
        // 图片压缩后的高度
        let imgH = height / rate;
        let itemH = imgH + $(".item").eq(itemIndex).find(".img-info").outerHeight(true);
        // 瀑布流图片容器高度
        itemObj.itemH = itemH;
        $(".item").eq(itemIndex).height(itemH);
        $(".item").eq(itemIndex).find("img").height(imgH);
        // 第一页
        if (itemIndex < this.columns && this.shop_start == this.shop_limit) {
          arrH.push(parseInt(itemH));
          itemObj.top = 0;
          // 图片容器宽度 + j份左边距
          itemObj.left = itemWidth * imgsArrIndex + this.waterFulpadding * imgsArrIndex;
          $(".item")
            .eq(itemIndex)
            .css({
              top: "0px",
              left: itemWidth * imgsArrIndex + this.waterFulpadding * imgsArrIndex + "px",
            });
        } else {
          // 其他列
          let minHeight = arrH[0];
          minIndex = 0;
          // 找出最小高度
          for (let z = 0; z < arrH.length; z++) {
            if (minHeight > arrH[z]) {
              minHeight = arrH[z];
              minIndex = z;
            } else {
              maxIndex = z;
            }
          }

          // 设置下一行的第一个盒子位置
          // top值就是最小列的高度+底部距离
          itemObj.top = arrH[minIndex] + this.waterFullBottom;
          // left跟随第一列即可
          // 第二页的数据没进if，left为空，因此加上判空（防止left=0误处理）处理
          itemObj.left =
            itemWidth * (imgsArrIndex % 2) + this.waterFulpadding * (imgsArrIndex % 2);
          $(".item")
            .eq(itemIndex)
            .css({
              top: itemObj.top + "px",
              left: itemObj.left + "px",
            });

          // 修改最小列的高度
          // 最小列的高度 = 最小列高度 + 自身高度 + 底部距离
          arrH[minIndex] = parseInt(arrH[minIndex] + itemH + this.waterFullBottom); //设置距离
        }
        itemObj.itemH = itemH;
      }
      setStore("arrH", arrH);

      this.maxItemAllHei = arrH[maxIndex];
      // 最后一次请求
      if (this.imgsArr.length < this.shop_limit) {
        this.maxItemAllHei += 120 + this.waterFullBottom;
      }
      $("#waterFall").height(this.maxItemAllHei);
      console.log("this.maxItemAllHei==" + this.maxItemAllHei);
      // 元素渲染完成解锁，可以继续请求data
      this.isImgLoading = false;
    },

    // 预加载图片
    preLoadImages() {
      let that = this;
      var loadFinishNums = 0;
      let result = [];

      for (let i = 0; i < this.imgsArr.length; i++) {
        // 闭包 执行每一个i，否则只会执行最后一个i
        (function (url, index) {
          var img = new Image();
          img.src = url;
          img.onerror = function () {
            this.οnerrοr = null;
            img.src =
              "http://p0.meituan.net/waimaipoi/23116ead6885e6883689db8010b5384d52286.jpg";
            img.width = "480";
            img.height = "360";
            loadFinishNums++;
            if (loadFinishNums == that.imgsArr.length) {
              console.log(" οnerrοr===");

              that.calItemPosition();
              return;
            }
          }; //防止闪图
          img.onload = function () {
            if (this.complete) {
              loadFinishNums++;
              that.imgsArr[i].width = (this && this.width) || 188;
              that.imgsArr[i].height = (this && this.height) || 189;
              // 全部图片预加载完成
              if (loadFinishNums == that.imgsArr.length) {
                that.calItemPosition();
                return;
              }
            }
          };
        })(this.imgsArr[i].src, i);
      }
    },

    waterFall() {},

    // 获取当前屏幕宽度
    getClient() {
      return {
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
      };
    },
  },
};
</script>

<style>
.waterFall {
  position: relative;
  margin-bottom: 47px !important;
  /* min-height: 700px; */
}
.waterFall .splitBottom {
  height: 47px;
  width: 100%;
  background: #fff;
}
.waterFall .item {
  position: absolute;
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  border-radius: 4px;
}
.waterFall .item img {
  width: 100%;
}
</style>
