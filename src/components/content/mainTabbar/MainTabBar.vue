<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="lightpink">
      <template v-slot:item-icon
        ><img src="~@/assets/imgs/tabbar/home.svg" alt=""
      /></template>
      <template v-slot:item-active-icon
        ><img src="~@/assets/imgs/tabbar/home_active.svg" alt=""
      /></template>
      <template v-slot:item-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="lightpink">
      <template v-slot:item-icon
        ><img src="~@/assets/imgs/tabbar/category.svg" alt=""
      /></template>
      <template v-slot:item-active-icon
        ><img src="~@/assets/imgs/tabbar/category_active.svg" alt=""
      /></template>
      <template v-slot:item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="lightpink">
      <template v-slot:item-icon
        ><img src="~@/assets/imgs/tabbar/shopcart.svg" alt=""
      /></template>
      <template v-slot:item-active-icon
        ><img src="~@/assets/imgs/tabbar/shopcart_active.svg" alt=""
      /></template>
      <template v-slot:item-text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="black">
      <template v-slot:item-icon
        ><img src="~@/assets/imgs/tabbar/profile.svg" alt=""
      /></template>
      <template v-slot:item-active-icon
        ><img src="~@/assets/imgs/tabbar/profile_active.svg" alt=""
      /></template>
      <template v-slot:item-text><div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";

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