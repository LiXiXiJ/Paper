/**
 * ShopCar.js
 *   添加至购物车的商品路由处理文件
 * @type {createApplication}
 */

const express = require('express');

// id:1-40
const shopcar = require('../../models/shopCar/shopcar');
// id:41-46
const youhaohuo = require('../../models/Home/youhaohuo');
// id:50-139
const youhaohuoinfo = require('../../models/Home/youhaohuoinfo');
// id:140-229
const aiguangjieinfo = require('../../models/Home/aiguangjieinfo');
// id:230-259
const cainilike = require('../../models/Home/cainilike');

const ShopCar = express.Router();

// 商品列表
ShopCar.get('/getshoplistshopcar/:id',async (req,res) => {
    const model = await shopcar.find({ 'id' : req.params.id });
    res.send(model)
});
// 有好货 6件商品
ShopCar.get('/getyouhaohuoshopcar/:id',async (req,res) => {
    const model = await youhaohuo.find({ 'id' : req.params.id });
    res.send(model)
});
// 有好货 90 件商品
ShopCar.get('/getyouhaohuoinfoshopcar/:id',async (req,res) => {
    const model = await youhaohuoinfo.find({ 'id' : req.params.id });
    res.send(model)
});
// 爱逛街 90件
ShopCar.get('/getaiguangjieinfoshopcar/:id',async (req,res) => {
    const model = await aiguangjieinfo.find({ 'id' : req.params.id });
    res.send(model)
});
// 猜你喜欢 30件
ShopCar.get('/getcainilikeshopcar/:id',async (req,res) => {
    const model = await cainilike.find({ 'id' : req.params.id });
    res.send(model)
});

module.exports = ShopCar;
