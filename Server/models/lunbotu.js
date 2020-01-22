/**
 * lunbotu.js
 *   轮播图数据库，存放轮播图
 * @type {createApplication}
 */

const mongoose = require('mongoose');

const lunbotuSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    img_url:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Lunbotu',lunbotuSchema);
