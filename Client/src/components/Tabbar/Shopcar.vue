<template>
  <div class="shopCar-container">
    <div class="shop-list">
<!--      商品项区域 -->
      <div class="mui-card" v-for="(item,i) in shopCarList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch class="shopCar-switch"
                       v-model="$store.getters.getShopCarSelected[item.id]"
                       @change="selectedChanged(item.id,$store.getters.getShopCarSelected[item.id])">

            </mt-switch>
            <img :src="item.img_url">
            <div class="shop-info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="shop-price">￥{{ item.now_price }}</span>
                <NumBox :Count="$store.getters.getShopCarSelectCount[item.id]" :shopId="item.id"></NumBox>
<!--                从购物车中获取商品数量同步到NumBox中
                      先创建一个空对象，然后循环购物车中所有商品，把商品的id作为对象的属性名，
                        count 值作为对象的属性值 如：{ 1 : 3 , 2 : 3 } -->
                <button class="shopCar-button" @click="remove(item.id,i)">取消订单</button>
              </p>
            </div>
          </div>
        </div>
      </div>
<!--       结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner" id="jiesuan">
            <div class="left">
              <p>订单详情</p>
              <p>
                已选 <span class="red">{{$store.getters.getShopCarAllPrice.COUNT}}</span> 件，总价
                <span class="red">￥{{$store.getters.getShopCarAllPrice.PRICE}}</span>（不含运费）
              </p>
            </div>
            <mt-button type="danger" class="but">去结算</mt-button>
          </div>

        </div>
      </div>
    </div>
    <p>{{ $store.getters.getShopCarSelected }}</p>
  </div>
</template>

<script>
  import NumBox from '../../components/lgge/publicCom/shopcar-numbox'
    export default {
        name: "Shopcar",
      data(){
          return{
            shopCarList:[]
          }
      },
      components:{NumBox},
      created() {
          this.getShopCar()
      },
      methods:{
          // 获取到store中所有的商品id
          async getShopCar(){
            var idArr = [];
            var shopId;

            // 从store中拿到购物车中商品的id
            this.$store.state.shopCar.forEach(item => idArr.push(item.id));

            // 如果购物车中没有商品，直接返回
            if (idArr.length === 0) {
              return
            }

            // 循环得到id，分别请求数据
              for (let i = 0;i < idArr.length;i++){
                shopId = parseInt(idArr[i]);
                const res = await this.$axios.get('/getselsctshop/'+shopId,this.model);
                if (res.status === 200) {
                  this.shopCarList = this.shopCarList.concat(res.data)
                }
              }
            // console.log(this.shopCarList)
          },
        remove(id,index){
        //    点击删除，把商品从 store 中根据传递的id删除
        //      同时把当前组件中的 shopCarList 中，对应要删除的那个商品使用index来删除
          this.shopCarList.splice(index,1);  // 删数组shopCarList中
          this.$store.commit('removeFromShopCar',id)  // 删store中
        },
        selectedChanged(id,newVal) {
            // console.log(id+'---'+newVal)
          this.$store.commit('updateShopCarSelected',{id,selected:newVal})
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
    background-color: red;
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
