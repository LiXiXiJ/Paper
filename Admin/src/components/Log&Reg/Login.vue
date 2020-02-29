<template>
  <div class="login-container">
    <div class="login-content" v-if="flag">
      <div class="login-header">
        <p>网上购物后台管理系统</p>
      </div>
      <div class="login-input">
        <div class="input-username">
          <input type="name" placeholder="username" v-model="logUsername"></input>
        </div>
        <div class="input-password">
          <input type="password" placeholder="password" v-model="logPassword"></input>
        </div>
      </div>
      <div class="login-button">
        <el-button type="primary" @click="Login">登录</el-button>
      </div>
      <div class="regist">
        <p>还没有账号...？<a href="javascript:;" @click="GoRegister">点击注册</a></p>
      </div>
    </div>

    <div class="register-container" v-else>
      <p class="register-cuo" @click="backLogin"><i class="icon iconfont icon-cuohao"></i></p>
      <form>
        <div class="register-input">
            <div class="input-username">
              <input type="name" placeholder="username" v-model="regUsername"></input>
            </div>
            <div class="input-password">
              <input type="password" placeholder="password" v-model="regPassword"></input>
            </div>
            <div class="input-tel">
              <input type="tel" placeholder="phone" v-model="regPhone"></input>
            </div>
          </div>
      </form>
      <div class="register-button">
        <el-button type="success" @click="Register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        flag:true,
        regUsername:'',
        regPassword:'',
        regPhone:'',
        logUsername:'',
        logPassword:''
      }
    },
    methods:{
      // 去注册
      GoRegister(){
        this.flag = !this.flag
      },
      // 返回登录
      backLogin(){
        this.flag = !this.flag
      },
      // 注册
      Register() {
        if (this.regUsername.length === 0) {
          return this.$alert('用户名不能为空', {
            confirmButtonText: '确定'
          });
        }
        if (this.regPassword.length === 0 || this.regPassword.length < 6) {
          return this.$alert('请输入6位以上密码', {
            confirmButtonText: '确定'
          });
        }
          if (!/^1[3-9][0-9]{9}$/.test(this.regPhone) || this.regPhone.length < 11) {
            return this.$alert('请输入合法电话号', {
              confirmButtonText: '确定'
            });
          }
          const adminObj = {
            username:this.regUsername,
            password:this.regPassword,
            phone:this.regPhone
          };
          this.$axios.post('/adminregister',adminObj).then(res => {
            this.$alert('注册完成，快去登录吧！', {
              confirmButtonText: '确定'
            });
            // 去登录
            setTimeout(() => {
              this.backLogin()
            },3000)
          })
        },
      // 登录
      Login(){
        if (this.logUsername.length === 0) {
          return this.$alert('用户名不能为空', {
            confirmButtonText: '确定'
          });
        }
        if (this.logPassword.length === 0 || this.logPassword.length < 6) {
          return this.$alert('请输入密码', {
            confirmButtonText: '确定'
          });
        }
        const adminObj = {
          username:this.logUsername,
          password:this.logPassword
        };
        this.$axios.post('/adminlogin',adminObj).then(res => {
          if (res.data === 0) {
            return this.$alert('用户尚未注册，请先去注册', {
              confirmButtonText: '确定'
            });
          }
          if (res.data === 1) {
            return this.$alert('密码错误，请重新输入密码', {
              confirmButtonText: '确定'
            });
          }
          const token = res.data.token;
          const adminUser = res.data.adminUser;
          // 保存token
          localStorage.setItem('adminToken',token);
          // 保存用户到store中
          this.$store.commit('saveAdminUser',adminUser);
          // 跳转到主页
          setTimeout(() => {
            this.$router.push('/Home')
          },3000);
        })
      }
    }
  }
</script>

<style scoped>
  .login-container{
    background-image: url("../../lib/imgs/login.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    margin: 0;
    padding: 50px 0 0;
  }
  .login-content{
    width: 500px;
    height: 300px;
    margin: 0 auto;
    padding-top: 8%;
    text-align: center;
  }
  .input-username{
    margin: 0 0 20px;
  }
  input{
    width: 300px;
    height: 30px;
    color: black;
    padding-left: 10px;
    opacity: 0.6;
    border-bottom: #007aff 2px solid;
  }
  .login-button{
    margin-top: 10px;
  }
  .login-header p{
    color: white;
    font-size: 25px;
    font-weight: bold;
  }
  .regist{
    margin-top: 50px;
  }
  .regist p{
    font-size: 15px;
    color: white;
  }
  .regist a{
    text-decoration: none;
    color: white;
  }
  .register-container{
    width: 400px;
    height: 500px;
    margin: 0 auto;
    text-align: center;
    background-color: #cccccc;
    opacity: 0.7;
    border-radius: 7%;
  }
  .input-email{
    margin: 20px 0;
  }
  .register-button{
    margin-top: 10px;
  }
  .register-input{
    padding-top: 80px;
  }
  .register-cuo{
    padding: 5% 0 0 80%;
  }
  .input-tel{
    margin-top: 20px;
  }
</style>
