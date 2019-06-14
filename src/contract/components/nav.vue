<template>
  <div class="nav-wrap">
      <div class="left-box">
        <div class="logo">
          <span>TBaaS</span>
          <span>开放服务平台</span>
        </div>
        <div class="left-nav"></div>
      </div>
      <div class="right-box"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftNav: [
        { tit: "首页", path: "" },
        { tit: "文档", path: "" },
        { tit: "关于我们", path: "" }
      ],
      rightNav: [{ tit: "控制台", path: "" }]
    };
  }
};
</script>
<style lang="less" scoped>
.nav-wrap {
  min-width: 1300px;
  height: 73px;
  background-color: #2b303b;
  z-index: 100000;
    color: #999;
  .nav-box {
    height: 45px;
    min-width: 1250px;
    padding: 13px 0;
    margin: 0 auto;
  }
}
</style>
