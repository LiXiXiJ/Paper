<template>
  <div class="mui-content">
    <div class="mui-card">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-collapse" id="li" v-for="item in newslists" :key="item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <p class="childBox">
            <span>{{ item.add_time}}</span>
            <span>{{ item.click }}次阅读</span>
          </p>
          <a class="mui-navigate-right" href="#" id="title1">{{ item.title }}</a>
          <div class="mui-collapse-content">
            <h1 id="title2">{{ item.title }}</h1>
            <hr>
            <p id="content">{{ item.zhaiyao }}</p>
            <ChildComment></ChildComment>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ChildComment from '../lgge/publicCom/childComment'

    export default {
      name: "newslist",
      components:{ChildComment},
      data(){
          return {
            newslists:[]
          }
      },
      created(){
        this.getnewslist();
        this.openFullScreen()
      },
      methods:{
        // 获取新闻数据
        async getnewslist(){
          const res = await this.$axios.get('/getnewslist',this.model);
          // console.log(res);
          if(res.status === 200 ) {
            this.newslists = res.data
          }
        },
        openFullScreen() {
          const loading = this.$loading({
            lock: true,
            text: '拼命加载中',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.9)'
          });
          setTimeout(() => {
            loading.close();
          }, 2000);
        }
      }
    }
</script>

<style>
  .mui-content{
    background-color: white;
  }
  .childBox{
    display: flex;
    justify-content: space-between;
    height: 23px;
  }
  .childBox span{
    font-size: 13px;
    height: 40px;
  }
  #title1{
    color: #0062cc;
    background-color: white;
    margin-top: -6px;
    height: 40px;
  }
  #title2{
    color: red;
    font-size: 15px;
  }
  #content{
    text-indent: 2em;
    color: #242424;
  }
  #li{
    background-color: white;
  }
</style>
