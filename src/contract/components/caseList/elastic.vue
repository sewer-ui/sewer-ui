<template>
    <div class="elasticBox">
     <div class="bg-withe elastic">
          <p class="mar20-bottom" >
              <span class="lablebox">公司名字：</span><Input v-model="company" placeholder="请输入公司名字" style="width: 300px" />
          </p>
          <p class="mar20-bottom">
            <span class="lablebox">邮箱：</span><Input v-model="mailbox" placeholder="请输入邮箱"  style="width: 300px" />
          </p>
          <p class="mar20-bottom" >
             <span class="lablebox">备注：</span><Input v-model="remarks" type="textarea" :rows="4" placeholder="备注" style="width: 300px"/>
          </p>
          <div>
               <Button type="primary">提交</Button>
          </div>
              
     </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                company:'',
                mailbox:'',
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
    /* background: rgba(0, 0, 0, 0.7); */
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