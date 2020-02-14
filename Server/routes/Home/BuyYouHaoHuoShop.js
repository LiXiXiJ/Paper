/**
 * BuyYouHaoHuoShop.js
 *   购买有好货页面商品，路由文件,数据文件用 youhaohuoinfo.js
 * @type {createApplication}
 */

const express = require('express');

const youhaohuoinfo = require('../../models/Home/youhaohuoinfo');

const BuyYouHaoHuoShop = express.Router();

BuyYouHaoHuoShop.get('/getbuyyouhaohuoshop/:id',async (req,res) => {
    const model = await youhaohuoinfo.findOne({"id":req.params.id});
    res.send(model)
});

module.exports = BuyYouHaoHuoShop;
