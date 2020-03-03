/**
 *  上传头像路由文件，数据库 user.js
 * @type {createApplication}
 */

// 获取上传文件，但 express 本身没有能力获取到上传文件的数据，因此要一个中间件专门用来获取上传文件 npm i multer
const express = require('express');

const multer= require('multer');
// 上传中间件，dest：目标地址  __dirname：当前文件所在文件夹，绝对地址,将来上传的图片二进制文件保存在此处
const upload = multer({dest:__dirname + '/../../Public/uploadAvatars'});

// const user = require('../../models/Users/user');

const UploadAvatar = express.Router();

//file 就是前段上传图片的 Form Data
//  express 本身没有req.file，加了中间件，把数据赋值到req上，才有了req.file
UploadAvatar.post('/upload',upload.single('file'),async (req,res) => {
    const file = req.file;
    file.url = `http://localhost:3000/Public/uploadAvatars/${file.filename}`;
    res.send(file)
});

module.exports = UploadAvatar;
