<template>
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
</template>

<script>
import ListRecord from "./ListRecord.vue";
import Loader from "@/components/Loader.vue";
import {mapActions,mapGetters} from "vuex"

export default {
    name:'DutyList',
    data(){
        return {
            loading:false
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
    watch:{
        loading(newValue){
            this.$emit('loading',newValue)
        }
    },
    computed:{
        ...mapGetters(['getDutyList']),
    },
    components:{
        ListRecord,Loader,
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
