<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../lib/img/head/shuijiao.jpg">
            <div class="mui-media-body">
              <h1>幸福</h1>
              <p class='mui-ellipsis'>
                <span>发表时间：2019-12-23 12:20:34</span>
                <span>点击：0次</span>
              </p>
            </div>
          </a>
        </li>

        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../lib/img/head/muwu.jpg">
            <div class="mui-media-body">
              <h1>木屋</h1>
              <p class='mui-ellipsis'>
                <span>发表时间：2019-12-23 12:25:34</span>
                <span>点击：0次</span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../lib/img/head/cbd.jpg">
            <div class="mui-media-body">
              <h1>CBD</h1>
              <p class='mui-ellipsis'>
                <span>发表时间：2019-12-23 12:26:34</span>
                <span>点击：0次</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "talk",
      data() {
        return {
        };
      },
      created() {
          this.$axios.get('/home/talk')
            .then( res => {
              console.log(res)
            })
      },
      methods: {
      }
    }
</script>

<style>
  .mui-table-view h1{
    font-size: 14px;
  }
  .mui-ellipsis span{
    font-size: 12px;
    color: #0062cc;
  }
  /* 两边对齐 */
  .mui-ellipsis{
    display: flex;
    justify-content: space-between;
  }
</style>
