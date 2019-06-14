<template>
  <div class="caseList-wrap">
    <div class="nav-wrap">
      <div class="left-box">
        <div class="logo">
          <span class="logo-name">TCBaaS</span>
          <span>开放服务平台</span>
        </div>
        <div class="left-nav">
          <span>控制台</span>
        </div>
      </div>
      <div class="right-box">
        <div class="user-info">
          <img :src="userInfo.userImg">
          <span>{{userInfo.userName}}</span>
        </div>
        <span class="logout-btn active-color">退出</span>
      </div>
    </div>
    <div class="content-container">
        <div class="content-left">
              <Row>
        <i-col span="8">
            <Menu :theme="theme2">
                <Submenu key="1">
                    <template slot="title">
                        <!-- <Icon type="ios-paper"></Icon> -->
                        内容管理
                    </template>
                    <Menu-item key="1-1">文章管理</Menu-item>
                    <Menu-item key="1-2">评论管理</Menu-item>
                    <Menu-item key="1-3">举报管理</Menu-item>
                </Submenu>
                <Submenu key="2">
                    <template slot="title">
                        <!-- <Icon type="ios-people"></Icon> -->
                        用户管理
                    </template>
                    <Menu-item key="2-1">新增用户</Menu-item>
                    <Menu-item key="2-2">活跃用户</Menu-item>
                </Submenu>
                <Submenu key="3">
                    <template slot="title">
                        <!-- <Icon type="stats-bars"></Icon> -->
                        统计分析
                    </template>
                    <Menu-group title="使用">
                        <Menu-item key="3-1">新增和启动</Menu-item>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item key="3-4">用户留存</Menu-item>
                    </Menu-group>
                </Submenu>
            </Menu>
        </i-col>
    </Row>
        </div>
        <div class="content-right"></div>
      </div>

    <foot></foot>
  </div>
</template>
<script>
import foot from "../components/foot";

export default {
  data() {
    return {
      userInfo: {
        userName: "admin",
        userImg: "../../../static/img/userImg.jpeg"
      }
    };
  },
  components: {
    foot
  }
};
</script>
<style lang="less" scoped>
.nav-wrap {
  min-width: 1300px;
  height: 73px;
  background-color: #0b8aee;
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
    justify-content: start;
    align-items: center;
    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      .logo-name {
        font-size: 24px;
      }
    }
    .left-nav {
      margin: 0 40px;
      color: #fff;

      span {
        margin-right: 45px;
        font-size: 24px;
      }
    }
  }
  .right-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .user-info {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
      }
      span {
        margin-left: 5px;
        font-size: 14px;
        color: #fff;
      }
    }
    .logout-btn {
      color: #fff;
      font-size: 14px;
      margin-left: 20px;
      position: relative;
      &::before {
        height: 70%;
        content: "";
        position: absolute;

        left: -10px;
        top: 50%;
        transform: translateY(-50%);
        border-right: 1px solid #ccc;
      }
    }
  }
}

.content-container {
  background: #f5f6f7;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-left {
    // width: 170px;
    min-width: 170px;
    min-height: 684px;
    box-shadow: 0 0 5px 3px #f3f3f3;
    background-color: #fff;
  }
}
</style>
