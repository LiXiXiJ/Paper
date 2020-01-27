/**
 * PhotoList.js
 *   获取列表图片路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const photolist = require('../../models/lgge/photolist');

const PhotoList = express.Router();

PhotoList.get('/getphotolist/0',async (req,res) => {
    const model = await photolist.find(req.body);
    res.send(model)
});
PhotoList.get('/getphotolist/1',async (req,res) => {
    const model = await photolist.find(req.body).skip(0).limit(5);
    res.send(model)
});
PhotoList.get('/getphotolist/2',async (req,res) => {
    const model = await photolist.find(req.body).skip(5).limit(5);
    res.send(model)
});
PhotoList.get('/getphotolist/3',async (req,res) => {
    const model = await photolist.find(req.body).skip(10).limit(5);
    res.send(model)
});
PhotoList.get('/getphotolist/4',async (req,res) => {
    const model = await photolist.find(req.body).skip(15).limit(5);
    res.send(model)
});
PhotoList.get('/getphotolist/5',async (req,res) => {
    const model = await photolist.find(req.body).skip(20).limit(5);
    res.send(model)
});
PhotoList.get('/getphotolist/6',async (req,res) => {
    const model = await photolist.find(req.body).skip(25).limit(5);
    res.send(model)
});
PhotoList.get('/getphotolist/7',async (req,res) => {
    const model = await photolist.find(req.body).skip(30).limit(5);
    res.send(model)
});
PhotoList.get('/getphotolist/8',async (req,res) => {
    const model = await photolist.find(req.body).skip(35).limit(5);
    res.send(model)
});

module.exports = PhotoList;

