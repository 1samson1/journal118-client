<template>
    <div class="user-work">
        <div class="user-work-field">{{surname}} {{name}}</div>
        <div class="user-work-field"><CheckBox trueValue="1" falseValue="0" :value="exist" @input="changeExist" :center="true" /></div>
        <div class="user-work-field"><CheckBox trueValue="1" falseValue="0" :value="miss" @input="changeMiss" :center="true"/></div>              
        <div class="user-work-field"><MinusPlus :value="miss_lessons" @input="changeMissLessons" /></div>                
    </div>  
</template>

<script>
import CheckBox from '@/components/CheckBox.vue'
import MinusPlus from '@/components/MinusPlus.vue'
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
        changeExist(){
            const value = !this.exist? "1": "0"

            this.setUserExist({
                id:this.id,
                exist:value,
            })
        },
        changeMiss(){
            const value = !this.miss? "1": "0"
            
            this.setUserMiss({
                id:this.id,
                miss:value,
            })
        },
        changeMissLessons(miss_lessons){
            this.setUserMissLessons({
                id:this.id,
                miss_lessons,
            })
        },
        ...mapMutations(['setUserExist','setUserMiss','setUserMissLessons']),
    },
    components:{
        CheckBox,MinusPlus
    }
}
</script>

<style scoped>
.user-work:nth-child(even) {
    background: #7777773a;
}
</style>