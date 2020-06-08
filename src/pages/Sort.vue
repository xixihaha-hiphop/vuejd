<template>
  <div>
    <!-- 分类页头部 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" fixed>
      <template #right>
        <van-search v-model="value" placeholder="请输入搜索关键词" style="margin-right:46px;"/>
      </template>
    </van-nav-bar>
    <!-- 商品分类 -->
    <van-tree-select height="auto" :items="items" :main-active-index.sync="active" style="margin: 46px 0;">
      <template #content>
        <ul class="sort_text" v-if="active === 0">
          <h4>热门分类</h4>
          <li @click="toPhoneList"><img src="../images/sort/sj.png"><p>手机</p></li>
          <li><img src="../images/sort/sj2.jpg"><p>全面屏手机</p></li>
          <li><img src="../images/sort/sj3.jpg"><p>游戏手机</p></li>
          <li><img src="../images/sort/cdb.jpg"><p>充电宝</p></li>
          <li><img src="../images/sort/jglz.jpg"><p>经管励志</p></li>
          <li><img src="../images/sort/tjmy.jpg"><p>调节免疫</p></li>
          <li><img src="../images/sort/twj.jpg"><p>体温计</p></li>
          <li><img src="../images/sort/zybs.jpg"><p>中医保湿</p></li>
        </ul>
        <ul class="sort_text" v-if="active === 1">
          <h4>热门品牌</h4>
          <li><img src="../images/sort/sj.png"><p>手机</p></li>
          <li><img src="../images/sort/sj.png"><p>全面屏手机</p></li>
          <li><img src="../images/sort/sj.png"><p>游戏手机</p></li>
          <li><img src="../images/sort/sj.png"><p>充电宝</p></li>
          <li><img src="../images/sort/sj.png"><p>经管励志</p></li>
          <li><img src="../images/sort/sj.png"><p>调节免疫</p></li>
          <li><img src="../images/sort/sj.png"><p>体温计</p></li>
          <li><img src="../images/sort/sj.png"><p>中医保湿</p></li>
        </ul>
      </template>
    </van-tree-select>
    <!-- 底部导航 -->
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'

export default {
  data () {
    return {
      value: '',
      active: 0,
      items: [{ text: '热门推荐' }, { text: '手机数码' },{ text: '电脑办公' },
        { text: '家用电器' },{ text: '美妆护肤' },{ text: '个护清洁' },
        { text: '汽车生活' },{ text: '京东超市' },{ text: '男装' },
        { text: '男鞋' },{ text: '女装' },{ text: '女鞋' },{ text: '女鞋' },{ text: '女鞋' }
      ],
    }
  },

  components: {
    FooterGuide
  },

  methods: {
    onClickLeft(){
      this.$router.push('/')
    },
    toPhoneList(){
      this.$router.push('/phonelist')
    }
  }
}
</script>

<style scoped>
/* 头部导航 */
.van-nav-bar__left {
  padding: 0 23px;
}
.van-search{
  padding: 6px 12px;
}
.van-search__content{
  border-radius: 25px;
  padding-left: 17px;
}
.van-field__control {
  padding: 0 25px;
  padding-left: 10px;
}
.van-nav-bar .van-icon {
  color: #ccc;
}
.van-nav-bar__text {
    color: #cca;
}
/*  */
.van-tree-select__nav {
  position: fixed;
  overflow-y: auto;
  text-align: center;
}
.van-tree-select__content {
  margin-left: 85px;
}
.sort_text li{
  display: inline-block;
  margin-left: 3%;
  margin-top: 3%;
  color: black;
  text-align: center;
  font-size: 14px;
}
.sort_text h4{
  margin-top: 10px;
  margin-left: 10px;
}

.sort_text li img{
  width: 70px;
  height: 70px;
}

</style>