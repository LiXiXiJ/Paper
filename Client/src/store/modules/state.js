/**
 * 状态对象
 */
// 每次刚进入网站，肯定会调用 main.js 在刚调用的时候，先从本地存储中把购物车的数据读出来，放到store中
const shopCarItem = JSON.parse(localStorage.getItem('shopCar') || '[]');

export default {
  shopCar: shopCarItem
}
