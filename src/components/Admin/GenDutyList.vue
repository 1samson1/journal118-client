<template>
    <div class="gen-duty-list">
        <div class="body-duty-list">
            <form class="generate" @submit.prevent="onGenerate">                         
                <MinusPlus v-model="count_duty" :minValue="1" />
                <MButton type="submit" label="Сгенерировать" :loading="loading" />
            </form>
            <Loader :center="false" class="loader" v-if="loading"/>
            <div class="empty" v-else-if="!getDutyListToday">Список дежурных на сегодня пуст!</div> 
            <div class="dutyList" v-else>
                <ListRecord 
                    v-for="record of getDutyListToday"
                    :key="record.date_id + record.user_id"
                    :date="record.date" 
                    :surname="record.surname" 
                    :name="record.name" 
                    :reason="record.reason"
                    indicator="dutylist"
                />
            </div>  
        </div>
    </div>
</template>

<script>
import ListRecord from "@/components/Journal/ListRecord.vue";
import Loader from "@/components/Loader.vue";
import MinusPlus from '@/components/MinusPlus.vue'
import MButton from '@/components/MButton.vue'
import {mapActions,mapGetters} from "vuex"

export default {
    name:'GenDutyList',
    data(){
        return {
            count_duty:'2',
            loading:true,
        }
    },
    mounted(){
        this.update()
    },
    methods:{
        update(){
            this.loading = true
            this.fetchDutyListToday({
                lastly:() => this.loading = false
            })
        },
        onGenerate(){
            this.loading = true
            this.genDutyList({
                count_duty:this.count_duty,
                lastly:() => this.loading = false
            })
        },
        ...mapActions(['genDutyList','fetchDutyListToday']),
    },    
    computed:{
        ...mapGetters(['getDutyListToday']),
    },
    components:{
        MinusPlus,ListRecord,Loader,MButton
    }
}
</script>

<style scoped>
.gen-duty-list{
    padding:.9rem 0;
    height: 100%;  
    display: flex;        
}

.body-duty-list{
    width: 100%;
    margin:auto 0;
    display: flex;
    align-items: center;
    flex-direction: column; 
}

.generate{    
    display: flex;
    font-size: 2rem;    
}

.generate input{
    font-size: 1.2rem;
}

.dutyList{
    width: 100%;
    max-width: 600px;
}
.empty, .loader{
    margin-top:3rem
}
</style>
