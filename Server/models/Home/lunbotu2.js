/**
 *  lunbotu2.js
 * Home.vue 第二个轮播图数据文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const lunbotutwoSshema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    img_url:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Lunbotutwo',lunbotutwoSshema);

