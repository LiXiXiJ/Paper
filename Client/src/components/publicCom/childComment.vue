<template>
    <div class="comment">
      <h1 class="h1">评论</h1>
      <hr>
      <textarea placeholder="请输入评论内容（最多120字）" maxlength="120"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
      <div class="cmtList">
        <div class="cmtItem" v-for="item in childcomment" :key="item._id">
          <div class="cmtTitle">
            第{{item.id}}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{ item.add_time | dataFilter }}
          </div>
          <div class="cmtBody">
            {{ item.add_comment }}
          </div>
        </div>
      </div>
      <mt-button type="primary" size="large" plain="" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "childComment",
      data(){
          return{
            page_index:1,
            childcomment:[]
          }
      },
      created(){
          this.getCom()
      },
      methods:{
          async getCom(){
            const res = await this.$axios.get('/getchildcom/'+this.page_index,this.model);
            // console.log(res)
            if( res.status === 200 ){
              this.childcomment = this.childcomment.concat(res.data)
            }
          },
        async getMore(){ //加载更多
            this.page_index++;
            this.getCom()
        },
        //  postnewcomment(){ //添加评论
        //     const comment = {add_time:Date.now(),add_comment: this.content};
        //     this.$axios.post('/postnewcom').then(function (res) {
        //       if(res.status === 200){
        //       }
        //     })
        // }
      }
    }
</script>

<style>
  .h1{
    font-size: 19px;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmtTitle{
    font-size: 12px;
    background-color: #cccccc;
    line-height: 35px;
  }
  .cmtBody{
    font-size: 12px;
    line-height: 35px;
    text-indent: 2em;
  }
  .cmtList{
    margin: 5px;
  }
</style>
