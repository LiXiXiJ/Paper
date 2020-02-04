<template>
    <div class="description-container">
      <h1>{{shopDesc.title}}</h1>
      <hr>
      <div class="zhaiyao">
        <h3>{{shopDesc.zhaiyao}}</h3>
      </div>
      <img :src="shopDesc.img_url">
    </div>
</template>

<script>
    export default {
        name: "shopdescription",
      data(){
          return{
            id:this.$route.params.id,
            shopDesc:{}
          }
      },
      created(){
        this.getShopDes()
      },
      methods:{
          async getShopDes(){
            const res = await this.$axios.get('/getshopdesc/'+this.id,this.model);
            // console.log(res)
            if (res.status === 200) {
              this.shopDesc = res.data[0]
            }
          }
      }
    }
</script>

<style>
  .description-container{
    margin: 15px 5px 0;
  }
  .description-container h1{
    text-align: center;
    font-size: 15px;
    color: #26A2FF;
  }
  .zhaiyao h3{
    font-size: 13px;
    text-indent: 2em;
    line-height: 20px;
    min-height: 100px;
    margin-top: 10px;
  }
  .description-container img{
    width: 100%;
    min-height: 430px;
  }
</style>
