/**
 *   Talk.js
 * 讨论 路由文件
 * @type {createApplication}
 */

const express = require('express');
// const talks = require('../models/talks');

const Talk = express.Router();

Talk.get('/home/talk',function (req,res) {
    res.send('he is')
});

module.exports = Talk;
