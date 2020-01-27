/**
 * PhotoImg.js
 *   图片详情页面获取图片路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const photoimg = require('../../models/lgge/photoimg');

const PhotoImg = express.Router();

PhotoImg.get('/getphotoimg/1',async (req,res) => {
    const model = await photoimg.find(req.body).skip(0).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/2',async (req,res) => {
    const model = await photoimg.find(req.body).skip(1).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/3',async (req,res) => {
    const model = await photoimg.find(req.body).skip(2).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/4',async (req,res) => {
    const model = await photoimg.find(req.body).skip(3).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/5',async (req,res) => {
    const model = await photoimg.find(req.body).skip(4).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/6',async (req,res) => {
    const model = await photoimg.find(req.body).skip(5).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/7',async (req,res) => {
    const model = await photoimg.find(req.body).skip(6).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/8',async (req,res) => {
    const model = await photoimg.find(req.body).skip(7).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/9',async (req,res) => {
    const model = await photoimg.find(req.body).skip(8).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/10',async (req,res) => {
    const model = await photoimg.find(req.body).skip(9).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/11',async (req,res) => {
    const model = await photoimg.find(req.body).skip(10).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/12',async (req,res) => {
    const model = await photoimg.find(req.body).skip(11).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/13',async (req,res) => {
    const model = await photoimg.find(req.body).skip(12).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/14',async (req,res) => {
    const model = await photoimg.find(req.body).skip(13).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/15',async (req,res) => {
    const model = await photoimg.find(req.body).skip(14).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/16',async (req,res) => {
    const model = await photoimg.find(req.body).skip(15).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/17',async (req,res) => {
    const model = await photoimg.find(req.body).skip(16).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/18',async (req,res) => {
    const model = await photoimg.find(req.body).skip(17).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/19',async (req,res) => {
    const model = await photoimg.find(req.body).skip(18).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/20',async (req,res) => {
    const model = await photoimg.find(req.body).skip(19).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/21',async (req,res) => {
    const model = await photoimg.find(req.body).skip(20).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/22',async (req,res) => {
    const model = await photoimg.find(req.body).skip(21).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/23',async (req,res) => {
    const model = await photoimg.find(req.body).skip(22).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/24',async (req,res) => {
    const model = await photoimg.find(req.body).skip(23).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/25',async (req,res) => {
    const model = await photoimg.find(req.body).skip(24).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/26',async (req,res) => {
    const model = await photoimg.find(req.body).skip(25).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/27',async (req,res) => {
    const model = await photoimg.find(req.body).skip(26).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/28',async (req,res) => {
    const model = await photoimg.find(req.body).skip(27).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/29',async (req,res) => {
    const model = await photoimg.find(req.body).skip(28).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/30',async (req,res) => {
    const model = await photoimg.find(req.body).skip(29).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/31',async (req,res) => {
    const model = await photoimg.find(req.body).skip(30).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/32',async (req,res) => {
    const model = await photoimg.find(req.body).skip(31).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/33',async (req,res) => {
    const model = await photoimg.find(req.body).skip(32).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/34',async (req,res) => {
    const model = await photoimg.find(req.body).skip(33).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/35',async (req,res) => {
    const model = await photoimg.find(req.body).skip(34).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/36',async (req,res) => {
    const model = await photoimg.find(req.body).skip(35).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/37',async (req,res) => {
    const model = await photoimg.find(req.body).skip(36).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/38',async (req,res) => {
    const model = await photoimg.find(req.body).skip(37).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/39',async (req,res) => {
    const model = await photoimg.find(req.body).skip(38).limit(1);
    res.send(model)
});
PhotoImg.get('/getphotoimg/40',async (req,res) => {
    const model = await photoimg.find(req.body).skip(39).limit(1);
    res.send(model)
});

module.exports = PhotoImg;
