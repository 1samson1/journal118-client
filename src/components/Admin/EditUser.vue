<template>
    <div class="user-work">
        <div class="user-work-field">{{surname}} {{name}}</div>
        <div class="user-work-field">{{group_name}}</div>
        <div class="user-work-field"><CheckBox trueValue="1" falseValue="0" :value="miss_user" @input="changeMissUser" :center="true" /></div>
    </div>  
</template>

<script>
import CheckBox from '@/components/CheckBox.vue'
import {mapMutations} from 'vuex'

export default {
    name:'EditUser',
    props:{
        id:Number,
        surname:String,
        name:String,
        group_name:String,
        miss_user:String
    }, 
    methods:{
        changeMissUser(miss_user){
            this.setMissUser({
                id:this.id,
                miss_user,
            })
        },
        ...mapMutations(['setMissUser']),
    },
    components:{
        CheckBox
    }
}
</script>

<style scoped>
.user-work:nth-child(even) {
    background: #7777773a;
}
</style>