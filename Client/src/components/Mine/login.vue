<template>
  <div>
    <div class="mui-content">
      <div v-if="flag">
        <div class="login">
          <h1>密码登录</h1>
        </div>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" class="mui-input-clear mui-input" maxlength="8" placeholder="请输入用户名">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input type="password" class="mui-input-clear mui-input" minlength="3" maxlength="11" placeholder="请输入密码">
          </div>
        </form>
      </div>
      <div v-else>
        <div class="login">
          <h1>验证码登录</h1>
        </div>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>手机号</label>
            <input type="text" class="mui-input-clear mui-input" maxlength="11" placeholder="请输入手机号">
          </div>
          <div class="mui-input-row">
            <label>验证码</label>
            <input type="password" class="mui-input-clear mui-input" maxlength="6" placeholder="请输入验证码">
          </div>
        </form>
      </div>
      <div class="mui-content-padded">
        <button class="mui-btn mui-btn-block mui-btn-primary">登录</button>
        <p id="log-phone">
          <a href="#" @click.prevent="passwordGo">密码登录</a> | <a href="#" @click.prevent="yanZhMaGo">验证码登录</a>
        </p>
        <div class="other-login">
          <p> ——&nbsp;&nbsp;&nbsp;&nbsp;其他登录方式&nbsp;&nbsp;&nbsp;&nbsp;——</p>
          <img @click="showqq" src="../../lib/img/other/QQ.png"><img @click="showqq" id="middle" src="../../lib/img/other/WeChat.png"><img @click="showqq" src="../../lib/img/other/pay.png">
        </div>
        <div class="link-area">
          <router-link id="none" to="/mine/register">还没有账号？点击注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: "Mine",
    data(){
      return {
        flag:true
      }
    },
    methods:{
      passwordGo(){
        this.flag = true
      },
      yanZhMaGo(){
        this.flag = false
      },
      showqq(){
        Toast('抱歉，该功能正在测试中！')
      }
    }
  }
</script>

<style>
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: white;
  }
  .mui-content{
    height: 100%;
    background-color: white;
  }
  .mui-input-group {
    margin-top: 10px;
  }
  .mui-input-group:first-child {
    margin-top: 20px;
  }
  .mui-input-group label {
    width: 22%;
  }
  .mui-input-row label~input,
  .mui-input-row label~select,
  .mui-input-row label~textarea {
    width: 78%;
  }
  .mui-checkbox input[type=checkbox],
  .mui-radio input[type=radio] {
    top: 6px;
  }
  .mui-content-padded {
    margin-top: 25px;
  }
  .mui-btn {
    padding: 10px;
  }
  .link-area {
    display: block;
    margin-left: 27%;
    margin-top: 20%;
    text-align: center;
    background-color: #c8c7cc;
    width: 150px;
    border-radius: 11px;
  }
  .mui-input-clear.mui-input{
    font-size: 13px;
  }
  #none{
    font-size: 13px;
  }
  .mui-input-row label{
    padding-right: 5px;
    font-size: 15px;
  }
  .login h1{
    color: #007aff;
    text-align: center;
    font-size: 25px;
    margin-top: 20%;
  }
  #log-phone{
    text-align: center;
    margin: 5px 0;
  }
  .other-login {
    text-align: center;
  }
  .other-login img{
    width: 30px;
    height: 30px;
  }
  .other-login #middle{
    margin: 0 15px;
  }
</style>
