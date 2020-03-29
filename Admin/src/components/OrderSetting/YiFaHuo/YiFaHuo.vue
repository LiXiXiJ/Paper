<template>
    <div>
      <el-table
        :data="YiFaHuoList"
        border
        style="width: 100%;">
        <el-table-column
          label="发货日期"
          width="180"
          header-align="center">
          <template slot-scope="scope" v-for="item in YiFaHuoList">
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
          prop="orderNum"
          label="订单编号"
          width="220"
          header-align="center">
        </el-table-column>
        <el-table-column
          prop="faHuoAddress"
          label="发货地址"
          header-align="center">
        </el-table-column>
        <el-table-column
          prop="shouHuoAddress"
          label="收货地址"
          header-align="center">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "YiFaHuo",
      data() {
        return {
          YiFaHuoList:[]
        }
      },
      created(){
        this.getYiFaHuoOrder()
      },
      methods:{
          // 获取已发货订单
          async getYiFaHuoOrder(){
            const res = await this.$axios.get('/getyifahuoorder',this.model);
            if (res.status === 200) {
              this.YiFaHuoList = res.data
            }
          }
      }
    }
</script>

<style>

</style>
