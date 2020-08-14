<template>
    <div class="duty-black-list full-height">
        <div class="togglesList">
            <div class="toggleList" :class="{active: toggle}" @click="toggle = true">Дежурные</div>
            <div class="toggleList" :class="{active: !toggle}" @click="toggle = false">Задолжности</div>
        </div>
        <div class="lists">
            <DutyList v-show="toggle" />                
            <BlackList v-show="!toggle" />                  
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
            toggle:true,
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
