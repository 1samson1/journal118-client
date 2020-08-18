<template>
    <label class="checkbox">
        <input   
            class="check-input"         
            ref="input"
            type="checkbox"

            :checked.prop="isChecked"
            :disabled="disabled"
            :name="name"
            :tabindex="tabindex"
            :value="submittedValue"

            @blur="onBlur"
            @click="onClick"
            @focus="onFocus"
        >
        <span class="check"></span>
        <span class="label"><slot>{{ label }}</slot></span>
    </label>
</template>

<script>
export default {
    name:'CheckBox',
    props:{
        name:String,
        label:String,
        tabindex: [String, Number],
        value:{
            required:true,
        },
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        },
        submittedValue: {
            type: String,
            default: 'on' // HTML default
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            isActive: false,
            isChecked: this.value === this.trueValue || this.checked
        };
    }, 
    watch: {
        value() {
            this.isChecked = this.value === this.trueValue;
        }
    },

    created() {
        this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
    },

    methods: {
        focus() {
            this.$refs.input.focus();
        },

        onClick(e) {
            const isCheckedPrevious = this.isChecked;
            const isChecked = e.target.checked;

            this.$emit('input', isChecked ? this.trueValue : this.falseValue, e);

            if (isCheckedPrevious !== isChecked) {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue, e);
            }
        },

        onFocus(e) {
            this.isActive = true;
            this.$emit('focus', e);
        },

        onBlur(e) {
            this.isActive = false;
            this.$emit('blur', e);
        }
    }    
}
</script>

<style scoped>
.checkbox {
    font-size: 1rem;
    display: block;
    padding:.3rem 1.2rem;
}

.check-input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
}

.label{
    padding-left: .3rem;
}

.check {
    transition: box-shadow 0.5s ease , background 0.5s ease;   
    position: absolute;
    margin-left: -1.2rem;
    width: 1.1rem;
    height: 1.1rem;
    background: #77777725;   
    border:0.1rem solid rgb(28, 138, 105);
    box-sizing: border-box;     
}

.check-input:checked + .check {
    border:0.2rem solid rgb(28, 138, 105);
    background: rgb(28, 138, 105) url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' ?%3e%3csvg id='Layer_1' style='enable-background:new 0 0 512 512;' version='1.1' viewBox='0 0 512 512' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpolygon class='st0' fill='%23FFF' points='434.8,49 174.2,309.7 76.8,212.3 0,289.2 174.1,463.3 196.6,440.9 196.6,440.9 511.7,125.8 434.8,49 '/%3e%3c/g%3e%3c/svg%3e");       
}

/* FOCUS CHECK */

.check-input:focus + .check {    
    box-shadow: 0 0 0 0.05rem #2E9CCA;
} 

.check-input:disabled + .check {
    opacity: 0.7;
} 
</style>