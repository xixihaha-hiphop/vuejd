<template>
    <div>
    <!-- 底部导航 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/sort" icon="apps-o">分类
      </van-tabbar-item>
      <van-tabbar-item replace to="/shopcart" icon="shopping-cart-o">购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的
      </van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  methods: {}
}
</script>

<style scoped>
.van-tabbar-item--active {
  color: #fa1919;
}
</style>