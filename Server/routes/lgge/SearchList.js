/**
 * SearchList.js
 *   搜索页面路由文件 ， 数据表结构用 shoplist.js
 * @type {createApplication}
 */

const express = require('express');

const shoplist = require('../../models/lgge/shoplist');

const SearchList = express.Router();

SearchList.get('/getsearchlist',async (req,res) => {
    const model = await shoplist.find(req.body);
    res.send(model)
});

module.exports = SearchList;
