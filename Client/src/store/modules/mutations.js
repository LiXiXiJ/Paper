/**
 * 直接更新state多个方法的对象
 */
export default {
  /**
   *  商品列表中的商品
   */
  selectShopAddToShopCar(state,selectShop){

    // 分析：1.如果购物车中，之前就已经有了这个对应的商品，那么只需要更新数量
    //       2.如果没有，直接把商品push到 shopCar

    // 假设在购物车中没有找到对应的商品
    var flag = false; // 标识符

    state.shopCar.some(item => {
      if (item.id == selectShop.id) {
        item.count += parseInt(selectShop.count);
        flag = true;
        return true
      }
    });
    // 如果最终循环完毕，得到 flag 还是false，则把商品数据直接push到购物车中
    if (!flag) {
      state.shopCar.push(selectShop)
    }
    //  当更新 shopCar 之后，把数据存储到本地的localStorage中
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
  },

  /**
   *  有好货中的六件商品
   */
  // 加入购物车
  //  购物车中有，更新数量；没有，把商品加到 shopcar 中
  YHHSelectShopAddToShopCar(state,YHHSelectShop) {

    // 假设购物车中没有找到
    var flag = false;

    state.shopCar.some(item => {
      if (item.id == YHHSelectShop.id) {
        item.count += parseInt(YHHSelectShop.count);
        flag = true;
        return true
      }
    });
    // 最终没有找到，就把商品加入购物车中
    if (!flag) {
      state.shopCar.push(YHHSelectShop)
    }
    // 存储到 localStorage
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
  },

  /**
   *  有好货info 中的90件商品
   */
  // 加入购物车
  YHHInfoSelectShopAddToShopCar(state,YHHInfoShop) {
    // 假设没找到
    var flag = false;
    // 找到
    state.shopCar.some(item => {
      if (item.id == YHHInfoShop.id) {
        flag = true;
        item.count += parseInt(YHHInfoShop.count);
        return true
      }
    });
    // 没找到
    if (!flag) {
      state.shopCar.push(YHHInfoShop)
    }
    // 存储
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
  },

  /**
   * 爱逛街 info 中的90 件商品
   */
  aiGuangJieInfoSelectShopAddToShopCar(state,aiGuangJieInfoShop) {
  //  假设没找到
    var flag = false;
    // 找到
    state.shopCar.some(item => {
      if (item.id == aiGuangJieInfoShop.id) {
        flag = true;
        item.count += parseInt(aiGuangJieInfoShop.count);
        return true
      }
    });
    // 没找到
    if (!flag) {
      state.shopCar.push(aiGuangJieInfoShop)
    }
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
  },

  /**
   *  猜你喜欢 60件商品
   */
  caiNiLikeSelectShopAddToShopCar(state,caiNiLikeShop) {
    var flag = false;
    state.shopCar.some(item => {
      if (item.id == caiNiLikeShop.id) {
        flag = true;
        item.count += parseInt(caiNiLikeShop.count);
        return true
      }
    });
    if (!flag) {
      state.shopCar.push(caiNiLikeShop)
    }
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
  },



  // shopcar 页面修改 numbox
  updateShopCarCount(state,selectShop) {
    state.shopCar.some(item => {
      if (item.id == selectShop.id) {  //  item.id 类型为Number，selectShop.id 类型为string
        item.count = parseInt(selectShop.count);
        return true
      }
    });
    // 当修改完商品的数量，把最新的数量保存到本地存储中
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
  },

  //  根据id从store中的购物车中删除对应的数据
  removeFromShopCar(state,id) {
    state.shopCar.some((item,i) => {
      if (item.id == id) {
        state.shopCar.splice(i,1);
        return true
      }
    });
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
  },

  // 改变商品选中
  updateShopCarSelected(state,switchInfo) {
    state.shopCar.some(item => {
      if (item.id == switchInfo.id) {
        item.selected = switchInfo.selected
      }
    });
    localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
  }
}
