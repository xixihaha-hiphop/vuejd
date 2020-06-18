<template>
  <div style="background-color:#f2f2f2;">
    <!-- 购物车页头部 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow fixed>
      <template #right>
          <van-icon name="ellipsis" size="18" @click="showMenu"/>
      </template>
    </van-nav-bar>
    <!-- 头部导航菜单 -->
    <MenuNav></MenuNav>
    <br><br><br>
    <!-- 加购的商品 -->
    <van-checkbox v-model="checked">全选</van-checkbox>
    <van-card
      price="5999.00"
      title=" Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待"
      thumb="https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/44671/19/10093/124064/5d78059fE77b25e06/8a3b41a10259aa84.jpg!q70.dpg.webp"
    >
      <template #tag>
        <van-checkbox v-model="checked"></van-checkbox>
      </template>
      <template #tags>
        <van-tag color="#f7f7f7">白色</van-tag>
        <van-tag color="#f7f7f7">128GB</van-tag>
      </template>
      <template #footer>
        <van-stepper v-model="value" theme="round" button-size="22" disable-input/>
      </template>
    </van-card>
    <!-- 优惠券单元格 -->
    <br>
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <br>
    <!-- 提交订单栏 -->
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <br>
    <!-- 底部导航 -->
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
import MenuNav from '../components/MenuNav'
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
export default {
  data () {
    return {
      value: 1,
      checked: false,
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
    }
  },

  components: {
    FooterGuide,
    MenuNav
  },

  methods: {
    // 显示菜单
    showMenu(){
      var div = document.querySelector(".header_nav");
        if(div.style.display == "none"){
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // 加购的商品
  .van-card:not(:first-child)
    // margin-top 46px
  .van-card
    font-size 14px
    background-color #fff
    padding 8px
    .van-image__img
      width 90%
      height 90%
      margin-left 15px
    .van-card__title
      margin-bottom 8px
    .van-card__price
      color #f00
    .van-tag
      color #666
  /* 提交订单栏 */
  .van-submit-bar
    position relative
  // 优惠券
  .van-popup
    height 60% !important 
</style>