<template>
  <div class="register-container">
    <div class="mui-content">
      <div class="register">
        <h1>注&nbsp;册</h1>
      </div>
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>用户名</label>
          <input type="text" class="mui-input-clear mui-input" placeholder="请输入用户名" name="username" v-model="username">
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input type="password" class="mui-input-clear mui-input" placeholder="请输入密码" name="password" v-model="password">
        </div>
        <div class="mui-input-row">
          <label>电话</label>
          <input type="tel" class="mui-input-clear mui-input" placeholder="请输入电话" maxlength="11" name="tel" v-model="tel">
        </div>
        <div class="mui-input-row" id="code">
          <label>验证码</label>
          <input type="password" class="mui-input-clear mui-input" placeholder="请输入验证码" maxlength="6" name="code" v-model="code">
          <a href="#" @click.prevent="sendCode" >{{ isRun?`${runTime}秒后重新获取`:`获取验证码`}}</a>
        </div>
        <div class="mui-input-row">
          <label>支付密码</label>
          <input type="password" class="mui-input-clear mui-input" placeholder="请输入支付密码" name="passwordPay" v-model="passwordPay">
        </div>
      </form>
      <div class="mui-content-padded">
        <input class="mui-btn mui-btn-block mui-btn-primary" type="submit" value="注册" @click="submit">
      </div>
      <div class="link-area">
        <router-link id="none" to="/mine/login">已有账号？点击登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    data(){
      return{
        username:'',//用户名
        password:'',//密码
        tel:'',//电话
        code:'',// 填写的验证码
        passwordPay:'',// 支付密码
        num:'', // 获取到的验证码
        isRun:false, // 默认显示‘获取验证码’
        runTime:30 // 倒计时时间
      }
    },
    methods:{
      // 获取验证码
      sendCode(){
        if (this.isRun) return ; // 如果在计时中，结束
        if (!/^1[3-9][0-9]{9}$/.test(this.tel) || this.tel.length < 11)  {
          return Toast('请输入合法的手机号')
        }
        const tel = {
          tel:this.tel
        };
        this.$axios.post('/sendcode',tel).then((res) => {
          if (res.data === 1) {
             return Toast('手机号已被注册')
          }
          this.isRun = true; // 当手机号符合后计时
          this.timerId = setInterval(() => {
            if (this.runTime === 0) {
              this.runTime = 30;
              this.isRun = false;
              clearInterval(this.timerId);
              return
            }
            this.runTime--
          },1000);
          this.num = res.data; // 验证码保存在data中
          setTimeout(() => {
            Toast({
              message: `尊敬的${this.tel}用户，您的手机验证码是${this.num}`,
              position: 'top',
              iconClass:'mui-icon mui-icon-email'
            })
          },10000)
        })
      },
      submit() {
        console.log(this.num)
        console.log(this.code)
        if (this.username.length === 0) {
          return Toast('用户名不能为空')
        }
        if (this.password.length < 6 || this.password.length > 11)  {
          return Toast('请填写6-11位密码')
        }
        if (!/^1[3-9][0-9]{9}$/.test(this.tel))  {
          return Toast('请输入合法的手机号')
        }
        if (this.code.length === 0) {
          return Toast('请输入验证码')
        }
        if (this.passwordPay.length < 6 || this.passwordPay.length > 6)  {
          return Toast('请填写6位支付密码')
        }
        // 判断输入的验证码是否一致
        if (parseInt(this.num) !== parseInt(this.code)) {
          return Toast('验证码错误，请重新输入')
        }
        const userObj = {
          username:this.username,
          password: this.password,
          tel:this.tel,
          passwordPay:this.passwordPay
        } ;
         this.$axios.post('/register',userObj).then((res) => {
           if (res.data === 1) {
             return Toast('用户名已被注册')
           }
           if (res.data === 0) {
             Toast('注册成功，欢迎加入');
             this.$router.push('/mine/login')
           }
         })
      }
    }
  }
</script>

<style>
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
  .mui-input-clear.mui-input{
    font-size: 13px;
  }
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
  #none{
    font-size: 13px;
  }
  .register h1{
    font-size: 25px;
    text-align: center;
    color: #007aff;
    margin-top: 10%;
  }
  .mui-input-row label{
    padding-right: 5px;
    font-size: 15px;
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
