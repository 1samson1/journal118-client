import store from "@/store"
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

 const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            meta:{},
            component: Home
        },
        {
            path:'/login/',
            name:'login',
            meta:{},
            component: Login
        },
        {
            path:'/reg/',
            name:'reg',
            meta:{noLogin:true},
            component: Reg
        },
        {
            path:'/profile/',
            name:'profile',
            meta:{auth:true},
            component: Profile
        },
        {
            path:'/journal/',
            name:'journal',
            meta:{auth:false},
            component:Journal
        },
        {
            path:'/admin/',
            name:'admin',
            meta:{admin:true},
            component:Admin
        },
        {
            path:'*',
            component: Error404
        }
    ],
})

router.beforeEach((to,from,next) =>{
    console.log(to,from,store.getters.logined)
    if(to.meta.admin && !store.getters.isAdmin){
        next({name:'login'})
    }else if (to.meta.noLogin && !store.getters.logined){
        next({name:'home'})
    }else{
        next()
    }
    
})

export default router
