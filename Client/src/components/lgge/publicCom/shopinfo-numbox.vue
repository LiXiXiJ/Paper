<template>
  <div class="mui-numbox" data-numbox-min='0' data-numbox-max='30'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="0" @change="countChanged" ref="numBox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../../lib/mui/js/mui'
    export default {
      name: "shopinfo-numbox",
      // 初始化数字选择框
      mounted() {
        mui(".mui-numbox").numbox();
      },
      methods: {
        countChanged() {
          //  每当文本框的数据被修改时，立即把最新的数据，通过事件调用传递给父组件
          //   console.log(this.$refs.numBox.value)
          this.$emit("getCount", parseInt(this.$refs.numBox.value))
        }
      }
    }
</script>

<style>

</style>
