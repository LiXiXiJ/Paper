/**
 * aiguangjieinfo.js
 *   爱逛街页面数据文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const aiguangjieinfoSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    img_url:{
        type: String
    },
    price:{
        type:Number
    },
    like_num:{
        type:Number
    },
    header:{
        type:String
    },
    name:{
        type:String
    },
    title:{
        type:String
    }
});

module.exports = mongoose.model('Aiguangjieinfo',aiguangjieinfoSchema);
