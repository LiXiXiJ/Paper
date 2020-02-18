/**
 * weiweitaoguanzhustore.js
 *   关注的商店数据表结构文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const guanzhuStoreSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    header:{
        type: String
    },
    name:{
        type:String
    }
});

module.exports = mongoose.model('Weiweitaoguanzhustore',guanzhuStoreSchema);
