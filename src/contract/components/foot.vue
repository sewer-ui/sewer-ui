<template>
    <div class="footer">
      <div class="content">
          <div class="customer alignLeft">
              <h4 class="customerTit">客服</h4>
              <p>
                  <span class="iconfont">&#xe61e;</span> 
                  <span>微信：scansi</span>
              </p>
              <p>
                  <span class="iconfont">&#xe727;</span> 
                  <span>QQ：1473993700</span>
              </p>
               <p>
                  <span class="iconfont">&#xe664;</span> 
                  <span> 邮箱：support@juzix.net</span>
              </p>
             
          </div>
          <div class="alignLeft">
              <h4 class="customerTit">联系我们</h4>
              <p>
                  <span class="iconfont">&#xe600;</span> 
                  <span>电话：（+86）021-61050346</span>
              </p>
              <p>
                  <span class="iconfont">&#xe64e;</span> 
                  <span>地址：北京：北京市朝阳区酒仙桥北路IT产业园同程艺龙大厦</span>
              </p>
               <p>
                  <span class="iconfont">&#xe60e;</span> 
                  <span> 官网：https://www.juzix.net</span>
              </p>
          </div>
      </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
    },
    created(){},
       
    }
</script>

<style lang="css" scope>
@font-face {
  font-family: 'iconfont';  /* project id 1243100 */
  src: url('//at.alicdn.com/t/font_1243100_2i6q6l6gd9t.eot');
  src: url('//at.alicdn.com/t/font_1243100_2i6q6l6gd9t.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1243100_2i6q6l6gd9t.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1243100_2i6q6l6gd9t.woff') format('woff'),
  url('//at.alicdn.com/t/font_1243100_2i6q6l6gd9t.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1243100_2i6q6l6gd9t.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.customerTit{
    margin: 0 0 8px;
    font-size: 18px;
    color: #fff;
    font-weight: 400;
}
.customer{
    width: 40%;
    border-right: 1px solid #999;
}
.footer{
    width: 100%;
    color: #a3a4a5;
    font-size: 14px;
    background-color: #3d4450;
}
.content{
    min-width: 1300px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 282px;
    padding: 50px 0;
    line-height: 45px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}
</style>