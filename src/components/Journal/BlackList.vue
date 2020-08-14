<template>
    <div class="black-list block-scroll">
        <button class="btm-border btm-stretch" @click="update">Обновить</button>
        <ListRecord 
            v-for="record of getBlackList"
            :key="record.date_id + record.user_id"
            :date="record.date" 
            :surname="record.surname" 
            :name="record.name" 
            :reason="record.reason"
            indicator="blacklist"
        /> 
        <div class="empty" v-if="!getBlackList">Список пуст!</div>       
    </div>
</template>

<script>
import ListRecord from "./ListRecord.vue";
import {mapActions,mapGetters} from "vuex"

export default {
    name:'BlackList',
    mounted(){
        this.fetchBlackList()
    },
    methods:{
        update(){
            this.fetchBlackList()
        },
        ...mapActions(['fetchBlackList']),
    },
    computed:{
        ...mapGetters(['getBlackList']),
    },
    components:{
        ListRecord,
    }
}
</script>

<style scoped>
.black-list{
    display: flex;    
    flex-direction: column;
}

.empty{
    text-align: center;
    margin: auto 0;
}
</style>
