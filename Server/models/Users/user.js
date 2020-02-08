/**
 * user.js
 *   用户数据表结构文件，存放用户信息
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    tel:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    passwordPay:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User',userSchema);
