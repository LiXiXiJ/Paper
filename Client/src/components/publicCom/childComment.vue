<template>
    <div class="comment">
      <h1 class="h1">评论内容</h1>
      <hr>
      <textarea placeholder="请输入评论内容（最多120字）" maxlength="120"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
      <div class="cmtList">
        <div class="cmtItem">
          <div class="cmtTitle">
            第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2020-01-12 12:12：12
          </div>
          <div class="cmtBody">
            西湖和日党务
          </div>
        </div>
        <div class="cmtItem">
          <div class="cmtTitle">
            第2楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2020-01-12 12:12：12
          </div>
          <div class="cmtBody">
            西湖和日党务
          </div>
        </div>
      </div>
      <mt-button type="danger" size="large" plain="">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        name: "childComment"
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
