<template>
  <div class="comment">
    <h1 class="h1">宝贝评价</h1>
    <hr>
    <textarea placeholder="请输入评论内容（最多120字）" maxlength="120" v-model="comment"></textarea>
    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
    <div class="cmtList">
      <div class="cmtItem" v-for="(item,i) in caiNiLikeShopCommentList" :key="item._id">
        <div class="cmtTitle">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{ item.time | dataFilter }}
        </div>
        <div class="cmtBody">
          {{ item.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "caiNiLikeShopComment",
      data(){
          return{
            id:this.$route.params.id,
            comment:'',  // 填写的评论内容
            caiNiLikeShopCommentList:[]
          }
      },
      created(){
          this.getcaiNiLikeShopComment()
      },
      methods:{
        //  发表评论
        addComment(){
          if (this.comment.length === 0) {
            return Toast('评论内容不能为空')
          }
          const commentObj = {
            id:this.id,
            comment: this.comment
          };
          this.$axios.post('/postcainilikeshopcomment',commentObj).then((res) => {
            if (res.status === 200) {
              Toast('宝贝评价成功')
            }
          });
          this.caiNiLikeShopCommentList.push(commentObj); // 评论内容拼到后面
          this.comment = '';  // 清空评论内容
        },
      //   获取评论数据
        async getcaiNiLikeShopComment(){
          const res = await this.$axios.get('/getcainilikeshopcomment/'+this.id,this.model);
          if (res.status === 200) {
            this.caiNiLikeShopCommentList = res.data
          }
        }
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
