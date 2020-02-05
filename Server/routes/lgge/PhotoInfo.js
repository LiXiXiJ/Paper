/**
 * PhotoInfo.js
 *   图片详情路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const photoinfo = require('../../models/lgge/photoinfo');

const PhotoInfo = express.Router();

PhotoInfo.get('/getphotoinfo/:id',async (req,res) => {
    const model = await photoinfo.findOne({ 'id' : req.params.id });
    res.send(model)
});

module.exports = PhotoInfo;
