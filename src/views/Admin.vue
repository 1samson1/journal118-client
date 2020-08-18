<template>
    <div class="admin">
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
            <component class="block-scroll" :is="current"></component>                            
        </div>    
    </div>
</template>

<script>
import AddDatesWork from "@/components/Admin/AddDatesWork.vue";
import GenDutyList from "@/components/Admin/GenDutyList.vue";
import EditUsers from "@/components/Admin/EditUsers.vue";

export default {
    name:'Admin',
    data(){
        return {
            current:'AddDatesWork',
            tabs:[
                {
                    label:'Посещаемость',
                    component:'AddDatesWork'
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
    components:{
        AddDatesWork,GenDutyList,EditUsers
    }
}
</script>

<style scoped>
.admin{
    display: flex;    
    flex-direction: column;  
    height: 100%;     
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
