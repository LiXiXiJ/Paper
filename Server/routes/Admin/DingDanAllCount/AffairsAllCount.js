/**
 *  订单统计路由文件
 * @type {Mongoose}
 */

const express = require('express');

const affairsallcount = require('../../../models/Admin/DingDanAllCount/AffairsAllCount');

const AffairsAllCount = express.Router();

// 订单统计获取数据
AffairsAllCount.get('/getaffairsallcount',async (req,res) => {
   const model = await affairsallcount.find(req.body);
    res.send(model)
});

module.exports = AffairsAllCount;
