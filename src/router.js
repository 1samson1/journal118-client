import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Error404 from '@/views/Error404'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path:'/login/',
            component: Login
        },
        {
            path:'*',
            component: Error404
        }
    ],
})