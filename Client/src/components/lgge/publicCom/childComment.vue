<template>
    <div class="comment">
      <h1 class="h1">评论</h1>
      <hr>
      <textarea placeholder="请输入评论内容（最多120字）" maxlength="120" v-model="comment"></textarea>
      <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
      <div class="cmtList">
        <div class="cmtItem" v-for="(item,i) in childcomment" :key="item.i">
          <div class="cmtTitle">
            第{{ i+1 }}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{ item.add_time | dataFilter }}
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
  // 导入 Toast 提示组件
  import { Toast } from 'mint-ui';

    export default {
        name: "childComment",
      data(){
          return{
            page_index:1,  // 页码
            childcomment:[],  // 获取到的评论数据
            comment:""  // 评论内容
          }
      },
      created(){
          this.getCom()
      },
      methods:{
        // 获取评论数据
          async getCom(){
            if (localStorage.getItem('token') == '') {
              return this.childcomment = []
            }
            const res = await this.$axios.get('/getchildcom/'+this.page_index,this.model);
            if( res.status === 200 ){
              this.childcomment = this.childcomment.concat(res.data)
            }
          },
        // 加载更多
        async getMore(){
            this.page_index++;
            this.getCom()
        },
        // 发表评论
        addComment(){
          if (localStorage.getItem('token') == '') {
            return Toast('请先登录')
          }
          // 检查是否为空
          if (this.comment.length === 0) {
            return Toast('评论内容不能为空')
          }
          const newComment = { add_comment:this.comment };
            this.$axios.post('/addcomment',newComment).then(function (result) {
              if (result.status === 200) {
                Toast('评论成功')
              }
            });
          this.childcomment.push(newComment);  // 页面未刷新时加到数组中展示
          this.comment = '';  // 清空填写内容
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
