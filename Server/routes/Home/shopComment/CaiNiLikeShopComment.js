/**
 * CaiNiLikeShopComment.js
 *   猜你喜欢商品路由文件
 * @type {createApplication}
 */

const express = require('express');

const caiNiLikeShopComment = require('../../../models/Home/shopComment/caiNiLikeShopComment');

const CaiNiLikeShopComment = express.Router();

// 添加评论到数据库
CaiNiLikeShopComment.post('/postcainilikeshopcomment',async (req,res) => {
    const model = await caiNiLikeShopComment.create(req.body);
    res.send()
});

// 获取评论数据
CaiNiLikeShopComment.get('/getcainilikeshopcomment/:id',async (req,res) => {
    const model = await caiNiLikeShopComment.find({"id":req.params.id});
    res.send(model)
});

module.exports = CaiNiLikeShopComment;
