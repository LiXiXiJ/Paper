/**
 * app.js 后台入口模块
 *  专门创建服务，做一些服务相关配置
 *  监听端口，启动服务
 * @type {createApplication}
 */
const express = require('express');
const bodyParser = require('body-parser');

//引入 用户 路由
const Lunbotu = require('./routes/Home/Lunbotu');
const Lunbotu2 = require('./routes/Home/Lunbotu2');
const YouHaoHuo = require('./routes/Home/YouHaoHuo');
const BuyYouHaoHuo = require('./routes/Home/BuyYouHaoHuo');
const YouHHShopComment = require('./routes/Home/shopComment/YouHHShopComment');
const YouHHInfoShopComment = require('./routes/Home/shopComment/YouHHInfoShopComment');
const AiGuangJieInfoShopComment = require('./routes/Home/shopComment/AiGuangJieInfoShopComment');
const CaiNiLikeShopComment = require('./routes/Home/shopComment/CaiNiLikeShopComment');
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
const ShopComment = require('./routes/lgge/ShopComment');
const ShopCar = require('./routes/shopCar/ShopCar');
const SearchList = require('./routes/lgge/SearchList');
const WeiWeiTao = require('./routes/lgge/WeiWeiTao');
const ShaiYiShai = require('./routes/lgge/ShaiYiShai');
const ShouCangJia = require('./routes/lgge/ShouCangJia');
const WeiTaoGuanZhuStore = require('./routes/lgge/WeiTaoGuanZhuStore');
const Register = require('./routes/User/Register');
const Login = require('./routes/User/Login');
const PasswordPay = require('./routes/User/PasswordPay');
const AddAddress = require('./routes/User/AddAddress');
const UploadAvatar = require('./routes/PublicUpload/UploadAvatar');


// 管理员 路由
const RegLog = require('./routes/Admin/Reg&Log/Reg&Log');
const AdminShopList = require('./routes/Admin/ShopSetting/ShopList/ShopLists');
const AdminYouHaoHuoInfo = require('./routes/Admin/ShopSetting/YouHaoHuo/YouHaoHuos');
const AdminAiGuangJie = require('./routes/Admin/ShopSetting/AiGuangJie/AiGuangJies');
const AdminCaiNiLike = require('./routes/Admin/ShopSetting/CaiNiLike/CaiNiLikes');
const CreateShops = require('./routes/Admin/ShopSetting/CreateShop/CreateShops');

// 订单
const WaitFaHuoOrder = require('./routes/OrderSetting/WaitFaHuoOrder');
const YiFaHuoOrder = require('./routes/OrderSetting/YiFaHuoOrder');
const PaymentOrder = require('./routes/OrderSetting/PaymentOrder');

// 订单统计
const AffairsAllCount = require('./routes/Admin/DingDanAllCount/AffairsAllCount');


const app = express();

//配置表单 post 请求
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(express.json());

// 引入数据库连接文件
require('./util/db')(app);

// 开放静态文件
app.use('/Public/',express.static('./Public/'));


// 路由挂载到 APP 服务中
app.use(Lunbotu);
app.use(Lunbotu2);
app.use(YouHaoHuo);
app.use(BuyYouHaoHuo);
app.use(YouHHShopComment);
app.use(YouHHInfoShopComment);
app.use(AiGuangJieInfoShopComment);
app.use(CaiNiLikeShopComment);
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
app.use(ShopComment);
app.use(ShopCar);
app.use(SearchList);
app.use(WeiWeiTao);
app.use(ShaiYiShai);
app.use(ShouCangJia);
app.use(WeiTaoGuanZhuStore);
app.use(Register);
app.use(Login);
app.use(PasswordPay);
app.use(AddAddress);
app.use(UploadAvatar);

// 管理员
app.use(RegLog);
app.use(AdminShopList);
app.use(AdminYouHaoHuoInfo);
app.use(AdminAiGuangJie);
app.use(AdminCaiNiLike);
app.use(CreateShops);

// 订单
app.use(WaitFaHuoOrder);
app.use(YiFaHuoOrder);
app.use(PaymentOrder);

// 订单统计
app.use(AffairsAllCount);

app.listen(3000,() => {
    console.log('server is running on port 3000')
});
