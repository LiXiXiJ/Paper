<template>
    <div>
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
<!--            设置刚点进去全部分类路由高亮 -->
            <a :class="['mui-control-item',item.id === 0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
              {{ item.cate }}
            </a>
          </div>
        </div>
      </div>
      <ul class="photo-list">
        <router-link tag="li" v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" >
          <img v-lazy="item.img_url">
          <div class="info">
            <h1 class="info-title">{{ item.title }}</h1>
            <div class="info-body">{{ item.zhaiyao }}</div>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui'
    export default {
      name: "shop",
      data(){
        return{
          cates:[],// 图片分类数组
          list:[] // 图片列表数组
        }
      },
      created(){
        this.getphotolistcate();
        this.getPhotoListByCateId(0); //刚进入页面就请求所有数据
      },
      methods:{
        async getphotolistcate(){ // 获取列表
          const res = await this.$axios.get('/getphotolistcate',this.model);
          // console.log(res)
          if(res.status === 200){
            res.data.unshift({ cate:"全部","id":0 }); // 所有分类
            this.cates = res.data
          }
        },

        async getPhotoListByCateId(cateid) { // 获取图片列表
          const res = await this.$axios.get('/getphotolist/'+cateid,this.model);
          // console.log(res)
          if (res.status === 200) {
            this.list = res.data
          }
        }
      },
      mounted() {
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
      }
    }
</script>

<style>
  *{
    touch-action:pan-y
  }
  img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .photo-list{
    margin: 0;
    padding: 10px 10px 0;
  }
  .photo-list li{
    background-color: #cccccc;
    text-align: center;
    list-style: none;
    margin-bottom: 10px;
    box-shadow: 0 0 6px #999;
    position: relative;
  }
  .photo-list img{
    /*min-height解决刚进去图片未请求到时页面错乱的问题*/
    min-height: 436px;
    width: 100%;
    height: 95%;
    text-align: center;
    /*去除底部下划线*/
    vertical-align: middle;
  }
  .info{
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    max-height: 100px;
  }
  .info-title{
    color: white;
    font-size: 14px;
  }
  .info-body{
    color: white;
    font-size: 12px;
  }
</style>
