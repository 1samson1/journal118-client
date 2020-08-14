<template>
    <div class="record-list" :class="classIndicator">
        <div class="date"><b>{{getDate}}</b></div>
        <div class="student"><b>Студент:</b> {{surname}} {{name}}</div>
        <div class="reason"><b>Причина:</b> {{reason}}</div>
    </div>
</template>

<script>
export default {    
    name:'ListRecord',
    props:{
        id:String,
        date:String,
        surname:String,
        name:String,
        reason:String,
        indicator:String,
    },
    computed:{
        getDate(){
            return new Date(parseInt(this.date +'000')).format('dd.mm.yyyy')
        },
        isToday(){
            let date = new Date()
            date.setHours(0,0,0,0)
            return date.getTime() == parseInt(this.date +'000')
        },
        classIndicator(){
            return{
                todayDuty:this.indicator === "dutylist" && this.isToday,
                todayBlack:this.indicator === "blacklist" && this.isToday,
            }
        }
    }
}
</script>

<style scoped>

.record-list{
    padding: 1rem 2rem;
    background: #7777773a;
    width: 100%;
    margin:.5rem 0;
    font-size: 1.05rem;
}

.todayDuty,.todayBlack{
    color: #e6e6e6;
}

.todayDuty{
    background: #14a76c;
}

.todayBlack{
    background: #dc3545;
}

.date{
    font-size: 1.1em;
    text-align: center;
    margin-bottom: .3rem;
}

</style>
