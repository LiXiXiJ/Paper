<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
            <span class="span1">网上购物后台管理系统</span>
            <a href="javascript:;" @click="goLogin" v-if="flag"><i class="icon iconfont icon-yonghu"></i></a>
            <a href="javascript:;" @click="drawer = true" v-else><i class="icon iconfont icon-yonghu"></i></a>

          <el-dropdown-menu> </el-dropdown-menu>
            <el-drawer
              title="网上购物系统用户管理系统"
              :visible.sync="drawer"
              :before-close="handleClose">
              <div class="backLogin">
                <p class="backLogin-p">当前用户&nbsp;&nbsp;&nbsp;<span>{{ this.$store.state.adminUser.username }}</span></p>
                <el-button type="danger" @click="backLogin">退出登录</el-button>
              </div>
            </el-drawer>
        </el-dropdown>
      </el-header>
    </el-container>
  </el-container>
</template>

<script>
    export default {
      data(){
        return{
          flag:this.$store.state.adminUser.username===undefined,  // 登录上为false ，未登录为true
          drawer: false
        }
      },
      // mounted(){
      //   console.log(this.$store.state.adminUser.username===undefined)
      // },
      methods:{
        // 去登录
        goLogin(){
          this.$router.push('/home/login')
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        backLogin(){
          this.$store.commit('backLogin')
        }
      }
    }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .span1{
    display: inline-block;
    height: 60px;
    margin-right: 40%;
    color: black;
    font-size: 20px;
    font-weight: bold;
    font-family: 楷体;
  }
  .el-dropdown{
    width: 100%;
  }
  .backLogin{
    margin: 5px;
    text-align: center;
  }
  .backLogin-p{
    font-size: 25px;
    color: #222222;
  }
</style>
