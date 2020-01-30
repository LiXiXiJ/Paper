/**
 * shopinfo,js
 *   商品详情页面数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const shopinfoSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type: String,
        required: true
    },
    add_time:{
        type:Date,
        default:Date.now
    },
    old_price:{
        type:Number,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    last_item:{
        type:Number
    },
    shop_number:{
        type:String
    }
});

module.exports = mongoose.model('Shopinfo',shopinfoSchema);
