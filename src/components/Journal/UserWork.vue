<template>
    <div class="user-work">
        <div class="user-work-field">{{surname}} {{name}}</div>
        <div class="user-work-field">{{exist | yesNo}}</div>
        <div class="user-work-field">{{miss | yesNo}}</div>
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
    filters:{
        yesNo(bool){
            return bool === '1'?'Да':'Нет'
        },
    },
}
</script>

<style scoped>

</style>
