/**
 * PhotoInfo.js
 *   图片详情路由处理文件
 * @type {createApplication}
 */

const express = require('express');

const photoinfo = require('../../models/lgge/photoinfo');

const PhotoInfo = express.Router();

PhotoInfo.get('/getphotoinfo/1',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(0).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/2',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(1).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/3',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(2).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/4',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(3).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/5',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(4).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/6',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(5).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/7',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(6).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/8',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(7).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/9',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(8).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/10',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(9).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/11',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(10).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/12',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(11).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/13',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(12).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/14',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(13).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/15',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(14).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/16',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(15).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/17',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(16).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/18',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(17).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/19',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(18).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/20',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(19).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/21',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(20).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/22',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(21).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/23',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(22).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/24',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(23).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/25',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(24).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/26',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(25).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/27',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(26).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/28',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(27).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/29',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(28).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/30',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(29).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/31',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(30).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/32',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(31).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/33',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(32).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/34',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(33).limit(1);
    res.send(model)
});PhotoInfo.get('/getphotoinfo/35',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(34).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/36',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(35).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/37',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(36).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/38',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(37).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/39',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(38).limit(1);
    res.send(model)
});
PhotoInfo.get('/getphotoinfo/40',async (req,res) => {
    const model = await photoinfo.find(req.body).skip(39).limit(1);
    res.send(model)
});


module.exports = PhotoInfo;
