/**
 * Login.js
 *   登录路由
 * @type {createApplication}
 */

const express = require('express');

const user = require('../../models/Users/user');

const Login = express.Router();

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

Login.post('/login',async (req,res) => {
    const usernameData = await user.find({'username':req.body.username});
    if (usernameData.length === 0) {
       return res.send('0')  // 没找到，用户名未注册
    }
    // 判断密码是否正确：由于用户名唯一，根据用户名查找只能找到一条数据,发送过来的用户数据密码与数据库中的用户数据密码对比，
    // console.log(req.body.password)
    // console.log(usernameData[0].password)
    if (req.body.password !== usernameData[0].password) {
        return res.send('1')
    }
});

module.exports = Login;
