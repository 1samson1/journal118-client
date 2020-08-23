<template>
    <div class="journal full-height">
        <DatesWork />
        <DutyBlackList />
    </div>
</template>
    
<script>
import DatesWork from "@/components/Journal/DatesWork.vue";
import DutyBlackList from "@/components/Journal/DutyBlackList.vue";

export default {
    name:'Journal',
    metaInfo() {
        return {
            title: 'Журнал'
        }
    },
    components: {
        DatesWork,DutyBlackList,
    },
}
</script>

<style scoped>
.journal{
    display: flex;
    flex-direction: row;
}

@media (max-width: 700px) {
    .journal{
        display: block;        
    }
}
</style>
