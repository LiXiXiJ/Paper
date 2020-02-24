<template>
  <div class="shopCar-container">
    <div class="shop-list">
<!--      商品项区域 -->
      <div class="mui-card" v-for="(item,i) in shopCarList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch class="shopCar-switch"
              v-model="$store.getters.getShopCarSelected[item.id]"
              @change="selectedChange(item.id,$store.getters.getShopCarSelected[item.id])">
            </mt-switch>
            <img :src="item.img_url">
            <div class="shop-info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="shop-price">￥{{ item.now_price || item.price || item.like_price }}</span>
                <!--  从购物车中获取商品数量同步到NumBox中
                      先创建一个空对象，然后循环购物车中所有商品，把商品的id作为对象的属性名，
                        count 值作为对象的属性值 如：{ 1 : 3 , 2 : 3 } -->
                <NumBox :Count = "$store.getters.getShopCarSelectCount[item.id]" :shopId = "item.id"></NumBox>
                <button class="shopCar-button" @click="remove(item.id,i)">取消订单</button>
              </p>
            </div>
          </div>
        </div>
      </div>
<!--      <p> {{ $store.getters.getShopCarSelectCount }}</p>-->

<!--       结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner" id="jiesuan">
            <div class="left">
              <p>订单详情</p>
              <p>
                已选 <span class="red">{{ $store.getters.getShopCarAllPriceAndCount.COUNT }}</span> 件，总价
                <span class="red">￥{{ $store.getters.getShopCarAllPriceAndCount.PRICE }}</span>（不含运费）
              </p>
            </div>
            <mt-button type="danger" class="but" @click="ToGoPay">去支付</mt-button>
          </div>
        </div>
      </div>
    </div>
    <p>{{ $store.getters.getShopCarSelected }}</p>
  </div>
</template>

<script>
  import NumBox from './shopcar-numbox'
    export default {
        name: "Shopcar",
      data(){
          return{
            shopCarList:[]
          }
      },
      components:{NumBox},
      created() {
          this.getShopCarList()
      },
      methods:{
          // 获取到 store 中所有的商品
          async getShopCarList(){
            var idArr = [];
            var shopId;

            // 从store中拿到购物车中商品的id
            this.$store.state.shopCar.forEach(item => idArr.push(item.id));

            // 如果购物车中没有商品，直接返回
            if (idArr.length === 0) {
              return
            }
            // console.log(idArr)
            // 循环得到id，分别请求数据
              for (let i = 0;i < idArr.length;i++){

                shopId = parseInt(idArr[i]);
                // console.log(typeof (shopId))

                if (shopId >= 1 && shopId <= 40) {
                  const res = await this.$axios.get('/getshoplistshopcar/'+shopId,this.model);
                  // console.log(res)
                  if (res.status === 200) {
                    this.shopCarList = this.shopCarList.concat(res.data)
                  }
                } else if (shopId >= 41 && shopId <= 46) {
                  const res = await this.$axios.get('/getyouhaohuoshopcar/'+shopId,this.model);
                  // console.log(res)
                  if (res.status === 200) {
                    this.shopCarList = this.shopCarList.concat(res.data)
                  }
                }  else if (shopId >= 50 && shopId <= 139) {
                  const res = await this.$axios.get('/getyouhaohuoinfoshopcar/'+shopId,this.model);
                  // console.log(res)
                  if (res.status === 200) {
                    this.shopCarList = this.shopCarList.concat(res.data)
                  }
                } else if (shopId >= 140 && shopId <= 229) {
                  const res = await this.$axios.get('/getaiguangjieinfoshopcar/'+shopId,this.model);
                  // console.log(res)
                  if (res.status === 200) {
                    this.shopCarList = this.shopCarList.concat(res.data)
                  }
                } else if (shopId >= 230 && shopId <= 259) {
                  const res = await this.$axios.get('/getcainilikeshopcar/'+shopId,this.model);
                  // console.log(res)
                  if (res.status === 200) {
                    this.shopCarList = this.shopCarList.concat(res.data)
                  }
                }
              }
            // console.log(this.shopCarList)
          },

        // 取消订单
        remove(id,index){
        //    点击删除，把商品从 store 中根据传递的id删除
        //      同时把当前组件中的 shopCarList 中，对应要删除的那个商品使用index来删除
          this.shopCarList.splice(index,1);  // 删数组shopCarList中

          this.$store.commit('removeFromShopCar',id)  // 删store中
        },

        // 改变商品选中
        selectedChange(id,newVal) {
          console.log(id+'---'+newVal)
          this.$store.commit('updateShopCarSelected',{ id , selected : newVal })
        },

      //  去支付页面
        ToGoPay(){
            this.$router.push('/gopay')
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .shop-list img{
    width: 55px;
    height: 55px;
  }
  .shop-info h1{
    font-size: 13px;
  }
  .shop-price{
    color: red;
    font-weight: bold;
  }
  .shop-list .mui-card-content-inner{
    display: flex;
    justify-content: space-between;
  }
  .shop-info p{
    margin:5px 0 0;
    display: flex;
    justify-content: space-between;
  }
  .shopCar-switch{
    width: 45px;
    height: 30px;
    margin-top: 15px;
    margin-right: 10px;
  }
  .shop-info{
    margin-left: 5px;
  }
  .shopCar-button{
    padding: 2px 2px;
    background-color: rgb(239,79,79);
    color: white;
  }
  #jiesuan .but{
    margin-top: 10px;
  }
  .left .red{
    color: red;
    font-size: 15px;
  }
</style>
