<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" id="back" to="/mine">返回</router-link>
      <h1 class="mui-title">登录</h1>
    </header>
    <div class="mui-content">
      <form id='login-form' class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input type="text" class="mui-input-clear mui-input" maxlength="8" placeholder="请输入账号">
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input type="password" class="mui-input-clear mui-input" minlength="3" maxlength="11" placeholder="请输入密码">
        </div>
      </form>
      <div class="mui-content-padded">
        <button class="mui-btn mui-btn-block mui-btn-primary">登录</button>
        <div class="link-area"><router-link id="none" to="/mine/register">还没有账号？点击注册</router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mine",
    data(){
      return {
      }
    },
    mounted() {
      this.$axios.get('/login')
        .then( res => {
          console.log(res)
        })
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
    margin-top: 25px;
    text-align: center;
  }
  .mui-input-clear.mui-input{
    font-size: 13px;
  }
  #back{
    font-size: 13px;
    height: 44px;
    margin-top: 7px;
  }
  #none{
    font-size: 13px;
  }
</style>
