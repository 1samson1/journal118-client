<template>
    <div class="journal block-scroll" ref="journal" @scroll="onScroll">
        <DatesWork />
        <DutyBlackList />
        <a class="changeScroll" @click="changeScroll">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-up" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M10.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L11 3.707 8.354 6.354a.5.5 0 1 1-.708-.708l3-3zm-9 7a.5.5 0 0 1 .708 0L5 12.293l2.646-2.647a.5.5 0 1 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z"/>
            </svg>
        </a>
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
    data(){
        return {
            scrollTop:false,
        }
    },
    methods:{
        onScroll(){      
            if (this.$refs.journal.scrollTop > document.documentElement.clientHeight/2) {
                this.scrollTop = true
            } else {
                this.scrollTop = false
            }
        },
        changeScroll(){            
            if (this.scrollTop) {
                this.$refs.journal.scrollTop = 0
                this.scrollTop = false
            } else {
                this.$refs.journal.scrollTop += document.documentElement.clientHeight + 1000
                this.scrollTop = true
            }
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

.changeScroll{
    display:none;
}

@media (max-width: 700px) {
    .journal{
        display: block;        
    }
    .changeScroll{
        display: block;
        position: fixed;
        left: .5rem;
        bottom:2.5rem;
        z-index: 1;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #14a76c;
        cursor: pointer;
    }
    .changeScroll:hover{
        background: #14a76cd2;
    }

    .changeScroll svg{
        width: 75%;
        height: 75%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
