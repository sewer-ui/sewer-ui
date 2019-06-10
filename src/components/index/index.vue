<template>
    <div>
        <div class="head ft20 withe">房间管理系统</div>
        <div class="centent">
            <div class="cententLeft">
                <ul>
                    <li class="leftTit" @click="btnList(index)" v-for="(item,index) in listTitle" :key=index>{{item}}</li>
                </ul>
            </div>
            <div class="cententRight alignLeft">
                <roomType v-show='flag == "0"'></roomType>
                <roomSetup v-show='flag == "1"'></roomSetup>
                <orderStore v-show='flag == "2"'></orderStore>
                <settlement v-show='flag == "3"'></settlement>
                <storeSetup v-show='flag == "4"'></storeSetup>
                <calendar v-show='flag == "5"'></calendar>
            </div>
        </div>
    </div>
  
</template>
// import   from ''

<script>
    import storeSetup from '@/components/hotelSetup/storeSetup'
    import roomType from '@/components/hotelSetup/roomType'
    import roomSetup from '@/components/hotelSetup/roomSetup'
    import orderStore from '@/components/order/orderStore'
    import settlement from '@/components/settlement/settlement'
    import calendar from '@/components/calendar/calendar'
    export default {
        data () {
            return {
                flag:'0',
                theme1: 'login',
                listTitle:['房型管理','添加房型','订单管理','结算中心','门店管理','房态管理']
            }
        },
        components:{
            storeSetup,
            roomType,
            roomSetup,
            orderStore,
            settlement,
            calendar
        },
        methods:{
            btnList(e){
                this.flag = e;
            }
        }
    }
</script>

<style lang="css" scope>
.leftTit{
    height: 60px;
    border-bottom: 1px solid #bbb;
}
.head{
    width: 100%;
    height: 100px;
    background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(red, blue); /* 标准的语法（必须放在最后） */ 
    display: flex; 
    justify-content: flex-start ;
    align-items: center;
    padding-left: 20px;
}
.centent{
     /* display: flex;  */
    /* justify-content: flex-start ; */
    /* align-items: center; */
}
.cententLeft{
    width: 200px;
    height: 100%;
    float: left;
}
.cententRight{
    width: 80%;
    float: left;
}
.leftTit{
    background: #2eda98;
    display: flex; 
    justify-content: center;
    align-items: center;
}
</style>
