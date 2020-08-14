<template>
    <option :value="id">{{date | getDate}}</option>
</template>

<script>
export default {
    name:'Dates',
    props:{
        id:Number,
        date:String,
    },
    filters:{
        getDate(date){
            return new Date(parseInt(date +'000')).format('dd.mm.yyyy')
        },
    },
}
</script>

<style scoped>

</style>
