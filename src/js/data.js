export default {
  sku: {
    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
    tree: [
      {
        k: '颜色',
        k_id: '1',
        v: [
          {
            id: '30349',
            name: '红色',
            previewImgUrl: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/67916/17/9969/159271/5d7805faEe7c27c3d/cbb95527970f0321.jpg!q70.dpg.webp'
          },
          {
            id: '1215',
            name: '白色',
            previewImgUrl: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/44671/19/10093/124064/5d78059fE77b25e06/8a3b41a10259aa84.jpg!q70.dpg.webp', // 用于预览显示的规格类目图片
          }
        ],
        k_s: 's1',
        count: 2
      },
      {
        k: '版本',
        k_id: '2',
        v: [
          {
            id: '1193',
            name: '64GB'
          },
          {
            id: '1194',
            name: '128GB'
          }
        ],
        k_s: 's2',
        count: 2
      }
    ],
    // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
    list: [
      {
        id: 2259,
        price: 549900, //价格
        // discount: 122,
        s1: '1215',
        s2: '1193',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 20, //库存 
        goods_id: 946755
      },
      {
        id: 2260,
        price: 599900,
        // discount: 112,
        s1: '1215',
        s2: '1194',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 222, //库存 
        goods_id: 946755
      },
      {
        id: 2257,
        price: 549900,
        // discount: 132,
        s1: '30349',
        s2: '1193',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 40, //库存 
        goods_id: 946755
      },
      {
        id: 2258,
        price: 599900,
        // discount: 100,
        s1: '30349',
        s2: '1194',
        s3: '0',
        s4: '0',
        s5: '0',
        stock_num: 50, //库存 
        goods_id: 946755
      }
    ],
    price: '5.00',
    stock_num: 227, // 商品总库存
    none_sku: false,  // 是否无规格商品 
    hide_stock: false  // 是否隐藏剩余库存
  },
  goods_id: '946755',
  quota: 3, //限购数量 
  quota_used: 0,  //已经购买过的数量
  goods_info: {
    title: '测试商品A',
    picture:
      // 'https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg'
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/95317/25/6293/186439/5df2ff15E661016ab/dd6f142f583663bb.jpg!q70.dpg.webp'
  },
  initialSku: {
    s1: "0001",
    s2: "1001",
    selectedNum: 3
  }
};