/**
 * ShopComment.is
 *   商品评论路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shopcomment = require('../../models/lgge/shopcomment');

const ShopComment = express.Router();

//发表评论
ShopComment.post('/postshopcomment',async (req,res) => {
   const model = await shopcomment.create(req.body);
    res.send()
});

//获取评论
ShopComment.get('/getshopcomment/:id',async (req,res) => {
    const model = await shopcomment.find({"id":req.params.id});
    res.send(model)
});

module.exports = ShopComment;
