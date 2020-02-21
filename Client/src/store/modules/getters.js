/**
 * 基于state 的计算属性
 */
export default {
  // 徽标数值
  getAllSelectShopCount(state){
    var allCount = 0;
    state.shopCar.forEach(item => {
      allCount += item.count
    });
    return allCount
  },

  // shopcar 中各个商品的 numbox 值
  getShopCarSelectCount(state){
    var shopCarCount = {};
    state.shopCar.forEach(item => {
      // 商品的id作为键，数量作为值
      shopCarCount[item.id] = item.count
    });
    return shopCarCount
  },

  // 商品选中状态
  getShopCarSelected(state) {
    var Obj = {};
    state.shopCar.forEach(item => {
      Obj[item.id] = item.selected
    });
    return Obj
  },

  // 得到 总价 和 总量
  getShopCarAllPriceAndCount(state) {
    var Obj = {
      COUNT:0,  // 勾选的数量
      PRICE:0   // 勾选的总价
    };
    state.shopCar.forEach(item => {
      if (item.selected) { // 被勾选
        Obj.COUNT += item.count;
        Obj.PRICE += item.price * item.count
      }
    });
    return Obj
  }

}
