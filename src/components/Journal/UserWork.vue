<template>
    <div class="user-work">
        <div class="user-work-field">{{surname}} {{name}}</div>
        <div class="user-work-field">{{existYesNo}}</div>
        <div class="user-work-field">{{missYesNo}}</div>
        <div class="user-work-field">{{miss_lessons}}</div>                
    </div>  
</template>

<script>
export default {
    name:'UserWork',
    props:{        
        surname:String,
        name:String,
        exist:String,
        miss:String,
        miss_lessons:String
    },
    computed:{
        existYesNo(){
            return this.exist === '1'?'Да':'Нет'
        },
        missYesNo(){
            return this.miss === '1'?'Да':'Нет'
        },
    },
}
</script>

<style scoped>
.user-work:nth-child(even) {
    background: #7777773a;
}
</style>
