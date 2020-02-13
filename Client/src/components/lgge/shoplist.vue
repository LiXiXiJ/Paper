<template>
    <div class="shops-list">
      <router-link class="shops-item" v-for="item in shopList" :key="item.id" :to="'/home/shopinfo/'+item.id" tag="div">
      <img :src="item.img_url">
      <h1 class="title">{{ item.title }}</h1>
      <div class="shops-info">
        <p class="price">
          <span class="now">￥{{ item.new_price }}</span>
          <span class="old">￥{{ item.old_price }}</span>
        </p>
        <p class="sell">
          <span id="hotsell"><i class="icon iconfont icon-lunkuodasan-"></i>热卖中</span>
          <span>库存{{ item.last_item }}件</span>
        </p>
      </div>
      </router-link>
      <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "shoplist",
      data() {
        return {
          page_index:1,
          shopList:[]
        };
      },
      created(){
          this.getShopList()
      },
      methods: {
          async getShopList(){
            const res = await this.$axios.get('/getshoplist/'+this.page_index,this.model);
            // console.log(res)
            if(res.status === 200) {
              this.shopList = this.shopList.concat(res.data)
            }
          },
        getMore(){
            // 加载更多，让页数增一，执行getShopList（）方法，请求第二页数据
            this.page_index++;
            this.getShopList();
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .shops-list{
    display: flex;
    /*换行*/
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
  }
  .shops-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ccc;
    margin: 2px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;
  }
  .shops-item img{
    width: 100%;
    height: 200px;
  }
  .shops-item .title{
    font-size: 15px;
    color: black;
  }
  .shops-info{
    background-color: #eee;

  }
  .shops-info .price{
    margin: 0;
    padding: 2px 0;
  }
  .shops-info .price .now{
    color: red;
  }
  .shops-info .price .old{
    text-decoration: line-through;
    font-size: 13px;
    margin-left: 15px;
  }
  .shops-info .sell{
    font-size: 12px;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  #hotsell{
    color: red;
  }
</style>
