# Paper

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##制作首页App组件（Header区域，路由区域，Tabbar区域）
  1.顶部header区域用mint-ui中的header组件   —— 官网看使用方法
    安装mint-UI    npm install mint-ui --save
    设置完header后，内容区域会被header区域遮盖，给APP容器加padding-top
  
   2.Tabbar区域，用mui中的Tabbar组件，引入样式——mui.css
     改图标并且导入所需要用到的css样式及ttf文件
     修改路由<router-link>,设置高亮
     
   3.中间区域 <router-view>

##点击Tabber路由链接，展示对应的组件
   1.创建各个组件
   2.引入路由index.js中
   3.在App中放坑<router-view>
   
##制作Home组件
   1.轮播图区域，使用mint-UI组件，默认轮播图高度为零，需要自己添加样式

##制作六宫格
   1.下载阿里矢量图标库图标
   2.设置图标和字体大小

##组件切换动画
   右进左出
   
##制作六宫格链接

##商品咨询页面的制作

##我的页面制作
   mui组件
   
    
  
  
  
  
