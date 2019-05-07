<template>
    <div>
        <div class="pad0-20 alignLeft">
            <h1 class="ft14 setuphead">房型管理</h1>
            <span class="hotelRoom alignCenter borderline">
                希尔顿酒店
            </span>
            <span class="hotelRoom alignCenter green ft16">
                <Icon type="md-add-circle" />
                <span class="ft12">添加门店</span>
            </span>
            <div class="lineBottom marBottom"></div>
            <Table  size="large" stripe border :columns="columns7" :data="data6"></Table>
            <div class="marTop ">
                <span class="setupBtn alignCenter bgGreen withe">
                    添加房型
                </span>
                <span class="setupBtn alignCenter green">
                    编辑门店信息
                </span>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aa:'1000',
                columns7: [
                    {
                        title: '房型名称',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '门市价',
                        key: 'age'
                    },
                    {
                        title: '间数',
                        key: 'address'
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
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '标准间',
                        age: '¥500',
                        address: '10间'
                    },
                    {
                        name: '标准间',
                        age: '¥500',
                        address: '10间'
                    },
                    {
                        name: '标准间',
                        age: '¥500',
                        address: '10间'
                    },
                    {
                        name: '标准间',
                        age: '¥500',
                        address: '10间'
                    },
                    {
                        name: '标准间',
                        age: '¥500',
                        address: '10间'
                    },
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style lang="css" scope>
    .marBottom{
        margin-bottom: 20px;
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
    .lineBottom{
        border-bottom: 1px solid #bbb;
    }
    .hotelRoom{
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
    }
    .green{
        color: #279c26;
    }
    .marTop{
        margin-top: 22px;
    }
    .borderline{
        border-left: 1px solid #bbb;
        border-right: 1px solid #bbb;
        border-top: 1px solid #bbb;
    }

    .setup{
        padding: 15px 0 12px;
    }
    .setupBtn{
        display: inline-block;
        width: 80px;
        height: 40px;
        line-height: 40px;
        
    }
    .bgGreen{
        background: #259b24;
    }
</style>
