<template>
  <div>
    <div class=".nav">
      <tab></tab>
    </div>
    <div>
      <div class="header">
        <p>关于我们</p>
      </div>
      <div class="bg-withe alignLeft centent">
        <h3 class="cenTitle">平台介绍</h3>
        <p class="cenText">
          JUICE开放服务平台是矩阵元技术（深圳）有限公司为开发者倾情打造的一款基于区块链底层技术开发智能合约及应用的一个学习交流平台。矩阵元（JUZIX），是全球分布式账本技术的领导厂商，致力于在数字化时代提供分布式数据交换及协同计算服务。为数据的流动提供全方位的治理服务，让数据交换与协同更加简单、安全、高效。更多矩阵元相关信息请查看矩阵元官网：https://www.juzix.net
        </p>
        <h3 class="cenTitle">关于我们</h3>
        <div class="row alignCenter">
          <div v-for="(item,index) in nameList" :key=index>
            <div class="portrait">
              <img :src=item.img1 alt="" class="imgbox">
            </div>
            <span class="namebox">
              {{item.name}}
            </span>
          </div>
        </div>
        <h3 class="cenTitle">公司地址</h3>
        <p class="cenText">
          地址：北京：北京市朝阳区酒仙桥北路IT产业园同程艺龙大厦
        </p>
        <p class="aderss">
          <img src="../../../static/img/bg6.png" alt="">
        </p>
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
      nameList:[
        {name:'一遍上人',img1:'../../../static/bg4.jpg'}
        ,{name:'半梦半醒',img1:'../../../static/bg3.jpg'},
        {name:'LQ',img1:'../../../static/bg5.jpg'}]
    };
  },
  components: {
    tab,
    foot
  },
  created() {},
};
</script>

<style lang="less" scope>
.aderss{
  margin-top: 20px;
  width: 1000px;
  height: 585px;
  margin-bottom: 80px;
}
.aderss img{
  width: 100%;
}
.namebox{
  font-size: 16px;
  color: #666;
}
.row{
  display: flex;
  flex-wrap: wrap;
   justify-content:space-between;
}
.portrait{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-bottom: 15px;
}
.portrait .imgbox {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 100%;
}
.cenText{
      font-family: Microsoft YaHei UI Light,Microsoft YaHei UI Regular,Microsoft YaHei UI;
    font-weight: 300;
    font-size: 15px;
    color: #666;
    line-height: 36px;
}
.centent{
      margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding-left: 50px;
}
.cenTitle{
      font-family: Microsoft YaHei UI;
    font-weight: 400;
    font-size: 24px;
    color: #202020;
    margin-top: 50px;
    margin-bottom: 40px;
}
.header{
  position: relative;
  background: url('../../../static/img/bg2.png') no-repeat 50%;
      height: 200px;
    font-size: 48px;
    text-align: center;
    line-height: 200px;
    background-size: 100% 100%;
    color: #fff;
}
.header>p::after {
    position: absolute;
    top: 50%;
    left: 30%;
    width: 10%;
    height: 0;
    border: 1px solid #fff;
    content: "";
}
.header>p::before {
    position: absolute;
    top: 50%;
    right: 30%;
    width: 10%;
    height: 0;
    border: 1px solid #fff;
    content: "";
}
</style>