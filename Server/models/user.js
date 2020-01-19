/**
 * user.js
 *  用户信息数据库
 */

const db = require('../util/db');

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nickname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    }
});

module.exports = db.model('User',userSchema);

