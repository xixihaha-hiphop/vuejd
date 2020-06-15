<template>
  <div>
    <!-- 手机列表头部 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" fixed>
      <template #right>
        <van-search v-model="value0" placeholder="请输入搜索关键词" style="margin-right:46px;" />
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
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <!-- 手机列表  -->
      <div class="phone_list">
        <div
          class="phone_item"
          v-for="(item,index) in phonelists"
          :key="index"
          @click="tophonedetail"
        >
          <div class="phone_cover">
            <img src="../images/PhoneList/iphone11.jpg" />
          </div>
          <div class="phone_info">
            <div class="phone_info_above">
              <p class="phone_title">{{item.title}}</p>
              <div class="phone_attr">
                <span>{{item.gb}}</span>
                <span style="margin-left: 7%;">{{item.size}}</span>
              </div>
            </div>
            <div class="phone_info_below">
              <div class="phone_price">{{item.price}}</div>
              <div class="phone_shop">{{item.shop}}</div>
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value0: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "综合", value: 0 },
        { text: "最新上架", value: 1 },
        { text: "价格最低", value: 2 },
        { text: "价格最高", value: 3 },
        { text: "评价最多", value: 4 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      isLoading: false,
      phonelists: [
        {
          title: "Apple iPhone 11",
          gb: "128GB",
          size: "6.1英寸",
          price: "￥5999",
          shop: "Apple产品京东自营旗舰店"
        },
        {
          title: "Apple iPhone 12",
          gb: "128GB",
          size: "6.2英寸",
          price: "￥6999",
          shop: "Apple产品京东自营旗舰店"
        },
        {
          title: "Apple iPhone 13",
          gb: "128GB",
          size: "6.3英寸",
          price: "￥7999",
          shop: "Apple产品京东自营旗舰店"
        },
        {
          title: "Apple iPhone 14",
          gb: "128GB",
          size: "6.4英寸",
          price: "￥8999",
          shop: "Apple产品京东自营旗舰店"
        },
        {
          title: "Apple iPhone 15",
          gb: "128GB",
          size: "6.5英寸",
          price: "￥9999",
          shop: "Apple产品京东自营旗舰店"
        }
      ]
    };
  },

  components: {},

  methods: {
    onClickLeft() {
      this.$router.push("/sort");
    },
    tophonedetail() {
      this.$router.push("/phonedetail");
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  }
};
</script>

<style scoped>
.van-search__content {
  border-radius: 25px;
  padding-left: 17px;
}
.van-dropdown-menu {
  margin-top: 46px;
}
.van-nav-bar__left {
  font-size: 13px;
}
.van-button {
  display: inline-block;
}
.van-button__content span {
  color: #666;
}
/* 手机列表 */
.phone_list .phone_item {
  display: flex;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
}
.phone_list .phone_item .phone_cover {
  width: 120px;
  height: 120px;
}
.phone_list .phone_item .phone_cover img {
  width: 100%;
}
.phone_list .phone_item .phone_info {
  margin-left: 5%;
}
.phone_list .phone_item .phone_info_above .phone_title {
  font-size: 14px;
}
.phone_list .phone_item .phone_info_above .phone_attr span {
  font-size: 12px;
  padding: 0 5px;
  background: #f2f2f7;
}
.phone_list .phone_item .phone_info_below {
  margin-top: 5%;
}
.phone_list .phone_item .phone_info_below .phone_price {
  font-size: 18px;
  color: red;
  margin-top: 3px;
}
.phone_list .phone_item .phone_info_below .phone_shop {
  font-size: 14px;
  color: #999;
}
</style>