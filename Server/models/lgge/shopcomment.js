/**
 * shopcomment.js
 *   商品评论数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const shopcommentSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    time:{
        type:Date,
        default:Date.now
    },
    comment:{
        type: String
    }
});

module.exports = mongoose.model('Shopcomment',shopcommentSchema);
