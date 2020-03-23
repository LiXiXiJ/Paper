<template>
    <div>
      <el-form :label-position="labelPosition" label-width="80px">
        <el-form-item label="收货人">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="tel"></el-input>
        </el-form-item>
        <el-form-item label="订单编号">
          <el-input v-model="orderNum"></el-input>
        </el-form-item>
        <el-form-item label="发货地址">
          <el-input v-model="faHuoAddress"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="shouHuoAddress"></el-input>
        </el-form-item>
        <el-form-item label="确认金额">
          <el-input v-model="allPrice"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="FaHuoSubmit">确定发货</el-button>
    </div>
</template>

<script>
    export default {
        name: "FaHuo",
      data() {
        return {
          labelPosition: 'top',
          name:this.$store.state.waitFaHuoOrder.name,
          tel:this.$store.state.waitFaHuoOrder.tel,
          orderNum:this.$store.state.waitFaHuoOrder._id,
          faHuoAddress:'',
          shouHuoAddress:this.$store.state.waitFaHuoOrder.InfoAddress,
          allPrice:this.$store.state.waitFaHuoOrder.allPrice
        };
      },
      methods:{
        //  发货
        FaHuoSubmit(){
          const OBJ = {
            name:this.name,
            tel:this.tel,
            orderNum:this.orderNum,
            faHuoAddress: this.faHuoAddress,
            shouHuoAddress: this.shouHuoAddress,
            allPrice: this.allPrice
          };
          this.$axios.post('/postfahuosubmit',OBJ).then(res => {
            //
          });
          this.name = this.num = this.tel = this.orderNum = this.faHuoAddress = this.shouHuoAddress = this.allPrice = '';
          this.$router.push('/order/yifahuo')
        }
      }
    }
</script>

<style>

</style>
