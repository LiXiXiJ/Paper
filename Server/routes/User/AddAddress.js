/**
 * AddAddress.js
 *   管理收货地址 路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const address = require('../../models/Users/address');

const AddAddress = express.Router();

// 保存地址
AddAddress.post('/postaddress',async (req,res) => {
   // console.log(req.body)
    const model = await address.create(req.body);
    res.send('1')
});

// 获取地址
AddAddress.get('/getaddress',async (req,res) => {
    const model = await address.find(req.body);
    res.send(model)
});

// 删除地址
AddAddress.post('/deleteaddress',async(req,res) => {
    const model = await address.remove({"_id":req.body._id},{justOne:true});
    res.send()
});

module.exports = AddAddress;
