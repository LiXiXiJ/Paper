/**
 * ChildComment.js
 *   处理保存评论路由文件
 * @type {createApplication}
 */

const express = require('express');

const childcomment = require('../../models/lgge/childcomment');

const ChildComment = express.Router();

ChildComment.get('/getchildcom',async (req,res) => {
    const model = await childcomment.find(req.body);
    res.send(model)
});

module.exports = ChildComment;

