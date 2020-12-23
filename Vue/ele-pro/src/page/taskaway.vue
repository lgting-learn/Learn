<template >
  <div
    class='taskaway flex_column'
  >
    <Top :nav_title='nav_title' :top_show="0"></Top>
    <SwiperTA>
    </SwiperTA>
    <div class="split taskaway_split"></div>
    <div class="near_shop flex_column">
      <div
        class="near_shop_top padding_10"
        id="near_shop_top"
      >
        <span>附近商家</span>
    </div>
    <div class="near_shop_show">
      <vue-waterfall-easy
        :imgsArr="imgsArr"
        @scrollReachBottom="getData"
        isRouterLink="true"
        @click="clickFn"
      >
        <div
          class="img-info padding_10"
          slot-scope="props"
        >
          <!-- <p class="some-info">第{{props.index+1}}张图片</p> -->
          <p class="some-info weight_600 color_black3">{{props.value.info}}</p>
          <div class="flex_row_center ">
            <p class="some-info font12 color_org task_score margin_right_5 flex_center">{{props.value.score}}分</p>
            <p class="some-info font12 color_gray ellipsis task_introduce flex_center">{{props.value.introduce}}</p>
          </div>
          <div class="flex_row_center ">
            <div class="some-info font12 color_gray ellipsis task_item_btm">人均￥{{props.value.per_capita}}|月售{{props.value.month_sales}}</div>
          </div>
    </div>
    </vue-waterfall-easy>
    </div>
    </div>
    <TabBottom
      :nav_title="nav_title"
      :active="active"
    ></TabBottom>
      </div>

</template>

<script>
import SwiperTA from "@/components/SwiperTA.vue";
import vueWaterfallEasy from "vue-waterfall-easy";
import TabBottom from "@/components/TabBottom.vue";
import Top from "@/components/Top.vue";

export default {
  components: { SwiperTA, vueWaterfallEasy, TabBottom,Top },
  data() {
    return {
      nav_title: "外卖",
      active: 0,
      imgsArr: [],
      responseData: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft: function() {},
    imgErrorFn() {
      //补充
    },
    clickFn(event, { index, value }) {
      // 阻止a标签跳转
      // event.preventDefault();
      // 只有当点击到图片时才进行操作
      if (event.target.tagName.toLowerCase() == "img") {
        console.log("img clicked", index, value);
      }
    },

    changeTitle(title) {
      this.nav_title = title;
    },
    //瀑布流 触底加载
    getData() {
      var that = this;
      this.$axios.get("/api/shop").then(function(res) {
        console.log("店铺==>", res.data);
        that.responseData = res.data;
        that.responseData.forEach(res => {
          that.imgsArr = that.imgsArr.concat({
            src: res.image_path,
            href: { path: "/shop", query: { restaurant_id: res.id } }, //!!!vueWaterfallEasy瀑布流组件 跳转传参
            info: res.name,
            score: res.score,
            introduce: res.introduce,
            per_capita: res.per_capita,
            month_sales: res.month_sales
          });
        });
      });
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      let offsetTop = document.querySelector("#near_shop_top").offsetTop; // 要滚动到顶部吸附的元素的偏移量
      if (scrollTop > offsetTop) {
        //瀑布流的附近商家到达顶部
        document.querySelector(".vue-waterfall-easy-scroll").style.overflowY =
          "scroll";
        document.querySelector(".near_shop").classList.add("relative_full");
      } else {
        document.querySelector(".vue-waterfall-easy-scroll").style.overflowY =
          "hidden";
        // document.querySelector(".near_shop").classList.remove('fixed_full');
      }
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    document.querySelector(".vue-waterfall-easy-scroll").style.overflowY =
      "hidden";
    // document.querySelector(".near_shop").classList.add('fixed_full');

    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  }
};
</script>

<style >
.task_item_btm {
}
.task_introduce {
  max-width: 90px;
}
.task_score {
  /* margin-right: 5px; */
}

.vue-waterfall-easy-container .vue-waterfall-easy-scroll {
  height: 900px !important;
}
.vue-waterfall-easy-container .loading .dot {
  background: #1989fa !important;
}
.index_main {
  flex-grow: 1;
}
.vue-waterfall-easy-container .vue-waterfall-easy a {
  border-radius: 4px;
  overflow: hidden;
}

.vue-waterfall-easy-container .vue-waterfall-easy a.img-inner-box {
  padding: 0 !important;
}
.vue-waterfall-easy-container .vue-waterfall-easy > .img-box {
  padding: 0 !important;
  width: 48% !important;
  padding-left: 2% !important;
  padding-bottom: 10px !important;
}

.vue-waterfall-easy-container .vue-waterfall-easy {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.near_shop_show {
  height: 100%;
}
.taskaway_split {
  flex-grow: 0;
}
.near_shop {
  flex-grow: 1;
}
</style>