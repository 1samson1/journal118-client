<template>
    <div class="duty-black-list full-height">
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
        <div class="lists">
            <transition 
                name="fadeList"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
            >
                <component :is="current"></component>   
            </transition>                         
        </div>                  
    </div>
</template>

<script>
import DutyList from "./DutyList.vue";
import BlackList from "./BlackList.vue";

export default {
    name:'DutyBlackList',
    data(){
        return {
            current:'DutyList',
            tabs:[
                {
                    label:'Дежурные',
                    component:'DutyList'
                },
                {
                    label:'Задолжности',
                    component:'BlackList'
                }
            ],
        }       
    },
    components:{
        DutyList,BlackList,
    }
}
</script>

<style scoped>
.duty-black-list{
    display: flex;
    flex:550px 0 1;
    flex-direction: column;
    border-left: 2px solid rgba(0,0,0,.075);    
}

.lists{
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
    text-align: center;
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
