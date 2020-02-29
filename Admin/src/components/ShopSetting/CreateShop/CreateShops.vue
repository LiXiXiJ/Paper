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
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
        <div class="create-button">
          <el-button type="primary">立即提交</el-button>
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
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
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
