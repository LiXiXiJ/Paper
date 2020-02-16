/**
 * app.js 后台入口模块
 *  专门创建服务，做一些服务相关配置
 *  监听端口，启动服务
 * @type {createApplication}
 */
const express = require('express');
const bodyParser = require('body-parser');

//引入路由
const Lunbotu = require('./routes/Home/Lunbotu');
const Lunbotu2 = require('./routes/Home/Lunbotu2');
const YouHaoHuo = require('./routes/Home/YouHaoHuo');
const BuyYouHaoHuo = require('./routes/Home/BuyYouHaoHuo');
const YouHaoHuoInfo = require('./routes/Home/YouHaoHuoInfo');
const BuyYouHaoHuoShop = require('./routes/Home/BuyYouHaoHuoShop');
const AiGuangJie = require('./routes/Home/Aiguangjie');
const AiGuangJieInfo = require('./routes/Home/AiGuangJieInfo');
const BuyAiGuangJieShop = require('./routes/Home/BuyAiGuangJieShop');
const CaiNiLike = require('./routes/Home/CaiNiLike');
const BuyCaiNiLikeShop = require('./routes/Home/BuyCaiNiLikeShop');
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
const WeiWeiTao = require('./routes/lgge/WeiWeiTao');
const ShaiYiShai = require('./routes/lgge/ShaiYiShai');
const Register = require('./routes/User/Register');
const Login = require('./routes/User/Login');

const app = express();

//配置表单 post 请求
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.json());

// 引入数据库连接文件
require('./util/db')(app);

// 路由挂载到 APP 服务中
app.use(Lunbotu);
app.use(Lunbotu2);
app.use(YouHaoHuo);
app.use(BuyYouHaoHuo);
app.use(YouHaoHuoInfo);
app.use(BuyYouHaoHuoShop);
app.use(AiGuangJie);
app.use(AiGuangJieInfo);
app.use(BuyAiGuangJieShop);
app.use(CaiNiLike);
app.use(BuyCaiNiLikeShop);
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
app.use(WeiWeiTao);
app.use(ShaiYiShai);
app.use(Register);
app.use(Login);

app.listen(3000,() => {
    console.log('server is running on port 3000')
});
