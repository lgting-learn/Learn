<template>
  <div
    class='search flex_column fixed_full bg_gray'
  >
    <van-search
      v-model="search"
      shape="round"
      background="#FFC300"
      placeholder="请输入商家名称"
      @search="searchTarget"
    />

    <div class="search_container_out bg_white">
      <div
        class="search_container bg_gray"
        v-if="searchHistory.length>0"
      >
        <div class="bg_white padding_10 border_radius_5 search_container_up">
          <div class="history_top flex_between margin_bottom_10">
            <span>历史搜索</span>
            <span @click="clearHistory">清空</span>
          </div>
          <div class="history_content flex_wrap">
            <span
              class="history_item margin_bottom_10 ellipsis border_radius_5"
              v-for="item in searchHistory"
              :key="item"
              @click="searchTargetItem(item)"
            >{{ item }}</span>
          </div>
        </div>
      </div>
      <div
        class="vanlist_wrap"
        v-show="searchShopArr.length>0"
      >

        <van-swipe-cell
          v-for="(item,index) in searchShopArr"
          :key="index"
        >

          <!-- <van-cell :border="false" title="单元格" value="内容" /> -->
          <div
            class="flex_row result_item"
            :class="index==0?'border_none':''"
          >

            <van-image
              cover
              round
              lazy-load
              :src="item.image_path"
              alt=""
              class="search_result_left width_height_50 grow_0"
            />

            <div class="search_result_rgt flex_column grow_1">
            <span
              class="some-info weight_600 color_black3"
              v-html="item.name"
            ></span>
              <div class="flex_column">
                <div class="font12 color_gray margin_right_5 font10_left">{{ item.score }}分</div>
                <div class="font12 color_gray ellipsis seach_month_sale font10_left">
                  人均￥{{ item.per_capita }}|月售{{ item.month_sales }}
                </div>
              </div>
            </div>
          </div>
          <template #right>
            <van-button
              square
              type="primary"
              text="收藏"
            />
            <van-button
              square
              type="primary"
              text="备注"
            />
          </template>
        </van-swipe-cell>

      </div>
      <div
        class="flex_center padding_5_top_bottom font10_center"
        v-if="loading_flag"
      >加载中...
      </div>
      <TabBottom
        :nav_title="nav_title"
        :active="active"
      ></TabBottom>
    </div>
  </div>
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";
import {
  getStore,
  setStore,
  isNotBlank,
  amendHeight,
  throttle,
  setHistory,
} from "../../config/mUtils";
import {Search} from "vant";

let qs = require("qs");

export default {
  data() {
    return {
      scroll_num: 0,
      loading_flag: false, //加载中
      searchShopArr: [],
      start: 0,
      limit: 10,
      search_done: false, //发送请求表示
      oldHeight:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      nav_title: "搜索",
      active: 1,
      searchHistory: [], // 搜索历史记录
      search: "", //搜索内容
      list: [],
      loading: false,
      finished: false
    };
  },
  components: {TabBottom},

  computed: {},
  watch: {},
  methods: {
    handleScroll() {
      //数据未加载完 显示加载中
      if (!this.search_done) {
        this.loading_flag = true;
      }

      // 可滚动容器的高度
      let innerHeight =
        document.querySelector(".search_container_out") &&
        document.querySelector(".search_container_out").clientHeight;
      // 可滚动容器超出当前窗口显示范围的高度
      let search_height =
        document.querySelector(".van-search") &&
        document.querySelector(".van-search").clientHeight;
      let tabBottom_height =
        document.querySelector(".TabBottom ") &&
        document.querySelector(".TabBottom ").clientHeight;
      let search_container_height =
        document.querySelector(".search_container") &&
        document.querySelector(".search_container").clientHeight;
      let scrollTop =
        document.querySelector(".search_container_out") &&
        document.querySelector(".search_container_out").scrollTop;
      //获取总高度
      let allHeight =
        document.querySelector(".result_item") &&
        document.querySelector(".result_item").clientHeight *
        this.searchShopArr.length +
        search_container_height;

      //!!!移动端触底加载 请求数据偶尔异常原因 这里多次执行getData()
      if (innerHeight + scrollTop >= allHeight) {
        //使用标识 只让请求执行一次
        this.scroll_num += 1;
        if (this.scroll_num == 1) {
          // 加载更多操作
          this.getData(this.search);
        }
      }
    },
    getData(search, flag) {
      //数据请求完或者没输入关键字 回车查找，flag有值则允许请求接口
      if (!flag && (this.search_done || !this.search)) {
        //不是回车查找&&数据加载完毕||未输入关键字
        //不发送请求
        this.loading_flag = false;
        return;
      }
      let that = this;
      let data = qs.stringify({
        key: search,
        start: that.start,
        limit: that.limit
      });
      this.$axios.post("/api/searchShop", data).then(function (res) {
        that.scroll_num = 0;
        if (res && res.data && res.data.data) {
          let responesData = res.data.data;
          that.loading_flag = false;

          responesData.forEach(item => {
            that.searchShopArr.push(item);
          });
          that.searchShopArr.forEach(item => {
            if (item.name.indexOf(search) > -1) {
              //!!!
              item.name = item.name.replace(
                search,
                `<font class='color_org'>${search}</font>`
              );
            }
          });
          if (responesData.length == that.limit) {
            that.start += that.limit;
          } else {
            that.search_done = true; //最后一页
          }
        }
      });
    },

    //点击历史搜索关键字
    searchTargetItem(key) {
      this.search = key; //解决了接口多次重复请求问题
      this.searchTarget(key);
    },
    //搜索
    searchTarget(search) {
      //重置
      this.start = 0;
      this.search_done = false;
      this.searchShopArr = []; //清空搜索结果
      this.search = search;

      let arr = JSON.parse(getStore("searchHistory"));
      let flag = "";
      if (!isNotBlank(arr)) {
        flag = false;
      } else {
        flag = arr.includes(search); //true 数组已存在该搜索
      }
      if (!flag) {
        search && this.searchHistory.push(search);
        setStore("searchHistory", this.searchHistory);
      }
      this.getData(search, "fir");
    },
    //清空历史记录
    clearHistory() {
      this.searchHistory = [];
      setStore("searchHistory", this.searchHistory);
    }
  },
  created() {
    // 监听滚动事件 优化 throttle节流函数
    window.addEventListener("scroll", throttle(this.handleScroll, 5), true);
  },
  mounted() {
    setHistory(this);

    if (getStore("searchHistory")) {
      this.searchHistory = JSON.parse(getStore("searchHistory"));
    }
    // !!!解决输入法压缩整个页面布局
    amendHeight(this.oldHeight, "search");
    // document.querySelector('.search_container_out').onscroll=()=>{
    // }
  }
};
</script>

<style>
/*
van-search组件
搜索和订单页面的搜索组件样式
*/
.van-search {
  height: 42px;
  position: relative;
  flex-grow: 0 !important;
}

/*
van-search组件 设置placeholder的字体大小
*/
.van-field__control::-webkit-input-placeholder {
  font-size: 16px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: left !important;
}

.van-field__control::-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 16px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: left !important;
}

.van-field__control::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 16px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: left !important;
}

.van-field__control::-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 16px !important;
  -webkit-transform: scale(0.8) !important;
  /*解决缩小后字体不居中显示问题*/
  -webkit-transform-origin-x: left !important;
}

.search_ipt_test {
  height: 30px;
  border: 1px solid;
  /* font-size: 26px!important; */
  display: flex;
  height: 40px;
  width: 200px;
}

.search_container_out {
  overflow-y: auto;
  margin-bottom: 45px;
  position: relative;
}

.result_item {
  padding: 9px 0;
  margin: 0 15px;
  background: #fff;
  border-top: 1px solid #f6f6f6;
}

.search_result_left {
  margin-right: 5px;
}

.search .van-swipe-cell__right .van-button {
  height: 100% !important;
}

.van-swipe-cell__right .van-button__text {
  color: #fff;
}

.vanlist_wrap .delete-button {
  height: 100%;
}

.vanlist_wrap {
  position: relative;
  bottom: 0;
  height: auto;
  /* border-top: 10px solid #f6f6f6; */
}

.search_container_up {
  border-bottom: 10px solid #f6f6f6;
  padding-bottom: 0;
}

.history_item {
  background: #f6f6f6;
  padding: 3px 8px;
  margin-right: 10px;
  max-width: 100%;
  display: block;
  line-height: 22px;
}

.search_container_top {
  width: 91%;
  position: absolute;
  right: 0;
}

.find {
  margin-left: 3px;
  border-radius: 14px;
  width: 16%;
}

.search_ipt {
  width: 80%;
  border-radius: 21px;
  background: #f6f6f6;
  /* padding-left: 10px;
  padding-right: 10px; */
}

.search_content {
  flex-grow: 1;
}
</style>
