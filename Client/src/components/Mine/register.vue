<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" id="back" to="/mine">返回</router-link>
      <h1 class="mui-title">注册</h1>
    </header>
    <div class="mui-content">
      <form class="mui-input-group" id="register_form" action="/register" method="post">
        <div class="mui-input-row">
          <label>账号</label>
          <input type="text" class="mui-input-clear mui-input" placeholder="请输入账号" maxlength="8" name="nickname">
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input type="password" class="mui-input-clear mui-input" placeholder="请输入密码" minlength="3" maxlength="11" name="password">
        </div>
        <div class="mui-input-row">
          <label>邮箱</label>
          <input type="email" class="mui-input-clear mui-input" placeholder="请输入邮箱" name="email">
        </div>
      </form>
      <div class="mui-content-padded">
        <input class="mui-btn mui-btn-block mui-btn-primary" type="submit" value="注册">
      </div>
        <p class="zhu">注册成功后的用户可用于登录</p>
    </div>
  </div>
</template>

<script>
  // import 'jquery'
  //   $('#register_form').on('submit',function (e) {
  //     e.preventDefault();
  //     var formDate = $(this).serialize();
  //     $.ajax({
  //       url:'/register',
  //       type:'post',
  //       data:formDate,
  //       dataType:'json',
  //       success:function (data) {
  //         console.log(data)
  //       }
  //     })
  //   })
  export default {
    mounted() {
      this.$axios.post('/register').then(res => {
        console.log(res)
      })
    }
  }
</script>

<style>
  .area {
    margin: 20px auto 0px auto;
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
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  .mui-content{height: 100%;}
  .zhu{
    text-align: center;
  }
  #back{
    font-size: 13px;
    height: 44px;
    margin-top: 7px;
  }
</style>
