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
                @before-enter="beforeEnter"
                @after-leave="afterLeave"
            >
                <component ref="list" :is="current" @loading="onLoad"></component>   
            </transition>                         
        </div>   
        <MButton 
            class="btm-update"
            style="font-size:1.2rem"
            :stretch="true" 
            :loading="loading"            
            :disabled="disabled"            
            @click="update"
        >
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
                <path fill-rule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
            </svg>
            <span>Обновить</span>
        </MButton>          
    </div>
</template>

<script>
import MButton from "@/components/MButton.vue";
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
            loading:false,
            disabled:false,
        }       
    },
    methods:{
        beforeEnter() {
            this.disabled = true;
        },
        afterLeave() {
            this.disabled = false;
        },
        onLoad(loading){
            this.loading = loading
        },
        update(){
            this.$refs.list.update()
        }
    },
    components:{
        DutyList,BlackList,MButton
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

.btm-update:focus{
    outline: none !important;
}

</style>
