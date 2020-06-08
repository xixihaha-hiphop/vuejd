<template>
  <div>
    <!-- 购物车页头部 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow fixed>
      <template #right>
          <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
export default {
  data () {
    return {
    }
  },

  components: {
    FooterGuide
  },

  methods: {}
}
</script>

<style scoped>
</style>