<template>
    <div class="duty-list block-scroll">
        <button class="btm-border btm-stretch" @click="update">Обновить</button>
        <ListRecord 
            v-for="record of getDutyList"
            :key="record.date_id + record.user_id"
            :date="record.date" 
            :surname="record.surname" 
            :name="record.name" 
            :reason="record.reason"
            indicator="dutylist"
        />
        <div class="empty" v-if="!getDutyList">Список пуст!</div>  
    </div>
</template>

<script>
import ListRecord from "./ListRecord.vue";
import {mapActions,mapGetters} from "vuex"

export default {
    name:'DutyList',
    mounted(){
        this.fetchDutyList()
    },
    methods:{
        update(){
            this.fetchDutyList()
        },
        ...mapActions(['fetchDutyList']),
    },
    computed:{
        ...mapGetters(['getDutyList']),
    },
    components:{
        ListRecord,
    }
}
</script>

<style scoped>
.duty-list{
    display: flex;    
    flex-direction: column;
}

.empty{
    text-align: center;
    margin: auto 0;
}
</style>
