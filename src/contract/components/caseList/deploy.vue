<template>
    <div class="elasticBox">
     <div class="bg-withe elastic">
          <p class="mar20-bottom" >
              <span class="lablebox">url：</span><Input v-model="company" placeholder="请输入公司名字" style="width: 300px" />
          </p>
          <p class="mar20-bottom" >
             <span class="lablebox">代码：</span><Input v-model="remarks" type="textarea" :rows="4" placeholder="备注" style="width: 300px"/>
          </p>
          <div>
               <Button type="primary">执行合约</Button>
          </div>
     </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                company:'',
                remarks:'',
            }
    },
    created(){},
       
    }
</script>

<style lang="css" scope>
.lablebox{
    display: inline-block;
    width: 60px;
    text-align: left;
}
.elasticBox{
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
     align-items:center;

}
.elastic{
    width: 500px;
    height: 400px;
    padding: 60px 0;
    border-radius: 5px;
    box-shadow:0px 2px 13px 0px rgba(58,62,64,0.31);
}
</style>