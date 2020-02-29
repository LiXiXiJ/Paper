/**
 * ShopLists.js
 *   管理员获取商品列表数据
 * @type {createApplication}
 */

const express = require('express');

const shoplist = require('../../../../models/lgge/shoplist');

const AdminShopList = express.Router();

AdminShopList.get('/admingetshoplist',async (req,res) => {
    const model = await shoplist.find();
    res.send(model)
});

module.exports = AdminShopList;
