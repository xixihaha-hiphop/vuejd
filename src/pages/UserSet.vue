<template>
  <div style="background-color:#f2f2f2;">
    <!-- 账户设置头部 -->
    <van-nav-bar title="账户设置" left-text="返回" @click-left="onClickLeft" left-arrow >
      <template #right>
        <van-icon name="ellipsis" size="18" @click="showMenu" />
      </template>
    </van-nav-bar>
    <!-- 头部导航菜单 -->
    <MenuNav></MenuNav>
    <!--  -->
    <br>
    <van-cell is-link @click="showPopup">收货地址设置</van-cell>
    <van-popup v-model="show" round position="bottom" :style="{ height: '65%' }">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
      />
    </van-popup>
    <!--  -->
    <div class="address-box">
      <div class="address-info">
        <span class="name">张三</span>
        <span class="phone">134****573</span>
        <span class="default">默认</span>
        <p class="address">xx省xx市xx区xx街道xx号</p>
      </div>
    </div>
    <br>
    <!--  -->
    <van-cell is-link >账户与安全</van-cell>
    <van-cell is-link >支付密码管理</van-cell>
    <br>
    <van-cell is-link >联系客服</van-cell>
    <van-cell is-link >切换站点</van-cell>
    <div style="height:262px"></div>
    <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->
  </div>
</template>

<script>
import MenuNav from '../components/MenuNav'
import areaList from '../js/area'
export default {
  data () {
    return {
      show: false,
      areaList,
      searchResult: [],
     
    }
  },

  components: {
    MenuNav
  },

  methods: {
    onClickLeft() {
      this.$router.push('/mine')
    },
    showMenu(){
      var div = document.querySelector('.header_nav')
      if (div.style.display == 'none') {
        div.style.display = 'block'
      }else{
        div.style.display = 'none'
      }
    },
    showPopup() {
      this.show = true;
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .van-cell
    border-radius 10px
  // 地址栏
  .address-box
    // height 50px
    background-color #fff
    // margin-bottom 10px
    border-radius 10px
    .address-info
      padding 10px 10px 5px 10px
      .name,.phone
        color #333
        font-weight bolder
        padding-right 5px
        font-size 17px
      .default
        width 9%
        font-size 14px
        color #fff
        background-color #f00
        border-radius 10px
        padding-left 5px
        display inline-block
      .address
        color #666
        font-size 14px
</style>