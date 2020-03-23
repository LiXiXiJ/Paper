
export default {
  // 保存用户
  saveAdminUser(state,adminUser) {
    state.adminUser = adminUser;
    localStorage.setItem('admin',JSON.stringify(adminUser))
  },
  // 退出登录
  backLogin(state) {
    state.adminUser = {};
    localStorage.setItem('admin','{}')
  },
//  赞存待发货订单
  saveWaitFaHuoOrder(state,row) {
    state.waitFaHuoOrder = row;
  }
}
