/**
 * BuyAiGuangJieShop.js
 *   购买爱逛街页面商品，路由文件,数据文件用 aiguangjieinfo.js
 * @type {createApplication}
 */

const express = require('express');

const aiguangjieinfo = require('../../models/Home/aiguangjieinfo');

const BuyAiGuangJieShop = express.Router();

BuyAiGuangJieShop.get('/getaiguangjieshop/:id',async (req,res) => {
    const model = await aiguangjieinfo.findOne({"id":req.params.id});
    res.send(model)
});

module.exports = BuyAiGuangJieShop;
