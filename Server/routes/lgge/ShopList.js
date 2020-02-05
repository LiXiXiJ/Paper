/**
 * ShopList.js
 *   商品列表路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shoplist = require('../../models/lgge/shoplist');

const ShopList = express.Router();

// 第1页     跳过0条      （1-1）*5
// 第2页     跳过5条      （2-1）*5
// 第3页     跳过10条     （3-1）*5
// 第4页     跳过15条     （4-1）*5
// 第5页     跳过20条     （5-1）*5
// 第6页     跳过25条     （6-1）*5
// 第7页     跳过30条     （7-1）*5
// 第8页     跳过35条     （8-1）*5

ShopList.get('/getshoplist/:page_index',async (req,res) => {
    const model = await shoplist.find().skip((req.params.page_index-1)*5).limit(5);
    res.send(model)
});

module.exports = ShopList;
