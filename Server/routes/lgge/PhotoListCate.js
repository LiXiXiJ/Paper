/**
 * PhotoListCate.js
 *   图片列表分类路由文件
 * @type {createApplication}
 */

const express = require('express');

const photolistcate = require('../../models/lgge/photolistcate');

const PhotoListCate = express.Router();

PhotoListCate.get('/getphotolistcate',async (req,res) =>{
    const model = await photolistcate.find(req.body);
    res.send(model)
});

module.exports = PhotoListCate;
