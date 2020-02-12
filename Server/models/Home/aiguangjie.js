/**
 * aiguangjie.js
 *   home.vue 组件，爱逛街模块数据文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const aiguangjieSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    header:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Aiguangjie',aiguangjieSchema);
