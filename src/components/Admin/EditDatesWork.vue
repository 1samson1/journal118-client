<template>
    <div class="add-dates-work">
        <div class="user-work-header">
            <div class="user-work-field">Студент</div>
            <div class="user-work-field">Присутствует</div>
            <div class="user-work-field">Опоздал</div>
            <div class="user-work-field">Уроков пропущено</div>                
        </div>
        <Loader v-if="loading"/>
        <div class="empty" v-else-if="!getDatesWorkToday">Список пуст!</div>  
        <template v-else>
            <EditUserWork 
                v-for="(userwork, i) of getDatesWorkToday"
                :key="i" 
                :id="i"            
                :surname="userwork.surname"
                :name="userwork.name"    
                :exist="userwork.exist"              
                :miss="userwork.miss"              
                :miss_lessons="userwork.miss_lessons"              
            />
            <div class="controls">
                <input class="form-button" type="button" value="Сохранить">
            </div>
        </template>        
    </div>
</template>

<script>
import EditUserWork from "@/components/Admin/EditUserWork.vue";
import Loader from "@/components/Loader.vue";
import {mapActions,mapGetters} from "vuex"

export default {
    name:'EditDatesWork',
    data(){
        return{
            loading:true,
        }
    },
    mounted(){
        this.updateDatesWorkToday()
    },  
    methods:{   
        updateDatesWorkToday(){
            this.loading = true
            this.fetchDatesWorkToday({
                lastly:() => this.loading = false
            })
        },        
        ...mapActions(['fetchDatesWorkToday']),
    },    
    computed:{
        ...mapGetters(['getDatesWorkToday']),
    },
    components:{
        Loader,EditUserWork
    }
}
</script>

<style scoped>
.add-dates-work{
    display: flex;
    flex-direction: column;
}
.controls{
    width: 100%;
    padding: 1.5rem;
    background: #77777720;
}

</style>
