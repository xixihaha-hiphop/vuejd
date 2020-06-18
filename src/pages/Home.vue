<template>
  <div class="header">
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      shape="round"
      background="rgb(127, 15, 141)"
      placeholder="请输入搜索关键词"
    />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img style="width:100%;height:100%;display:inline-block;" src="../images/slider01.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width:100%;height:100%;display:inline-block;" src="../images/slider02.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width:100%;height:100%;display:inline-block;" src="../images/slider03.png" />
      </van-swipe-item>
    </van-swipe>
    <!-- 滑动列表 -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <ul class="slider_list list01" style="width:100%;">
          <li>
            <a href>
              <img src="../images/sliderList/cs.png" />
              <p>京东超市</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/smdq.png" />
              <p>数码电器</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/jdfs.png" />
              <p>京东服饰</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/jdsx.png" />
              <p>京东生鲜</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/jddj.png" />
              <p>京东到家</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/czjf.png" />
              <p>充值缴费</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/99pin.png" />
              <p>9.9元拼</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/lq.png" />
              <p>领劵</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/zq.png" />
              <p>赚钱</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/plus.png" />
              <p>PLUS会员</p>
            </a>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="slider_list list02">
          <li>
            <a href>
              <img src="../images/sliderList/jdgj.png" />
              <p>京东国际</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/jdpm.png" />
              <p>京东拍卖</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/wph.png" />
              <p>唯品会</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/w3c.png" />
              <p>玩3C</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/wem.png" />
              <p>沃尔玛</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/mzg.png" />
              <p>美妆馆</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/jdlx.png" />
              <p>京东旅行</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/ppes.png" />
              <p>拍拍二手</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/wlcx.png" />
              <p>物流查询</p>
            </a>
          </li>
          <li>
            <a href>
              <img src="../images/sliderList/qb.png" />
              <p>全部</p>
            </a>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 京东秒杀 -->
    <div class="seckill">
      <div class="seckill-content">
        <div class>
          <span style="margin-left:2%; ">京东秒杀</span>
        </div>
        <ul>
          <li class="seckill-new-item">
            <img src="../images/seckill/ej.jpg" />
            <p class="price01">￥499</p>
            <p class="price02">￥520</p>
          </li>
          <li class="seckill-new-item">
            <img src="../images/seckill/yg.jpg" />
            <p class="price01">￥39.9</p>
            <p class="price02">￥59.9</p>
          </li>
          <li class="seckill-new-item">
            <img src="../images/seckill/sj.jpg" />
            <p class="price01">￥2199</p>
            <p class="price02">￥2699</p>
          </li>
          <li class="seckill-new-item">
            <img src="../images/seckill/tong.jpg" />
            <p class="price01">￥139</p>
            <p class="price02">￥269</p>
          </li>
          <li class="seckill-new-item">
            <img src="../images/seckill/fz.jpg" />
            <p class="price01">￥159</p>
            <p class="price02">￥500</p>
          </li>
          <li class="seckill-new-item">
            <img src="../images/seckill/sb.jpg" />
            <p class="price01">￥1968</p>
            <p class="price02">￥2868</p>
          </li>
          <li class="seckill-new-item">
            <img src="../images/seckill/ds.jpg" />
            <p class="price01">￥19.8</p>
            <p class="price02">￥45.8</p>
          </li>
          <li class="seckill-new-item">
            <img src="../images/seckill/bzd.jpg" />
            <p class="price01">￥39.9</p>
            <p class="price02">￥129</p>
          </li>
          <li class="seckill-all-item">
            <div class="seckill-all">
              <span>
                查
                <br />看
                <br />全
                <br />部
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部导航 -->
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "../components/FooterGuide";
export default {
  name: "Home",
  data() {
    return {
      value: "",
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    FooterGuide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
}
/* 轮播图 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item[data-v-5a90ec03] {
  line-height: 0px;
  background-color: transparent;
}
/* 滑动列表 */
.swiper-container {
  height: 10.5rem;
}
.swiper-slide .slider_list {
  margin-top: 5px;
  text-align: center;
}
.swiper-slide .slider_list li {
  width: 18%;
}
.swiper-slide .slider_list li img {
  width: 60%;
}
.swiper-slide .slider_list li p {
  font-size: 12px;
  margin: 5px;
  color: #666;
}
/* 京东秒杀 */
 .seckill{
    width: 100%;
    height: 9rem;
    
}
 .seckill .seckill-content{
    background-color: #fff;
    margin: 1.5%;
    border-radius: 5px;
}
 .seckill ul{
    width: auto;
    height: 8rem;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 1%;
    background: #fff;
    position: relative;
}
 .seckill ul .seckill-new-item{
    list-style: none;
    text-align: center;
    margin-left: 1%;
    display: inline-block;
}
 .seckill ul .seckill-new-item img{
    width: 4.5rem;
    height: 4.5rem;
}
 .seckill ul .seckill-new-item .price01{
    font-size: 14px;
    color: red;
}
 .seckill ul .seckill-new-item .price02{
    font-size: 12px;
    color: #ccc;
}
 .seckill ul .seckill-all-item{
    display: inline-block;
    width: 20px;
    height: 100px;
    position: absolute;
    margin-top: 15px;
    margin-left: 2.5%;
}
 .seckill ul .seckill-all-item .seckill-all{
    background-color: #f00;
    color: #fff;
    font-size: 12px;
    padding: 8px 0;
    
}
.seckill ul li .seckill-all span{
    display: block;
    margin: 0 5px;
    
}
</style>
