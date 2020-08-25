<template>
    <div class="account">
        <div class="contur">            
            <EditAccount />
            <SecurityAccount />
        </div> 
    </div>
</template>

<script>
import EditAccount from "@/components/Account/EditAccount.vue";
import SecurityAccount from "@/components/Account/SecurityAccount.vue";
import {mapGetters} from 'vuex'

export default {
    name:'Account',
    metaInfo() {
        return {
            title: 'Аккаунт'
        }
    },    
    watch:{
        logined(newValue){
            if(!newValue){
                this.$router.push({name:'login'});
            }
        }
    },
    mounted(){
        if(!this.logined){
            this.$router.push({name:'login'});
        }
    },
    computed:{
        ...mapGetters(['logined'])
    },
    components:{
        EditAccount,SecurityAccount,
    }
}
</script>

<style scoped>
.account{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    padding:.5rem 1rem;    
}

.contur{
    background: #77777720;
    flex:600px 0 1;
    padding: 1rem;
}

.utils{    
    position: relative;    
}

.togglesList{
    display: flex;
    justify-content: space-around;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.toggleList{
    text-align: center;
    cursor: pointer;
    user-select: none;
    padding: .75rem;
    border-bottom: 2px solid #777777; 
}

.toggleList:hover{    
    border-color:#14a76c;
    color:#14a76c;
}

.active{
    border-color:#14a76c;
    color:#14a76c;
}
</style>
