<template>
  <div>
      <button id="submit" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">发送</button>
    <div class="mui-content">
      <div class="mui-content-padded">
        <div class="mui-inline">问题和意见</div>
        <div id="popover" class="mui-popover">
          <div class="mui-popover-arrow"></div>
          <div class="mui-scroll-wrapper">
          </div>
        </div>
      </div>
      <div class="row mui-input-row">
        <textarea id='question' class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
      </div>
      <p class="email">QQ/邮箱</p>
      <div class="mui-input-row">
        <input id='contact' type="text" class="mui-input-clear contact" placeholder="(选填,方便我们联系你 )" />
      </div>
      <div class="mui-content-padded">
        <div class="mui-inline">应用评分</div>
        <div class="icons mui-inline" style="margin-left: 6px;">
          <i data-index="1" class="mui-icon mui-icon-star"></i>
          <i data-index="2" class="mui-icon mui-icon-star"></i>
          <i data-index="3" class="mui-icon mui-icon-star"></i>
          <i data-index="4" class="mui-icon mui-icon-star"></i>
          <i data-index="5" class="mui-icon mui-icon-star"></i>
        </div>
      </div><br />
    </div>
  </div>
</template>

<script>
    export default {
        name: "Safety",
    }
</script>

<style>
  .mui-content{
    background-color: white;
  }
  .email{
    text-indent: -220px;
  }
  .mui-inline{
    font-size: 14px;
  }
  .mui-input-clear.question,
  .mui-input-clear.contact{
    font-size: 13px;
  }
</style>
