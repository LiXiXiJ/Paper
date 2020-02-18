<template>
    <div class="weiweitao-container">
      <div class="weiweitao-title">
        <h3>微微淘</h3>
      </div>
      <hr>
      <div class="weiweitao-top">
        <img class="top-img" src="https://img.alicdn.com/simba/img/TB1zZo3rER1BeNjy0FmSuv0wVXa.jpg">
      </div>
      <div class="weiweitao-content">
        <div class="weiweitao-card" v-for="(item,i) in weiWeiTaoList" :key="item.id">
        <div class="tao-button">
          <mt-button plain="plain" type="danger" size="small" @click="guanZhuStore(i)">关注</mt-button>
        </div>
        <div class="tao-dian">
          <p class="weiweitao-dianname">{{ item.name }}<span>{{ item.time }}</span></p>
          <img class="tao-header" :src="item.header">
        </div>
        <p class="tao-title">{{ item.content }}</p>
        <div class="tao-img">
          <img :src="item.img1">
          <img :src="item.img2">
          <img :src="item.img3">
          <img :src="item.img4">
        </div>
        <div class="weiweitao-footer">
          <p class="footer-read">{{ item.readNum }}阅读</p>
          <p class="footer-zan">
            <i class="icon iconfont icon-weibiaoti--" v-if="item.flag" @click="zan(i)"></i>
            <i class="icon iconfont icon-weibiaoti--" style="color: crimson" v-else="" @click="zan(i)"></i>
            {{ item.zan }}
          </p>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shop",
      data(){
          return{
            weiWeiTaoList:[]
          }
      },
      created(){
        // this.num = localStorage.getItem('weiWeiTaoZanNum');
        this.getWeiWeiTao()
      },
      methods:{
        //   点赞功能
        zan(i){ // i 表示当前点击的那一项
          // console.log(i)
          this.weiWeiTaoList.some((value, index, array) => {
            // console.log(index)
            // console.log(array)
            if (i === index) {
              if (array[i].flag) {
                array[i].zan++;
                array[i].flag = false;
                array[i].readNum++
              } else {
                array[i].zan--;
                array[i].flag = true
              }
              // console.log(array[i])
              const Obj = array[i];
                this.$axios.post('/updateweiweitaozan',Obj).then((res) => {
                  // 更新赞
                })
            }
            // if (this.flag) {
            //   this.flag = false;
            //   this.num++
            // } else {
            //   this.flag = true;
            //   this.num--
            // }
          })
          // localStorage.setItem('weiWeiTaoZanNum',this.num)
        },
        //  获取数据
        async getWeiWeiTao(){
          const res = await this.$axios.get('/getweiweitao',this.model);
          // console.log(res)
          if (res.status === 200) {
            this.weiWeiTaoList = res.data
          }
        },
        // 将关注的商店传到后台
        guanZhuStore(i){
          // console.log(this.weiWeiTaoList[i].id)
          const storeObj = {
            id: this.weiWeiTaoList[i].id,
            header: this.weiWeiTaoList[i].header,
            name: this.weiWeiTaoList[i].name
          };
          this.$axios.post('/postweitaoguanzhustore',storeObj).then((res) => {
            // 向后台传递数据
          })
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .weiweitao-container{
    margin: 10px;
  }
  .weiweitao-title{
    margin:10px;
  }
  .weiweitao-title h3{
    font-family: 幼圆;
    color: #ff5053;
  }
  .weiweitao-top{
    border: #f3f3f3 1px solid;
    border-radius: 5%;
  }
  .top-img{
    width: 100%;
    height: 100%;
    padding: 0;
    border-radius: 5%;
  }
  .tao-header{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .tao-dian{
    border-radius: 50%;
    display: inline-block;
  }
  .weiweitao-dianname{
    float: right;
    margin: 6px 0 0 10px;
    color: #222222;
    font-weight: bold;
  }
  .weiweitao-dianname span{
    font-size: 13px;
    color: #B5B5B5;
    font-weight: lighter;
  }
  .tao-button{
    float: right;
  }
  .weiweitao-card{
    margin-top: 5px;
    border: #e8e8e8 1px solid;
    box-shadow: 0 0 5px #f3f3f3;
    border-radius: 5%;
    padding: 10px;
  }
  .tao-title{
    margin: 15px;
    color: #222222;
  }
  .tao-img img{
    width: 49%;
  }
  .weiweitao-footer{
    display: flex;
    justify-content: space-between;
    margin: 5px 10px 0;
  }
</style>
