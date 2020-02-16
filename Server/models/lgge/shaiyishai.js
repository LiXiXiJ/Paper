/**
 * shaiyishai.js
 *   晒一晒 模块数据表文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const shaiyishaiSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    img:{
        type: String
    },
    title:{
        type:String
    },
    header:{
        type:String
    },
    name:{
        type:String
    },
    zanNum:{
        type:Number
    },
    flag:{
        type:Boolean
    }

});

module.exports = mongoose.model('Shaiyishai',shaiyishaiSchema);
