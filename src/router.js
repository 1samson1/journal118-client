import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Reg from '@/views/Reg'
import Profile from '@/views/Profile'
import Journal from '@/views/Journal'
import Admin from '@/views/Admin'
import Error404 from '@/views/Error404'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/login/',
            name:'login',
            component: Login
        },
        {
            path:'/reg/',
            name:'reg',
            component: Reg
        },
        {
            path:'/profile/',
            name:'profile',
            component: Profile
        },
        {
            path:'/journal/',
            name:'journal',
            component:Journal
        },
        {
            path:'/admin/',
            name:'admin',
            component:Admin
        },
        {
            path:'*',
            component: Error404
        }
    ],
})