/**
 *  管理员用户数据库，存放管理员
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type: String
    },
    phone:{
        type:String
    }
});

module.exports = mongoose.model('Adminuser',adminUserSchema);
