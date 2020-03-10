/**
 *  管理员获取猜你喜欢商品
 * @type {createApplication}
 */

const express = require('express');

const cainilike = require('../../../../models/Home/cainilike');

const AdminCaiNiLike = express.Router();

// 获取商品
AdminCaiNiLike.get('/admingetcainilike',async (req,res) => {
    const model = await cainilike.find(req.body);
    res.send(model)
});

// 删除商品
AdminCaiNiLike.post('/deleteShop',async (req,res) => {
    const model = await cainilike.deleteOne({"id":req.body.id});
    res.send()
});

module.exports = AdminCaiNiLike;
