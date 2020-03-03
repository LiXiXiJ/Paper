/**
 *  已发货订单 数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const yiFaHuoOrderSchema = new mongoose.Schema({
    Date:{
        type:Date,
        default:Date.now,
        required:true
    },
    name:{
        type: String
    },
    tel:{
        type:String
    },
    orderNum:{
        type:String
    },
    faHuoAddress:{
        type:String
    },
    shouHuoAddress:{
        type:String
    },
    allPrice:{
        type:String
    }
});

module.exports = mongoose.model('Yifahuoorder',yiFaHuoOrderSchema);
