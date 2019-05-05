import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import storeSetup from '@/components/hotelSetup/storeSetup'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/storeSetup',
            name: 'storeSetup',
            component: storeSetup
        },
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }
    ]
})