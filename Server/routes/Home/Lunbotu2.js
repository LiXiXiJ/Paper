/**
 * Lunbotu2.js
 *   home.vue 组件第二个轮播图路由文件
 * @type {createApplication}
 */

const express = require('express');

const lunbotu2 = require('../../models/Home/lunbotu2');

const Lunbotu2 = express.Router();

Lunbotu2.get('/getlunbotu2',async (req,res) => {
    const model = await lunbotu2.find(req.body);
    res.send(model)
});

module.exports = Lunbotu2;
