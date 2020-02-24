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
            <input type="text" class="mui-input-clear mui-input" maxlength="8" placeholder="请输入用户名" v-model="username">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="password">
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
            <input type="text" class="mui-input-clear mui-input" maxlength="11" placeholder="请输入手机号" v-model="tel">
          </div>
          <div class="mui-input-row" id="code">
            <label>验证码</label>
            <input type="password" class="mui-input-clear mui-input" maxlength="6" placeholder="请输入验证码" v-model="code">
            <a href="#" @click="sendCode">{{isRun?`${RunTime}秒后重新获取`:`获取验证码`}}</a>
          </div>
        </form>
      </div>
      <div class="mui-content-padded">
        <button class="mui-btn mui-btn-block mui-btn-primary" @click="Login">登录</button>
        <p id="log-phone">
          <a href="#" @click.prevent="passwordGo">密码登录</a> | <a href="#" @click.prevent="yanZhMaGo">验证码登录</a>
        </p>
        <div class="other-login">
          <p> ——&nbsp;&nbsp;&nbsp;&nbsp;其他登录方式&nbsp;&nbsp;&nbsp;&nbsp;——</p>
          <img @click="showqq" src="../../../../lib/img/other/QQ.png"><img @click="showqq" id="middle" src="../../../../lib/img/other/WeChat.png"><img @click="showqq" src="../../../../lib/img/other/pay.png">
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
        flag:true,
        username:'',
        password:'',
        tel:'',
        code:'', //  填入的
        num:'',  // 获取到的
        isRun:false,
        RunTime:30
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
      },
      // 发送验证码
      sendCode(){
        if (this.isRun) return ;
        if (this.tel.length === 0) {
          return Toast('请输入手机号')
        }
        if (!/^1[3-9][0-9]{9}$/.test(this.tel)) {
          return Toast('请输入合法的手机号')
        }
        const TelObj = {
          tel:this.tel
        };
        this.$axios.post('/loginCode',TelObj).then((res) => {
          if (res.data === 0) {
            return Toast('手机号还未注册，请先注册')
          }
          this.isRun = true;
          this.timerId = setInterval(() => {
            if (this.RunTime === 0) {
              this.RunTime = 30;
              this.isRun = false;
              clearInterval(this.timerId)
            }
            this.RunTime--
          },1000);
          this.num = res.data;
          setTimeout(() => {
            Toast({
              message: `尊敬的${ this.tel }用户，您的手机验证码是${ this.num }`,
              position: 'top',
              iconClass:'mui-icon mui-icon-email'
            })
          },10000);
        })
      },
      Login(){
        // 密码登录
        if (this.flag) {
          if (this.username.length === 0) {
            return Toast('用户名不能为空')
          }
          if (this.password.length < 6 || this.password.length > 11)  {
            return Toast('请输入登录密码')
          }
          const UserObj = {
            username: this.username,
            password: this.password
          };
          this.$axios.post('/loginmima',UserObj).then((res) => {
            if (res.data === 0) {
              return Toast('用户名还未注册，请先注册')
            }
            if (res.data === 1) {
              return Toast('密码错误，请重新输入')
            }
            // console.log(res.data)  //token/USER
            // 登录成功
            const userObj = res.data.USER;
            this.$store.commit('saveUser',userObj);  // 将用户对象保存到store中
            localStorage.setItem('token',res.data.token);  // 保存token
            this.$router.push('/home')  // 跳转
          })
        }
        // 验证码登录
        if (!this.flag) {
          if (this.tel.length === 0) {
            return Toast('请输入手机号')
          }
          if (!/^1[3-9][0-9]{9}$/.test(this.tel)) {
            return Toast('请输入合法的手机号')
          }
          if (this.code.length === 0) {
            return Toast('请输入验证码')
          }
          // 判断输入的验证码是否一致
          if (parseInt(this.num) !== parseInt(this.code)) {
            return Toast('验证码错误，请重新输入')
          }
          const telObj = {
            tel:this.tel
          };
          this.$axios.post('/loginyanzhma',telObj).then((res) => {
            //console.log(res.data)  //token/USER
            // 登录成功
            const userObj = res.data.USER;
            this.$store.commit('saveUser',userObj);  // 将用户对象保存到store中
            localStorage.setItem('token',res.data.token);  // 保存token
            this.$router.push('/home')  // 跳转
          })
        }
      }
    }
  }
</script>

<style>
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
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
  #code{
    display: flex;
    justify-content: space-between;
  }
  #code input{
    width: 51%;
  }
  #code a{
    width: 28%;
    height: 35px;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
  }
</style>
