<template>
    <header>
        <div class="menu-top">
            <nav>
                <router-link class="button link-page"  to="/">Главная</router-link>
                <router-link class="button link-page" to="/journal">Журнал</router-link>
            </nav>  
            <div style="margin:0 1rem">
                    <input :checked="darkTheme" @change="changeTheme" type="checkbox" id="darkTheme" name="set-name" class="switch-input">
                    <label for="darkTheme" class="switch-label">Dark mode </label>
            </div>     
            <div class="login-reg">                
                <template v-if="!userData">
                    <router-link class="button link-login"  to="/login/">Вход</router-link>
                    <router-link class="button link-login" to="/reg/">Регистрация</router-link>
                </template>
                <template v-else>                        
                    <div class="dropdown" :class={darkDropdown:darkTheme} @click="showDropDown = !showDropDown">
                        <div class="label-dropdown">{{userData.login}}</div>

                        <transition name="fade">
                        <div class="options-dropdown" v-show="showDropDown">
                            <div class="option-dropdown">Админпанель</div>
                            <div class="option-dropdown">Профиль</div>
                            <div class="option-dropdown" @click="logout" >Выйти</div>
                        </div>  
                        </transition>                                 
                    </div>                        
                                                                             
                </template>
            </div>   
        </div>            
        <MAlerts/> 
    </header>
</template>

<script>
import MAlerts from "@/components/MAlerts";
import { mapActions, mapGetters } from "vuex"

export default {    
    name:'Header',    
    data(){
        return{
            showDropDown:false,
        }
    },    
    methods:{
        ...mapActions({
            changeTheme:'changeDarkTheme',
            logout:'logout'
        }),
    },
    computed:{
        ...mapGetters({
            darkTheme:'onDarkTheme',
            userData:'getUserData'
        })
    },
    components:{
        MAlerts
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
