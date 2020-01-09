<template>
  <div>
<!--    轮播图区域-->
<!--    auto 毫秒值-->
    <mt-swipe :auto="3000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style>
  .mint-swipe{
    height: 150px;
  }
  .mint-swipe-item:nth-child(1){
      background-image: url("https://img.alicdn.com/tps/i4/TB1yyK_r7L0gK0jSZFxwu0WHVXa.png_1200x1200Q90s50.jpg_.webp");
    }
  .mint-swipe-item:nth-child(2){
    background-color: #007aff;
  }
  .mint-swipe-item:nth-child(3){


    background-color: #000000;
  }
</style>
