/**
 * WeiTaoGuanZhuStore.js
 *   微微淘关注店铺路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const weiweiweitaoguanzhustore = require('../../models/lgge/weiweitaoguanzhustore');

const WeiTaoGuanZhuStore = express.Router();

// 保存 微微淘 中关注的商店
WeiTaoGuanZhuStore.post('/postweitaoguanzhustore',async (req,res) => {
    // console.log(req.body)
    const Obj = await weiweiweitaoguanzhustore.find({"name":req.body.name});
    // console.log(Obj.length)
    if (Obj.length !== 0) return res.send();
    const model = await weiweiweitaoguanzhustore.create(req.body);
    res.send()
});

// 获取商店传给前台
WeiTaoGuanZhuStore.get('/getguanzhustore',async (req,res) => {
    const model = await weiweiweitaoguanzhustore.find(req.body);
    res.send(model)
});

// 删除关注的店铺
WeiTaoGuanZhuStore.post('/removeGuanZhuStore',async (req,res) => {
   // console.log(req.body)
    const model = await weiweiweitaoguanzhustore.remove({"name":req.body.name});
    res.send()
});

module.exports = WeiTaoGuanZhuStore;
