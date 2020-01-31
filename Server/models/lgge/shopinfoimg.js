/**
 * shopinfoimg.js
 *   商品详情页面轮播图数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const shopinfoimgSchema = new mongoose.Schema({
   id:{
       type:Number,
       required:true
   } ,
    img_url:{
       type: String,
        required:true
    }
});

module.exports = mongoose.model('Shopinfoimg',shopinfoimgSchema);
