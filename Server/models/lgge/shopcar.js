/**
 * shopcar.js
 *   添加至购物车的商品数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const shopcarSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    now_price:{
        type:Number,
        required:true
    },
    img_url:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        default:1
    }
});

module.exports = mongoose.model('Shopcar',shopcarSchema);
