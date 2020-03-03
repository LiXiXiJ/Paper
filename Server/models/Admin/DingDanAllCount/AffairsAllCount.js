/**
 *  订单统计数据集合文件
 * @type {Mongoose}
 */

const mongoose = require('mongoose');

const AffairsAllCountSchema = new mongoose.Schema({
    time:{
        type:Date,
        default:Date.now,
        required:true
    },
    allPrice:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Affairsallcount',AffairsAllCountSchema);
