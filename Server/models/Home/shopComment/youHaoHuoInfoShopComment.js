/**
 * youHaoHuoInfoShopComment.js
 *   有好货详情页商品评论数据结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const youHHInfoShopCommentSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Youhaohuoinfoshopcomment',youHHInfoShopCommentSchema);
