<template>
    <button 
        class="mbutton" 

        :type="type"
        :class="classes" 
        :disabled="disabled || loading"

        @click="onClick"        
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
        color:{
            type:String,
            default:'success'
        }
    },
    computed: {
        classes() {
            return [
                `mb-${this.color}`,
                { 'mb-stretch': this.stretch },
            ];
        },
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
    color:#FFF;
    border:none;
    cursor: pointer;  
    position: relative;  
}

.mb-success{
    background: #14a76c;
}
.mb-success:hover, .mb-success:focus{
    background: #14a76cec;    
}
.mb-success:disabled{
    background: #14a76cb9;
}

.mb-danger{
    background: #dc3545;
}
.mb-danger:hover, .mb-danger:focus{
    background: #dc3545ec;    
}
.mb-danger:disabled{
    background: #dc3545b9;
}

.mb-stretch{
    width: 100%;
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
