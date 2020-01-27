/**
 * childcomment.js
 *  评论子组件数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const childCommentSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    user:{
        type: String,
        required: true
    },
    ad_time:{
        type:String,
        required:true
    },
    ad_content:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('ChildComment',childCommentSchema);
