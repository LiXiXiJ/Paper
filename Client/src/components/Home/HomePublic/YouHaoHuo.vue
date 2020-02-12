<template>
    <div class="youhaohuo-container">
      <div class="youhaohuo-top">
        <div class="top-img">
          <img src="//img.alicdn.com/tps/i4/TB1X9FWMXXXXXbIXFXXxAbKJpXX-240-44.png">
        </div>
        <div class="top-content">
          <div class="content-img">
              <img src="https://img.alicdn.com/imgextra/i3/1840508859/TB227FSgHGYBuNjy0FoXXciBFXa_!!1840508859-0-beehive-scenes.jpg_300x300.jpg">
          </div>
          <div class="content-info">
            <h2>YSL限量眼影银盘</h2>
            <p class="content-tuijian">来自潮品达人爱美丽的夏老师推荐：</p>
            <p class="youhaohuo-title">金属边框闪亮眼影盒，彰显低调的奢华之美。</p>
            <p class="content-action">
              <span class="youhaohuo-price"><span>￥</span>338</span>
              <span class="youhaohuo-view">查看宝贝<i class="icon iconfont icon-youjiantou"></i>
              </span>
              <span class="youhaohuo-like">
                <i class="icon iconfont icon-xiaolian"></i>
                30人说好</span>
            </p>
          </div>
        </div>
      </div>
      <div class="youhaohuo-middle">
        <p>你可能还喜欢</p>
      </div>
      <div class="youhaohuo-bottom">
        <ul class="youhaohuo-list">
          <li class="youhaohuo-item">
            <a href="javascript:;">
              <img src="//img.alicdn.com/imgextra/i3/666760192/TB2kHWwdcnI8KJjSsziXXb8QpXa_!!666760192-0-beehive-scenes.jpg_250x250xz.jpg">
              <h3>
                <div class="item-title">
                  YSL 五色眼影盘
                </div>
              </h3>
              <p class="item-content">“超细腻粉质”</p>
              <p class="item-extra">
                <span class="item-price">
                  <span>￥</span>360
                </span>
                <span class="item-like">5人说好</span>
              </p>
            </a>
          </li>
          <li class="youhaohuo-item">
            <a href="javascript:;">
              <img src="//img.alicdn.com/imgextra/i3/666760192/TB2kHWwdcnI8KJjSsziXXb8QpXa_!!666760192-0-beehive-scenes.jpg_250x250xz.jpg">
              <h3>
                <div class="item-title">
                  YSL 五色眼影盘
                </div>
              </h3>
              <p class="item-content">“超细腻粉质，斩男色桃花盘五色眼影，帮你迷倒万千少男。”</p>
              <p class="item-extra">
                <span class="item-price">
                  <span>￥</span>360
                </span>
                <span class="item-like">5人说好</span>
              </p>
            </a>
          </li>
          <li class="youhaohuo-item">
            <a href="javascript:;">
              <img src="//img.alicdn.com/imgextra/i3/666760192/TB2kHWwdcnI8KJjSsziXXb8QpXa_!!666760192-0-beehive-scenes.jpg_250x250xz.jpg">
              <h3>
                <div class="item-title">
                  YSL 五色眼影盘
                </div>
              </h3>
              <p class="item-content">“超细腻粉质，斩男色桃花盘五色眼影，帮你迷倒万千少男，斩男色桃花盘五色眼影，帮你迷倒万千少男。”</p>
              <p class="item-extra">
                <span class="item-price">
                  <span>￥</span>360
                </span>
                <span class="item-like">5人说好</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "YouHaoHuo"
    }
</script>

<style>
  body{
    background-color: white;
  }
  .top-img{
    padding-top: 10px;
    padding-bottom: 5px;
    margin: 0;
  }
  .top-img img{
    width: 70%;
    height: 40px;
  }
  .content-img img{
    width: 120px;
    height: 120px;
  }
  .content-info{
    float: right;
  }
  .content-img{
    float: left;
  }
  .content-info h2{
    font-size: 15px;
  }
  .content-tuijian{
    color: #007aff;
    font-size: 13px;
    margin: 10px 0 0 ;
  }
  .youhaohuo-title{
    font-size: 13px;
  }
  .content-action{
    margin: 0;
  }
  .youhaohuo-price{
    background-color: #1eadfb;
    display: inline-block;
    color: white;
    width: 60px;
    height: 30px;
    text-align: center;
    padding-top: 5px;
    font-size: 12px;
  }
  .youhaohuo-view{
    display: inline-block;
    background-color: #fecb30;
    width: 80px;
    height: 30px;
    text-align: center;
    color: black;
    padding-top: 5px;
    font-size: 12px;
  }
  .youhaohuo-like{
    color: #53bfe6;
    display: inline-block;
    margin-left: 20px;
    font-size: 12px;
  }
  .youhaohuo-middle{
    width: 80%;
    height: 30px;
    margin-top: 33%;
    background-color: #e8e8e8;
  }
  .youhaohuo-middle p{
    margin: 0;
    color: black;
    padding-top: 5px;
    padding-left: 25%;
    text-align: center;
    font-size: 12px;
  }
  .youhaohuo-bottom{
    margin: 10px;
  }
  .youhaohuo-list{
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .youhaohuo-item{
    width: 49%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ccc;
  }
  .youhaohuo-item img{
    width: 100%;
    height: 150px;
  }
  .item-title{
    font-size: 14px;
    color: black;
    margin-bottom: 10px;
  }
  .item-content{
    font-size: 12px;
    line-height: 17px;
    height: 51px;
  }
  .item-price{
    color: red;
  }
  .item-like{
    color: #53bfe6;
  }
  .item-extra{
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
</style>
