<template>
  <div style="background-color: #f2f2f2;">
    <!-- 头部导航条 -->
    <div class="header_bar">
      <div class="back" @click="goback">
        <img src="../images/返回白.png" />
      </div>
      <div class="cart"></div>
      <div id="menu">
        <img src="../images/省略号白.png" />
      </div>
    </div>
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
        <span>绿色，64GB，换修无忧年付版，1个</span>
        <Specification></Specification>
        <p>本商品支持保障服务，点击可选服务</p>
      </div>
      <div class="transfer">
        <span>送至</span>
        <span>北京朝阳区三环到四环之间</span>
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

    <div class="footer">
      <div class="gotop" v-if="btnFlag" @click="backtop">
        <van-icon name="upgrade" size="30" color="rgb(255, 196, 28)"/>
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
    Specification
  },

  methods: {
    goback() {
      this.$router.push("/phonelist");
    },
    showbtn() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 200) {
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
    }
  }
};
</script>

<style scoped>
.header_bar {
  display: flex;
  background: #fff;
  padding: 5px;
}
.header_bar .back {
  width: 30px;
  height: 30px;
  background-color: #666;
  border-radius: 50%;
}
.header_bar .back img {
  width: 100%;
}
.header_bar .cart {
  width: 84%;
  text-align: center;
}
.header_bar #menu {
  width: 30px;
  height: 30px;
  background-color: #666;
  border-radius: 50%;
}
.header_bar #menu img {
  width: 100%;
}
/* 手动轮播图 */
.swiper-container .swiper-slide img {
  width: 100%;
}
.swiper-pagination {
  background: #ccc;
  color: #fff;
  border-radius: 10px 0 0 10px;
}
/* 购买信息描述 */
.buy_area {
  overflow: hidden;
  background: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 15px;
}
.buy_area .item_desc p {
  color: #666;
  font-size: 12px;
}

/* 属性选择 */
.floor_item {
  margin-top: 10px;
  background: #fff;
  border-radius: 20px;
}
.floor_item .choose,
.transfer,
.weight {
  margin-top: 5px;
  padding: 15px 0;
}
.floor_item .weight {
  padding: 18px 20px 18px 0;
}
.floor_item .choose span,
.transfer span,
.weight span {
  font-size: 13px;
  color: #333;
  margin-left: 10px;
}
.floor_item .choose p,
.transfer p {
  font-size: 12px;
  color: #8c8c8c;
  margin-left: 50px;
  padding-top: 5px;
}
/* 店铺 */
.shop {
  font-size: 14px;
  margin-top: 10px;
  background: #fff;
  border-radius: 20px;
  padding: 15px;
}
.shop .shop_name {
  height: 40px;
}
.shop .shop_name img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.shop .shop_name span {
  font-size: 13px;
  vertical-align: middle;
  line-height: 40px;
  margin-left: 5px;
}
.shop .shop_tab {
  margin: 18px 0;
  display: flex;
}
.shop .shop_tab .tab_item {
  width: 100%;
  text-align: center;
}
.shop .shop_tab .tab_item .desc {
  font-size: 12px;
  color: #999;
  margin-top: 3px;
}
.shop .shop_btn {
  text-align: center;
}
.shop .shop_btn button {
  background-color: #fff;
  border: none;
  border: 1px solid #ccc;
  border-radius: 15px;
  height: 30px;
  font-size: 12px;
  padding: 0 20px;
  margin: 10px;
  outline: none;
}
/*  */
.footer .gotop {
  text-align: center;
  position: fixed;
  right: 2%;
  bottom: 20%;
  cursor: pointer;
  padding: 0px;
  border-radius: 50%;
  background: white;
  color: #000000;
}
</style>