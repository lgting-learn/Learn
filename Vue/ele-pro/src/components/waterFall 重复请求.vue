<template>
  <div
    class="waterFall"
    :style="{ margin: waterFulpadding + 'px', height: maxItemAllHei + 'px' }"
  ></div>
</template>

<script>
import { throttle } from "../config/mUtils.js";
export default {
  props: ["imgsArr", "columns", "waterFullBottom", "waterFulpadding"],
  components: {},
  data() {
    return {
      // 瀑布流高度
      maxItemAllHei: 700,
      scrollHeight: 0, //滚动视图总高度
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
      window.addEventListener("scroll", throttle(this.handleScrollTaskAway, 30), true);
    });
  },
  methods: {
    //!!!第一次触底前 移除瀑布流内部的滑动，只保留外层的滑动
    handleScrollTaskAway(e) {
      this.$emit("broadcastCell");

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
      // 触底 加载数据 重新计算滚动视图高度
      if (clientHeight + scrollTop >= this.scrollHeight) {
        this.$emit("getData");
        console.log("触底");
      }
    },

    // 计算瀑布流 块位置
    calItemPosition() {
      let arrH = [];
      // 1 确定图片的宽度 - 左中右空白padding
      let pageWidth = this.getClient().width - this.waterFulpadding * 3;
      //得到item的宽度
      let itemWidth = parseInt(pageWidth / this.columns);
      let splitBottomHTml = `<div class="splitBottom"></div>`;

      for (let j = 0; j < this.imgsArr.length; j++) {
        let itemObj = this.imgsArr[j];
        let oItemHtml = `<div class='item' style="width:${itemWidth}px"></div>`;
        let oImgHtml = `<img src=${itemObj.src} alt="" />`;
        let imgInfoHtml = ` <div class="img-info padding_10">
        <p class="some-info weight_600 color_black3">${itemObj.info} ${
          this.scrollHeight
        }</p>
        <div class="flex_row_center">
          <p
            class="some-info font10_left color_org task_score margin_right_5 flex_center"
          >
            ${itemObj.score}分
          </p>
          <p class="some-info font10_left color_gray ellipsis task_introduce flex_center">
            ${itemObj.introduce || ""}
          </p>
        </div>
        <div class="flex_row_center">
          <div class="some-info font10_left color_gray ellipsis task_item_btm">
            人均￥${itemObj.per_capita} | 月售${itemObj.month_sales}
          </div>
        </div>
      </div>`;
        $(".waterFall").append(oItemHtml);
        $(".item").eq(j).append(oImgHtml);
        $(".item").eq(j).append(imgInfoHtml);

        let height = itemObj.height; //获取原始图片高度
        let width = itemObj.width; //获取原始图片宽

        // 压缩比
        let rate = width / itemWidth;
        // 瀑布流图片容器宽度
        itemObj.itemW = itemWidth;
        // 图片压缩后的高度
        let imgH = height / rate;
        let itemH = imgH + $(".item").eq(j).find(".img-info").outerHeight(true);
        // 瀑布流图片容器高度
        itemObj.itemH = itemH;
        $(".item").eq(j).height(itemH);
        $(".item").eq(j).find("img").height(imgH);

        if (j < this.columns) {
          arrH.push(itemH);
          itemObj.top = 0;
          // 图片容器宽度 + j份左边距
          itemObj.left = itemWidth * j + this.waterFulpadding * j;
          $(".item")
            .eq(j)
            .css({ top: "0px", left: itemWidth * j + this.waterFulpadding * j + "px" });
        } else {
          // 其他列
          let minHeight = arrH[0];
          let minIndex = 0;
          // 找出最小高度
          for (let z = 0; z < arrH.length; z++) {
            if (minHeight > arrH[z]) {
              minHeight = arrH[z];
              minIndex = z;
            }
          }
          // 设置下一行的第一个盒子位置
          // top值就是最小列的高度+底部距离
          itemObj.top = arrH[minIndex] + this.waterFullBottom;

          // left跟随第一列即可
          itemObj.left = this.imgsArr[minIndex].left;
          $(".item")
            .eq(j)
            .css({
              top: arrH[minIndex] + this.waterFullBottom + "px",
              left: this.imgsArr[minIndex].left + "px",
            });
          // 修改最小列的高度
          // 最小列的高度 = 最小列高度 + 自身高度 + 底部距离
          arrH[minIndex] = arrH[minIndex] + itemH + this.waterFullBottom; //设置距离
        }
        itemObj.itemH = itemH;
      }
      $(".waterFall").append(splitBottomHTml);
      // 左侧瀑布流总高度
      let evenItemAllHei = $(".item").eq(0).outerHeight(true);
      // 右侧瀑布流总高度
      let oddItemAllHei = $(".item").eq(1).outerHeight(true);
      for (let j = this.columns; j < $(".item").length; j++) {
        // 奇数
        if (j % 2 == 1) {
          oddItemAllHei += $(".item").eq(j).outerHeight(true);
        } else {
          evenItemAllHei += $(".item").eq(j).outerHeight(true);
        }
      }
      // 动态设置瀑布流容器高度=最大列高度+防止被工具栏遮挡div高度+底部bottom
      this.maxItemAllHei =
        Math.max(oddItemAllHei, evenItemAllHei) +
        this.waterFullBottom +
        $(".splitBottom").eq(0).outerHeight(true);
      // 数据加载完成并插入后，才开放请求数据的权限
      this.$emit("changeFlag");
    },

    // 预加载图片
    preLoadImages(obj) {
      let that = this;
      var loadFinishNums = 0;
      let result = [];
      for (let i = 0; i < this.imgsArr.length; i++) {
        // 闭包 执行每一个i，否则只会执行最后一个i
        (function (url, index) {
          var img = new Image();
          img.src = url;

          img.onload = function () {
            if (this.complete) {
              loadFinishNums++;
              that.imgsArr[i].width = this.width;
              that.imgsArr[i].height = this.height;
              // 全部图片预加载完成
              if (loadFinishNums == that.imgsArr.length) {
                that.calItemPosition();
              }
            }
          };
        })(this.imgsArr[i].src, i);
      }
    },
    loadImg() {
      let preLoadImgArr = [];
      this.imgsArr.forEach((element) => {
        preLoadImgArr.push(element.src);
      });
      this.preLoadImages(preLoadImgArr);
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
