/**
 * shoucangjia.js
 *   收藏夹数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const shoucangjiaSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    img_url:{
        type: String
    },
    title:{
        type:String
    },
    price:{
        type:Number,
        default:338
    }
});

module.exports = mongoose.model('Shoucangjia',shoucangjiaSchema);
