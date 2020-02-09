/**
 * Register.js
 *   注册路由
 * @type {createApplication}
 */

const express = require('express');
const md5 = require('blueimp-md5');

const user = require('../../models/Users/user');

const Register = express.Router();

Register.post('/sendcode',async (req,res) => {  //发送有验证码
    // 判断手机号有没有被注册
    const userTelData = await user.find({ 'tel' : req.body.tel });
    if (userTelData.length !== 0) {  // length = 0 时表示没找到,还没被注册
        return res.send('1')  // 1表示已经被注册
    }
    // 随机生成六位数
    var code = "";
    for(var i = 1;i <= 6;i++){
        const num = Math.floor(Math.random()*10);
        code += num;
    }
    //发送
        res.send(code)
});

Register.post('/register',async (req,res) => {
    // 判断用户是否被注册
    const userNameData = await user.find({ 'username' : req.body.username });
    if (userNameData.length !== 0) {  // length = 0 时表示没找到,还没被注册
       return res.send('1')  // 1表示已经被注册
    }
    res.send('0');
    const User = {
        username:req.body.username,
        password:md5(md5(req.body.password)),
        tel:req.body.tel,
        passwordPay:md5(md5(req.body.passwordPay))
    };
    console.log(User)
});

module.exports = Register;
