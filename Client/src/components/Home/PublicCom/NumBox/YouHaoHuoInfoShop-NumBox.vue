<template>
  <div class="mui-numbox" data-numbox-min='0' data-numbox-max='30'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
<!--    使用文本框 change 事件，只监听一个事件,否则 v-on 监听 numbox 三个事件-->
    <input id="test" class="mui-input-numbox" type="number" value="0" @change="countChanged" ref="numBox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../../../lib/mui/js/mui'
    export default {
      name: "homebuy-numbox",
      // 初始化数字选择框
      mounted() {
        mui(".mui-numbox").numbox();
      },
      methods: {
        // 调用方法给父组件传值
        countChanged(){
          // console.log(this.$refs.numBox.value)
          this.$emit('getCount',parseInt(this.$refs.numBox.value))
        }
      }
    }
</script>

<style>

</style>
