<template>
  <!-- 头部导航菜单 -->
    <div class="header_nav" style="display: none;z-index: 99;">
      <routerLink class="header_nav_item" to="/">
        <van-icon name="wap-home-o" color="#fff"/>
        <span>首页</span>
      </routerLink>
      <routerLink class="header_nav_item" to="/sort">
        <van-icon name="apps-o" color="#fff"/>
        <span>分类搜索</span>
      </routerLink>
      <routerLink class="header_nav_item" to="/shopcart">
        <van-icon name="cart-o" color="#fff"/>
        <span>购物车</span>
      </routerLink>
      <routerLink class="header_nav_item" to="/mine" style="border-bottom: none;">
        <van-icon name="manager-o" color="#fff"/>
        <span>我的京东</span>
      </routerLink>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  methods: {
    
  }
}
</script>

<style scoped>
/* 头部导航菜单 */
.header_nav{
  width: 125px;
  background-color: rgba(0,0,0,.8);
  right: 10px;
  top: 53px;
  border-radius: 40px;
  position: absolute;
  border-top-right-radius: 0px;
}
.header_nav a{
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  display: block;
}
.header_nav .header_nav_item{
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  border-bottom: 1px solid #fff;
}
.header_nav .header_nav_item span{
  color: #fff;
  font-size: 14px;
  display: block;
  margin-top: -42px;
  margin-left: 50px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
.header_nav .header_nav_item .van-icon{
  width: 25px;
  margin-left: 15px;
  margin-right: 10px;
}
</style>