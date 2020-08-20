<template>
    <div class="minusplus">
        <div class="minus" @click="onMinus">&minus;</div>
        <div class="counter">{{localValue}}</div>
        <div class="plus" @click="onPlus">&plus;</div>
    </div>
</template>

<script>
export default {
    name: "MinusPlus",
    props: {
        value: {
            type:[String,Number],
            default: '0',
        },
        minValue:{
            type:Number,
            default: 0,
        },
        maxValue:{
            type:Number,
            default: 8,
        },
    },    
    data() {
        return {
            localValue: parseInt(this.value),
        };
    },
    watch: {
        value(newValue) {
            this.localValue = parseInt(newValue)
        },
    },
    methods:{
        onMinus(e){
            if(this.localValue > this.minValue)
                this.localValue--
            this.update(e)
        },
        onPlus(e){
            if(this.localValue < this.maxValue)
                this.localValue++
            this.update(e)
        },
        update(e){
             this.$emit('input',`${this.localValue}` , e);
        }
    }
};
</script>

<style scoped>
.minusplus {
    display: flex;
    justify-content: center;
    align-items: center;
}
.counter {
    background: #77777715;
    padding: 0.3rem 1rem;
}

.minus,
.plus {
    background: #77777735;    
    padding: 0.3rem .5em;
    user-select: none;
    cursor: pointer;
}
</style>
