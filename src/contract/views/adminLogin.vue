<template>
  <div>
    <div class=".nav">
      <tab></tab>
    </div>
    <div class="bglogin">
      <div class="imgBox">
        <img src="../../assets/img/bg2.png" alt>
      </div>
      <div class="login">
        <h3 class="logTit">登陆</h3>
        <div class="logBox">
          <div class="mar20-bottom">
            <Input v-model="username" placeholder="用户名"/>
          </div>
          <div class="mar20-bottom">
            <Input type="password" v-model="psw" placeholder="密码"/>
          </div>
          <div @click="loginBtn">
            <Button type="success" class="btn" long>登陆</Button>
          </div>
        </div>
      </div>
    </div>
    <div>
        <foot></foot>
    </div>
  </div>
</template>
<script>
import tab from "../components/nav";
import foot from "../components/foot";

export default {
  data() {
    return {
      username: "",
      psw: ""
    };
  },
  components: {
    tab,
    foot
  },
  created() {},
  methods: {
    error(nodesc) {
      this.$Notice.error({
        title: "请输入正确的用户名密码",
      });
    },
    loginBtn() {
      if (this.username != "admin" || this.psw != "admin") {
        this.error();
        return;
      }
      if (this.psw == "admin" && this.username == "admin") {
           this.$router.push({path: '/caseList'});
      }
    }
  }
};
</script>

<style lang="less" scope>
.bglogin {
  width: 100%;
  background: url("../../../static/img/bg1.png") no-repeat 50%;
  min-width: 1300px;
  height: 755px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .logBox {
    padding: 30px;
  }
  .logTit {
    font-family: Microsoft YaHei UI;
    font-weight: 400;
    font-size: 22px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #6e6e6e;
    background: #e3e3e3;
  }

  .imgBox {
    width: 574px;
    height: 304px;
    margin-right: 100px;
  }
  .imgBox img {
    width: 100%;
  }
  .login {
    width: 360px;
    border-radius: 5px;
    background: #fff;
  }
  .btn {
    background-color: #0b8aee;
    border: none;
    height: 36px;
    margin-bottom: 20px;
  }
  .btn:hover {
    background-color: #0b8aee;
    border: none;
  }
}
</style>