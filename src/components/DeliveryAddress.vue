<template>
  <div style="height:0;">
    <van-icon name="weapp-nav" @click="showPicker = true"/>
    <van-field
      readonly
      :value="value+''"  
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '请选择派送区域',
      showPicker: false,
      columns: [
        {
          text: '湖北省',
          children: [
            {
              text: '武汉市',
              children: [{ text: '东西湖区' },{ text: '江汉区' } , { text: '黄陂区' },{ text: '洪山区' }],
            },
            {
              text: '黄石市',
              children: [{ text: '黄石港区' }, { text: '铁山区' }],
            },
            {
              text: '襄阳市',
              children: [{ text: '樊城区' }, { text: '襄城区' }],
            },
          ],
        },
        {
          text: '浙江省',
          children: [
            {
              text: '杭州市',
              children: [{ text: '西湖区' }, { text: '余杭区' }],
            },
            {
              text: '温州市',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }],
            },
          ],
        },
        {
          text: '福建',
          children: [
            {
              text: '福州市',
              children: [{ text: '鼓楼区' }, { text: '台江区' }],
            },
            {
              text: '厦门市',
              children: [{ text: '思明区' }, { text: '海沧区' }],
            },
          ],
        },
      ]
    };
  },

  components: {},

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  }
};
</script>

<style scoped>
.van-icon {
  vertical-align: middle;
  margin-left: 163%;
}
.van-cell{
  width: 100%;
  padding: 0;
  margin-top: -20px;
  margin-left: 15px;
}
</style>