<template>
    <div class="m-alerts">        
        <MAlert 
            v-for="alert of alerts"            
            :key = "alert.id"
            :id="alert.id"
            :info="alert.info" 
            :indicator="alert.indicator"
            @removeAlert="removeAlert"
        />                
                      
    </div> 
</template>

<script>
import MAlert from "@/components/MAlert.vue";
import {mapActions , mapGetters} from "vuex"

export default {    
    methods:{
        removeAlert(id){
            this.removeAlert(id)
        },
        ...mapActions(['removeAlert'])
    },
    computed:{
        ...mapGetters({
            alerts:'getAlerts',
        })
    },
    components:{
        MAlert
    }
}
</script>

<style scoped>
.m-alerts{
    position: absolute;
    padding-top: 1rem;
    top:100%;
    width: 100%;
}
</style>
