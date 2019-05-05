<template>
    <div>
        <div class="pad0-20 alignLeft">
            <h1 class="ft14 setuphead">门店管理</h1>
            <div class="line"></div>
            <div class="setup">
                <span class="setupBtn withe radius2 alignCenter">
                    基本设置
                </span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],
                    value: ''
                }
        }
    }
</script>

<style lang="css" scope>
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
</style>
