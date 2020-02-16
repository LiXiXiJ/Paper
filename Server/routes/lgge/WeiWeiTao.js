/**
 * WeiWeiTao.js
 *   微微淘路由文件
 * @type {createApplication}
 */

const express = require('express');

const weiweitao = require('../../models/lgge/weiweitao');

const WeiWeiTao = express.Router();

WeiWeiTao.get('/getweiweitao',async (req,res) => {
    const model = await weiweitao.find(req.body);
    res.send(model)
});

// 更新点赞
WeiWeiTao.post('/updateweiweitaozan',async (req,res) => {

    // console.log(req.body) // 更新后传过来的数据
    // console.log(await weiweitao.findOne({"id":req.body.id}))  // 更新前数据库中的数据

    const model = await weiweitao.updateOne({"id":req.body.id},{$set:{"zan":req.body.zan}});
    const model2 = await weiweitao.updateOne({"id":req.body.id},{$set:{"flag":req.body.flag}});
    const model3 = await weiweitao.updateOne({"id":req.body.id},{$set:{"readNum":req.body.readNum}});
    res.send()
});

module.exports = WeiWeiTao;
