/**
 *  待发货订单 数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const waitFaHuoOrderSchema = new mongoose.Schema({
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
    },
    allPrice:{
        type:String
    }
});

module.exports = mongoose.model('Waitfahuoorder',waitFaHuoOrderSchema);
