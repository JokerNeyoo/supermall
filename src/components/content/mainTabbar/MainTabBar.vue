<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img src="~assets/imgs/tabbar/home.svg" alt="" slot="item-icon" />
      <img
        src="~assets/imgs/tabbar/home_active.svg"
        alt=""
        slot="item-active-icon"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img src="~assets/imgs/tabbar/category.svg" alt="" slot="item-icon" />
      <img
        src="~assets/imgs/tabbar/category_active.svg"
        alt=""
        slot="item-active-icon"
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img src="~assets/imgs/tabbar/shopcart.svg" alt="" slot="item-icon" />
      <img
        src="~assets/imgs/tabbar/shopcart_active.svg"
        alt=""
        slot="item-active-icon"
      />

      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img src="~assets/imgs/tabbar/profile.svg" alt="" slot="item-icon" />
      <img
        src="~assets/imgs/tabbar/profile_active.svg"
        alt=""
        slot="item-active-icon"
      />

      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "common/tabbar/TabBar.vue";
import TabBarItem from "common/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
</style>