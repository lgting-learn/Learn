<template>
  <div
    class="waterFall"
    :style="{ margin: waterFulpadding + 'px', height: maxItemAllHei + 'px' }"
  >
    <!-- <div
      class="item"
      v-for="itemObj in tempCache"
      :key="itemObj.src"
      :style="{
        top: itemObj.top + 'px',
        left: itemObj.left + 'px',
        width: itemObj.itemW + 'px',
      }"
    >
      <img :src="itemObj.src" alt="" />

      <div class="img-info padding_10">
        <p class="some-info weight_600 color_black3">{{ itemObj.info }}</p>
        <div class="flex_row_center">
          <p
            class="some-info font10_left color_org task_score margin_right_5 flex_center"
          >
            {{ itemObj.score }}分
          </p>
          <p class="some-info font10_left color_gray ellipsis task_introduce flex_center">
            {{ itemObj.introduce }}
          </p>
        </div>
        <div class="flex_row_center">
          <div class="some-info font10_left color_gray ellipsis task_item_btm">
            人均￥{{ itemObj.per_capita }}|月售{{ itemObj.month_sales }}
          </div>
        </div>
      </div>
    </div> -->
    <div class="splitBottom"></div>
  </div>
</template>

<script>
import { throttle } from "../config/mUtils.js";
export default {
  props: ["imgsArr", "columns", "waterFullBottom", "waterFulpadding"],
  components: {},
  data() {
    return {
      tempCache: [],
      // 瀑布流高度
      maxItemAllHei: 700,
      scrollHeight: 0, //滚动视图总高度
      set: {},
    };
  },
  computed: {},

  watch: {
    // created与mounted未必获取的到axios返回的数据imgsArr，因此使用watch监听
    imgsArr: function (newVal, oldNew) {
      newVal && this.loadImg();
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.calWaterFallAllHeight();
      }, 1000);

      window.addEventListener("scroll", throttle(this.handleScrollTaskAway, 50), true);
    });
  },
  methods: {
    //!!!第一次触底前 移除瀑布流内部的滑动，只保留外层的滑动
    handleScrollTaskAway(e) {
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
      console.log("===" + clientHeight + " " + scrollTop + " " + this.scrollHeight);
      // 触底 加载数据 重新计算滚动视图高度
      if (clientHeight + scrollTop >= this.scrollHeight) {
        // this.$emit("getData");
      }
      this.$emit("broadcastCell");
    },

    // 计算瀑布流高度
    calWaterFallAllHeight() {
      // item描述部分
      let imgInfos = $(".img-info");
      // 瀑布流块
      let items = $(".item");
      var tempArr = this.tempCache;
      let descDivHei = 0;
      // 左侧瀑布流-块描述部分总高度
      let evenDescDivHei = 0;
      // 奇数
      let oddDescDivHei = 0;
      // 左侧瀑布流总高度
      let evenItemAllHei = items.eq(0).outerHeight(true);
      // 右侧瀑布流总高度
      let oddItemAllHei = items.eq(1).outerHeight(true);

      for (let i = this.columns; i < tempArr.length; i++) {
        // 奇数
        if (i % 2 == 1) {
          oddDescDivHei += imgInfos.eq(i - this.columns).outerHeight(true);
          descDivHei = oddDescDivHei;
        } else {
          evenDescDivHei += imgInfos.eq(i - this.columns).outerHeight(true);
          descDivHei = evenDescDivHei;
        }
        tempArr[i].top += descDivHei;
        this.$set(this.tempCache, i, tempArr[i]);
      }
      for (let i = this.columns; i < items.length; i++) {
        // 奇数
        if (i % 2 == 1) {
          oddItemAllHei += items.eq(i).outerHeight(true);
        } else {
          evenItemAllHei += items.eq(i).outerHeight(true);
        }
      }
      // 瀑布流容器高度=最大列高度+防止被工具栏遮挡div高度+底部bottom
      this.maxItemAllHei =
        Math.max(oddItemAllHei, evenItemAllHei) +
        this.waterFullBottom +
        $(".splitBottom").eq(0).outerHeight(true);
    },
    getImgInfo(img) {
      if (img.height != 0 || img.width != 0) {
        console.log("img==" + img.height);
        // 取消定时获取宽高
        clearInterval(this.set);
      }
    },
    // 计算瀑布流 块位置
    calItemPosition(imgsArr, ele, index, itemWidth) {
      debugger;
      var arrH = [];

      var oItem = document.createElement("div");
      oItem.className = "item";
      var oImg = document.createElement("img");
      oImg.src = ele.src;
      this.set = setInterval(this.getImgInfo(oImg), 40);
      //图片等宽itemWidth，对图片做了缩放，计算缩放后的高度
      oImg.height = (oImg.height * itemWidth) / oImg.width;
      oImg.width = itemWidth;
      oItem.appendChild(oImg);

      if (index < this.columns) {
        arrH.push(oImg.height);
        oItem.top = 0;
        // 图片容器宽度 + index份左边距
        oItem.left = itemWidth * index + this.waterFulpadding * index;
      } else {
        // 其他列
        var minHeight = arrH[0];
        var minIndex = 0;
        // 找出最小高度
        for (var z = 0; z < arrH.length; z++) {
          if (minHeight > arrH[z]) {
            minHeight = arrH[z];
            minIndex = z;
          }
        }
        // 设置下一行的第一个盒子位置
        // top值就是最小列的高度+底部距离
        oItem.top = arrH[minIndex] + this.waterFullBottom;
        // left跟随第一列即可
        oItem.left = imgsArr[minIndex].left;

        // 修改最小列的高度
        // 最小列的高度 = 最小列高度 + 自身高度 + 底部距离
        arrH[minIndex] = arrH[minIndex] + oImg.height + this.waterFullBottom; //设置距离
        // }
        imgsArr[index].height = oImg.height;
      }
      document.querySelector(".waterFall").appendChild(oItem);
      // return tempCache;
    },

    // 预加载图片
    preLoadImages() {
      let that = this;
      // 1 确定图片的宽度 - 左中右空白padding
      var pageWidth = this.getClient().width - this.waterFulpadding * 3;
      //得到item的宽度
      var itemWidth = parseInt(pageWidth / this.columns);
      this.imgsArr.forEach(function (ele, index) {
        that.calItemPosition(that.imgsArr, ele, index, itemWidth);
      });
    },
    loadImg() {
      this.preLoadImages();
    },
    waterFall() {},

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
  min-height: 700px;
  margin-bottom: 47px !important;
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
  height: 100%;
}
</style>
