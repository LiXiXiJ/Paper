<template>
  <div class="mui-numbox" data-numbox-min='0' data-numbox-max='30'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="0" ref="numBox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../../lib/mui/js/mui'
    export default {
      name: "homebuy-numbox",
      // 初始化数字选择框
      mounted() {
        mui(".mui-numbox").numbox();
      },
      methods: {
      }
    }
</script>

<style>

</style>
