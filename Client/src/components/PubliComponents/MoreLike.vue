<template>
    <div class="moreLike-container">
      <div class="c4">
        <p class="like-more">——<i class="icon iconfont icon-aixin"></i>你可能还喜欢——</p>
      </div>
      <div class="youhaohuo-bottom">
        <ul class="youhaohuo-list">
          <router-link class="youhaohuo-item" v-for="item in youHaoHuoInfoBottomList" :key="item.id" :to="'/home/buyyouhaohuoinfoshop/'+item.id"
                       v-loading="loading"
                       element-loading-text="拼命加载中"
                       element-loading-spinner="el-icon-loading"
                       element-loading-background="rgba(0,0,0,0.9)">
            <a href="javascript:;">
              <img :src="item.img_url">
              <h3>
                <div class="item-title">
                  {{ item.title }}
                </div>
              </h3>
              <p class="item-content">{{ item.subtitle }}</p>
              <p class="item-extra">
                <span class="item-price">
                  <span>￥</span>{{ item.price }}
                </span>
                <span class="item-like">{{ item.num }}人说好</span>
              </p>
            </a>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MoreLike",
      data(){
          return{
            youHaoHuoInfoBottomList:[],
            loading:true
          }
      },
      created(){
        this.getYouHaoHuoBottom();
        this.LoadingChange()
      },
      methods:{
        // 请求 你可能还喜欢 数据
        async getYouHaoHuoBottom(){
          const res = await this.$axios.get('/getyouhaohuoinfobottom',this.model);
          if (res.status === 200) {
            this.youHaoHuoInfoBottomList = res.data
          }
        },
        LoadingChange(){
          setTimeout(() => {
            this.loading = false
          },2000)
        }
      }
    }
</script>

<style scoped>
  .c4{
    margin: 20px 28%;
  }
  .like-more{
    color: rgb(255,102,0);
  }
  .youhaohuo-bottom{
    margin: 10px;
  }
  .youhaohuo-list{
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .youhaohuo-item{
    width: 49%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ccc;
  }
  .youhaohuo-item img{
    width: 100%;
    height: 150px;
  }
  .item-title{
    font-size: 14px;
    color: black;
    margin-bottom: 10px;
  }
  .item-content{
    font-size: 12px;
    line-height: 17px;
    height: 51px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .item-price{
    color: red;
  }
  .item-like{
    color: #53bfe6;
  }
  .item-extra{
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
</style>
