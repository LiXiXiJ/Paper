/**
 *   管理员获取爱逛街商品数据
 * @type {createApplication}
 */

const express = require('express');

const aiguangjieinfo = require('../../../../models/Home/aiguangjieinfo');

const AdminAiGuangJie = express.Router();

AdminAiGuangJie.get('/admingetaiguangjie',async (req,res) => {
    const model = await aiguangjieinfo.find(req.body);
    res.send(model)
});

module.exports = AdminAiGuangJie;
