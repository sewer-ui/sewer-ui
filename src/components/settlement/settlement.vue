<template>
    <div>
        <div class="pad0-20 alignLeft">
            <h1 class="ft14 setuphead">结算中心</h1>
            <div>
                
                <Row class="InfoFrom pad20-bottom">
                    <Col span="12">
                        <Select v-model="model1" style="width:200px;margin-right:30px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="model1" style="width:200px;margin-right:30px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </Col>
                    <Col span="12" class="alignRight">
                        <span class="green">导出明细</span>
                        <span class="green margin20-left">体现设置</span>
                    </Col>
                </Row>
                <!-- <span>共0个订单，订单金额¥6000，可结算金额¥5000</span> -->
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
                        title: '记账日期',
                        key: 'name'
                    },
                    {
                        title: '订单号',
                        key: 'age'
                    },
                    {
                        title: '结算金额',
                        key: 'address'
                    },
                    {
                        title: '结算状态',
                        key: 'date'
                    },
                    {
                        title: '结算时间',
                        key: 'room'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '提现'),
                                // h('Button', {
                                //     props: {
                                //         type: 'error',
                                //         size: 'small'
                                //     },
                                //     on: {
                                //         click: () => {
                                //             this.remove(params.index)
                                //         }
                                //     }
                                // }, 'Delete')
                            ]);
                        }
                    }

                ],
                data1: [
                    {
                        name: '2019-10-03',
                        age: 'TCHS1234556',
                        address: '¥5000',
                        date: '已完成',
                        room:'2019-10-03',
                    },
                    {
                        name: '2019-10-03',
                        age: 'TCHS1234556',
                        address: '¥5000',
                        date: '已完成',
                        room:'2019-10-03',
                    },{
                        name: '2019-10-03',
                        age: 'TCHS1234556',
                        address: '¥5000',
                        date: '已完成',
                        room:'2019-10-03',
                    },{
                        name: '2019-10-03',
                        age: 'TCHS1234556',
                        address: '¥5000',
                        date: '已完成',
                        room:'2019-10-03',
                    },{
                        name: '2019-10-03',
                        age: 'TCHS1234556',
                        address: '¥5000',
                        date: '已完成',
                        room:'2019-10-03',
                    }
                ]
                }
        }
    }
</script>

<style lang="css" scope>
    .margin20-left{
        margin-left: 20px;
    }
    .lineBottom{
            border-bottom: 1px solid #bbb;
    }
    .green{
        color: #259b24;
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
