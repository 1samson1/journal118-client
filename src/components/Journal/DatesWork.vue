<template>
    <div class="dates-work full-height">
        <div class="controls">
            <button class="btm-border back" :disabled="cantBack" @click="back">&#60; Назад</button>
            <div class="control-dates">
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
        Dates,UserWork,Loader
    }
}
</script>

<style>
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

.work{
    position: relative;
    flex-grow:1;
    padding-top:1rem;
}

.user-works{
    display: flex;
    flex-direction: column;
}

.user-work, .user-work-header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #cecece; 
}

.user-work-header{
    border-top: 1px solid #cecece; 
    font-weight: bold;
    background: #7777776b;
}

.user-work-field{
    width: 40%;
    text-align: center;
    padding:.9rem 0;
}

.empty{
    text-align: center;
    margin: auto 0;
}
</style>
