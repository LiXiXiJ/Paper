/**
 * youHaoHuoShopComment.js
 *   有好货六件商品评论数据结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const youHHShopCommentSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    time:{
        type:Date,
        default:Date.now
    },
    comment:{
        type: String
    }
});

module.exports = mongoose.model('Youhaohuoshopcomment',youHHShopCommentSchema);
