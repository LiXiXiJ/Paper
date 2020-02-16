/**
 * ShaiYiShai.js
 *   晒一晒 模块路由文件
 * @type {createApplication}
 */

const express = require('express');

const shaiyishai = require('../../models/lgge/shaiyishai');

const ShaiYiShai = express.Router();

ShaiYiShai.get('/getshaiyishai',async (req,res) => {
    const model = await shaiyishai.find(req.body);
    res.send(model)
});

ShaiYiShai.post('/updateshaiyishaizan',async (req,res) => {
    // console.log(req.body)
    const model = await shaiyishai.updateOne({"id":req.body.id},{$set:{"zanNum":req.body.zanNum}});
    const model2 = await shaiyishai.updateOne({"id":req.body.id},{$set:{"flag":req.body.flag}});
    res.send()
});

module.exports = ShaiYiShai;
