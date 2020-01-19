<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" id="back" to="/mine">返回</router-link>
      <h1 class="mui-title">关于购物系统</h1>
    </header>
    <div class="mui-scroll" id="abo">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a id="tel" class="mui-navigate-right">客服电话</a>
        </li>
        <li class="mui-table-view-cell">
          <a id="feedback-btn" href="#feedback" class="mui-navigate-right">问题反馈</a>
        </li>
        <li id="check_update" class="mui-table-view-cell mui-plus-visible">
          <a id="update" class="mui-navigate-right">检查更新</a>
        </li>
      </ul>
    </div>
    <p><img src="../../lib/img/other/warning.png">该功能正在测试中！请耐心等待。</p>
  </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style>
  p{
    font-size: 13px;
    color: darkgray;
    text-align: center;
    margin-top: 22px;
  }
  img{
    width: 13px;
    height: 13px;
  }
  #abo{
    margin-top: 20px;
  }
  #back{
    font-size: 13px;
    height: 44px;
    margin-top: 7px;
  }
</style>
