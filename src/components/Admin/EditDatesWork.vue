<template>
    <div class="add-dates-work">
        <Loader v-if="loading"/>
        <div class="empty" v-else-if="!getDatesWorkToday">Список пуст!</div>  
        <template v-else>
            <div class="user-work-header">
                <div class="user-work-field">Студент</div>
                <div class="user-work-field">Присутствует</div>
                <div class="user-work-field">Опоздал</div>
                <div class="user-work-field">Уроков пропущено</div>                
            </div>
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
                <input class="form-button" type="button" value="Сохранить" @click="saveDatesWorkToday">
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
        saveDatesWorkToday(){
            this.loading = true
            this.pullDatesWorkToday({
                lastly:() => this.loading = false
            })
        },     
        ...mapActions(['fetchDatesWorkToday','pullDatesWorkToday']),
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
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 1.2rem;
    background: #77777720;
}

.controls input{
    font-size: 1.2rem;
}

.empty{
    margin:auto    
}
</style>
