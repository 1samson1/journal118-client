<template>
    <transition 
        name="fadeAlert"
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutRight"
    >
    <div class="m-alert" :class="classIndicator" v-show="show">
        <div class="m-alert-info">{{ info }}</div> 
        <div class="close-m-alert" @click="removeAlert" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#FFFFFF" d="M18.984 6.422L13.406 12l5.578 5.578-1.406 1.406L12 13.406l-5.578 5.578-1.406-1.406L10.594 12 5.016 6.422l1.406-1.406L12 10.594l5.578-5.578z"/>
            </svg>
        </div>   
    </div>  
    </transition>  
</template>

<script>
export default {
    props:{
        id:Number,
        info:String,
        indicator:String,
    },    
    mounted(){
        this.show = true
        setTimeout(()=>{
            this.removeAlert()
        },10000)
    }, 
    data(){
        return {
            show:false,
        }
    },   
    methods:{
        removeAlert(){            
            this.show = false
            setTimeout(()=>{
                this.$emit('removeAlert',this.id)
            },2000)
        },
    },
    computed:{
        classIndicator(){
            return{
                error:this.indicator === "error",
                success:this.indicator === "success",
            }
        }
    },    
}
</script>

<style scoped>
.m-alert{ 
    z-index: 1;
    color:#FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #dc3545;
    position: relative;
    padding: .75rem 1.25rem;
    margin: 0 1rem 1rem 1rem;    
    border: 1px solid transparent;
    border-radius: .25rem;   
}

.success{
    background-color: #28a745;;
}

.close-m-alert{
    cursor: pointer;
    border-radius: 50%;
    background-color: #00000030;
}

.close-m-alert:hover{
    background-color: #00000070;
}

.close-m-alert svg{
    width: 1.5rem;  
    height: 1.5rem;
}
</style>
