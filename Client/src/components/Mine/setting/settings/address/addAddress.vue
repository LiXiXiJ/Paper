<template>
    <div class="addAddress-container">
      <div class="address-title2">
        <p class="addaddress"><a href="javascript:;" @click="saveAddress">保存</a></p>
        <h4>添加收货地址</h4>
      </div>
      <div class="addAddress-info">
        <input type="text" placeholder="收货人" v-model="name">
        <input type="text" placeholder="手机号码" v-model="num">
        <input type="text" placeholder="标签（家、公司、学校）" v-model="label">
        <textarea placeholder="详细地址" v-model="InfoAddress"></textarea>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "addAddress",
      data(){
          return{
            name:'',
            num:'',
            label:'',
            InfoAddress:''
          }
      },
      methods:{
        //   保存收货地址
        saveAddress(){
          const addressObj = {
            name:this.name,
            num:this.num,
            label:this.label,
            InfoAddress: this.InfoAddress
          };
          if (this.name.length === 0) {
            return Toast('请输入收货人')
          }
          if (this.num.length < 11 || this.num.length > 11) {
            return Toast('请输入合法手机号')
          }
          if (this.label.length === 0) {
            return Toast('请输入标签名')
          }
          if (this.InfoAddress.length === 0) {
            return Toast('请输入详细收货地址')
          }
          this.$axios.post('/postaddress',addressObj).then(res => {
            if (res.data === 1) {
              Toast('添加完成')
            }
          });
          this.name = this.num = this.label = this.InfoAddress = '';
          this.$router.push('/mine/address')
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .address-title2{
    text-align: center;
    background-color: ghostwhite;
    width: 100%;
    height: 30px;
    padding-top: 2px;
    padding-left: 40px;
  }
  .addaddress{
    float: right;
    padding: 3px 5px;
  }
  .addaddress a{
    color: rgb(255,102,0);
  }
  .addAddress-info{
    margin: 10px;
  }
  .addAddress-info input{
    font-size: 13px;
  }
  .addAddress-info textarea{
    font-size: 13px;
  }
</style>
