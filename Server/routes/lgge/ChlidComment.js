/**
 * ChildComment.js
 *   处理保存评论路由文件
 * @type {createApplication}
 */

const express = require('express');

const childcomment = require('../../models/lgge/childcomment');

const ChildComment = express.Router();

ChildComment.get('/getchildcom/:page_index',async (req,res) => {
    const model = await childcomment.find(req.body).skip((req.params.page_index-1)*5).limit(5).sort({'add_time':1});
    res.send(model)
});

ChildComment.post(('/addcomment'), async (req,res) => {
    // console.log(req.body.add_comment)
    const r = await childcomment.create(req.body);
    res.send(r)
});

module.exports = ChildComment;

