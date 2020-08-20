<template>
    <div class="profile">
        <div class="wait-dev">В разработке!</div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:'Profile',
    metaInfo() {
        return {
            title: 'Профиль'
        }
    }, 
    mounted(){
        if(this.logined){
            this.$router.push({name:'home'});
        }
    },
    computed:{
        ...mapGetters(['logined'])
    },
}
</script>

<style scoped>
.profile{
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
