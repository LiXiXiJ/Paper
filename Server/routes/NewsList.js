/**
 * NewsList.js
 *   处理获取新闻资讯路由文件
 * @type {createApplication}
 */

const express = require('express');

const newslist = require('../models/newslist');

const NewsList = express.Router();

NewsList.get('/getnewslist',async (req,res) => {
    const model = await newslist.find(req.body);
    res.send(model)
});

module.exports = NewsList;

