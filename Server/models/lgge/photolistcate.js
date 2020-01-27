/**
 * photolistcate.js
 *   图片列表种类数据结构表文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const photolistcateSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    cate:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Photolistcate',photolistcateSchema);
