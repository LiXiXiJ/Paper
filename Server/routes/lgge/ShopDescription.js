/**
 * ShopDescription.js
 *   获取图文介绍路由处理文件，数据库文件用 shoplist.js 文件
 * @type {createApplication}
 */

const express = require('express');

const shoplist = require('../../models/lgge/shoplist');

const ShopDescription = express.Router();

ShopDescription.get('/getshopdesc/1',async (req,res) => {
    const model = await shoplist.find(req.body).skip(0).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/2',async (req,res) => {
    const model = await shoplist.find(req.body).skip(1).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/3',async (req,res) => {
    const model = await shoplist.find(req.body).skip(2).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/4',async (req,res) => {
    const model = await shoplist.find(req.body).skip(3).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/5',async (req,res) => {
    const model = await shoplist.find(req.body).skip(4).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/6',async (req,res) => {
    const model = await shoplist.find(req.body).skip(5).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/7',async (req,res) => {
    const model = await shoplist.find(req.body).skip(6).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/8',async (req,res) => {
    const model = await shoplist.find(req.body).skip(7).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/9',async (req,res) => {
    const model = await shoplist.find(req.body).skip(8).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/10',async (req,res) => {
    const model = await shoplist.find(req.body).skip(9).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/11',async (req,res) => {
    const model = await shoplist.find(req.body).skip(10).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/12',async (req,res) => {
    const model = await shoplist.find(req.body).skip(11).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/13',async (req,res) => {
    const model = await shoplist.find(req.body).skip(12).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/14',async (req,res) => {
    const model = await shoplist.find(req.body).skip(13).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/15',async (req,res) => {
    const model = await shoplist.find(req.body).skip(14).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/16',async (req,res) => {
    const model = await shoplist.find(req.body).skip(15).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/17',async (req,res) => {
    const model = await shoplist.find(req.body).skip(16).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/18',async (req,res) => {
    const model = await shoplist.find(req.body).skip(17).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/19',async (req,res) => {
    const model = await shoplist.find(req.body).skip(18).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/20',async (req,res) => {
    const model = await shoplist.find(req.body).skip(19).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/21',async (req,res) => {
    const model = await shoplist.find(req.body).skip(20).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/22',async (req,res) => {
    const model = await shoplist.find(req.body).skip(21).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/23',async (req,res) => {
    const model = await shoplist.find(req.body).skip(22).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/24',async (req,res) => {
    const model = await shoplist.find(req.body).skip(23).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/25',async (req,res) => {
    const model = await shoplist.find(req.body).skip(24).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/26',async (req,res) => {
    const model = await shoplist.find(req.body).skip(25).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/27',async (req,res) => {
    const model = await shoplist.find(req.body).skip(26).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/28',async (req,res) => {
    const model = await shoplist.find(req.body).skip(27).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/29',async (req,res) => {
    const model = await shoplist.find(req.body).skip(28).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/30',async (req,res) => {
    const model = await shoplist.find(req.body).skip(29).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/31',async (req,res) => {
    const model = await shoplist.find(req.body).skip(30).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/32',async (req,res) => {
    const model = await shoplist.find(req.body).skip(31).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/33',async (req,res) => {
    const model = await shoplist.find(req.body).skip(32).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/34',async (req,res) => {
    const model = await shoplist.find(req.body).skip(33).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/35',async (req,res) => {
    const model = await shoplist.find(req.body).skip(34).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/36',async (req,res) => {
    const model = await shoplist.find(req.body).skip(35).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/37',async (req,res) => {
    const model = await shoplist.find(req.body).skip(36).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/38',async (req,res) => {
    const model = await shoplist.find(req.body).skip(37).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/39',async (req,res) => {
    const model = await shoplist.find(req.body).skip(38).limit(1);
    res.send(model)
});
ShopDescription.get('/getshopdesc/40',async (req,res) => {
    const model = await shoplist.find(req.body).skip(39).limit(1);
    res.send(model)
});
module.exports = ShopDescription;
