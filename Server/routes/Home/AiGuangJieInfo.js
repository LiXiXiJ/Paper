/**
 * AiGuangJieInfo.js
 *   爱逛街 页面路由文件
 * @type {createApplication}
 */

const express = require('express');

const aiguangjieinfo = require('../../models/Home/aiguangjieinfo');

const AiGuangJieInfo = express.Router();

AiGuangJieInfo.get('/getaiguangjieinfo',async (req,res) => {
    const model = await aiguangjieinfo.find(req.body);
    res.send(model)
});

module.exports = AiGuangJieInfo;
