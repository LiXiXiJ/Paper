/**
 * app.js 后台入口模块
 *  专门创建服务，做一些服务相关配置
 *  监听端口，启动服务
 * @type {createApplication}
 */
const express = require('express');
const bodyParser = require('body-parser');

//引入路由
const Talk = require('./routes/Talk');
const Login = require('./routes/Login');
const Register = require('./routes/Register');

const app = express();

//配置表单 post 请求
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// 路由挂载到 APP 服务中
app.use(Talk);
app.use(Login);
app.use(Register);

app.listen(3000,() => {
    console.log('server is running')
});
