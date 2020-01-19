/**
 * Register.js
 *  注册路由模块
 * @type {createApplication}
 */

const express = require('express');
const user = require('../models/user');

const Register = express.Router();

Register.post('/register',function (req,res) {
    res.send('register')
    // 1. 获取表单提交的数据
    //    2. 操作数据库
    //        判断用户是否存在
    //       3. 发送响应
    // const body = req.body;
    // user.findOne({
    //     $or:[
    //         {
    //             email:body.email
    //         },
    //         {
    //             nickname:body.nickname
    //         }
    //     ]
    // },function (err,data) {
    //     if(err){
    //         return res.status(500).send('server err')
    //     }
    //     if(data){ //邮箱或密码已存在
    //         return res.status(200).send('email or nickname already exists.')
    //     }
    //     console.log('ok')
    //     // express 提供了一个响应方法 json
    //     //    该方法接收一个对象作为参数，自动将对象转为字符串再发送给浏览器
    //     res.status(200).json({
    //
    //     })
    // })
});

module.exports = Register;

