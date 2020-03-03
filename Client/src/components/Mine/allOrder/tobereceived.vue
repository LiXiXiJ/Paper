<template>
    <div class="tobereceived-container">
      <div class="mui-card" v-if="receivedList.length === 0">
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
      <div class="block" style="margin: 30px 0 10px 20px" v-for="(item,i) in receivedList">
        <el-timeline :reverse="true">
          <el-timeline-item
            :key="item._id"
            :timestamp="item.Date | dataFilter">
            卖家已从{{item.faHuoAddress}}发货
          </el-timeline-item>
        </el-timeline>
        <div style="margin: 20px 66px">
          <el-button type="primary" size="small" @click="receive(i)">确认收货</el-button>
        </div>
      </div>

      <MoreLike></MoreLike>
    </div>
</template>

<script>
  import MoreLike from '../../PubliComponents/MoreLike'
    export default {
        name: "tobereceived",
      components:{MoreLike},
      data(){
          return {
             receivedList:[]
            }
      },
      created(){
          this.ClientGetYiFaHuo()
      },
      methods: {
          // 获取待收货订单
          async ClientGetYiFaHuo(){
            const res = await this.$axios.get('/getyifahuoorder',this.model);
            if (res.status === 200) {
              this.receivedList = res.data
            }
          },
        // 确认收货删除订单
        receive(i){
            this.receivedList.some((item,index) => {
              if (i === index) {
                this.$axios.post('/removeyifahuoorder',item).then(res => {
                  //
                });
                // 界面删除
                this.receivedList.splice(i,1)
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
