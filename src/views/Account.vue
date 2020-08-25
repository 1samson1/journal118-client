<template>
    <div class="account">
        <div style="flex:500px 0 1;">
            <div class="title-page">Аккаунт</div>
            <div class="togglesList">
                <div class="toggleList" 
                    v-for="tab of tabs"
                    :key="tab.label + tab.component"
                    :class="{active: current === tab.component }" 
                    @click="current = tab.component"
                >
                    {{ tab.label }}
                </div>
            </div>
            <div class="utils">   
                <transition name="fadePage">             
                <component :is="current"></component>    
                </transition>                                   
            </div>   
        </div> 
    </div>
</template>

<script>
import EditAccount from "@/components/Account/EditAccount.vue";
import SecurityAccount from "@/components/Account/SecurityAccount.vue";
import {mapGetters} from 'vuex'

export default {
    name:'Account',
    metaInfo() {
        return {
            title: 'Аккаунт'
        }
    },
    data(){
        return {
            current:'EditAccount',
            tabs:[
                {
                    label:'Изменить аккаунт',
                    component:'EditAccount'
                },                
                {
                    label:'Безопастность',
                    component:'SecurityAccount'
                },
            ],
        }       
    },
    watch:{
        logined(newValue){
            if(!newValue){
                this.$router.push({name:'login'});
            }
        }
    },
    mounted(){
        if(!this.logined){
            this.$router.push({name:'login'});
        }
    },
    computed:{
        ...mapGetters(['logined'])
    },
    components:{
        EditAccount,SecurityAccount,
    }
}
</script>

<style scoped>
.account{
    height: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center;   */
    flex-wrap: wrap;
    padding:0 1rem;    
}

.utils{    
    position: relative;    
}

.togglesList{
    display: flex;
    justify-content: space-around;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.toggleList{
    text-align: center;
    cursor: pointer;
    user-select: none;
    padding: .75rem;
    border-bottom: 2px solid #777777; 
}

.toggleList:hover{    
    border-color:#14a76c;
    color:#14a76c;
}

.active{
    border-color:#14a76c;
    color:#14a76c;
}
</style>
