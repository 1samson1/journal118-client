<template>
    <div class="admin block-scroll">
        <div class="date"></div>
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
            <transition 
                name="fadeUtils"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
            >
                <component class="block-scroll" :is="current"></component> 
            </transition>                           
        </div>    
    </div>
</template>

<script>
import EditDatesWork from "@/components/Admin/EditDatesWork.vue";
import GenDutyList from "@/components/Admin/GenDutyList.vue";
import EditUsers from "@/components/Admin/EditUsers.vue";
import {mapGetters} from 'vuex'

export default {
    name:'Admin',
    metaInfo() {
        return {
            title: 'Админпанель'
        }
    },
    data(){
        return {
            current:'EditDatesWork',
            tabs:[
                {
                    label:'Посещаемость',
                    component:'EditDatesWork'
                },                
                {
                    label:'Генератор дежурных',
                    component:'GenDutyList'
                },                
                {
                    label:'Пользователи',
                    component:'EditUsers'
                },                
            ],
        }       
    },
    watch:{
        isAdmin(newValue){
            if(!newValue){
                this.$router.push({name:'login'});
            }
        }
    },
    mounted(){
        if(!this.isAdmin){
            this.$router.push({name:'login'});
        }
    },
    computed:{
        ...mapGetters(['isAdmin'])
    },
    components:{
        EditDatesWork,GenDutyList,EditUsers
    }
}
</script>

<style scoped>
.admin{
    display: flex;    
    flex-direction: column;
    overflow-x: hidden !important;        
}

.utils{
    flex-grow: 3;
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
