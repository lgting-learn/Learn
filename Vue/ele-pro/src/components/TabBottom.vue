<template>
  <div class="TabBottom flex_row">
    <router-link
      tag="div"
      class="tab_item flex_column flex_center"
      v-for="(item,index) in tabBarImg"
      :key="index"
      :to="{name:item.name}"
    >
      <van-icon
        :name="item.icon"
        :color="active==index?'#1989fa':''"
        size="30"
      />
      <span :class="active==index?'choice':''">
        {{item.title}}
      </span>
      </router-link>

  </div>
</template>

<script>
export default {
  name: "TabBottom",
  props: ["nav_title", "active"],
  data() {
    return {
     
      icon: "home-o",
      color: "",
      span_color: "",
      tabBarImg: [
        {
          name: "taskaway",
          icon: "home-o",
          title: "外卖"
        },
        {
          name: "search",
          icon: "search",
          title: "搜索"
        },
        {
          name: "order",
          icon: "notes-o",
          title: "订单"
        },
        {
          name: "mine",
          icon: "friends-o",
          title: "我的"
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.TabBottom {
  /* height: 48px; */
  padding: 8px 0;
  flex-grow: 0;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #e4e4e4;
}
.TabBottom .tab_item img {
  width: 20px;
  height: 20px;
}

.tab_item {
  flex: 1;
}
.tab_item span {
  color: black;
}
</style>
