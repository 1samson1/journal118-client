<template>
    <div class="security">
        <div class="title-part">Безопасность</div>  
        <div class="form-group">
            <div class="label">Завершить все сеансы кроме текущего.</div>
            <MButton 
                id="logout-all"
                color="danger"
                label="Завершить все сеансы"                
                style="font-size:1.2rem"
                :stretch="true"  
                :loading="loading"
                @click="onLogoutAll"
            />
        </div>
    </div>
</template>

<script>
import MButton from '@/components/MButton.vue'
import {mapActions} from 'vuex'

export default {
    name:'SecurityAccount',
    data(){
        return{
            loading:false,
        }
    },
    methods:{
        onLogoutAll(){
            this.loading = true
            this.logout_all({
                lastly:()=> this.loading = false,
            })
        },
        ...mapActions(['logout_all'])
    },
    components:{
        MButton,
    }
}
</script>

<style scoped>

.title-part{    
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
}

.label{
    margin:.3rem .5rem;
}

</style>
