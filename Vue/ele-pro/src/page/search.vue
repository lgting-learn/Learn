<template>
  <div
    class='search flex_column fixed_full bg_gray'
  >
    <div class="bg_yellow food_top flex_row padding_10 grow_0 flex_center">
      <!-- <span
        class="arrow_left food_arrow_left van-icon van-icon-arrow-left van-nav-bar__arrow"
        @click="$router.go(-1);"
      ></span> -->
        <!-- <div class="flex_center span_white">{{nav_title}}</div> -->
        <div class="search_container_top flex_row padding_10">
          <input
            class="search_ipt border_all padding_5_top_bottom"
            placeholder="请输入商家名称"
            v-model="search"
          />
          <div
            class="find bg_yellow span_black flex_center"
            @click="searchTarget"
          >搜索</div>
    </div>
    </div>
    <div class="search_container bg_gray">
      <div class="margin_10 bg_white padding_10 border_radius_5 search_container_up">
        <div class="history_top flex_between margin_bottom_10">
          <span>历史搜索</span>
          <span @click="clearHistory">清空</span>
        </div>
        <div class="history_content flex_wrap">
          <span
            class="history_item margin_bottom_10"
            v-for="item in searchHistory"
            :key="item"
          >{{item}}</span>
        </div>
      </div>
    </div>

    <TabBottom
      :nav_title="nav_title"
      :active="active"
    ></TabBottom>
      </div>
</template>

<script>
import TabBottom from "@/components/TabBottom.vue";
import { getStore, setStore } from "../config/mUtils";
export default {
  data() {
    return {
      nav_title: "搜索",
      active: 1,
      searchHistory: [], // 搜索历史记录
      search: "" //搜索内容
    };
  },
  components: { TabBottom },

  computed: {},
  watch: {},
  methods: {
    //搜索
    searchTarget() {
      var arr = JSON.parse(getStore("searchHistory"));
      var flag = arr.includes(this.search);//true 数组已存在该搜索
      if(!flag){
        this.searchHistory.push(this.search);
        setStore("searchHistory", this.searchHistory);
      }
    },
    //清空历史记录
    clearHistory() {
      this.searchHistory = [];
      setStore("searchHistory", this.searchHistory);
    }
  },
  created() {},
  mounted() {
    if (getStore("searchHistory")) {
      this.searchHistory = JSON.parse(getStore("searchHistory"));
    }
  }
};
</script>

<style scoped>
.search_container_up {
  padding-bottom: 0;
}
.history_item {
  background: #f6f6f6;
  border-radius: 23px;
  padding: 5px 10px;
  margin-right: 10px;
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
  padding-left: 10px;
  padding-right: 10px;
}
.search_content {
  flex-grow: 1;
}
</style>