/**
 *  管理员用户注册、登录路由
 * @type {createApplication}
 */

const express = require('express');
const md5 = require('blueimp-md5');
const jwt = require('jsonwebtoken');

// 密钥，用来加密
const SECRET = 'asmonjhbhdbvxgvgcgndsdnjhjsnhbgcfcdjnsjjsjsjncjncndbxhhxjxbv';

const adminUser = require('../../../models/Admin/adminUser/adminuser');

const AdminUser = express.Router();

// 注册保存管理员
AdminUser.post('/adminregister',async (req,res) => {
    const adminObj = {
        username:req.body.username,
        password:md5(md5(req.body.password)),
        phone:req.body.phone
    };
    const model = await adminUser.create(adminObj);
    res.send()
});

// 登录
AdminUser.post('/adminlogin',async (req,res) => {
   const adminUsername = req.body.username;
   const adminPassword = req.body.password;
   const user = await adminUser.find({'username':adminUsername});
    // 没找到，未注册
    if (user.length === 0) {
       return res.send('0')
    }
    // 密码错误
    if (md5(md5(adminPassword)) !== user[0].password) {
        return res.send('1')
    }
    // 生成token
    const token = jwt.sign({
        id:String(user[0]._id)
    },SECRET);
    // 发送token
    res.send({
        adminUser:user[0],
        token
    })
});

module.exports = AdminUser;
