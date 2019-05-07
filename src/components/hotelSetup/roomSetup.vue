<template>
    <div>
        <div class="pad0-20 alignLeft">
            <h1 class="ft14 setuphead">房型管理/添加房型</h1>
            <div class="line"></div>
            <div class="setup">
                <Row>
                    <Col span="6">
                        <span class="setupBtn withe radius2 alignCenter">
                            基本设置
                        </span>
                    </Col>
                    <Col span="6" offset="12" class="alignRight">
                        <Select v-model="model1" style="width:200px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </Col>
                </Row>
            </div>
            <div class="line"></div>
            <p class="ft14 setuphead">门店管理</p>
            <div class="storeInfo">
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        房型名称
                    </Col>
                    <Col offset="1" span="5">
                        <Input v-model="value" placeholder="Enter something..." style="width: 300px;" /> 
                    </Col>
                </Row>
            
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        门市价
                    </Col>
                    <Col offset="1" span="5">
                    <Input v-model="value" placeholder="Enter something..." style="width: 300px;" /> 
                    </Col>
                    <Col span="15">
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        房间数量
                    </Col>
                    <Col offset="1" span="5">
                        <Input v-model="value" placeholder="Enter something..." style="width: 300px;" /> 
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        房型特色
                    </Col>
                    <Col span="6" offset="1">
                        <Input v-model="value" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="Enter something..." />
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        设置
                    </Col>
                    <Col offset="1" span="5" class="alignLeft">
                        <Checkbox label="免费wifi">免费wifi</Checkbox>
                        <Checkbox label="24小时热水">24小时热水</Checkbox>
                        <Checkbox label="空调">空调</Checkbox> 
                        <Checkbox label="免费wifi">免费wifi</Checkbox>
                        <Checkbox label="24小时热水">24小时热水</Checkbox>
                        <Checkbox label="空调">空调</Checkbox> 
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        支付方式
                    </Col>
                    <Col offset="1" span="5" class="alignLeft">
                        <Checkbox label="免费wifi">预付全款</Checkbox>
                        <Checkbox label="24小时热水">到店付</Checkbox>
                        <span class="ft12 green"> 开通到店付</span>
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        取消规则
                    </Col>
                    <Col offset="1" span="5" class="alignLeft">
                        <Checkbox label="免费wifi">预付全款</Checkbox>
                        <Checkbox label="24小时热水">到店付</Checkbox>
                        <span class="ft12 ">
                            <Input v-model="value" placeholder="倒计时天数" style="width: 80px" />
                            </span>
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        分佣比例
                    </Col>
                    <Col offset="1" span="5" class="alignLeft">
                        <span class="ft12 ">
                            <Input v-model="value" placeholder="倒计时天数" style="width: 80px" />
                            <span>%</span>
                        </span>
                    </Col>
                </Row>
                <div>
                    
                    <Row  class="InfoFrom pad20-bottom">
                        <Col offset="3" span="2" class="alignRight">
                            <p class="ft14 withe btn alignCenter">保存</p>
                        </Col>
                    </Row>
                    
                </div>
            </div>
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
                value:""
                }
        }
    }
</script>

<style lang="css" scope>
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
    .line{
        border: 1px solid #bbb;
        widows: 100%;
        height: 1px;
        background: #ddd;
    }
    .setup{
        padding: 15px 0 12px;
    }
    .setupBtn{
        display: inline-block;
        width: 65px;
        height: 33px;
        line-height: 33px;
        background: #259b24;
    }
    .storeInfo{
        padding-top: 12px;
    }
    .InfoFrom{
        /* width: 100%; */
        /* height: 30px; */
        line-height: 30px;

    }
    .pad20-bottom{
        padding-bottom: 20px;
    }
</style>
