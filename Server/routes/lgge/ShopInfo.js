/**
 * ShopInfo.js
 *   商品详情页面路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shopinfo = require('../../models/lgge/shopinfo');

const ShopInfo = express.Router();

ShopInfo.get('/getshopinfo/1',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(0).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/2',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(1).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/3',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(2).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/4',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(3).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/5',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(4).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/6',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(5).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/7',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(6).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/8',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(7).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/9',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(8).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/10',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(9).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/11',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(10).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/12',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(11).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/13',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(12).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/14',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(13).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/15',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(14).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/16',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(15).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/17',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(16).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/18',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(17).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/19',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(18).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/20',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(19).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/21',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(20).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/22',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(21).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/23',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(22).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/24',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(23).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/25',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(24).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/26',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(25).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/27',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(26).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/28',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(27).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/29',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(28).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/30',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(29).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/31',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(30).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/32',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(31).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/33',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(32).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/34',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(33).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/35',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(34).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/36',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(35).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/37',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(36).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/38',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(37).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/39',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(38).limit(1);
    res.send(model)
});
ShopInfo.get('/getshopinfo/40',async (req,res) => {
    const model = await shopinfo.find(req.body).skip(39).limit(1);
    res.send(model)
});

module.exports = ShopInfo;
