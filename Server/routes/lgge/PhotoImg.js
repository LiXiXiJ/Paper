/**
 * PhotoImg.js
 *   图片详情页面获取图片路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const photoimg = require('../../models/lgge/photoimg');

const PhotoImg = express.Router();

PhotoImg.get('/getphotoimg/:id',async (req,res) => {
    const model = await photoimg.findOne({ 'id' : req.params.id });
    res.send(model)
});

module.exports = PhotoImg;
