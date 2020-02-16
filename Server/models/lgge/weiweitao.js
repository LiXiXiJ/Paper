/**
 * weiweitao.js
 *   home 页面 微微淘 数据结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const weiweitaoSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    header:{
        type:String
    },
    name:{
        type: String
    },
    time:{
        type:String
    },
    content:{
        type:String
    },
    readNum:{
        type:Number
    },
    zan:{
        type:Number,
        default:0
    },
    img1:{
        type:String
    },
    img2:{
        type:String
    },
    img3:{
        type:String
    },
    img4:{
        type:String
    },
    flag:{
        type:Boolean
    }
});

module.exports = mongoose.model('Weiweitao',weiweitaoSchema);
