<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" id="back" to="/mine">返回</router-link>
      <h1 class="mui-title">隐私</h1>
    </header>
    <div class="mui-page-content">
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <ul class="mui-table-view">
            <li class="mui-table-view-divider">通讯录</li>
            <mt-switch class="swi"></mt-switch><li class="mui-table-view-cell">
              加我为朋友时需要验证

            </li>
          </ul>
          <ul class="mui-table-view">
            <mt-switch class="swi"></mt-switch><li class="mui-table-view-cell">
              向我推荐QQ好友

            </li>
            <mt-switch class="swi"></mt-switch><li class="mui-table-view-cell">
              通过QQ号搜索到我

            </li>
          </ul>
          <ul class="mui-table-view">
            <mt-switch class="swi"></mt-switch><li class="mui-table-view-cell">
              可通过手机号搜索到我

            </li>
            <mt-switch class="swi"></mt-switch><li class="mui-table-view-cell">
              向我推荐通讯录朋友

            </li>
            <li class="mui-table-view-divider">开启后，为你推荐已经开通此系统账号的手机联系人</li>
          </ul>
          <ul class="mui-table-view">
            <mt-switch class="swi"></mt-switch><li class="mui-table-view-cell">
              通过账号搜索到我

            </li>
            <li class="mui-table-view-divider">关闭后，其他用户将不能搜索到你</li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Privacy"
    }
</script>

<style>
  .mui-table-view-cell{
    font-size: 14px;
  }
  .mui-table-view-divider{
    font-size: 13px;
  }
  .swi{
    width: 50px;
    height: 30px;
    float: right;
    margin-top: 5px;
  }
  #back{
    font-size: 13px;
    height: 44px;
    margin-top: 7px;
  }
</style>
