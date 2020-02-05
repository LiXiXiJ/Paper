/**
 * ShopDescription.js
 *   获取图文介绍路由处理文件，数据库文件用 shoplist.js 文件
 * @type {createApplication}
 */

const express = require('express');

const shoplist = require('../../models/lgge/shoplist');

const ShopDescription = express.Router();

ShopDescription.get('/getshopdesc/:id',async (req,res) => {
    const model = await shoplist.findOne( { 'id' : req.params.id } );
    // console.log(req.params.id)
    res.send(model)
});

module.exports = ShopDescription;
