/**
 * Lunbotu.js
 *   处理轮播图路由文件
 * @type {createApplication}
 */

const express = require('express');

const lunbotu= require('../../models/Home/lunbotu');

const Lunbotu = express.Router();

Lunbotu.get('/getlunbotu',async(req,res) =>{
  const model = await lunbotu.find(req.body);
  res.send(model)
});

module.exports = Lunbotu;
