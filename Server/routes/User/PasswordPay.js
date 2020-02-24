/**
 *   验证支付密码是否正确
 * @type {createApplication}
 */

const express = require('express');
const auth = require('../../MiddleWare/auth');
const md5 = require('blueimp-md5');

const user = require('../../models/Users/user');

const PasswordPay = express.Router();

// 根据生成的token 判断密码是否正确
PasswordPay.post('/passwordpay',auth,async (req,res) => {
    if (md5(md5(req.body.password)) !== req.USER.passwordPay) {
        return res.send('0')
    }
    res.send()
});

module.exports = PasswordPay;
