<template>
    <button 
        :type="type"
        class="mbutton" 

        :click="onClick"
        :style="style"
        :class="{'mb-stretch':stretch}" 
        :disabled="disabled || loading"
    >
        <div class="loading" v-show="loading"><div></div></div>
        <slot>{{label}}</slot>
    </button>
</template>

<script>
export default {
    name:'MButton',
    props:{
        type:{
            type:String,
            default:'button',
        },
        loading:{
            type:Boolean,
            default:false,
        },
        disabled:{
            type:Boolean,
            default:false,
        },
        stretch:{
            type:Boolean,
            default:false,
        },
        label:{
            type:String,
        },
        font:{
            type:String,
            default:'1rem',
        }
    },
    computed:{
        style(){
            return `
                font-size:${this.font};
            `
        }
    },
    methods:{
        onClick(e){
            this.$emit('click', e);
        }
    }
}
</script>

<style scoped>

.mbutton{    
    padding: .4rem 3rem;
    background: #14a76c;
    color:#FFF;
    border:none;
    cursor: pointer;  
    position: relative;  
}

.mb-stretch{
    width: 100%;
}

.mbutton:hover, .mbutton:focus{
    background: #14a76cec;    
}

.mbutton:disabled{
    background: #14a76cb9;
}

.loading{    
    height: 0.25rem;
    display: block;    
    overflow: hidden;
    position: absolute;    
    left:0;
    right: 0;
    bottom: 0;
}

.loading div:first-child{
    background-color: #FFF;
    height: 0.25rem;
    left: 0;
    position: absolute;
    top: 0;
    -webkit-transform-origin: left;
    transform-origin: left;
    width: 100%;
    -webkit-animation: loading 2.1s linear infinite;
            animation: loading 2.1s linear infinite;
    -webkit-transform: translateX(0) scaleX(0);
            transform: translateX(0) scaleX(0);
    -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition: -webkit-transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes loading {
0% {
    -webkit-transform: translateX(0) scaleX(0);
            transform: translateX(0) scaleX(0);
}
25% {
    -webkit-transform: translateX(50%) scaleX(0.6);
            transform: translateX(50%) scaleX(0.6);
}
49% {
    -webkit-transform: translateX(110%) scaleX(0);
            transform: translateX(110%) scaleX(0);
}
50% {
    -webkit-transform: translateX(0) scaleX(0);
            transform: translateX(0) scaleX(0);
}
75% {
    -webkit-transform: translateX(0) scaleX(0.6);
            transform: translateX(0) scaleX(0.6);
}
100% {
    -webkit-transform: translateX(110%) scaleX(0);
            transform: translateX(110%) scaleX(0);
}
}
</style>