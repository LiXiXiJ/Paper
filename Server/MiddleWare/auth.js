/**
 *  验证授权中间件
 * @type {{JsonWebTokenError, TokenExpiredError, sign, verify, decode, NotBeforeError}|*}
 */

const jwt = require('jsonwebtoken');
const user = require('../models/Users/user');
const SECRET = 'qwertyuiopasdfghjklzxcvbnm';

const auth = async (req,res,next) => {
    const raw = String(req.headers.authorization).split(' ').pop();
    // 验证解密
    const tokendata = jwt.verify(raw,SECRET);
    const id = tokendata.id;
    req.USER = await user.findById(id);
    next()
};

module.exports = auth;
