<template>
  <div style="background-color: #f2f2f2;">
    <!-- 我的页头部 -->
    <van-nav-bar title="我的" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="ellipsis" size="18" @click="showMenu" />
      </template>
    </van-nav-bar>
    <!-- 头部导航菜单 -->
    <MenuNav></MenuNav>
    <!-- 用户面板 -->
    <div class="user-panel">
      <div class="user-shadow">
        <div class="user-info">
          <div class="user-icon"><img src="../images/mine/user.png"></div>
          <div class="user-name">jd_CuuoJRlXOvWB</div>
        </div>

        <div class="user-set" @click="gotoSet">
          <van-icon name="setting" color="rgba(76,0,0,.7)"/>
          <span>账户设置</span>
        </div>
      </div>
    </div>
    <!-- 第一组 -->
    <div class="group">
      <div class="group_list">
        <div class="option waitpay">
          <a href>
            <img src="../images/mine/waitpay.png" />
            <p>待付款</p>
          </a>
        </div>
        <div class="option waitrec">
          <a href>
            <img src="../images/mine/waitrec.png" />
            <p>待收货</p>
          </a>
        </div>
        <div class="option return">
          <a href>
            <img src="../images/mine/return.png" />
            <p>退换/售后</p>
          </a>
        </div>
        <div class="option allorder">
          <a href>
            <img src="../images/mine/allorder.png" />
            <p>全部订单</p>
          </a>
        </div>
      </div>
    </div>
    <!-- 第二组 -->
    <div class="group">
      <div class="group_list">
        <div class="option">
          <a href>
            <p style="color: red;margin: 0;">0张</p>
            <p>京东券</p>
          </a>
        </div>
        <div class="option waitrec">
          <a href>
            <p style="color: red;margin: 0;">开通有礼</p>
            <p>白条</p>
          </a>
        </div>
        <div class="option return">
          <a href>
            <p style="color: red;margin: 0;">0个</p>
            <p>京豆</p>
          </a>
        </div>
        <div class="option allorder">
          <a href>
            <p style="color: red;margin: 0;">0元</p>
            <p>红包</p>
          </a>
        </div>
      </div>
    </div>
    <!-- 第三组 -->
    <div class="group">
      <div class="group_list">
        <div class="option option3">
          <a href>
            <p class="op3-num">0</p>
            <p class="op3-text">商品收藏</p>
          </a>
        </div>
        <div class="option option3">
          <a href>
            <p class="op3-num">0</p>
            <p class="op3-text">店铺收藏</p>
          </a>
        </div>
        <div class="option option3">
          <a href>
            <p class="op3-num">0</p>
            <p class="op3-text">我的足迹</p>
          </a>
        </div>
      </div>
    </div>
    <!-- 第四组 -->
    <van-grid square>
      <van-grid-item v-for="(item,index) in items" :key="index" :icon="item.img" :text="item.text" :border="false">
      </van-grid-item>
    </van-grid>
    <div style="height:100px;"></div>
    <!-- 底部导航 -->
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "../components/FooterGuide";
import MenuNav from "../components/MenuNav";
export default {
  data() {
    return {
      items:[
        {img: require('../images/mine/yuyue.png'),text:"我的预约"},
        {img: require('../images/mine/huishou.png'),text:"高价回收"},
        {img: require('../images/mine/huoche.png'),text:"京东火车票"},
        {img: require('../images/mine/tuijian.png'),text:"应用推荐"},
        {img: require('../images/mine/jipiao.png'),text:"京东机票"},
        {img: require('../images/mine/jiudian.png'),text:"京东酒店"},
        {img: require('../images/mine/xian.png'),text:"闲置换钱"},
      ]
    };
  },

  components: {
    FooterGuide,
    MenuNav
  },

  methods: {
    showMenu() {
      var div = document.querySelector(".header_nav");
      if (div.style.display == "none") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    },
    gotoSet(){
      this.$router.push('/userset')
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //用户面板 
  .user-panel
    .user-shadow
      box-shadow: 0 2px 4px rgba(228,57,60,.4)
      border-radius: 0 0 300px 300px/0 0 20px 20px;
      background: linear-gradient(90deg,#eb3c3c,#ff7459);
      box-sizing: border-box;
      min-height: 110px;
      padding-top: 25px;
      .user-info
        padding: 0 0 10px 15px;
        display  flex
        align-items: center;
        .user-icon
          width: 60px;
          height: 60px;
          img 
            width 100%
            height  100%
        .user-name
          color #fff
          margin-left 20px
      .user-set
        right: 15px;
        top: 50px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        span
          font-size 13px
          color: rgba(76,0,0,.7);
        .van-icon
          vertical-align middle

  // 
  .group 
    height: 72px;
    background-color: #fff;
    margin-top: 1rem;
    margin-bottom: 1rem
    .group_list 
      height: 42px;
      margin: 0 auto;
      display: flex;
      text-align: center;
      line-height: 42px;
      .option 
        width: 25%;
        padding-top: 5px;
        a 
          color: #666;
          font-size: 12px;
          img
            width: 20px;
        p 
          margin-top: -15px;
      .option3 
        width: 33%;
        margin-top: 10px;
        .op3-num
          font-size 16px
        .op3-text 
          font-size: 12px
          margin-top -25px
  // 
  .van-icon__image 
    width 20px
    height 20px
</style>