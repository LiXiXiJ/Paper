/**
 * ChildComment.js
 *   处理保存评论路由文件
 * @type {createApplication}
 */

const express = require('express');

const childcomment = require('../../models/lgge/childcomment');

const ChildComment = express.Router();

ChildComment.get('/getchildcom/1',async (req,res) => {
    const model = await childcomment.find(req.body).skip(0).limit(5);
    res.send(model)
});

ChildComment.get('/getchildcom/2',async (req,res) => {
    const model = await childcomment.find(req.body).skip(5).limit(5)
    res.send(model)
});

// ChildComment.post('/postnewcom',async (req,res) => {
//     new childcomment(req.body).save((err) => {
//         if(err){
//             return res.status(500).send('server error')
//         }
//     })
// });

module.exports = ChildComment;

