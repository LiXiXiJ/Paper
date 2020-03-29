/**
 * 完成 MongoDB 的连接，向外暴露一个连接成功的对象
 * @type {Mongoose}
 */

module.exports = app =>{
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost: 27017/paper',{
        useNewUrlParser: true,
        useUnifiedTopology: true ,
        autoIndex: true
    });
};


