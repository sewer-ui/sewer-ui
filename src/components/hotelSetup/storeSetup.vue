<template>
    <div>
        <div class="pad0-20 alignLeft">
            <h1 class="ft14 setuphead">门店管理</h1>
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
                        门店名称
                    </Col>
                    <Col offset="1" span="5">
                        <Input v-model="value" placeholder="Enter something..." style="width: 300px;" /> 
                    </Col>
                </Row>
            
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        门店地址
                    </Col>
                    <Col offset="1" span="5">
                    <Input v-model="value" placeholder="Enter something..." style="width: 300px;" /> 
                    </Col>
                    <Col span="15">
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        门店经纬度
                    </Col>
                    <Col offset="1" span="5">
                        <Input v-model="value" placeholder="Enter something..." style="width: 300px;" /> 
                    </Col>
                    <Col span="2" offset="1" class="alignLeft">
                        查询经纬度
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        联系电话
                    </Col>
                    <Col span="5" offset="1">
                    <Input v-model="value" placeholder="Enter something..." style="width: 300px;" /> 
                    </Col>
                    <Col span="15">
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        门店简介
                    </Col>
                    <Col span="9" offset="1">
                        <Input v-model="value" type="textarea" :autosize="{minRows: 3,maxRows: 5}" placeholder="Enter something..." />
                    </Col>
                </Row>
                <Row class="InfoFrom pad20-bottom">
                    <Col span="2" class="alignRight">
                        门店地址
                    </Col>
                    <Col offset="1" span="5" class="alignLeft">
                        <Checkbox label="信用卡">信用卡</Checkbox>
                        <Checkbox label="健身房">健身房</Checkbox>
                        <Checkbox label="游泳池">游泳池</Checkbox> 
                    </Col>
                    <Col span="15">
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
