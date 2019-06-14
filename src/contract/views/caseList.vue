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
        <span class="logout-btn active-color" @click="logout">退出</span>
      </div>
    </div>
    <div class="content-container">
      <div class="content-left">
        <Menu active-name="1-2" :open-names="['1']" @on-select="selecItme">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-analytics"/>节点
            </template>
            <MenuItem name="1-1">创建节点</MenuItem>
            <MenuItem name="1-2">我的节点</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing"/>合约
            </template>
            <MenuItem name="2-1">部署</MenuItem>
            <MenuItem name="2-2">执行合约</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="content-right">
        <Card class="card" v-if="activeViewIndex==='1-2'">
          <span class="status-icon" :class="{'join-status':true}"></span>
          <div class="ip-box">
            <span>ip:</span>
            <span>127.0.10.10</span>
          </div>
          <div class="url-box">
            <span>url:</span>
            <span>https://www.baidu.com</span>
          </div>
          <div class="card-btn">
            <Button class="stop" type="error">停止</Button>
            <Button type="success">加入</Button>
          </div>
        </Card>
        <!-- 创建节点 -->
        <elastic v-if="activeViewIndex==='1-1'"></elastic>
        <!-- 执行合约 -->
        <deploy v-if="activeViewIndex==='2-2'"></deploy>  
        <!-- 部署合约 -->
        <implement v-if="activeViewIndex==='2-1'"></implement>
      </div>
    </div>

    <foot></foot>
  </div>
</template>
<script>
import foot from "../components/foot";

import deploy from "../components/caseList/deploy";
import elastic from "../components/caseList/elastic";
import implement from "../components/caseList/implement";
export default {
  data() {
    return {
      activeViewIndex: "1-2",
      userInfo: {
        userName: "admin",
        userImg: "../../../static/img/userImg.jpeg"
      }
    };
  },
  components: {
    deploy,
    elastic,
    implement,
    foot
  },
  methods: {
    selecItme(e) {
      console.log("e", e);
      this.activeViewIndex = e;

      if (e === "1-1") {
      }
      if (e === "1-2") {
      }
      if (e === "2-1") {
      }
      if (e === "2-2") {
      }
    },
    logout(){
        this.$router.push({path: '/adminLogin'});
    }
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
  .content-right {
    flex: 1;
    min-height: 684px;
    background-color: #fff;
    margin-left: 20px;
    padding: 20px 15px 0;
    background-color: #fff;
    box-sizing: border-box;
    .card {
      width: 400px;
      height: 500px;
      position: relative;
      .status-icon {
        width: 10px;
        height: 10px;
        display: block;
        position: absolute;
        top: 5px;
        left: 5px;
        border-radius: 50%;
        overflow: hidden;
        background-color: red;
      }
      .join-status {
        background-color: #19be6b;
      }
      .ip-box,
      .url-box {
        width: 100%;
        font-size: 20px;
        color: #333;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
      }
      .ip-box {
        & > span:nth-child(1) {
          font-weight: bolder;
        }
      }

      .url-box {
        & > span:nth-child(1) {
          font-weight: bolder;
        }
        & > span:nth-child(2) {
          word-break: break-all;
          text-align: left;
        }
      }
      .card-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        bottom: 20px;
        left: 0;
        .stop {
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
