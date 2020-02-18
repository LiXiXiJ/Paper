/**
 * caiNiLikeShopComment.js
 *   猜你喜欢商品评论数据结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const caiNiLikeShopCommentSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Cainilikeshopcomment',caiNiLikeShopCommentSchema);
