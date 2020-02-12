/**
 * Aiguangjie.js
 *   home.vue 组件，爱逛街模块路由文件
 * @type {createApplication}
 */

const express = require('express');

const aiguangjie = require('../../models/Home/aiguangjie');

const AiGuangJie = express.Router();

AiGuangJie.get('/getaiguangjie',async (req,res) => {
    const model = await aiguangjie.find(req.body);
    res.send(model)
});

module.exports = AiGuangJie;
