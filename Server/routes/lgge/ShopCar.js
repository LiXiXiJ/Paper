/**
 * ShopCar.js
 *   添加至购物车的商品路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const shopcar = require('../../models/lgge/shopcar');

const ShopCar = express.Router();

ShopCar.get('/getselsctshop/:id',async (req,res) => {
    const model = await shopcar.find({ 'id' : req.params.id });
    res.send(model)
});

module.exports = ShopCar;
