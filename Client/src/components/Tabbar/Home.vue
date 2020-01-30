<template>
  <div>
<!--    轮播图区域 -->
<!--    auto 毫秒值 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
<!--     六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shoplist">
        <img src="../../lib/img/lgge/1.png">
        <div class="mui-media-body">商品列表</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
        <img src="../../lib/img/lgge/2.png">
        <div class="mui-media-body">图片分享</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
        <img src="../../lib/img/lgge/3.png">
        <div class="mui-media-body">新闻资讯</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/comment">
        <img src="../../lib/img/lgge/4.png">
        <div class="mui-media-body">反馈</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/vip">
        <img src="../../lib/img/lgge/5.png">
        <div class="mui-media-body">专区</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/touch">
        <img src="../../lib/img/lgge/6.png">
        <div class="mui-media-body">我的</div>
        </router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            lunbotuList:[] // 获取轮播图
          }
      },
      created(){
          this.getlunbo()
      },
      methods:{
          async getlunbo(){
            const res = await this.$axios.get('/getlunbotu',this.model);
            // console.log(res)
            if(res.status === 200 ){
              this.lunbotuList = res.data
             }
          }
      }
    }
</script>

<style>
  /* 设置轮播图区域高度 */
  .mint-swipe{
    height: 150px;
  }
  img{
    width: 100%;
    height: 150px;
  }
  /* 设置六宫格样式 */
  body{
    background-color: white;
  }
  .mui-table-view.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
  }
  .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
    border: none;
  }
  /* 设置六宫格图标和字体大小 */
  li img{
    width: 50px;
    height: 50px;
  }
  .mui-media-body{
    font-size: 11px;
  }
</style>
