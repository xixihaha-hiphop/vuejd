<template>
  <div>
    <!-- 手机列表头部 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" fixed>
      <template #right>
        <van-search v-model="value0" placeholder="请输入搜索关键词" style="margin-right:46px;"/>
      </template>
    </van-nav-bar>
    <!--  -->
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!--  -->
    <div style="height:35px;overflow-x:auto;white-space:nowrap;padding:10px;">
      <van-button color="#f2f2f7" wid size="small">京东物流</van-button>
      <van-button color="#f2f2f7" size="small">新品</van-button>
      <van-button color="#f2f2f7" size="small">品牌</van-button>
      <van-button color="#f2f2f7" size="small">CPU型号</van-button>
      <van-button color="#f2f2f7" size="small">屏幕尺寸</van-button>
      <van-button color="#f2f2f7" size="small">热点</van-button>
      <van-button color="#f2f2f7" size="small">存储卡</van-button>     
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value0: '',
      value1: 0,
      value2: 'a',
      option1: [
        { text: '综合', value: 0 },
        { text: '最新上架', value: 1 },
        { text: '价格最低', value: 2 },
        { text: '价格最高', value: 3 },
        { text: '评价最多', value: 4 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    };
  },

  components: {},

  methods: {
    onClickLeft(){
      this.$router.push('/sort')
    },
  }
}
</script>

<style scoped>
.van-search__content{
  border-radius: 25px;
  padding-left: 17px;
}
.van-dropdown-menu {
    margin-top: 46px;
}
.van-nav-bar__left{
  font-size: 13px;
}
.van-button{
  display: inline-block;
  
}
.van-button__content span{
  color: #666;
}
</style>