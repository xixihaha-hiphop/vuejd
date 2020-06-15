<template>
  <div style="background-color: #f2f2f2;">
    <!-- 头部导航条 -->
    <div class="header_bar">
      <div class="back" @click="goback">
        <img src="../images/返回白.png" />
      </div>
      <div class="cart"></div>
      <div id="menu" @click="showMenu">
        <img src="../images/省略号白.png" />
      </div>
    </div>
    <!-- 头部导航菜单 -->
    <MenuNav></MenuNav>
    <!-- 商品导航 -->
    <ProductBar></ProductBar>
    <!-- Swiper -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <div class="swiper-slide">
        <img src="../images/PhoneList/iphone11.jpg" />
      </div>
      <div class="swiper-slide">
        <img src="../images/PhoneList/iPhone02.png" />
      </div>
      <div class="swiper-slide">
        <img src="../images/PhoneList/iPhone03.png" />
      </div>
      <div class="swiper-slide">
        <img src="../images/PhoneList/iPhone04.png" />
      </div>
      <div class="swiper-slide">
        <img src="../images/PhoneList/iPhone05.png" />
      </div>
      <div class="swiper-slide">
        <img src="../images/PhoneList/iPhone06.png" />
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination" slot="pagination" style="width: 15%;left: 85%;bottom: 0;"></div>
    </swiper>
    <!-- 购买信息描述 -->
    <div class="buy_area">
      <div class="price_wrap">
        <span style="font-size: 30px;color:red;font-weight: bold;">￥5999</span>
        <span style="color: #fc9131;">￥5969</span>
      </div>
      <div class="phone_name">
        <p>
          <b>Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</b>
        </p>
      </div>
      <div class="item_desc">
        <p>爆品限时特惠！大额神券抢购中！iPhone11立减500元，XR256GB黄色特惠低至4699元，XSMax抢券立减500元！超值推荐！</p>
      </div>
    </div>
    <!-- 属性选择  -->
    <div class="floor_item">
      <div class="choose">
        <span>已选</span>
        <span>红色，64GB</span>
        <Specification></Specification>
        <p>本商品支持保障服务，点击可选服务</p>
      </div>
      <div class="transfer">
        <div style="display:flex;">
          <span>送至</span>
          <DeliveryAddress></DeliveryAddress>
        </div>
        <p>23:10前下单，预计明天(05月17日)送达</p>
      </div>
      <div class="weight">
        <span>重量</span>
        <span>0.46kg</span>
      </div>
      <div class="serve"></div>
    </div>
    <!-- 评价 -->
    <Comment></Comment>
    <!-- 店铺 -->
    <div class="shop">
      <div class="shop_name">
        <img src="../images/PhoneList/iPhoneShop.png" />
        <span>Apple产品京东自营旗舰店</span>
        <span style="background: red;color: #fff;">京东自营</span>
      </div>
      <div class="shop_tab">
        <div class="tab_item">
          <div class="num">2020万</div>
          <div class="desc">粉丝人数</div>
        </div>
        <div class="tab_item">
          <div class="num">1733</div>
          <div class="desc">全部商品</div>
        </div>
      </div>
      <div class="shop_btn">
        <button>关注店铺</button>
        <button>进入店铺</button>
      </div>
    </div>
    <!-- 回到顶部按钮 -->
    <div class="footer">
      <div class="gotop" v-if="btnFlag" @click="backtop">
        <van-icon name="upgrade" size="30" color="rgb(255, 196, 28)" />
      </div>
    </div>

    <br />
    <br />
    <br />
    <!-- 底部购买导航 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import Comment from "../components/Comment";
import ProductBar from "../components/ProductBar";
import Specification from "../components/Specification";
import DeliveryAddress from "../components/DeliveryAddress"
import MenuNav from '../components/MenuNav'

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      },
      btnFlag: false
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },

  mounted() {
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.showbtn, true);
  },

  components: {
    Comment,
    ProductBar,
    Specification,
    DeliveryAddress,
    MenuNav
  },

  methods: {
    goback() {
      this.$router.push("/phonelist");
    },
    // 回到顶部按钮
    showbtn() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 300) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    backtop() {
      var timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    // 显示菜单
    showMenu(){
      var div = document.querySelector(".header_nav");
        if(div.style.display == "none"){
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    }
  }
};
</script>

<style scoped>
@import "../css/phoneDetail.css";
</style>