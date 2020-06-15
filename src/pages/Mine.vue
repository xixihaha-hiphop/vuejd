<template>
  <div>
    <!-- 我的页头部 -->
    <van-nav-bar title="我的" left-text="返回" left-arrow fixed>
      <template #right>
          <van-icon name="ellipsis" size="18"  @click="showMenu"/>
      </template>
    </van-nav-bar>
    <!-- 头部导航菜单 -->
    <MenuNav></MenuNav>
    <!-- 底部导航 -->
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
import MenuNav from '../components/MenuNav'
export default {
  data () {
    return {
    }
  },

  components: {
    FooterGuide,
    MenuNav
  },

  methods: {
    showMenu(){
      var div = document.querySelector(".header_nav")
      if (div.style.display == "none") {
        div.style.display = "block"
      }else{
        div.style.display = "none"
      }
    }
  }
}
</script>

<style scoped>
</style>