<template>
  <div class="app-container">
<!--    顶部 Header区域-->
    <mt-header fixed title="网上购物系统">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>

<!--    中间路由 <router-view> 区域-->
    <transition>
      <router-view></router-view>
    </transition>


<!--    底部 Tabbar 区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-my" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/search">
        <span class="mui-icon  mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="shopCar">{{ $store.getters.getAllSelectShopCount }}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-my" to="/mine">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      flag:false
    }
  },
  created(){
    // 刚进入页面判断是否在首页
    this.flag = this.$router.path === "/home" ? false : true
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  },
  watch:{
    '$route.path': function (newValue) {
      if (newValue === '/home') {
        this.flag = false
      } else {
        this.flag = true
      }
    }
  }
}
</script>

<style>
  .mint-header.is-fixed{
    z-index: 1000;
  }
  .app-container{
    padding-top: 40px;
    padding-bottom: 50px;
    /* 隐藏组件切换时下边滚动条 */
    overflow-x: hidden;
  }
  /* 组件切换动画 */
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.7s linear;
  }

/*  改类名解决tabbar无法切换的问题*/
  .mui-bar-tab.mui-tab-item-my.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-my {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-my .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-my .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* 设置路由高亮 */
  .router-link-active{
    color: #007aff !important;
  }
</style>
