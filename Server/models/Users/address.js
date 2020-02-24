/**
 * address.js
 *   收货地址 数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
   name:{
       type:String
   },
    num:{
       type: String
    },
    label:{
       type:String
    },
    InfoAddress:{
       type:String
    }
});

module.exports = mongoose.model('Addressshouhuo',AddressSchema);
