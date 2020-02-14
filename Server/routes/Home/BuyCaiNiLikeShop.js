/**
 * BuyCaiNiLikeShop.js
 *   home.vue 猜你喜欢模块,获取购买页面数据，数据表文件用 cainilike.js
 * @type {createApplication}
 */

const express = require('express');

const cainilike = require('../../models/Home/cainilike');

const BuyCaiNiLikeShop = express.Router();

BuyCaiNiLikeShop.get('/getbuycainilikeshop/:id',async (req,res) => {
    const model = await cainilike.findOne({"id":req.params.id});
    res.send(model)
});

module.exports = BuyCaiNiLikeShop;
