/**
 * childcomment.js
 *  评论子组件数据表结构文件
 * @type {Mongoose}
 */
const mongoose = require('mongoose');

const childCommentSchema = new mongoose.Schema({
    add_time:{
        type:Date,
        required:true,
        default:Date.now
    },
    add_comment:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('ChildComment',childCommentSchema);
