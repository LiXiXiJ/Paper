<template>
    <div class="gopay-container">
      <transition mode="out-in">
        <div v-if="flag">
          <div class="pay-header">
            <h4>确认订单</h4>
          </div>
          <div class="mui-card" @click="goPickAddress">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <div class="gopay2-container">
                  <div class="pay-address">
                    <div class="address2">
                      <i class="icon iconfont icon-position" style="font-size: 40px;color: white"></i>
                    </div>
                    <div class="address3">
                      <p class="pay1">{{ $store.state.address.name }}<span>{{ $store.state.address.num }}</span></p>
                      <p class="pay2">{{ $store.state.address.InfoAddress }}</p>
                      <p class="pay3">收货不便时，可选择免费暂存存服务</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <p class="pay4">配送方式<span>普通配送</span></p>
                <p class="pay5"><i class="icon iconfont icon-tianmao-zengyunfeixian"></i>&nbsp;运费险<span>卖家赠送，退换货可赔</span></p>
              </div>
            </div>
          </div>
          <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <div class="but222"><a href="javascript:;" @click="submitOrder">提交订单</a></div>
                <p class="paybut">共{{ $store.getters.getShopCarAllPriceAndCount.COUNT }}件,<span>合计￥{{ $store.getters.getShopCarAllPriceAndCount.PRICE }}</span></p>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="or222" v-show="submitOrFlag">
        <div class="mui-card">
          <div class="mui-card-header">
            <p @click="addToPayment"><i class="icon iconfont icon-quxiaoxi"></i></p>
            <p class="payinfo">支付详情</p>
          </div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p class="submitor1">￥{{ $store.getters.getShopCarAllPriceAndCount.PRICE }}</p>
              <p class="submitor2"><span>银行卡支付</span>支付方式 </p>
            </div>
          </div>
          <div class="mui-card-footer">
            <input id="paypasswrod" type="password" v-model="password">
            <p class="submitor3" @click="toPay">支付</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "goPay",
      data(){
          return{
            flag:true,
            submitOrFlag:false,
            password:''
          }
      },
      methods:{
        //  选择收货人及收货地址
        goPickAddress(){
          this.$router.push('/mine/address')
        },

      //  提交订单
        submitOrder(){
          this.flag = false;
          this.submitOrFlag = true
        },

      //  取消支付  --> 待付款订单
        addToPayment(){
          // 跳转到我的订单待付款
          setTimeout(() => {
            this.$router.push('/mine/allorder/payment');
          },1500);
          // 将待付款订单保存到数据库
          const paymentObj = {
            shop:this.$store.getters.getShopCarSelectCount,
            address:this.$store.state.address
          };
          this.$axios.post('/postpaymentorder',paymentObj).then(res => {
            //
          });
          // 清空购物车
          this.$store.commit('OrderRemoveShopCar');
        },

      //  支付 --> 待发货订单
        toPay(){
          if (this.password.length === 0 || this.password.length < 6) {
            return Toast('支付密码错误')
          }
          const passwordPay = {
            password:this.password
          };
          // 根据 token 判断用户密码是否正确
          this.$axios.post('/passwordpay',passwordPay,
            {
              headers:{
                'Authorization':'Bearer '+ localStorage.getItem('token')
              }
            }
          ).then(res => {
            if (res.data === 0) {
              return Toast('支付密码错误,请重新输入')
            }
            // 支付成功，跳转到待发货
            Toast('支付成功');
            setTimeout(() => {
              this.$router.push('/mine/allorder/waitfahuo')
            },1500);
          });

          // 保存待发货订单到数据库中
          const waitFaHuoObj = {
            shop:this.$store.getters.getShopCarSelectCount,
            address:this.$store.state.address,
            allPrice:this.$store.getters.getShopCarAllPriceAndCount.PRICE
          };
          this.$axios.post('/postwaitfahuoorder',waitFaHuoObj,async (req,res) => {
            //
          });
          // 清空购物车
          this.$store.commit('OrderRemoveShopCar')
        }
      }
    }
</script>

<style scoped>
  body{
    background-color: white;
  }
.pay-header{
  background-color: #f8f8ff;
  width: 100%;
  height: 40px;
}
.pay-header h4{
  margin: 0;
  text-align: center;
  padding-top: 13px;
  font-size: 16px;
  color: rgb(255,102,0);
}
  .gopay2-container{
    margin: 20px;
  }
  .pay-address{
    display: flex;
    justify-content: space-between;
  }
  .address2{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(255,102,0);
    padding-top: 10px;
  }
  .address3{
    margin-right: 25px;
  }
  .pay1{
    color: #222222;
    font-size: 15px;
    margin: 0;
}
  .pay1 span{
    color: #B5B5B5;
    font-size: 12px;
    display: inline-block;
    padding-left: 10px;
  }
  .pay2{
    color: #222222;
    font-size: 13px;
    margin: 5px 0;
  }
  .pay3{
    color: rgb(255,102,0);
    font-size: 12px;
    margin: 0;
  }
  .pay4{
    margin: 10px;
    color: #222222;
  }
.pay4 span{
  color: #B5B5B5;
  display: inline-block;
  padding-left: 30px;
}
.pay5{
  margin: 10px 4px 10px;
  color: #222222;
}
  .pay5 span{
    color: #B5B5B5;
    display: inline-block;
    padding-left: 30px;
  }
  .paybut span{
    color: rgb(255,102,0);
  }
  .but222{
    background-color: rgb(255,102,0);
    width: 70px;
    height: 30px;
    border-radius: 15px;
    padding-top: 5px;
    padding-left: 6px;
    float: right;
  }
  .but222 a{
    color: white;
  }
  .v-enter,
  .v-leave-to{
    opacity: 0;
    transform: translateY(-330px);
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 1s linear;
  }
  .submitor1{
    margin: 5px;
    color: #222222;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  .submitor2{
    margin: 20px 5px 5px;
    font-size: 14px;
    min-height: 40px;
  }
  .submitor2 span{
    display: inline-block;
    color: #26A2FF;
    padding-left: 55%;
    font-size: 15px;
    float: right;
  }
  .submitor3{
    margin: 0;
    color: #26A2FF;
    padding-right: 14%;
  }
  #paypasswrod{
    width: 176px;
    margin: 0;
    font-size: 68px;
  }
  .payinfo{
    color: #222222;
    font-weight: bold;
    font-size: 15px;
    margin: 0;
  }
  .or222{
    margin: 110px 0;
  }
</style>
