/**
 *  待付款订单 路由文件
 * @type {createApplication}
 */

const express = require('express');

const paymentOrder = require('../../models/OrderSetting/paymentOrder');

const PaymentOrder = express.Router();

// 未付款订单保存到数据库
PaymentOrder.post('/postpaymentorder',async (req,res) => {
    const paymentObj = {
        name:req.body.address.name,
        tel:req.body.address.num,
        InfoAddress:req.body.address.InfoAddress,
        IDNUM:JSON.stringify(req.body.shop)
    };
    const model = await paymentOrder.create(paymentObj);
    res.send()
});

// 获取订单
PaymentOrder.get('/getpaymentorder',async (req,res) => {
    const model = await paymentOrder.find(req.body);
    res.send(model)
});

// 删除未付款订单
PaymentOrder.delete('/removepaymentorder',async (req,res) => {
   const model = await paymentOrder.deleteMany();
   res.send()
});

module.exports = PaymentOrder;
