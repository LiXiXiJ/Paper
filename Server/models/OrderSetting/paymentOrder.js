/**
 *  待付款订单 数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const paymentOrderSchema = new mongoose.Schema({
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
    InfoAddress:{
        type:String
    },
    IDNUM:{
        type:Object
    }
});

module.exports = mongoose.model('Paymentorder',paymentOrderSchema);
