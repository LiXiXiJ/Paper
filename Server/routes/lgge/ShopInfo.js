/**
 * ShopInfo.js
 *   商品详情页面路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shopinfo = require('../../models/lgge/shopinfo');

const ShopInfo = express.Router();

ShopInfo.get('/getshopinfo/:id',async (req,res) => {
    const model = await shopinfo.findOne({ 'id' : req.params.id });
    res.send(model)
});

module.exports = ShopInfo;
