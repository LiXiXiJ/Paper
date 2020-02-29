<template>
    <div class="shoplists-container">
      <div class="shoplists-header">
        <input type="search" placeholder="查找商品" v-model="keywords"></input>
        <div class="but1">
          <el-button type="danger" icon="el-icon-delete" circle size="small" @click="changeFlag"></el-button>
        </div>
      </div>
      <div class="shoplists-list">
        <div class="shoplists-item" v-for="(item,i) in Search(keywords)" :key="item._id">
          <div class="item-img">
            <img :src="item.img_url">
          </div>
          <div class="item-title">
            <p class="title-p">{{ item.title }}</p>
            <p class="title-p2">￥{{ item.new_price }}</p>
            <div class="item-button" v-show="flag">
              <input type="button" value="下架" @click="RemoveShopList(i)"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShopLists",
      data(){
          return{
            flag:false,
            keywords:'',
            AdminShopList:[]
          }
      },
      created(){
        this.AdminGetShopList()
      },
      methods:{
          // 下架按钮
          changeFlag(){
            this.flag = !this.flag
          },
        // 请求接口获取数据
        async AdminGetShopList(){
            const res = await this.$axios.get('/admingetshoplist',this.model);
            if (res.status === 200) {
              this.AdminShopList = res.data
            }
        },
        // 查找商品
        Search(keywords){
            var newList = [];
            this.AdminShopList.forEach(item => {
              if (item.title.indexOf(keywords) != -1) {
                newList.push(item)
              }
            });
          return newList
        },
        RemoveShopList(i){
            this.AdminShopList.some((item,index) => {
              if (i === index) {
                this.AdminShopList.splice(i,1)
              }
            })
        }
      }
    }
</script>

<style>
.shoplists-header{
  margin: 0 20px 20px;
}
.shoplists-header input{
  width: 200px;
  height: 20px;
  font-size: 12px;
  padding-left: 10px;
  border-bottom: #26A2FF 1px solid;
  border-right: #26A2FF 1px solid;
}
  .shoplists-item{
    width: 200px;
    border: #cccccc 1px solid;
    margin: 5px;
  }
  .item-img img{
    width: 190px;
    height: 220px;
    margin: 5px;
  }
  .title-p{
    margin: 5px;
    font-size: 13px;
    min-height: 51px;
  }
  .title-p2{
    margin: 0;
    color: rgb(255,102,0);
    float: right;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 7px;
  }
  .shoplists-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item-button{
    width: 32px;
    height: 23px;
    margin: 5px 10px;
    float: left;
  }
  .item-button input{
    background-color: #dd524d;
    color: white;
  }
  .but1{
    float: right;
  }
</style>
