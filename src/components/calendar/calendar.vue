<template>
    <div class="centent">
        <h1 class="ft14 setuphead alignLeft">房态管理</h1>
        <div class="line"></div>
        <div id="calendar" class="calendar">
            <!-- 年份 月份 -->
            <div class="month">
                <ul>
                    <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
                    <!-- <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li> -->
                    <li class="arrow" ></li>
                    <li class="year-month" @click="pickYear(currentYear,currentMonth)">
                        <span class="choose-year">{{ currentYear }}</span>
                        <span class="choose-month">{{ currentMonth }}月</span>
                    </li>
                    <li class="arrow" ></li>
                    <!-- <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li> -->
                </ul>
            </div>
        <div class="line"></div>
            <!-- 星期 -->
            <ul class="weekdays">
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li style="color:red">六</li>
                <li style="color:red">日</li>
            </ul>
            <!-- 日期 -->
            <ul class="days">
                <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
                <li  v-for="(dayobject,index) in days" :key=index>
                         <div class="daysbox" :class="{'boxActive':dayobject.active && dayobject.active.flag == 1,'boxblueActive':dayobject.active && dayobject.active.flag ==2}">
                            <!--本月-->
                            <!--如果不是本月  改变类名加灰色-->
                            
                            <span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">{{ dayobject.day.getDate() }}</span>
                            <!--如果是本月  还需要判断是不是这一天-->
                            <span v-else>
                        <!--今天  同年同月同日-->
                                <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()" class="active">{{ dayobject.day.getDate() }}</span>
                                <span v-else>{{ dayobject.day.getDate() }}</span>
                            </span>
                        </div>
                </li>
            </ul>
        </div>
        <div class="calenderFood mar20-bottom mar20-top">
            <div>
                <span class="ft14 col-10 mar20-right">标准件</span>
                <Input class="mar20-right" v-model="value" placeholder="售价" style="width: 200px" />
                <Input class="mar20-right" v-model="value" placeholder="8间" style="width: 200px" />
                <span class="ft12 col-e72 mar20-right">剩余5件</span>
                <span class="btnSub">保存</span>
            </div>
             <div class="mar20-top">
                <span class="ft14 col-10 mar20-right">标准件</span>
                <Input class="mar20-right" v-model="value" placeholder="售价" style="width: 200px" />
                <Input class="mar20-right" v-model="value" placeholder="8间" style="width: 200px" />
                <span class="ft12 col-e72 mar20-right">剩余5件</span>
                <span class="btnSub">保存</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            currentDay: 1,
            currentMonth: 1,
            currentYear: 1970,
            currentWeek: 1,
            days: [],
            list:[{'active':13,'flag':1},{'active':14,'flag':1},{'active':12,'flag':1},{'active':15,'flag':2}]
            }
        },
         created() {  //在vue初始化时调用
            this.initData(null);
        },
        methods: {
            initData(cur) {
                var leftcount=0; //存放剩余数量
                var date;


                if (cur) {
                    date = new Date(cur);
                } else {
                    var now=new Date();
                    var d = new Date(this.formatDate(now.getFullYear() , now.getMonth() , 1));
                    d.setDate(35);
                    date = new Date(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
                }
                this.currentDay = date.getDate();
                this.currentYear = date.getFullYear();
                this.currentMonth = date.getMonth() + 1;

                this.currentWeek = date.getDay(); // 1...6,0
                if (this.currentWeek == 0) {
                    this.currentWeek = 7;
                }
                var str = this.formatDate(this.currentYear , this.currentMonth, this.currentDay);
                this.days.length = 0;
                // 今天是周日，放在第一行第7个位置，前面6个
                //初始化本周
                for (var i = this.currentWeek - 1; i >= 0; i--) {
                    var d = new Date(str);
                    d.setDate(d.getDate() - i);
                    var dayobject={}; //用一个对象包装Date对象  以便为以后预定功能添加属性
                    dayobject.day=d;
                    this.days.push(dayobject);//将日期放入data 中的days数组 供页面渲染使用
                }
                //其他周
                for (var i = 1; i <= 35 - this.currentWeek; i++) {
                    var d = new Date(str);
                    d.setDate(d.getDate() + i);
                    var dayobject={};
                    dayobject.day=d;
                    this.days.push(dayobject);
                }
                for(let b of this.list){
                    for(let c of this.days){
                        if(b.active == c.day.getDate()){
                           
                            c.active = b;

                             console.log(c)
                        }
                    }
                    console.log(b.active)
                }
                // 
                console.log('666', this.days)

            },
            pickPre: function(year, month) {

                // setDate(0); 上月最后一天
                // setDate(-1); 上月倒数第二天
                // setDate(dx) 参数dx为 上月最后一天的前后dx天
                var d = new Date(this.formatDate(year , month , 1));
                d.setDate(0);
                this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
            },
            pickNext: function(year, month) {
                var d = new Date(this.formatDate(year , month , 1));
                d.setDate(35);
                this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
            },
            pickYear: function(year, month) {
                alert(year + "," + month);
            },

            // 返回 类似 2016-01-02 格式的字符串
            formatDate: function(year,month,day){
                var y = year;
                var m = month;
                if(m<10) m = "0" + m;
                var d = day;
                if(d<10) d = "0" + d;
                return y+"-"+m+"-"+d
            },

        },
    }
</script>
<style scope>
.btnSub{
    display: inline-block;
    padding: 0 35px;
    border:1px solid #3f51b5;
    height: 40px;
    line-height: 40px;
    background: #259b24;
    border-radius: 4px;
}
        .calenderFood{
            width:100%;
            border: 1px solid #bbb;
            margin-top: 20px;
            padding: 45px 25px;
            border-radius: 4px;
        }
        ul li{
            list-style: none;
        }
        .boxActive{
            background: #e51c23;
        }
         .boxblueActive{
            background: #3f51b5;
        }
        .centent{
            margin: 0 50px;
        }
         .setuphead{
                padding: 22px 0;
                color: #101010;
            }
            .line{
                border: 1px solid #bbb;
                widows: 100%;
                height: 1px;
                margin: 40px 0;
                background: #ddd;
            }
        .calendar{
            width:100%;
            border: 1px solid #bbb;
            margin-top: 20px;
            padding: 20px 25px;
            border-radius: 4px;
            /* box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12); */
        }
        .month {
            width: 100%;
            margin-bottom: 20px;
            /* background: #00B8EC; */
        }
        .month ul {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
        }
        .year-month {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
        .year-month:hover {
            background: rgba(150, 2, 12, 0.1);
        }
        .choose-year {
            padding-left: 20px;
            padding-right: 20px;
        }
        .choose-month {
            text-align: center;
            font-size: 1.5rem;
        }
        .arrow {
            padding: 30px;
        }
        .arrow:hover {
            /* background: rgba(100, 2, 12, 0.1); */
        }
        .month ul li {
            color: #141414;
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        .weekdays {
            margin: 0;
            padding: 10px 0;
            /* background-color: #00B8EC; */
            display: flex;
            flex-wrap: wrap;
            color: #141414;
            font-size: 14px;
            justify-content: space-around;
        }
        .weekdays li {
            display: inline-block;
            width: 13.6%;
            text-align: center;
        }
        .days {
            padding: 0;
            background: #FFFFFF;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .daysbox{
            width: 130px;
            height: 95px;
            line-height: 95px; 
            display: inline-block;
            border-bottom: 1px solid #bbb;
        }
        .days li {
            list-style-type: none;
            display: inline-block;
            width: 14.2%;
            /* width: 130px; */
            text-align: center;
            /* padding-bottom: 35px;
            padding-top: 35px; */
            font-size: 1rem;
            /* text-align: center; */
            margin: 0 auto;
            color: #000;
        }
        .days li .active {
            /* padding: 6px 10px;
            border-radius: 50%;
            background: #00B8EC;
            color: #fff; */
        }
        .days li .other-month {
            padding: 5px;
            color: gainsboro;
        }
        .days li:hover {
            /* background: #e1e1e1; */
        }
    </style>
