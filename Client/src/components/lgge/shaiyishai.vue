<template>
    <div class="shaiyishai-container">
      <div class="shaiyi-title">
        <h3>晒一晒</h3>
      </div>
      <hr class="shaiyi-hr">
      <div class="shaiyi-item">
        <div class="shaiyi-info" v-for="(item,i) in shaiYiShaiList" :key="item.id">
          <div class="shaiyi-img">
            <img :src="item.img">
          </div>
          <div class="shaiyi-content">
            <p>{{ item.title }}</p>
          </div>
          <div class="shaiyi-header">
            <p class="zan">
              <i class="icon iconfont icon-weibiaoti--" v-if="item.flag" @click="dianZan(i)"></i>
              <i class="icon iconfont icon-weibiaoti--" style="color: crimson" v-else @click="dianZan(i)"></i>
              <span>{{ item.zanNum }}</span>
            </p>
            <p class="shaiyi-nick">
              <img :src="item.header">
              <span>{{ item.name }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "shop",
      data(){
          return{
            shaiYiShaiList:[]
          }
      },
      created(){
          // this.num = localStorage.getItem('shaiYiShaiZanNum');
          this.getShaiYiShai();
          this.openFullScreen()
      },
      methods:{
        dianZan(i){  // 实现点赞功能
          // console.log(i)
          if (localStorage.getItem('token') == '') {
            return Toast('请先登录')
          }
          this.shaiYiShaiList.some((value, index, array) => {
            if (i === index) {
              if (array[i].flag) {
                array[i].zanNum++;
                array[i].flag = false
              } else {
                array[i].zanNum--;
                array[i].flag = true
              }
              // console.log(array[i])
              const Obj = array[i];
              this.$axios.post('/updateshaiyishaizan',Obj).then((res) => {
                // 更新赞
              })
            }
          })
        },
        // 获取数据
        async getShaiYiShai(){
          const res = await this.$axios.get('/getshaiyishai',this.model);
          // console.log(res)
          if (res.status === 200) {
            this.shaiYiShaiList = res.data
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
  body{
    background-color: white;
  }
  .shaiyishai-container{
    margin: 10px;
  }
  .shaiyi-info{
    width: 48%;
    background-color: #f3f3f3;
    border: #f3f3f3 1px solid;
    border-radius: 5%;
    margin-top: 5px;
  }
  .shaiyi-item{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .shaiyi-img img{
    width: 100%;
    min-height: 230px;
    border-radius: 5% 5% 0 0;
  }
  .shaiyi-title{
    margin:0 10px 0;
  }
  .shaiyi-hr{
    margin-top: 15px;
  }
  .shaiyi-title h3{
    font-family: 幼圆;
    color: #ff88cc;
  }
  .shaiyi-content p{
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    margin-bottom: 5px;
    font-size: 12px;
    color: #222222;
    line-height: 17px;
    padding: 0 5px;
    min-height: 34px;
  }
  .shaiyi-header .shaiyi-nick{
    padding: 0 5px;
  }
  .shaiyi-header .shaiyi-nick{
    color: #222222;
    font-size: 12px;
    margin-bottom: 5px;
  }
  .shaiyi-nick{
    height: 25px;
  }
  .zan{
    float: right;
    padding: 10px 5px 0 0;
  }
  .shaiyi-header img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .shaiyi-nick span{
    display: inline-block;
    padding-left: 3px;
  }
</style>
