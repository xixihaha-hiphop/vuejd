<template>
  <div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <van-tabs scrollspy sticky>
        <van-tab title="商品"></van-tab>
        <van-tab title="评价"></van-tab>
        <van-tab title="详情"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      // console.log(top);
      if (top > 60) {
        let opacity = top / 180;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 离开该页面需要移除这个监听的事件
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.header-fixed {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*overflow: hidden;*/
  text-align: center;
  color: #262626;
  max-height: 44px;
  line-height: 0.8rem;
  /* background: #e5e5e5; */
  font-size: 0.32rem;
}
</style>