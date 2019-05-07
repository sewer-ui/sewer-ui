<template>
    <div>
        <div class="pad0-20 alignLeft">
            <h1 class="ft14 setuphead">订单管理</h1>
            <div>
                <Select v-model="model1" style="width:200px;margin-right:30px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model1" style="width:200px;margin-right:30px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model1" style="width:200px;margin-right:30px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <span>共0个订单，订单金额¥6000，可结算金额¥5000</span>
            </div>
            <div class="lineBottom margin20-0"></div>
            <Table stripe :columns="columns1" :data="data1"></Table>
        </div>
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                    cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: '',
                value:"", 
                columns1: [
                    {
                        title: '预定日期',
                        key: 'name'
                    },
                    {
                        title: '客人姓名',
                        key: 'age'
                    },
                    {
                        title: '房费',
                        key: 'address'
                    },
                    {
                        title: '可结算金额',
                        key: 'date'
                    },
                    {
                        title: '门店',
                        key: 'room'
                    },
                    {
                        title: '房型',
                        key: 'roomType'
                    },
                    {
                        title: '间夜',
                        key: 'day'
                    },
                    {
                        title: '订单状态',
                        key: 'state'
                    },
                    {
                        title: '备注',
                        key: 'remarks'
                    },
                    {
                        title: '操作',
                        key: 'operation'
                    }

                ],
                data1: [
                    {
                        name: '2019-10-03',
                        age: '优秀的人',
                        address: '¥500',
                        date: '¥3000',
                        room:'金融街道',
                        roomType:'标准间',
                        day:'2',
                        state:'已完成',
                        remarks:'',
                        operation:'',
                    },
                    {
                        name: '2019-10-03',
                        age: '优秀的人',
                        address: '¥500',
                        date: '¥3000',
                        room:'金融街道',
                        roomType:'标准间',
                        day:'2',
                        state:'已完成',
                        remarks:'',
                        operation:'',
                    },
                    {
                        name: '2019-10-03',
                        age: '优秀的人',
                        address: '¥500',
                        date: '¥3000',
                        room:'金融街道',
                        roomType:'标准间',
                        day:'2',
                        state:'已完成',
                        remarks:'',
                        operation:'',
                    },
                    {
                        name: '2019-10-03',
                        age: '优秀的人',
                        address: '¥500',
                        date: '¥3000',
                        room:'金融街道',
                        roomType:'标准间',
                        day:'2',
                        state:'已完成',
                        remarks:'',
                        operation:'',
                    },
                    {
                        name: '2019-10-03',
                        age: '优秀的人',
                        address: '¥500',
                        date: '¥3000',
                        room:'金融街道',
                        roomType:'标准间',
                        day:'2',
                        state:'已完成',
                        remarks:'',
                        operation:'',
                    },
                   
                ]
                }
        }
    }
</script>

<style lang="css" scope>
 .lineBottom{
        border-bottom: 1px solid #bbb;
    }
.btn{
    width: 100px;
    height: 40px;
    line-height: 40px;
    background: #259b24;
}
    .pad0-20{
        padding:0 20px;
    }
    .setuphead{
        padding: 22px 0;
        color: #101010;
    }
    .margin20-0{
        margin: 20px 0;
    }
    
</style>
