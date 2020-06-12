<template>
  <div>
    <!-- 评价 -->
    <div class="comment">
      <div class="cmt_title">
        <h3>评价</h3>
        <p class="count">186万+</p>
        <p class="good">好评度94%</p>
        <i class="icon"></i>
      </div>
      <div class="cmt_tag">
        <span>反应超快(4838)</span>
        <span>清晰度高(4351)</span>
        <span>颜色绚丽(3278)</span>
        <span>漂亮大方(2698)</span>
      </div>
      <div class="cmt_user">
        <img src="../images/PhoneList/user.png" />
        <span class="user">j***k</span>
        <span class="star">
          <span></span>
          <span style="margin-left: 10px;"></span>
          <span style="margin-left: 20px;"></span>
          <span style="margin-left: 30px;"></span>
          <span style="margin-left: 40px;"></span>
        </span>
        <span class="date">2020-5-18</span>
      </div>
      <div class="cmt_content">手感特别好手机外观漂亮，一.仟的折.扣.很划算的，便宜了不少。款式好看，质量很好，正品，做工精致，屏幕细腻够大很清晰，色彩饱和度很不错，照相不错，很漂亮，音质也很棒，系统功能强大，运行速度很快，看电影听音乐都很给力，非常享受，操作简单，内存也足够。使用了一段时间的感受是充电一天一充，电池还是很耐用的，就是充电比较慢，不是比较是非常慢，充电的时间大概一上午，拍照发黄，但是拍出来的照片还不错，性价比超高的一款手机吧，还有一点就是打字这一块还不太适应，其他感觉良好。性价比蛮高的，而且价格还实惠便宜.
      </div>
      <div class="cmt_more">
        <a href>查看全部评价</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
/* 评价 */
.comment{
    background: #fff;
    border-radius: 12px;
    padding: 15px;
    margin-top: 10px;
}
.comment .cmt_title{
    position: relative;
    height: 45px;
    line-height: 45px;
    color: #262626;
    padding-left: 8px;
    margin-top: 3px; 
}
.comment .cmt_title .count{
    top: 3px;
    left: 45px;
    font-size: 12px;
    position: absolute;
    height: 45px;
    line-height: 45px;
    margin: 0 0 0 10px;

}
.comment .cmt_title .good{
    top: 0;
    color: #8c8c8c;
    right: 15px;
    font-size: 13px;
    position: absolute;
    height: 45px;
    line-height: 45px;
    margin: 0 5px 0 0;
}
.comment .cmt_title .icon{
    right: 0;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background: url('../images/right.png') no-repeat;
    background-size: cover;
}
.comment .cmt_tag{
    position: relative;
    padding: 3px 3px 0 0;
    max-height: 80px;
    margin: 0;
}
.comment .cmt_tag span{
    background: #fcedeb;
    border-radius: 15px;
    display: inline-block;
    margin: 0 5px 5px 0;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    font-size: 11px;
    color: #262626;
}
.comment .cmt_user{
    font-size: 12px;
}
.comment .cmt_user img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    vertical-align: middle;
}
.comment .cmt_user .user{
    margin-left: 12px;
    display: inline-block;
    color: #262626;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
}
.comment .cmt_user .star{
    position: relative;
    display: inline-block;
    width: 56px;
    height: 10px;
    margin: -2px 0 -2px 6px;
    vertical-align: middle;
}
.comment .cmt_user .star span{
    width: 10px;
    height: 10px;
    margin-right: 2px;
    position: absolute;
    background-size: cover;
    background-image: url('../images/PhoneList/star.png');
}
.comment .cmt_user .date{
    float: right;
    color: #999;
    margin-left: -60px;
}
.comment .cmt_content{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    position: relative;
    line-height: 1.5;
    font-size: 13px;
    margin: 18px 0;
    word-break: break-all;
    white-space: normal;
    max-height: 126px;
}
.comment .cmt_more{
    text-align: center;
    background-color: #fff;
}
.comment .cmt_more a{
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    text-align: center;
    color: #262626;
    padding: 0 5px 0 10px;
    margin-bottom: 18px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    border: 1px solid #ccc;
    border-radius: 20px;
}
</style>