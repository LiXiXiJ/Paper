/**
 *  待发货订单 路由文件
 * @type {createApplication}
 */

const express = require('express');

const waitFaHuoOrder = require('../../models/OrderSetting/waitFaHuoOrder');

const WaitFaHuoOrder = express.Router();

// 保存待发货订单
WaitFaHuoOrder.post('/postwaitfahuoorder',async (req,res) => {
    console.log(req.body)
    const waitFaHuoObj = {
        name:req.body.address.name,
        tel:req.body.address.num,
        InfoAddress:req.body.address.InfoAddress,
        IDNUM:JSON.stringify(req.body.shop),
        allPrice:req.body.allPrice
    };
    const model = await waitFaHuoOrder.create(waitFaHuoObj);
    res.send()
});

// 获取订单数据
WaitFaHuoOrder.get('/getwaitfahuoorder',async (req,res) => {
   const model = await waitFaHuoOrder.find(req.body);
   res.send(model)
});

module.exports = WaitFaHuoOrder;
