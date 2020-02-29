/**
 *  管理员 有好货商品
 * @type {createApplication}
 */

const express = require('express');

const youhaohuoinfo = require('../../../../models/Home/youhaohuoinfo');

const AdminYouHaoHuoInfo = express.Router();

AdminYouHaoHuoInfo.get('/admingetyouhaohuo',async (req,res) => {
    const model = await youhaohuoinfo.find(req.body);
    res.send(model)
});

module.exports = AdminYouHaoHuoInfo;
