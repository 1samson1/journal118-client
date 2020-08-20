<template>
    <header>
        <div class="menu-top">
            <nav>
                <router-link class="button link-page"  :to="{name:'home'}">Главная</router-link>
                <router-link class="button link-page" :to="{name:'journal'}">Журнал</router-link>
            </nav>  
            <div style="margin:0 1rem">
                    <input :checked="darkTheme" @change="changeTheme" type="checkbox" id="darkTheme" name="set-name" class="switch-input">
                    <label for="darkTheme" class="switch-label">Dark mode </label>
            </div>     
            <div class="login-reg">                
                <template v-if="!userData">
                    <router-link class="button link-login"  :to="{name:'login'}">Вход</router-link>
                    <router-link class="button link-login" :to="{name:'reg'}">Регистрация</router-link>
                </template>
                <template v-else>                        
                    <DropDown :darkTheme="darkTheme">
                        <template v-slot:label>{{userData.login}}</template>                        
                        <router-link v-if="isAdmin" :to="{name:'admin'}">Админпанель</router-link>
                        <router-link :to="{name:'profile'}">Профиль</router-link>                        
                        <div @click="logout" >Выйти</div>
                    </DropDown>
                </template>
            </div>   
        </div>            
        <MAlerts/> 
    </header>
</template>

<script>
import MAlerts from "@/components/MAlerts";
import DropDown from "@/components/DropDown";
import { mapActions, mapGetters } from "vuex"

export default {    
    name:'Header',      
    methods:{
        ...mapActions({
            changeTheme:'changeDarkTheme',
            logout:'logout'
        }),
    },
    computed:{
        ...mapGetters({
            isAdmin:'isAdmin',
            darkTheme:'onDarkTheme',
            userData:'getUserData'
        })
    },
    components:{
        MAlerts,DropDown
    },    
}
</script>

<style scoped>
header{    
    position: relative;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.link-page{
    color:#14A76C;  
}

.link-login{
    color:#2E9CCA ;  

}

.menu-top{
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}


</style>
