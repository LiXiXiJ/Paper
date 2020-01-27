/**
 * photolist.js
 *   图片列表数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const photolistSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type: String,
        required: true
    },
    img_url:{
        type:String,
        required:true
    },
    zhaiyao:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Photolist',photolistSchema);
