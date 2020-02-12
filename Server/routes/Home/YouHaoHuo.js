/**
 * YouHaoHuo.js
 *   home.vue 组件，有好货模块路由文件
 * @type {createApplication}
 */

const express = require('express');

const youhaohuo = require('../../models/Home/youhaohuo');

const YouHaoHuo = express.Router();

YouHaoHuo.get('/getyouhaohuo',async (req,res) => {
    const model = await youhaohuo.find(req.body);
    res.send(model)
});

module.exports = YouHaoHuo;
