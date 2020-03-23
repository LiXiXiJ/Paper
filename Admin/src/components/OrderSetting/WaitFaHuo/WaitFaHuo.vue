<template>
    <div>
      <el-table
        :data="waitFaHuoList"
        border
        style="width: 100%;"
        @row-click="GoFaHuo">
        <el-table-column
          label="下单日期"
          width="180"
          header-align="center">
          <template slot-scope="scope" v-for="item in waitFaHuoList">
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
        <el-table-column
          prop="allPrice"
          label="总金额"
          header-align="center">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
        name: "WaitFaHuo",
      data() {
        return {
          waitFaHuoList:[]
        }
      },
      created(){
          this.getWaitFaHuoOrder()
      },
      methods:{
        GoFaHuo(row){
          this.$router.push('/order/fahuo');
          // console.log(row)
          this.$store.commit('saveWaitFaHuoOrder',row)
        },
      //  获取待发货订单数据
        async getWaitFaHuoOrder(){
          const res = await this.$axios.get('/getwaitfahuoorder',this.model);
          // console.log(res);
          if (res.status === 200) {
            this.waitFaHuoList = res.data
          }
        }
      }
    }
</script>

<style>

</style>
