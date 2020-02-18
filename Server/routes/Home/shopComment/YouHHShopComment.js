/**
 * YouHHShopComment.js
 *   有好货六件商品路由文件
 * @type {createApplication}
 */

const express = require('express');

const youHHShopComment = require('../../../models/Home/shopComment/youHaoHuoShopComment');

const YouHHShopComment = express.Router();

// 添加评论到数据库
YouHHShopComment.post('/postyouhaohuoshopcomment',async (req,res) => {
    const model = await youHHShopComment.create(req.body);
    res.send()
});

// 获取评论数据
YouHHShopComment.get('/getyouhaohuoshopcomment/:id',async (req,res) => {
    const model = await youHHShopComment.find({"id":req.params.id});
    res.send(model)
});

module.exports = YouHHShopComment;
