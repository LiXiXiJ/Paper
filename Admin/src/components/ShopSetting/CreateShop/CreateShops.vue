<template>
    <div class="create-container">
      <div class="create-header">
        <p class="create-p">添加商品</p>
      </div>
      <div class="create-content">
        <div class="create-name">
          商品名称 <input type="text" v-model="title"></input>
        </div>
        <div class="create-price">
          商品价格 <input type="text" v-model="price"></input>
        </div>
        <div class="create-ID">
          型号ID <input type="text" v-model="id"></input>
        </div>
        <div class="create-sales">
          销量&nbsp;<input type="text" v-model="sales" readonly></input>
        </div>
        <div class="create-content2">
          商品描述 <textarea v-model="content"></textarea>
        </div>
        <div class="create-upload">
          商品图片
          <div class="upload">
            <el-upload
              class="avatar-uploader"
              :action="/api/ + 'upload'"
              :show-file-list="false"
              :on-success="afterUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
        <div class="create-button">
          <el-button type="primary" @click="submit">立即提交</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CreateShop",
      data() {
        return {
          title:'',
          price:'',
          id:'',
          sales:'0',
          content:'',
          imageUrl: ''
        };
      },
      methods: {
        //  上传图片后回显
        afterUpload(res) {
          // console.log(res)
          this.imageUrl = res.url
        },
        submit(){
          if (this.title.length === 0) {
            return this.$alert('请填写商品名称', {
              confirmButtonText: '确定'
            });
          }
          if (this.price.length === 0) {
            return this.$alert('请填写商品价格', {
              confirmButtonText: '确定'
            });
          }
          if (this.id.length === 0) {
            return this.$alert('请填写商品型号ID', {
              confirmButtonText: '确定'
            });
          }
          if (this.imageUrl.length === 0) {
            return this.$alert('请上传商品图片', {
              confirmButtonText: '确定'
            });
          }
          const ShopObj = {
            id:this.id,
            title:this.title,
            like_price:this.price,
            like_sales:this.sales,
            img_url:this.imageUrl,
            content:this.content
          };
          // console.log(ShopObj)
          this.$axios.post('/admincreateshop',ShopObj).then(res => {
            if (res.data === 1) {
              this.$alert('添加商品成功', {
                confirmButtonText: '确定'
              });
            }
            this.title = this.price = this.id = this.imageUrl = this.content = ''
          })
        }
      }
    }
</script>

<style scoped>
  .create-header{
    margin: 0 10px;
  }
  .create-p{
    font-size: 20px;
    font-weight: bold;
  }
  .create-content input{
    width: 600px;
    height: 30px;
    margin: 10px;
    padding-left: 15px;
  }
  .create-content2 textarea{
    width: 600px;
    height: 50px;
    margin: 10px 0 0 10px;
    padding: 10px 15px;
  }
  .create-content{
    margin-left: 30px;
    font-size: 15px;
  }
  .create-ID{
    text-indent: 1em;
  }
  .create-sales{
    text-indent: 2em;
  }
  .create-upload{
    margin: 20px 0;
  }
  .upload{
    padding: 0 100px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .create-button{
    padding-left: 50%;
  }
</style>
