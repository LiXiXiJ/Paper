/**
 * Login.js
 *  登录路由模块
 * @type {createApplication}
 */

const express = require('express');

const Login = express.Router();

Login.get('/login',function (req,res) {
    res.send('login')
});

module.exports = Login;
