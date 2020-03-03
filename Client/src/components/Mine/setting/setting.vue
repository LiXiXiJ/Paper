<template>
  <div class="mui-scroll" id="main">
    <ul class="mui-table-view mui-table-view-chevron" id="fir">
      <li class="mui-table-view-cell mui-media">
        <router-link class="mui-navigate-right" to="/mine/login" v-if="!flag">
          <img class="mui-media-object mui-pull-left head-img" src="../../../lib/img/other/header.png">
          <p class='mui-ellipsis' id="p1"> 暂未登录 </p>
        </router-link>
        <div class="login-after" v-else>
          <el-upload
            class="avatar-uploader"
            :action="/api/+'upload'"
            :show-file-list="false"
            :on-success="afterUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p id="p2">{{ $store.state.user.username }}</p>
        </div>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <router-link to="/mine/address" class="mui-navigate-right">我的收货地址</router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <router-link to="/mine/news" class="mui-navigate-right">新消息通知</router-link>
      </li>
      <li class="mui-table-view-cell">
        <router-link to="/mine/privacy" class="mui-navigate-right">隐私与安全</router-link>
      </li>
      <li class="mui-table-view-cell">
        <router-link to="/mine/current" class="mui-navigate-right">通用</router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <router-link to="/mine/about" class="mui-navigate-right">关于购物系统 <i class="mui-pull-right update">V10.10.10</i></router-link>
      </li>
    </ul>
    <br>
        <mt-button type="danger" size="large" @click="backLogin" v-show="flag">退出登录</mt-button>
  </div>
</template>

<script>
  export default {
    name: "setting",
    data(){
      return{
        flag:this.$store.state.user.username,  // 默认登录状态
        imageUrl: ''
      }
    },
    methods:{
      // 退出登录
      backLogin(){
        // 清空token
        localStorage.setItem('token','');
         // store 中清空user
         this.$store.commit('backLogin');
         // 跳转
         this.$router.push('/mine')
      },
    // 上传头像
      afterUpload(res){
        console.log(res)
        this.imageUrl = res.url
      }
    }
  }
</script>

<style>
  #fir{
    margin-top: 0;
    height: 64px;
  }
  #p1{
    margin-top: 10px;
    height: 20px;
    font-size: 15px;
    color: green;
    text-indent: 3em;
  }
  #p2{
    margin: -45px 152px 0 0;
    height: 20px;
    font-size: 20px;
    color: green;
    text-indent: 3em;
    float: right;
  }
  html,
  body {
    background-color: white;
  }
  .mui-navigate-right{
    font-size: 13px;
    background-color: snow;
    margin-top: 0;
  }
  .mui-page .mui-table-view:first-child {
    margin-top: 15px;
  }
  .mui-page .mui-table-view:last-child {
    margin-bottom: 30px;
  }
  .mui-table-view {
    margin-top: 20px;
  }
  .mui-table-view span{
    color: #999;
  }
  .update {
    font-style: normal;
    color: #999999;
    margin-right: -25px;
    font-size: 15px
  }
  #feedback .mui-table-view:last-child {
    margin-bottom: 0;
  }
  #feedback .mui-table-view:first-child {
    margin-top: 0;
  }
  .mui-pull-right.update{
    font-size: 12px;
  }
  #main .mui-navigate-right {
    background-color: ghostwhite;
  }
  .login-after{
    width: 100%;
    height: 50px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
</style>
