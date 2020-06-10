<template>
  <div>
    <!-- 头部导航条 -->
    <div class="header_bar">
      <div class="back" @click="goback"><img src="../images/返回白.png"></div>
      <div class="cart"></div>
      <div id="menu"><img src="../images/省略号白.png"></div>
    </div> 
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
    goback(){
      this.$router.push('/phonelist')
    }
  }
}
</script>

<style scoped>
.header_bar{
    display: flex;
    background: #fff;
    padding: 5px;
}
.header_bar .back{
    width: 30px;
    height: 30px;
    background-color: #666;
    border-radius: 50%;
}
.header_bar .back img{
    width: 100%;
}
.header_bar .cart{
    width: 84%;
    text-align: center;
}
.header_bar #menu{
    width: 30px;
    height: 30px;
    background-color: #666;
    border-radius: 50%;
}
.header_bar #menu img{
    width: 100%;
}
</style>