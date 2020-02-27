/**
 * YouHaoHuoInfo.js
 *   YouHaoHuo/id 页面路由文件
 * @type {createApplication}
 */

const express = require('express');

const youhaohuo = require('../../models/Home/youhaohuo');  // 对应id商品

const youhaohuoinfo = require('../../models/Home/youhaohuoinfo'); // 下面商品

const YouHaoHuoInfo = express.Router();

YouHaoHuoInfo.get('/getyouhaohuoinfo/:id',async (req,res) => {
    const model = await youhaohuo.findOne({"id":req.params.id});
    res.send(model)
});

YouHaoHuoInfo.get('/getyouhaohuoinfobottom/:flag',async (req,res) => {
    const model = await youhaohuoinfo.find({"flag":req.params.flag});
    res.send(model)
});

// 购物车页面  - 你可能还喜欢数据
YouHaoHuoInfo.get('/getyouhaohuoinfobottom',async (req,res) => {
    const model = await youhaohuoinfo.find(req.body);
    res.send(model)
});

module.exports = YouHaoHuoInfo;
