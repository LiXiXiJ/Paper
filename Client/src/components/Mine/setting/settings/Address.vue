<template>
  <div class="myaddress-container">
    <div class="address-title">
      <p class="addaddress"><a href="javascript:;" @click="goAddAddress">添加新地址</a></p>
      <h4>我的收货地址</h4>
    </div>
    <div class="mui-card" v-for="(item,i) in addressList" :key="item._id" @click="addToStore(i)">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="address-item">
            <div class="address-info">
              <p class="address-name">{{ item.name }}&nbsp;&nbsp;&nbsp;<span>{{ item.num }}</span></p>
              <p class="address-home">{{ item.InfoAddress }}</p>
              <p id="address-update"><a href="javascript:;" @click="deleteAddress(i)">删除</a></p>
            </div>

            <div class="address-icon-home" v-if="item.label === '家'">
              <i class="icon iconfont icon-jia" style="font-size: 25px;color: white"></i>
            </div>
            <div class="address-icon-works" v-else-if="item.label === '公司'">
              <i class="icon iconfont icon-gongsi" style="font-size: 25px;color: white"></i>
            </div>
            <div class="address-icon-school" v-else-if="item.label === '学校'">
              <i class="icon iconfont icon-xuexiao" style="font-size: 25px;color: white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Safety",
      data(){
          return{
            addressList:[],  // 地址数组
          }
      },
      created(){
        this.getAddress()
      },
      methods:{
        //  去添加地址页面
        goAddAddress(){
          this.$router.push('/mine/addAddress')
        },

      //  数据库获取地址
        async getAddress(){
          const res = await this.$axios.get('/getaddress',this.model);
          if (res.status === 200) {
            this.addressList = res.data
          }
        },

        // 删除地址
        deleteAddress(i){
          this.addressList.some((item,index,array) => {
            if (i === index) {
              this.addressList.splice(i,1);
              const Obj = item;
              this.$axios.post('/deleteaddress',Obj).then(res => {
                //
              })
            }
          } )
        },

      //  将选中的地址添加至 store 仓库中
        addToStore(i){
          this.addressList.some((item,index,array) => {
            if (i === index) {
              const storeAddress = item;
              this.$store.commit('saveAddressToStore',storeAddress)
            }
          //  跳转到订单页面
            this.$router.push('/gopay')
          })
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .address-title{
    text-align: center;
    background-color: ghostwhite;
    width: 100%;
    height: 30px;
    padding-top: 2px;
    padding-left: 80px;
  }
  .addaddress{
    float: right;
    padding: 3px 5px;
  }
  .addaddress a{
    color: #c0c0c0;
  }
  .address-info{
    float: right;
    padding-right: 0;
    width: 280px;
    height: 80px;
  }
  .address-info p{
    margin: 0;
  }
  .address-name{
    color: #222222;
    font-size: 15px;
  }
  .address-name span{
    font-size: 13px;
    color: #B5B5B5;
  }
  .address-icon-home{
    margin:20px 5px 0 0;
    padding-top: 7px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(255,102,0);
    text-align: center;
  }
  .address-icon-works{
    margin:20px 5px 0 0;
    padding-top: 7px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(255,203,82);
    text-align: center;
  }
  .address-icon-school{
    margin:20px 5px 0 0;
    padding-top: 7px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(13,146,255);
    text-align: center;
  }
  .address-home{
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
  }
  #address-update{
    float: right;
    margin: -60px 0;
  }
  #address-update a {
    color: #cccccc;
  }
</style>
