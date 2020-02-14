/**
 * BuyYouHaoHuo.js
 *   购买有好货商品，路由文件,数据文件用 youhaohuo.js
 * @type {createApplication}
 */

const express = require('express');

const youhaohuo = require('../../models/Home/youhaohuo');

const BuyYouHaoHuo = express.Router();

BuyYouHaoHuo.get('/getbuyyouhaohuo/:id',async (req,res) => {
    const model = await youhaohuo.findOne({"id":req.params.id});
    res.send(model)
});

module.exports = BuyYouHaoHuo;
