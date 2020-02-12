/**
 * CaiNiLike.js
 *   home.vue 组件猜你喜欢模块路由文件
 * @type {createApplication}
 */

const express = require('express');

const cainilike = require('../../models/Home/cainilike');

const CaiNiLike = express.Router();

CaiNiLike.get('/getcainilike',async (req,res) => {
    const model = await cainilike.find(req.body);
    res.send(model)
});

module.exports = CaiNiLike;
