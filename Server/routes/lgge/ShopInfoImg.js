/**
 * ShopInfoImg.js
 *   商品详情页面轮播图路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shopinfoimg = require('../../models/lgge/shopinfoimg');

const ShopInfoImg = express.Router();

ShopInfoImg.get('/getshopinfoimg/:id',async (req,res) => {
    const model = await shopinfoimg.find({ 'id' : req.params.id});
    res.send(model)
});

module.exports = ShopInfoImg;
