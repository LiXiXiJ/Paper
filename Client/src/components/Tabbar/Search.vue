<template>
  <div class="search-container">
    <input type="search" placeholder="请输入搜索内容" v-model="keywords">

  <div class="search-list">
    <router-link class="search-item" v-for="item in search(keywords)" :key="item.id" :to="'/home/shopinfo/'+item.id">
      <img :src="item.img_url">
      <h1 class="title">{{ item.title }}</h1>
      <div class="search-info">
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
  </div>
  </div>
</template>

<script>
    export default {
        name: "Search",
      data(){
          return{
            searchList:[],
            newList:[],
            keywords:'' // 搜索关键字
          }
      },
      created(){
          this.getSearchList()
      },
      methods:{
        //  请求数据
        async getSearchList(){
          const res = await this.$axios.get('/getsearchlist',this.model);
          // console.log(res)
          if(res.status === 200) {
            this.searchList = res.data
          }
        },
        // 根据关键字搜索
        search(keywords) {
          var newList = [];
          this.searchList.forEach(item => {
            if (item.title.indexOf(keywords) != -1) {
              newList.push(item)
            }
          });
          return newList
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .search-list{
    display: flex;
    /*换行*/
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
  }
  .search-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ccc;
    margin: 10px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;
  }
  .search-item img{
    width: 100%;
    height: 200px;
  }
  .search-item .title{
    font-size: 15px;
    color: black;
  }
  .search-info{
    background-color: #eee;

  }
  .search-info .price{
    margin: 0;
    padding: 2px 0;
  }
  .search-info .price .now{
    color: red;
  }
  .search-info .price .old{
    text-decoration: line-through;
    font-size: 13px;
    margin-left: 15px;
  }
  .search-info .sell{
    font-size: 12px;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  #hotsell{
    width: 15px;
    height: 15px;
  }
  .search-container input{
    margin: 15px 23% 0;
    width: 200px;
    height: 20px;
    background-color: white;
    border: #B5B5B5 1px solid;
    border-radius: 10px;
    font-size: 12px;
  }
  #hotsell{
    color: red;
    width: 55px;
  }
</style>
