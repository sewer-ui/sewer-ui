<template>
  <div class="nav-wrap">
    <div class="left-box">
      <div class="logo">
        <span class="logo-name">TCBaaS</span>
        <span>开放服务平台</span>
      </div>
      <div class="left-nav" @click="clickNav">
        <span v-for="(item,index) in leftNav" :key="index" :class="{'active-color':activeIndex===index}" :id="index">{{item.tit}}</span>
      </div>
    </div>
    <div class="right-box">
         <span v-for="(item,index) in rightNav" :key="index">{{item.tit}}</span>
         <span class="login-btn active-color">登录</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        leftNav: [
          { tit: "首页", path: "/adminLogin" },
          { tit: "文档", path: "1" },
          { tit: "关于我们", path: "/myabout" }
        ],
        rightNav: [{ tit: "控制台", path: "" }]
    };
  },
  props:{
    activeIndex:{
      default:0,
      type:Number
    }
  },
  created(){

  },
  methods:{
      clickNav(e){
          if( e.target.id==='') return;
          let index = e.target.id*1
          console.log("e",index)
          // this.activeIndex = index
          if(index == 0){
            this.$router.push({path: '/adminLogin'});
          }
          if(index == 2){
            this.$router.push({path: '/myabout'});
          }
      }
  }
};
</script>
<style lang="less" scoped>
 .active-color{
            color: #0b8aee!important;
        }
.nav-wrap {
  min-width: 1300px;
  height: 73px;
  background-color: #2b303b;
  z-index: 100000;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-sizing: border-box;
  .left-box {
    font-size: 16px;
    display: flex;
    justify-content:start;
    align-items: center;
    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      .logo-name {
        font-size: 20px;
        color: #fff;
      }
    }
    .left-nav{
        margin:0 40px ;
        span{
            margin-right: 45px;
        }
       
    }
  }
  .right-box{
      span{
          color: #fff;
          font-size: 16px;
      }
      .login-btn{
          margin-left: 20px;
      }
  }
}
</style>
