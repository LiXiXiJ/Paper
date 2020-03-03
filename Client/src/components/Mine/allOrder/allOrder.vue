<template>
    <div class="allOrder-container">
      <div class="order-header">
        <p class="order-p">
          <a href="javascript:;" :class="[PaymentFlag ? 'order-a2' : 'order-a1']" @click="goPayment">待付款</a>
          <a href="javascript:;" :class="[WaitFaHuoFlag ? 'order-a2' : 'order-a1']" @click="goWaitFaHuo">待发货</a>
          <a href="javascript:;" :class="[TobeReceivedFlag ? 'order-a2' : 'order-a1']" @click="goTobeReceived">待收货</a>
          <a href="javascript:;" :class="[AllFlag ? 'order-a2' : 'order-a1']" @click="goAll">退款/售后</a>
        </p>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "allOrder",
      data(){
          return{
            AllFlag:true,
            PaymentFlag:false,
            WaitFaHuoFlag:false,
            TobeReceivedFlag:false,
          }
      },
      created(){
        this.goPayment()
      },
      methods:{
        goAll(){
          this.$router.push('/mine/allorder/all');
          this.AllFlag = true
          this.PaymentFlag = false
          this.WaitFaHuoFlag = false
          this.TobeReceivedFlag = false
        },
        goPayment(){
          this.$router.push('/mine/allorder/payment')
          this.PaymentFlag = true
          this.AllFlag = false
          this.WaitFaHuoFlag = false
          this.TobeReceivedFlag = false
        },
        goWaitFaHuo(){
          this.$router.push('/mine/allorder/waitfahuo')
          this.WaitFaHuoFlag = true
          this.AllFlag = false
          this.PaymentFlag = false
          this.TobeReceivedFlag = false
        },
        goTobeReceived(){
          this.$router.push('/mine/allorder/tobereceived')
          this.TobeReceivedFlag = true
          this.AllFlag = false
          this.PaymentFlag = false
          this.WaitFaHuoFlag = false
        },
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .allOrder-container{
    margin: 10px;
  }
  .order-p{
    margin: 20px;
    display: flex;
    justify-content: space-between;
  }
  .order-a1{
    color: #B5B5B5;
  }
  .order-a2{
    color: rgb(255,102,0);
    font-size: 15px;
  }
</style>
