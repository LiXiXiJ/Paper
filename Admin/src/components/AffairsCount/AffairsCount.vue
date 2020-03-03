<template>
    <div class="affairs-container">
      <div class="affairs-header">
        <div class="header1">
          <p>订单数</p>
          <p>退货单</p>
          <p>收入金额</p>
          <p>支出金额</p>
        </div>
        <div class="header2">
          <p>{{ AffairsAllCountList.length }} <span>笔</span></p>
          <p>0 <span>笔</span></p>
          <p>{{ PRICE }}</p>
          <p>00.00</p>
        </div>
      </div>
      <div class="affairs-content">
        <p>订单统计表</p>
        <el-table
          :data="AffairsAllCountList"
          border
          style="width: 100%">
          <el-table-column
            label="日期(2020-01-01~)">
            <template slot-scope="scope"  v-for="item in AffairsAllCountList">
              <span>{{ item.time | dateFilter }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="退货单"
            width="180">
          </el-table-column>
          <el-table-column
            prop="allPrice"
            label="收入金额"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="支出金额"
            width="180">
          </el-table-column>
          <el-table-column
            prop="allPrice"
            label="金额小计"
            width="180">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AffairsCount",
      data() {
        return {
          AffairsAllCountList:[],
          PRICE:0
        }
      },
      created(){
        this.getAffairsAllCount()
      },
      methods:{
          // 获取订单数据
          async getAffairsAllCount(){
            const res = await this.$axios.get('/getaffairsallcount',this.model);
            if (res.status === 200) {
              this.AffairsAllCountList = res.data
            }
            // 计算总价
            this.AffairsAllCountList.forEach(item => {
              this.PRICE += parseInt(item.allPrice)
            })
          }
      }
    }
</script>

<style>
  .affairs-header{
    background-color: honeydew;
    border: 1px solid #e8e8e8;
    width: 90%;
    height: 80px;
    padding: 5px 15px;
  }
  .affairs-header p{
    margin: 0;
  }
  .header1{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    color: #cccccc;
  }
  .header2{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .header2 span{
    color: #cccccc;
  }
  .affairs-content{
    margin-top: 30px;
  }
  .affairs-content p{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding-bottom: 10px;
  }
</style>
