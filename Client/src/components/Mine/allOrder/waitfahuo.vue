<template>
    <div class="waitfahuo-container">
      <div class="mui-card" v-if="WaitFaHuoList.length === 0">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="payment">
              <i class="icon iconfont icon-dingdan" style="font-size: 50px;color: white"></i>
            </div>
            <div class="payment2">
              <p class="payment-p">您还没有相关的订单</p>
              <p>可以去看看有哪些想买的</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card" v-else v-for="(item,i) in WaitFaHuoList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="all1">
              <p class="all-name">奔波儿灞旗舰店</p>
              <p class="succ">待发货</p>
            </div>
            <div class="all-2">
              <div class="all-img">
                <img :src="item.img_url">
              </div>
              <div class="all-title">
                <p class="all2-title">{{ item.title }}</p>
                <p class="all2-price">单价：<span>￥</span>{{ item.like_price || item.price || item.now_price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreLike></MoreLike>
    </div>
</template>

<script>
  import MoreLike from '../../PubliComponents/MoreLike'
    export default {
        name: "waitfahuo",
      components:{MoreLike},
      data(){
          return{
            WaitFaHuoList:[]
          }
      },
      created(){
          this.ClientGetWaitFaHuo()
      },
      methods:{
          async ClientGetWaitFaHuo(){
            const res = await this.$axios.get('/getwaitfahuoorder',this.model);
            res.data.forEach(item => {
              var shopId;
              const ShopIdArr = Object.keys(JSON.parse(item.IDNUM));
              for (let i = 0;i < ShopIdArr.length;i++) {
                // 得到id 分别请求，这里与购物车一致
                shopId = parseInt(ShopIdArr[i]);
                // console.log(typeof (shopId))

                if (shopId >= 1 && shopId <= 40) {
                  this.$axios.get('/getshoplistshopcar/' + shopId).then(res => {
                    if (res.status === 200) {
                      this.WaitFaHuoList = this.WaitFaHuoList.concat(res.data)
                    }
                  });
                } else if (shopId >= 41 && shopId <= 46) {
                  this.$axios.get('/getyouhaohuoshopcar/' + shopId).then(res => {
                    if (res.status === 200) {
                      this.WaitFaHuoList = this.WaitFaHuoList.concat(res.data)
                    }
                  });
                } else if (shopId >= 50 && shopId <= 139) {
                  this.$axios.get('/getyouhaohuoinfoshopcar/' + shopId).then(res => {
                    if (res.status === 200) {
                      this.WaitFaHuoList = this.WaitFaHuoList.concat(res.data)
                    }
                  })
                } else if (shopId >= 140 && shopId <= 229) {
                  this.$axios.get('/getaiguangjieinfoshopcar/' + shopId).then(res => {
                    if (res.status === 200) {
                      this.WaitFaHuoList = this.WaitFaHuoList.concat(res.data)
                    }
                  })
                } else if (shopId >= 230) {
                  this.$axios.get('/getcainilikeshopcar/' + shopId).then(res => {
                    if (res.status === 200) {
                      this.WaitFaHuoList = this.WaitFaHuoList.concat(res.data)
                    }
                  })
                }
              }
            })
          }
      }
    }
</script>

<style>
  .payment{
    width: 80px;
    height: 80px;
    background-color: rgb(255,102,0);
    border-radius: 50%;
    margin: 5px auto;
    padding: 28px 15px;
  }
  .payment-p{
    color: #222222;
    font-size: 14px;
    padding: 0 15px;
  }
  .payment2{
    padding: 5px 80px;
  }
  .all1{
    display: flex;
    justify-content: space-between;
  }
  .all-name{
    color: black;
    font-weight: bold;
    font-size: 15px;
  }
  .succ{
    color: rgb(255,102,0);
    font-size: 12px;
  }
  .all-2 {
    display: flex;
    justify-content: space-between;
  }
  .all-img{
    width: 100px;
    height: 100px;
  }
  .all-img img{
    width: 100px;
    height: 100px;
  }
  .all2-title{
    width: 190px;
    height: 60px;
    margin: 0;
    color: black;
    font-size: 14px;
  }
  .all2-price{
    float: right;
  }
  .all2-price{
    color: #222222;
  }
  .all2-price span{
    font-size: 12px;
  }
</style>
