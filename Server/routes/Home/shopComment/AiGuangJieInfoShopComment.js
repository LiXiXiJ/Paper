/**
 * Aiguangjieinfoshopcomment.js
 *   爱逛街商品路由文件
 * @type {createApplication}
 */

const express = require('express');

const aiGuangJieInfoShopComment = require('../../../models/Home/shopComment/aiGuangJieInfoShopComment');

const AiGuangJieInfoShopComment = express.Router();

// 添加评论到数据库
AiGuangJieInfoShopComment.post('/postaiGuangJieInfoShopComment',async (req,res) => {
    const model = await aiGuangJieInfoShopComment.create(req.body);
    res.send()
});

// 获取评论数据
AiGuangJieInfoShopComment.get('/getaiGuangJieInfoShopComment/:id',async (req,res) => {
    const model = await aiGuangJieInfoShopComment.find({"id":req.params.id});
    res.send(model)
});

module.exports = AiGuangJieInfoShopComment;
