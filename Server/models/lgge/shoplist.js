/**
 * shoplist.js
 *   商品列表数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const shoplistSchema = new mongoose.Schema({
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
    zhaiyao:{
        type:String,
        default: true
    },
    img_url:{
        type:String,
        default:true
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
    }
});

module.exports = mongoose.model('Shoplist',shoplistSchema);
