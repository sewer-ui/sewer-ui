<template>
  <div>
    1
  </div>
</template>
<script>

export default {
  data() {
    return {
     
    };
  },
  created() {},
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