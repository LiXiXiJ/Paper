/**
 * newslist.js
 *   新闻资讯数据表文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const newslistSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type: String,
        required: true
    },
    add_time:{
        type:String,
        required:true,
        default: Date.now
    },
    zhaiyao:{
        type:String,
        required:true
    },
    click:{
        type:String,
        required:true,
        default:0
    },
    img_url: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Newslist',newslistSchema);
