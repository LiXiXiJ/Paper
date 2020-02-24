/**
 * Login.js
 *   登录路由
 * @type {createApplication}
 */

const express = require('express');
const md5 = require('blueimp-md5');  // 密码
// npm install jsonwebtoken
const jwt = require('jsonwebtoken'); // 生成token

// 密钥，用来加密
const SECRET = 'qwertyuiopasdfghjklzxcvbnm';

const user = require('../../models/Users/user');

const Login = express.Router();

// 获取验证码
Login.post('/loginCode',async (req,res) => {
    const telData = await user.find({'tel':req.body.tel});
    if (telData.length === 0) {
        return res.send('0')  // 还未注册
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

// 密码登录
Login.post('/loginmima',async (req,res) => {
    const usernameData = await user.find({'username':req.body.username});
    if (usernameData.length === 0) {
       return res.send('0')  // 没找到，用户名未注册
    }
    // 判断密码是否正确：由于用户名唯一，根据用户名查找只能找到一条数据,发送过来的用户数据密码与数据库中的用户数据密码对比，
    // console.log(md5(md5(req.body.password)))
    // console.log(usernameData[0])
    // console.log(usernameData[0].password)
    const password = md5(md5(req.body.password));
    if (password !== usernameData[0].password) {  // 密码错误
        return res.send('1')
    }
//    生成token
    const token = jwt.sign({
        id:String(usernameData[0]._id)
    },SECRET);
    // 发送token
    res.send({
        USER:usernameData[0],
        token:token
    })
});

// 验证码登录
Login.post('/loginyanzhma',async (req,res) => {
    const telData = await user.find({'tel':req.body.tel});
    // console.log(telData[0])
    // 生成token
    const token = jwt.sign({
        id:String(telData[0]._id)
    },SECRET);
    // 发送token
    res.send({
        USER:telData[0],
        token:token
    })
});

module.exports = Login;
