<template>
    <div>
      <el-table
        :data="paymentList"
        border
        style="width: 100%;">
        <el-table-column
          label="下单日期"
          width="180"
          header-align="center">
        <template slot-scope="scope" v-for="item in paymentList">
          <span>{{ item.Date | dateFilter }}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="收货人"
          width="180"
          header-align="center">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="电话"
          width="180"
          header-align="center">
        </el-table-column>
        <el-table-column
          prop="InfoAddress"
          label="地址"
          header-align="center">
        </el-table-column>
        <el-table-column
          prop="IDNUM"
          label="商品型号ID/件"
          header-align="center">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "Payment",
      data() {
        return {
          paymentList:[]
        }
      },
      created(){
          this.getPaymentOrder()
      },
      methods:{
          // 获取 待付款订单
          async getPaymentOrder(){
            const res = await this.$axios.get('/getpaymentorder',this.model);
            if (res.status === 200) {
              this.paymentList = res.data
            }
          }
      }
    }
</script>

<style>

</style>
