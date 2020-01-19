/**
 *   talk.js
 * 讨论 数据表文件
 */

const db = require('../util/db');

const mongoose = require('mongoose');

// 定义一页八条数据
const PAGE_AIZE = 8;

const talksSchema = mongoose.Schema({
    id:{
        type:Number
    },
    add_time:{
        type: Date,
        default:new Date()
    },
    clicked:{
        type:Number,
        default: 0
    },
    img_url:String,
    title:String,
    summary:String,
    content:String
});

module.exports = db.model('Talk',talksSchema);
