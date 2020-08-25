<template>
    <div class="duty-list-wrapper full-height">        
        <MButton class="btm-update"  style="font-size:1.2rem" label="Обновить" :stretch="true" @click="update" :loading="loading" />
        <div class="duty-list block-scroll">            
            <Loader  v-if="loading"/>
            <div class="empty" v-else-if="!getDutyList">Список пуст!</div>  
            <ListRecord v-else
                v-for="record of getDutyList"
                :key="record.date_id + record.user_id"
                :date="record.date" 
                :surname="record.surname" 
                :name="record.name" 
                :reason="record.reason"
                indicator="dutylist"
            />
        </div>
    </div>
</template>

<script>
import MButton from "@/components/MButton.vue";
import ListRecord from "./ListRecord.vue";
import Loader from "@/components/Loader.vue";
import {mapActions,mapGetters} from "vuex"

export default {
    name:'DutyList',
    data(){
        return {
            loading:true
        }
    },
    mounted(){
        this.update()
    },
    methods:{
        update(){
            this.loading = true
            this.fetchDutyList({
                lastly:() => this.loading = false
            })
        },
        ...mapActions(['fetchDutyList']),
    },
    computed:{
        ...mapGetters(['getDutyList']),
    },
    components:{
        ListRecord,Loader,MButton
    }
}
</script>

<style scoped>
.duty-list{
    display: flex;    
    flex-direction: column;
    bottom:2.5rem !important ;
}

.duty-list-wrapper{
    position: relative;
}

.empty{
    text-align: center;
    margin: auto 0;
}

.btm-update{
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    right: .5rem !important;    
}

.btm-update:focus{
    outline: none;
}
</style>
