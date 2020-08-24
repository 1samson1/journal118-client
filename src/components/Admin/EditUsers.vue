<template>
    <div class="edit-users">
        <Loader v-if="loading"/>
        <div class="empty" v-else-if="!getUsersAdmin">Список пуст!</div>  
        <template v-else>
            <div class="user-work-header">
                <div class="user-work-field">Студент</div>                
                <div class="user-work-field">Пропускать при генерации</div>                
            </div>
            <EditUser 
                v-for="(user, i) of getUsersAdmin"
                :key="i" 
                :id="i"            
                :surname="user.surname"
                :name="user.name"
                :miss_user="user.miss_user"              
            />
            <div class="controls">
                <MButton style="font-size:1.2rem" label="Сохранить" @click="saveUsersAdmin" />
            </div>
        </template>    
    </div>
</template>

<script>
import MButton from '@/components/MButton.vue'
import EditUser from "@/components/Admin/EditUser.vue";
import Loader from "@/components/Loader.vue";
import {mapActions,mapGetters} from "vuex"

export default {
    name:'EditUsers',
    data(){
        return{
            loading:true,
        }
    },
    mounted(){
        this.updateUsersAdmin()
    },  
    methods:{   
        updateUsersAdmin(){
            this.loading = true
            this.fetchUsersAdmin({
                lastly:() => this.loading = false
            })
        },   
        saveUsersAdmin(){
            this.loading = true
            this.pullUsersAdmin({
                lastly:() => this.loading = false
            })
        },     
        ...mapActions(['fetchUsersAdmin','pullUsersAdmin']),
    },    
    computed:{
        ...mapGetters(['getUsersAdmin']),
    },
    components:{
        Loader,EditUser,MButton
    }
}
</script>

<style scoped>
.edit-users{
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
