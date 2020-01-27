/**
 * photoinfo.js
 *   图片详情页数据表结构文件
 * @type {Mongoose}
 */
const mongoose = require('mongoose');

const photoInfoSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type: String,
        required: true
    },
    click:{
        type:Number,
        required:true
    },
    add_time: {
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('PhotoInfo',photoInfoSchema);
