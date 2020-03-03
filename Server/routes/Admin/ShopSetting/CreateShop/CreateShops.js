/**
 *  添加商品路由，保存到 猜你喜欢 模块中
 * @type {createApplication}
 */

const express = require('express');

const cainilike = require('../../../../models/Home/cainilike');

const CreateShops = express.Router();

// 添加保存商品
CreateShops.post('/admincreateshop',async (req,res) => {
    // console.log(req.body)
    const OBJ = {
        id:req.body.id,
        title:req.body.title,
        like_price:req.body.like_price,
        like_sales:req.body.like_sales,
        img_url:req.body.img_url
    };
    const model = await cainilike.create(OBJ);
    res.send('1')
});

module.exports = CreateShops;

