<template>
    <div class="dates-work full-height">
        <div class="controls">
            <button class="btm-border back" :disabled="cantBack" @click="back">&#60; Назад</button>
            <div class="control-dates">
                 <MButton 
                    class="btm-update"
                    style="font-size:1.2rem;"
                    @click="updateDates"
                    :disabled="loading"
                >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-clockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
                        <path fill-rule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
                    </svg>
                 </MButton>
                <select v-model="current_date">
                    <Dates 
                        v-for="(date, i) of getDates"
                        :key="date.id" 
                        :date="date.date" 
                        :id="i"
                    />
                </select>
            </div>
            <button class="btm-border next" :disabled="cantNext" @click="next">Далее &#62;</button>
        </div>
        <div class="work">
            <div class="user-works block-scroll">
                <div class="user-work-header">
                    <div class="user-work-field">Студент</div>
                    <div class="user-work-field">Присутствует</div>
                    <div class="user-work-field">Опоздал</div>
                    <div class="user-work-field">Уроков пропущено</div>                
                </div>
                <Loader v-if="loading"/>
                <div class="empty" v-else-if="!getDatesWork">Список пуст!</div>  
                <UserWork v-else
                    v-for="(userwork, i) of getDatesWork"
                    :key="i" 
                    :surname="userwork.surname"
                    :name="userwork.name"    
                    :exist="userwork.exist"              
                    :miss="userwork.miss"              
                    :miss_lessons="userwork.miss_lessons"              
                />
            </div>
        </div>
    </div>
</template>

<script>
import MButton from "@/components/MButton.vue";
import Dates from "./Dates.vue";
import UserWork from "./UserWork.vue";
import Loader from "@/components/Loader.vue";
import {mapActions,mapGetters} from "vuex"

export default {
    name:'DatesWork',
    data(){
        return{
            current_date:0,
            loading:true,
        }
    },
    mounted(){
        this.fetchDates({
            done:() => this.updateDatesWork(this.current_date),
            lastly:() => this.loading = false
        })
    },    
    watch:{
        current_date(newValue){
            this.updateDatesWork(newValue)
        }
    },
    methods:{   
        updateDates(){
            this.loading = true
            this.fetchDates({
                done:() => this.current_date = 0,
                lastly:() => this.loading = false
            })
        },
        updateDatesWork(date_id){
            this.loading = true
            this.fetchDatesWork({
                date_id:this.getDates[date_id].id,
                lastly:() => this.loading = false
            })
        },
        next(){
            this.current_date--
        },  
        back(){
            this.current_date++
        },
        ...mapActions(['fetchDates','fetchDatesWork']),
    },    
    computed:{
        cantBack(){
            return this.getDates.length - 1 <= this.current_date 
        },
        cantNext(){
            return 0 === this.current_date
        },
        ...mapGetters(['getDates','getDatesWork']),
    },
    components:{
        Dates,UserWork,Loader,MButton
    }
}
</script>

<style scoped>
.dates-work{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.controls{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.control-dates{
    display: flex;   
    justify-content: center; 
    align-items: center;
}

.btm-update{
    border-radius:50%;
    padding:.4rem;
}

.btm-update:focus{
    outline: none !important;
}

.work{
    position: relative;
    flex-grow:1;
    padding-top:1rem;
}

.empty{
    text-align: center;
    margin: auto 0;
}
</style>
