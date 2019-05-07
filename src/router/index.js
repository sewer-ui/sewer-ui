import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import storeSetup from '@/components/hotelSetup/storeSetup'
import roomType from '@/components/hotelSetup/roomType'
import roomSetup from '@/components/hotelSetup/roomSetup'
import orderStore from '@/components/order/orderStore'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/orderStore',
            name: 'orderStore',
            component: orderStore
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
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})