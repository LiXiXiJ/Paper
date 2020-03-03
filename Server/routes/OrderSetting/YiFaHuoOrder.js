/**
 *  已发货订单 路由文件
 * @type {createApplication}
 */

const express = require('express');

const yiFaHuoOrder = require('../../models/OrderSetting/yiFaHuoOrder');
const waitFaHuoOrder = require('../../models/OrderSetting/waitFaHuoOrder');
const affairsallcount = require('../../models/Admin/DingDanAllCount/AffairsAllCount');

const YiFaHuoOrder = express.Router();

// 已发货订单信息保存到数据库中,且删除待发货中的数据
YiFaHuoOrder.post('/postfahuosubmit',async (req,res) => {
    // 删除待发货中的数据
    const model2 = await waitFaHuoOrder.deleteOne({"name":req.body.name});
    // 往订单统计数据库中存储
    const AffairsObj = {
        time:req.body.Date,
        allPrice:req.body.allPrice
    };
    const model3 = await affairsallcount.create(AffairsObj);
    // 已发货订单信息保存到数据库中
    const model = await yiFaHuoOrder.create(req.body);
    res.send()
});

// 获取已发货订单
YiFaHuoOrder.get('/getyifahuoorder',async (req,res) => {
    const model = await yiFaHuoOrder.find(req.body);
    res.send(model)
});

// 确认收货,根据订单编号删除对应订单
YiFaHuoOrder.post('/removeyifahuoorder',async (req,res) => {
    const model = await yiFaHuoOrder.deleteOne({"orderNum":req.body.orderNum});
    res.send()
});

module.exports = YiFaHuoOrder;
