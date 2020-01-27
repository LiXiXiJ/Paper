/**
 * photoimg.js
 *   图片详情缩略图数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const photoImgSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    src1:{
        type: String,
        required: true
    },
    src2:{
        type: String,
        required: true
    },
    src3:{
        type: String,
        required: true
    },
    src4:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Photoimg',photoImgSchema);
