/**
 * ShouCangJia.js
 *   收藏夹路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shoucangjia = require('../../models/lgge/shoucangjia');

const ShouCangJia = express.Router();

// 保存收藏商品
ShouCangJia.post('/postshoucangjia',async (req,res) => {
    const model2 = await shoucangjia.find({"title":req.body.title});
    // console.log(model2.length);
    if (model2.length !== 0) return res.send();  // 如果长度不为零，说明在数据库中找到了对应的商品，结束执行
    const model = await shoucangjia.create(req.body);
    res.send()
});

// 获取收藏商品
ShouCangJia.get('/getshoucangjia',async (req,res) => {
    const model = await shoucangjia.find(req.body);
    res.send(model)
});

// 删除收藏商品
ShouCangJia.post('/removeshoucangjiashop',async (req,res) => {
    // console.log(req.body)
    const model = await shoucangjia.remove({"title":req.body.title},{justOne:true});
    res.send()
});

module.exports = ShouCangJia;
