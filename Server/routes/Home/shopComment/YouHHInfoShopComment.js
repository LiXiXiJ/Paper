/**
 * YouHHInfoShopComment.js
 *   有好货详情页商品路由文件
 * @type {createApplication}
 */

const express = require('express');

const youHHInfoShopComment = require('../../../models/Home/shopComment/youHaoHuoInfoShopComment');

const YouHHInfoShopComment = express.Router();

// 添加评论到数据库
YouHHInfoShopComment.post('/postyouhaohuoinfoshopcomment',async (req,res) => {
    const model = await youHHInfoShopComment.create(req.body);
    res.send()
});

// 获取评论数据
YouHHInfoShopComment.get('/getyouhaohuoinfoshopcomment/:id',async (req,res) => {
    const model = await youHHInfoShopComment.find({"id":req.params.id});
    res.send(model)
});

module.exports = YouHHInfoShopComment;
