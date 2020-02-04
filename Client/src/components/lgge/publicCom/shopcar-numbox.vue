<template>
  <div class="mui-numbox" data-numbox-min='0' data-numbox-max='30' style="height: 25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="Count"  @change="countChanged" ref="numBox" readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../../lib/mui/js/mui'
    export default {
      name: "shopcar-numbox",
      // 初始化数字选择框
      mounted() {
        mui(".mui-numbox").numbox();
      },
      methods: {
        countChanged(){ // 数量改变
          // console.log(this.$refs.numBox.value)
          // 每当数量值改变，立即把当前最新的数量同步到 store 中，覆盖之前的数量值
          this.$store.commit("updateShopCarCount",{id:this.shopId,count:this.$refs.numBox.value})
        }
      },
      props:['Count','shopId']  // 商品id，商品数量
    }
</script>

<style>

</style>
