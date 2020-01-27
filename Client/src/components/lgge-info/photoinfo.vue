<template>
  <div class="photoinfo-container">
    <h3 class="title">{{ list.title }}</h3>
    <p class="childtitle">
      <span>发表时间：{{ list.add_time }}</span>
      <span>点击：{{ list.click }}次</span>
    </p>
    <hr>
    <div class="img-container">
      <img :src="img.src1" preview="0" preview-text="">
      <img :src="img.src2" preview="0" preview-text="">
      <img :src="img.src3" preview="0" preview-text="">
      <img :src="img.src3" preview="0" preview-text="">
    </div>


    <div class="content">{{ list.content }}</div>
    <ChildComment></ChildComment>
  </div>
</template>

<script>
  import ChildComment from '../publicCom/childComment'
    export default {
      name: "photoinfo",
      components:{ChildComment},
      data(){
          return {
            id:this.$route.params.id,//从路由中获取到的图片id
            list:{},// 内容对象
            img:{}
          }
      },
      created(){
        this.getPhotoInfo();
        this.getPhotoImg()
      },
      methods:{
        async getPhotoInfo(){
          const res = await this.$axios.get('/getphotoinfo/'+this.id,this.model); //await 不执行，返回一个promise对象
          // console.log(res)
          if(res.status === 200) {
            this.list = res.data[0]
          }
        },
        async getPhotoImg(){
          const res = await this.$axios.get('/getphotoimg/'+this.id,this.model);
          // console.log(res)
          if(res.status === 200) {
            this.img = res.data[0]
          }
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .photoinfo-container{
    margin-top: 20px;
    padding: 0 5px;
  }
  .title{
    color: #26A2FF;
    text-align: center;
    font-size: 15px;
    line-height: 20px;
  }
  .childtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    margin-top: 10px;
    font-size: 13px;
    text-indent: 2em;
    line-height: 25px;
  }
  .img-container{
    background-color: #26A2FF;
  }
  .img-container img{
    width: 43%;
    height: 43%;
    margin: 10px 10px 0;
    box-shadow: #999;
  }
</style>
