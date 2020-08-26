<template>
    <div class="black-list block-scroll">        
        <Loader  v-if="loading"/>
        <div class="empty" v-else-if="!getBlackList">Список пуст!</div>       
        <ListRecord v-else
            v-for="record of getBlackList"
            :key="record.date_id + record.user_id"
            :date="record.date" 
            :surname="record.surname" 
            :name="record.name" 
            :reason="record.reason"
            indicator="blacklist"
        /> 
    </div>
</template>

<script>
import ListRecord from "./ListRecord.vue";
import Loader from "@/components/Loader.vue";
import {mapActions,mapGetters} from "vuex"

export default {
    name:'BlackList',
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
            this.fetchBlackList({
                lastly:() => this.loading = false
            })
        },
        ...mapActions(['fetchBlackList']),
    },
    watch:{
        loading(newValue){
            this.$emit('loading',newValue)
        }
    },
    computed:{
        ...mapGetters(['getBlackList']),
    },
    components:{
        ListRecord,Loader,
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
