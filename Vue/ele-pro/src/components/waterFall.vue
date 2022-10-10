<template>
  <keep-alive>
    <div
      id="waterFall"
      class="waterFall"
      ref="waterFall"
      :style="{ margin: waterFullPadding + 'px' }"
    ></div>
  </keep-alive>
</template>

<script>
import {throttle, getStore, setStore, isNotBlank} from "../config/mUtils.js";
// import Component from 'vue-class-component'
// Component.registerHooks(["beforeRouteEnter", "beforeRouteLeave", "beforeRouteUpdate"]);
export default {
  props: [
    "imgsArr",
    "columns",
    "waterFullBottom",
    "waterFullPadding",
    "shop_start",
    "shop_limit",
    "nav_title",
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
      scrollHeight: 0, // 滚动视图总高度
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
  created() {
  },
  mounted() {
    // onclick 执行的是 window 环境中的方法，所以：将 this 中的方法或data中定义的字段关联到 window 上
    window.turnShop = this.turnShop;
    this.$nextTick(() => {
      window.addEventListener("scroll", throttle(this.handleScrollIndex, 30), true);
    });
  },

  // router跳转离开列表页前，记录当前页面的位置
  beforeRouteLeave(to, from, next) {
    // 要滚动到顶部吸附的元素的偏移量
    let container_scroll = document.querySelector("#waterFall").scrollTop;
    setStore("container_scroll", container_scroll);
    next();
  },

  // 详情页面进入列表页前
  beforeRouteEnter(to, from, next) {
    if (from.name == "shop") {
      next((vm) => {
        vm.$refs.waterFall.scrollTop = getStore("container_scroll");
      });
    } else {
      next((vm) => {
        vm.$refs.waterFall.scrollTop = 0;
      });
    }
  },
  methods: {
    // 其他地方调用
    changeIsInProcessing: function (flagIn) {
      this.isInProcessing = flagIn;
    },
    //!!!第一次触底前 移除瀑布流内部的滑动，只保留外层的滑动
    handleScrollIndex(e) {
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

    // // 计算瀑布流 块位置
    calItemPosition() {
      let arrH =
        (this.shop_start != this.shop_limit && getStore("arrH") && JSON.parse(getStore("arrH"))) || [];
      /*
        1、计算出图片与块的固定宽度itemWidth：(设备宽-空白) / 列数
        2、展示图片：
          宽：itemWidth
          高imgH：原始图片高度 * (itemWidth / 原始图片宽)
        3、最终的item块：
          宽：itemWidth
          高itemH：图片高 + 信息展示元素高度
      */
      let pageWidth = this.getClient().width - this.waterFullPadding * 3; // 确定图片的宽度 - 左中右空白padding
      let itemWidth = parseInt(pageWidth / this.columns); // 得到item块的宽度
      /*
        itemIndex：上次item块开始的索引
        imgsArrIndex：当前遍历的图片索引
        计算每次新加载的图片块的位置
       */
      for (
        let itemIndex = this.shop_start - this.shop_limit, imgsArrIndex = 0;
        imgsArrIndex < this.imgsArr.length;
        itemIndex++, imgsArrIndex++
      ) {
        let itemObj = this.imgsArr[imgsArrIndex];
        let navTitle = this.nav_title;
        let oItemHtml = this.setOItemHtml(itemWidth, navTitle, itemObj);

        $(".waterFall").append(oItemHtml);
        let initHeight = itemObj && itemObj.height; //获取原始图片高度
        let initWidth = itemObj && itemObj.width; //获取原始图片宽

        // 瀑布流图片容器宽度
        itemObj.itemW = itemWidth;
        // 压缩比：原始图片宽 / 展示的item块宽度
        let rate = initWidth / itemWidth;
        // 图片压缩后的高度
        let imgH = initHeight / rate;
        // item块最终高度
        let itemH = imgH + $(".item").eq(itemIndex).find(".img-info").outerHeight(true);
        // 瀑布流图片容器高度
        itemObj.itemH = itemH;
        // 设置item块与其图片高度
        $(".item").eq(itemIndex).height(itemH);
        $(".item").eq(itemIndex).find("img").height(imgH);
        let params = {itemIndex, arrH, itemH, itemObj, itemWidth, imgsArrIndex}
        this.calSingleItemPosition(params);
        // 第一页 第一个item块
        if (itemIndex < this.columns && this.shop_start == this.shop_limit) {
          arrH.push(parseInt(itemH));
          itemObj.top = 0;
          // 图片容器宽度 + j份左边距
          itemObj.left = itemWidth * imgsArrIndex + this.waterFullPadding * imgsArrIndex;
          // 设置这个item块的位置
          $(".item")
            .eq(itemIndex)
            .css({
              top: "0px",
              left: itemWidth * imgsArrIndex + this.waterFullPadding * imgsArrIndex + "px",
            });
        } else {
          // 其他列
          let minIndex = this.getMinOrMaxHeight(arrH).minIndex;

          // 设置下一行的第一个盒子位置
          // top值就是最小列的高度+底部距离
          itemObj.top = arrH[minIndex] + this.waterFullBottom;
          // left跟随第一列即可
          // 第二页的数据没进if，left为空，因此加上判空（防止left=0误处理）处理
          itemObj.left =
            itemWidth * (imgsArrIndex % 2) + this.waterFullPadding * (imgsArrIndex % 2);
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
      let maxIndex = this.getMinOrMaxHeight(arrH).maxIndex;
      this.maxItemAllHei = arrH[maxIndex];
      // 最后一次请求
      if (this.imgsArr.length < this.shop_limit) {
        this.maxItemAllHei += 120 + this.waterFullBottom;
      }
      $("#waterFall").height(this.maxItemAllHei);
      // 元素渲染完成解锁，可以继续请求data
      this.isImgLoading = false;
    },

    calSingleItemPosition(params) {
      let {itemIndex, arrH, itemH, itemObj, itemWidth, imgsArrIndex} = params;
      // 第一页 第一个item块
      if (itemIndex < this.columns && this.shop_start == this.shop_limit) {
        arrH.push(parseInt(itemH));
        itemObj.top = 0;
        // 图片容器宽度 + j份左边距
        itemObj.left = itemWidth * imgsArrIndex + this.waterFullPadding * imgsArrIndex;
        // 设置这个item块的位置
        $(".item")
          .eq(itemIndex)
          .css({
            top: "0px",
            left: itemWidth * imgsArrIndex + this.waterFullPadding * imgsArrIndex + "px",
          });
      } else {
        // 其他列
        let minIndex = this.getMinOrMaxHeight(arrH).minIndex;

        // 设置下一行的第一个盒子位置
        // top值就是最小列的高度+底部距离
        itemObj.top = arrH[minIndex] + this.waterFullBottom;
        // left跟随第一列即可
        // 第二页的数据没进if，left为空，因此加上判空（防止left=0误处理）处理
        itemObj.left =
          itemWidth * (imgsArrIndex % 2) + this.waterFullPadding * (imgsArrIndex % 2);
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
    },
    // 构造item块的HTML对象
    setOItemHtml(itemWidth, navTitle, itemObj) {
      return `<div class="item" style="width:${itemWidth}px" onclick="javascript:turnShop('${
        itemObj.id}','${itemObj.info}','${navTitle}','${itemObj.category}')">

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
    },

    // 获取瀑布流最大最小高度
    getMinOrMaxHeight(arrH) {
      let obj = {
        minIndex: 0,
        maxIndex: 0,
      };
      let minHeight = arrH[0];

      // 找出最小高度
      for (let z = 0; z < arrH.length; z++) {
        if (minHeight > arrH[z]) {
          minHeight = arrH[z];
          obj.minIndex = z;
        } else {
          obj.maxIndex = z;
        }
      }
      return obj;
    },

    // 瀑布流跳转店铺详情
    turnShop(restaurant_id, restaurant_name, nav_title, category) {
      // 防止ios触底出现工具栏
      this.$router.replace({
        path: "/shop",
        query: {
          restaurant_id: restaurant_id,
          restaurant_name: restaurant_name,
          title: nav_title,
          category: category,
        },
      });
    },

    // 监听imgsArr数组变化时，闭包方式预加载图片
    preLoadImages() {
      let that = this;
      let loadFinishNums = 0;

      for (let i = 0; i < this.imgsArr.length; i++) {
        // 闭包 执行每一个i，否则只会执行最后一个i
        (function (url, index) {
          let img = new Image();
          img.src = url;
          img.onerror = function () {
            this.οnerrοr = null;
            img.src =
              "http://p0.meituan.net/waimaipoi/23116ead6885e6883689db8010b5384d52286.jpg";
            img.width = "480";
            img.height = "360";
            loadFinishNums++;
            if (loadFinishNums == that.imgsArr.length) {
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
