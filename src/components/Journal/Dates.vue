<template>
    <option :value="id">{{getDate}}</option>
</template>

<script>
export default {
    name:'Dates',
    props:{
        id:Number,
        date:String,
    },
    computed:{
        getDate(date){
            return new Date(parseInt(this.date +'000')).format('dd.mm.yyyy')
        },
    }
}
</script>

<style scoped>

</style>
