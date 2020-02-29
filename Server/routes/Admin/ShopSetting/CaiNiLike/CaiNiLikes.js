/**
 *  管理员获取猜你喜欢商品
 * @type {createApplication}
 */

const express = require('express');

const cainilike = require('../../../../models/Home/cainilike');

const AdminCaiNiLike = express.Router();

AdminCaiNiLike.get('/admingetcainilike',async (req,res) => {
    const model = await cainilike.find(req.body);
    res.send(model)
});

module.exports = AdminCaiNiLike;
