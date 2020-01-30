/**
 * ShopList.js
 *   商品列表路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shoplist = require('../../models/lgge/shoplist');

const ShopList = express.Router();

ShopList.get('/getshoplist/1',async (req,res) => {
    const model = await shoplist.find(req.body).skip(0).limit(8);
    res.send(model)
});
ShopList.get('/getshoplist/2',async (req,res) => {
    const model = await shoplist.find(req.body).skip(8).limit(8);
    res.send(model)
});
ShopList.get('/getshoplist/3',async (req,res) => {
    const model = await shoplist.find(req.body).skip(16).limit(8);
    res.send(model)
});
ShopList.get('/getshoplist/4',async (req,res) => {
    const model = await shoplist.find(req.body).skip(24).limit(8);
    res.send(model)
});
ShopList.get('/getshoplist/5',async (req,res) => {
    const model = await shoplist.find(req.body).skip(32).limit(8);
    res.send(model)
});

module.exports = ShopList;
