/**
 * cainilike.js
 *   home.vue 组件，猜你喜欢模块数据文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const cainilikeSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    img_url:{
        type: String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    like_price:{
        type:String,
        required:true
    },
    like_sales:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Cainilike',cainilikeSchema);
