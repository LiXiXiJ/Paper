<template>
<!--  id:140-229 -->
    <div class="aiguangjie-container">
      <div class="guang-header">
        <h1>
          <span>爱逛街</span>
        </h1>
        <hr class="gunag-hr">
      </div>
      <div class="guang-list">
        <ul class="guang-item">
          <router-link class="gunag-li" v-for="item in aiGuangJieInfoList" :key="item.id" :to="'/home/buyaiguangjieinfoshop/'+item.id" tag="li">
            <img class="guang-img" :src="item.img_url">
            <div class="guang-price">
              <div class="gunag-zan">
                <span>
                  <i class="icon iconfont icon-aixin"></i>
                  <span>{{ item.like_num }}</span>
                </span>
              </div>
              <p class="price"><span>￥</span>{{ item.price }}</p>
            </div>
            <div class="guang-middle">
              <img class="gunag-header" :src="item.header">
              <div class="header-info">
                <p class="nick">{{ item.name }}</p>
                <p class="text">发布了</p>
              </div>
            </div>
            <p class="guang-title">{{ item.title }}</p>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AiGuangJie",
      data(){
          return{
            aiGuangJieInfoList:[]
          }
      },
      created(){
        this.getAiGuangJieInfo()
      },
      methods:{
          async getAiGuangJieInfo(){
            const res = await this.$axios.get('/getaiguangjieinfo',this.model);
            // console.log(res)
            if (res.status === 200) {
              this.aiGuangJieInfoList = res.data
            }
          }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .guang-header span{
    display: inline-block;
    margin:12px;
    color: white;
    font-family: 华文隶书;
  }
  .guang-header h1{
    background: #f8c;
    width: 135px;
    height: 60px;
    margin: 0;
  }
  .gunag-hr{
    margin: 0;
  }
  .guang-header{
    background: url(//img.alicdn.com/tps/i2/TB1AhAlHpXXXXX6XVXXz3jiHXXX-990-100.gif) -534px 0 no-repeat;
  }
  .guang-item{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: url(https://img.alicdn.com/tps/i1/TB1vuZlHpXXXXaqXVXXACB_IFXX-1670-818.gif) no-repeat;
  }
  .gunag-li{
    width: 32%;
    margin-bottom: 15px;
    border-bottom: #e8e8e8 1px double;
  }
  .guang-img{
    width: 100%;
    height: 150px;
  }
  .guang-middle{
    margin: 5px 45px 5px 5px;
  }
  .gunag-header{
    width: 28px;
    height: 28px;
    display: inline-block;
    border-radius: 14px;
  }
  .gunag-zan{
    float: right;
  }
  .header-info{
    float: right;
    line-height: 14px;
  }
  .header-info p{
    margin: 0;
    font-size: 12px;
    padding-top: 2px;
  }
  .guang-title{
    font-size: 12px;
    line-height: 15px;
    margin: 0 5px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:3;
  }
  .price{
    font-size: 12px;
    color: #222222;
  }
  .gunag-zan span{
    font-size: 12px;
  }
  .gunag-zan{
    margin: 0 8px;
  }
</style>
