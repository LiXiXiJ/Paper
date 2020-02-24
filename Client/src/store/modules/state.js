/**
 * 状态对象
 */
// 每次刚进入网站，肯定会调用 main.js 在刚调用的时候，先从本地存储中把购物车的数据读出来，放到store中
const shopCarItem = JSON.parse(localStorage.getItem('shopCar') || '[]');
const userItem = JSON.parse(localStorage.getItem('user')|| '{}');
const addressItem = JSON.parse(localStorage.getItem('address' || '{}'));

export default {
  //  购物车
  shopCar: shopCarItem,
  //  登录用户
  user:userItem,
  //  收货地址
  address:addressItem
}
