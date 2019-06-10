import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import storeSetup from '@/components/hotelSetup/storeSetup'
import roomType from '@/components/hotelSetup/roomType'
import roomSetup from '@/components/hotelSetup/roomSetup'
import orderStore from '@/components/order/orderStore'
import settlement from '@/components/settlement/settlement'
import calendar from '@/components/calendar/calendar'
import login from '@/components/login/login'
import index from '@/components/index/index'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/orderStore',
            name: 'orderStore',
            component: orderStore
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: calendar
        },
        {
            path: '/settlement',
            name: 'settlement',
            component: settlement
        },
        {
            path: '/storeSetup',
            name: 'storeSetup',
            component: storeSetup
        },
        {
            path: '/roomSetup',
            name: 'roomSetup',
            component: roomSetup
        },
        {
            path: '/roomType',
            name: 'roomType',
            component: roomType
        },
    ]
})