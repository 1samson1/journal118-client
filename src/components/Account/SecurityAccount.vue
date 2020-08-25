<template>
    <div class="security">
        <div class="form-group">
            <label for="logout-all" style="padding-bottom:1rem">Завершить все сеансы кроме этого.</label>
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
.security{
    min-width: 500px;
    padding: 1rem 0;
}
</style>
