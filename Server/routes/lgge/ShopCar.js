/**
 * ShopCar.js
 *   添加至购物车的商品路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shopcar = require('../../models/lgge/shopcar');

const ShopCar = express.Router();

ShopCar.get('/getselsctshop/1',async (req,res) => {
    const model = await shopcar.find(req.body).skip(0).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/2',async (req,res) => {
    const model = await shopcar.find(req.body).skip(1).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/3',async (req,res) => {
    const model = await shopcar.find(req.body).skip(2).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/4',async (req,res) => {
    const model = await shopcar.find(req.body).skip(3).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/5',async (req,res) => {
    const model = await shopcar.find(req.body).skip(4).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/6',async (req,res) => {
    const model = await shopcar.find(req.body).skip(5).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/7',async (req,res) => {
    const model = await shopcar.find(req.body).skip(6).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/8',async (req,res) => {
    const model = await shopcar.find(req.body).skip(7).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/9',async (req,res) => {
    const model = await shopcar.find(req.body).skip(8).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/10',async (req,res) => {
    const model = await shopcar.find(req.body).skip(9).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/11',async (req,res) => {
    const model = await shopcar.find(req.body).skip(10).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/12',async (req,res) => {
    const model = await shopcar.find(req.body).skip(11).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/13',async (req,res) => {
    const model = await shopcar.find(req.body).skip(12).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/14',async (req,res) => {
    const model = await shopcar.find(req.body).skip(13).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/15',async (req,res) => {
    const model = await shopcar.find(req.body).skip(14).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/16',async (req,res) => {
    const model = await shopcar.find(req.body).skip(15).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/17',async (req,res) => {
    const model = await shopcar.find(req.body).skip(16).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/18',async (req,res) => {
    const model = await shopcar.find(req.body).skip(17).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/19',async (req,res) => {
    const model = await shopcar.find(req.body).skip(18).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/20',async (req,res) => {
    const model = await shopcar.find(req.body).skip(19).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/21',async (req,res) => {
    const model = await shopcar.find(req.body).skip(20).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/22',async (req,res) => {
    const model = await shopcar.find(req.body).skip(21).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/23',async (req,res) => {
    const model = await shopcar.find(req.body).skip(22).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/24',async (req,res) => {
    const model = await shopcar.find(req.body).skip(23).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/25',async (req,res) => {
    const model = await shopcar.find(req.body).skip(24).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/26',async (req,res) => {
    const model = await shopcar.find(req.body).skip(25).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/27',async (req,res) => {
    const model = await shopcar.find(req.body).skip(26).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/28',async (req,res) => {
    const model = await shopcar.find(req.body).skip(27).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/29',async (req,res) => {
    const model = await shopcar.find(req.body).skip(28).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/30',async (req,res) => {
    const model = await shopcar.find(req.body).skip(29).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/31',async (req,res) => {
    const model = await shopcar.find(req.body).skip(30).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/32',async (req,res) => {
    const model = await shopcar.find(req.body).skip(31).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/33',async (req,res) => {
    const model = await shopcar.find(req.body).skip(32).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/34',async (req,res) => {
    const model = await shopcar.find(req.body).skip(33).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/35',async (req,res) => {
    const model = await shopcar.find(req.body).skip(34).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/36',async (req,res) => {
    const model = await shopcar.find(req.body).skip(35).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/37',async (req,res) => {
    const model = await shopcar.find(req.body).skip(36).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/38',async (req,res) => {
    const model = await shopcar.find(req.body).skip(37).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/39',async (req,res) => {
    const model = await shopcar.find(req.body).skip(38).limit(1);
    res.send(model)
});
ShopCar.get('/getselsctshop/40',async (req,res) => {
    const model = await shopcar.find(req.body).skip(39).limit(1);
    res.send(model)
});

module.exports = ShopCar;
