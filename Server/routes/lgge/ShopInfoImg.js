/**
 * ShopInfoImg.js
 *   商品详情页面轮播图路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shopinfoimg = require('../../models/lgge/shopinfoimg');

const ShopInfoImg = express.Router();

ShopInfoImg.get('/getshopinfoimg/1',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(0).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/2',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(3).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/3',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(6).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/4',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(9).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/5',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(12).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/6',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(15).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/7',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(18).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/8',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(21).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/9',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(24).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/10',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(27).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/11',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(30).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/12',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(33).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/13',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(36).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/14',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(39).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/15',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(42).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/16',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(45).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/17',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(48).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/18',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(51).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/19',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(54).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/20',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(57).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/21',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(60).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/22',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(63).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/23',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(66).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/24',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(69).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/25',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(72).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/26',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(75).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/27',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(78).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/28',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(81).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/29',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(84).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/30',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(87).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/31',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(90).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/32',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(93).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/33',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(96).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/34',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(99).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/35',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(102).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/36',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(105).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/37',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(108).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/38',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(111).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/39',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(114).limit(3);
    res.send(model)
});
ShopInfoImg.get('/getshopinfoimg/40',async (req,res) => {
    const model = await shopinfoimg.find(req.body).skip(117).limit(3);
    res.send(model)
});
module.exports = ShopInfoImg;
