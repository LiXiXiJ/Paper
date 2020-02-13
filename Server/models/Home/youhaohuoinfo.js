/**
 * YouHaoHuo/id 页面数据文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const youhaohuoinfoSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    flag:{
        type: Number
    },
    img_url:{
        type:String
    },
    title:{
        type:String
    },
    subtitle:{
        type:String
    },
    price:{
        type:String
    },
    num:{
        type:Number
    }
});

module.exports = mongoose.model('Youhaohuoinfo',youhaohuoinfoSchema);
