<template>
  <div>
    <div id="general" class="mui-page">
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll" id="cur">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                多语言
              </li>
            </ul>

            <ul class="mui-table-view">
              <mt-switch id="swi"></mt-switch><li class="mui-table-view-cell">
                听筒模式


              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                功能
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p><img src="../../lib/img/other/warning.png">该功能正在测试中！请耐心等待。</p>
  </div>
</template>

<script>
    export default {
        name: "Current"
    }
</script>

<style>
  #cur{
    margin-top: 80px;
  }
  #swi{
    width: 50px;
    height: 30px;
    float: right;
    margin-top: 5px;
  }
  img{
    width: 13px;
    height: 13px;
  }
</style>
