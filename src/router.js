
import { createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Reg from '@/views/Reg.vue'
import Account from '@/views/Account.vue'
import Journal from '@/views/Journal.vue'
import Admin from '@/views/Admin.vue'
import Error404 from '@/views/Error404.vue'



export default () => {

    return createRouter({
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
                path:'/account/',
                name:'account',
                component: Account
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
        ]
    })
}
