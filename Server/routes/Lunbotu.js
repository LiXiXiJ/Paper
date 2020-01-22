/**
 * Lunbotu.js
 *   处理轮播图路由文件
 * @type {createApplication}
 */

const express = require('express');

const user = require('../models/lunbotu');

const Lunbotu = express.Router();

Lunbotu.get('/getlunbotu',async(req,res) =>{
  const model = await user.find(req.body);
  res.send(model)
});

module.exports = Lunbotu;
