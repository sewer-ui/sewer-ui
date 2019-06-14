<template>
    <div class="bg">
      <div class="login"> 
            <div class="mar20-bottom">
                    <Input v-model="value" placeholder="用户名" style="width: 300px" />
            </div>
             <div class="mar20-bottom">
                    <Input type="password" v-model="value" placeholder="密码" style="width: 300px" />
            </div>
            <div @click="loginBtn">
                <Button type="success" long>登陆</Button>
            </div>
      </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'login',
                value:""
            }
        },
        methods:{
            loginBtn(){
                this.$router.push({path: '/index'});
            }
        }
    }
</script>

<style lang="css" scope>

.login{
    width: 300px;
}
.bg{
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(red, blue); /* 标准的语法（必须放在最后） */ 
    display: flex; 
     justify-content:center;
      align-items: center;
}
    
</style>
