/**
 * app.js 后台入口模块
 *  专门创建服务，做一些服务相关配置
 *  监听端口，启动服务
 * @type {createApplication}
 */
const express = require('express');
const bodyParser = require('body-parser');

//引入路由
const Lunbotu = require('./routes/lgge/Lunbotu');
const NewsList = require('./routes/lgge/NewsList');
const ChildComment = require('./routes/lgge/ChlidComment');
const PhotoListCate = require('./routes/lgge/PhotoListCate');
const PhotoList = require('./routes/lgge/PhotoList');
const PhotoInfo = require('./routes/lgge/PhotoInfo');
const PhotoImg = require('./routes/lgge/PhotoImg');
const ShopList = require('./routes/lgge/ShopList');
const ShopInfo = require('./routes/lgge/ShopInfo');
const ShopInfoImg = require('./routes/lgge/ShopInfoImg');
const ShopDescription = require('./routes/lgge/ShopDescription');
const ShopCar = require('./routes/lgge/ShopCar');
const SearchList = require('./routes/lgge/SearchList');

const app = express();

//配置表单 post 请求
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.json());

// 引入数据库连接文件
require('./util/db')(app);

// 路由挂载到 APP 服务中
app.use(Lunbotu);
app.use(NewsList);
app.use(ChildComment);
app.use(PhotoListCate);
app.use(PhotoList);
app.use(PhotoInfo);
app.use(PhotoImg);
app.use(ShopList);
app.use(ShopInfo);
app.use(ShopInfoImg);
app.use(ShopDescription);
app.use(ShopCar);
app.use(SearchList);

app.listen(3000,() => {
    console.log('server is running')
});
