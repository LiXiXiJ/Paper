<template>
    <div class="shoucangjia-container">
      <div class="type">
        <a href="javascript:;" :class="[baoBFlag ? 'YES' : 'NO']" @click="goBaby">宝贝</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="javascript:;" :class="[baoBFlag ? 'NO' : 'YES']" @click="goStore">店铺</a>
      </div>
      <div v-if="baoBFlag">
        <div class="guanli">
          <mt-button type="primary" size="small" v-if="guanLiFlag" @click="show">管理</mt-button>
          <mt-button type="primary" size="small" v-else @click="show">完成</mt-button>
        </div>
        <div class="shoucangjia-all">
          <p>全部宝贝</p>
        </div>
        <ul>
          <li v-for="(item,i) in ShouCJShopList" :key="item._id">
            <div class="shoucangjia-list">
              <div class="shouchangjia-img">
                <img :src="item.img_url">
              </div>
              <div class="shoucangjia-info">
                <p class="info-title">{{ item.title }}</p>
                <p class="shoucangjia-button">
                  <mt-button plain="plain" size="small" type="danger" v-show="shouCFlag" @click="removeShouCJShop(i)">取消收藏
                  </mt-button></p>
                <p class="info-price"><span>￥</span>{{ item.price }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div v-else>
        <div class="guanli">
          <mt-button type="primary" size="small" v-if="storeFlag" @click="storeshow">管理</mt-button>
          <mt-button type="primary" size="small" v-else @click="storeshow">完成</mt-button>
        </div>
        <div class="shoucangjia-all">
          <p>全部商店</p>
        </div>
        <ul>
          <li v-for="(item,i) in guanZhuStoreList" :key="item._id">
            <div class="shoucangjia-list">
              <div class="shouchangjia-img">
                <img style="width: 70px;height: 70px;border-radius: 50%" :src="item.header">
              </div>
              <div class="shoucangjia-info" style="height: 85px">
                <p class="info-title" style="color: #222222;font-weight: bold">{{ item.name }}</p>
                <p class="shoucangjia-button" style="margin: 0">
                  <mt-button plain="plain" size="small" type="danger" v-show="guanzhuFlag" @click="removeGuanZhu(i)" >取消关注
                  </mt-button></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "shoucangjia",
      data(){
          return{
            guanLiFlag:true, // 宝贝管理
            shouCFlag:false, // 取消收藏按钮
            ShouCJShopList:[],  // 收藏夹商品

            baoBFlag:true,  // 默认展示宝贝
            storeFlag:true,  // 商店管理
            guanzhuFlag:false, // 取消关注按钮
            guanZhuStoreList:[]  // 关注的商店
          }
      },
      created(){
        this.getShouCJShop();  // 宝贝
        this.getGuanZhuStore()  // 商店
      },
      methods:{
        goBaby(){  // 宝贝
          this.baoBFlag = true
        },
        goStore(){  // 商店
          this.baoBFlag = false
        },
        /**
         *    宝贝
         */
        show(){
          if (localStorage.getItem('token') == '') {
            return Toast('请先登录')
          }
            this.guanLiFlag = !this.guanLiFlag;
            this.shouCFlag = !this.shouCFlag
          },
        // 从数据库获取收藏夹商品
        async getShouCJShop(){
          const res = await this.$axios.get('/getshoucangjia',this.model);
          if (localStorage.getItem('token') == '') {
            return this.ShouCJShopList = []
          }
          if (res.status === 200) {
            this.ShouCJShopList = res.data
          }
        },
        // 取消收藏商品
        removeShouCJShop(i){
            this.ShouCJShopList.some((value, index, array) => {
              if (i === index) {
                // console.log(array[i])  // 找到对应的商品
                const removeShopObj = array[i];
                this.$axios.post('/removeshoucangjiashop',removeShopObj).then((res) => {
                  // 删除收藏夹商品
                });
                this.ShouCJShopList.splice(i,1) // 界面未刷新时删除商品
              }
            })
        },
        /**
         *   商店
         */
        storeshow(){
          if (localStorage.getItem('token') == '') {
            return Toast('请先登录')
          }
            this.storeFlag = !this.storeFlag;
            this.guanzhuFlag = !this.guanzhuFlag
        },
      //   从数据库获得收藏的商店
        async getGuanZhuStore(){
          const res = await this.$axios.get('/getguanzhustore',this.model);
            // console.log(res)
          if (localStorage.getItem('token') == '') {
            return this.guanZhuStoreList = []
          }
          if (res.status === 200){
            this.guanZhuStoreList = res.data
          }
        },
      //  取消关注
        removeGuanZhu(i){
          this.guanZhuStoreList.some((value, index, array) => {
            if (i === index) {
              const removeObj = array[i];
              this.$axios.post('/removeGuanZhuStore',removeObj).then((res) => {
                //将要删除的数据传给后台
              });
              // 从界面删除
              this.guanZhuStoreList.splice(i,1)
            }
          })
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .shoucangjia-container{
    margin: 10px;
    overflow: hidden;
    background: url(//img.alicdn.com/tps/i2/TB1AhAlHpXXXXX6XVXXz3jiHXXX-990-100.gif) -548px 0 no-repeat;
  }
  .guanli{
    float: right;
  }
  .shoucangjia-all{
    margin: 30px 8px 20px;
  }
  .shoucangjia-all p{
    color: #ff88cc;
    font-size: 17px;
    font-weight: bold;
  }
  .shouchangjia-img img{
    width: 130px;
    height: 130px;
    float: left;
  }
  .shoucangjia-info{
    float: right;
    width: 60%;
  }
  .info-title{
    color: black;
    font-size: 15px;
    text-indent: 2em;
  }
  .info-price span{
    font-size: 12px;
  }
  .info-price{
    color: crimson;
    font-size: 17px;
    margin-top: 60px;
  }
  .shoucangjia-button{
    float: right;
    margin-top: 40px;
  }
  .shoucangjia-list{
    overflow: hidden;
    margin-top: 5px;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  .type{
    text-align: center;
  }
  /* class 绑定设置元素样式 */
  .YES{
    color: #1eadfb;
    font-weight: bold;
    font-size: 17px;
  }
  .NO{
    color: #8f8f94;
    font-size: 15px;
  }
</style>
