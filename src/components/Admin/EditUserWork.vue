<template>
    <div class="user-work">
        <div class="user-work-field">{{surname}} {{name}}</div>
        <div class="user-work-field"><CheckBox trueValue="1" falseValue="0" :value="exist" @input="changeExist" /></div>
        <div class="user-work-field"><CheckBox trueValue="1" falseValue="0" :value="miss" @input="changeMiss"/></div>              
        <div class="user-work-field">{{miss_lessons}}</div>                
    </div>  
</template>

<script>
import CheckBox from '@/components/CheckBox.vue'
import {mapMutations} from 'vuex'

export default {
    name:'EditUserWork',
    props:{
        id:Number,
        surname:String,
        name:String,
        exist:String,
        miss:String,
        miss_lessons:String
    }, 
    methods:{
        changeExist(exist){
            this.setUserExist({
                id:this.id,
                exist,
            })
        },
        changeMiss(miss){
            this.setUserMiss({
                id:this.id,
                miss,
            })
        },
        changeMissLessons(e){
            console.log(e)
        },
        ...mapMutations(['setUserExist','setUserMiss']),
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