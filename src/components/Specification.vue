<template>
<div style="height:0;">  
    <!-- 基础用法 --> 
    <van-icon name="weapp-nav" @click="showBase = true" />
      <div class="sku-container">
        <van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :initial-sku="initialSku"       
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay" 
          :custom-sku-validator="customSkuValidator"  
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
        />
      </div> 
 
</div>
</template>

<script> 
import skuData from '../js/data'; 
export default {  
  data() {
    return {
      skuData:skuData,
      showBase: false,
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true,
      initialSku: {
        s1: '30349',
        s2: '1193',
        selectedNum: 3
      },
      customSkuValidator: () => '请选择商品规格!', 
    };
  },

  methods: {
    onBuyClicked(data) {
      this.$toast('buy:' + JSON.stringify(data));
      console.log(JSON.stringify(data))
    },
    onAddCartClicked(data) {
      this.$toast('add cart:' + JSON.stringify(data));
    }, 
  }
};
</script>

<style scoped>
.demo-sku .sku-container{
  padding: 0 15px;
}
.van-icon{
  vertical-align: middle;
  margin-left: 90%;
  margin-top: -10%;
}
</style>