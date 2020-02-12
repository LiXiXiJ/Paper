/**
 * youhaohuo.js
 *   home.vue 组件，有好货模块数据文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const youhaohuoSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    img_url:{
        type: String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    num:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Youhaohuo',youhaohuoSchema);
