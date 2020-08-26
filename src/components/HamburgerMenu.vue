<template> 
    <div class="hamburger-menu">
        <div class="menu-button">
            <div class="menu-icon-wrapper" 
                tabindex="0"

                :class="{darkMenuButton:!darkTheme}"
                @click="onClick"
                @blur="onBlur"
            > 
                <slot name="icon" :active="value">
                    <div class="menu-icon" :class="{'menu-icon-active':value}"></div>
                </slot>
            </div>
        </div>
        <div class="links" :class="links">
            <slot></slot>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "HamburgerMenu",
    props:{
        left:{
            type:Boolean,
            default:true
        },
        right:{
            type:Boolean,
            default:false
        },
        darkTheme:{
            type:Boolean,
            default:false
        },
    },
    data() {
        return {
            value:false
        };
    },    
    computed:{
        leftClass(){
            if(this.right){
                return false
            }
            return true
        },
        links(){
            return {
                left:this.leftClass,
                right:this.right,
                darkTheme:this.darkTheme,
                'links-active':this.value,
            }
        }
    },
    watch: {
        value(newValue) {
            this.value = newValue
        },
    },
    methods:{
        onClick(e){
            this.value = !this.value
            this.update(e)
        },
        onBlur(e){
            this.value = false
            this.update(e)
        },
        update(e){            
            this.$emit('input',this.value , e);
        }
    }
};
</script>

<style scoped>
.darkMenuButton .menu-icon,
.darkMenuButton .menu-icon::before,
.darkMenuButton .menu-icon::after {
    background-color: #202020;
}

.menu-button{
    display: none;
}

.menu-icon-wrapper {    
    /*   background: red; */
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-icon-wrapper:focus { 
    outline:none;
}

.menu-icon {
    position: relative;
    width: 24px;
    height: 3px;
    background-color: #fff;    
}

.menu-icon::before {
    position: absolute;
    left: 0;
    top: -7px;
    content: "";
    width: 24px;
    height: 3px;
    background-color: #fff;
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
}

.menu-icon::after {
    position: absolute;
    left: 0;
    top: 7px;
    content: "";
    width: 24px;
    height: 3px;
    background-color: #fff;
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
}

.menu-icon.menu-icon-active {
    background-color: transparent;
}

.menu-icon.menu-icon-active::before {
    transform: rotate(45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
}

.menu-icon.menu-icon-active::after {
    transform: rotate(-45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
}

@media (max-width: 720px) {
    .menu-button{
        display: block;        
    }

    .left{
        transform: translateX(-100%);
        left:0;
    }

    .right{
        transform: translateX(100%);
        right: 0;
    }    

    .links{
        display: block;        
        position: absolute;
        display: flex;
        flex-direction: column;
        top:100%;
        bottom:0;
        z-index: 2;
        height: 100vh;
        min-width: 200px;
        background-color: #f3f3f3;
        transition: transform .5s ease
    }

    .links-active{
        transform: translateX(0);
    }

    .darkTheme .links{        
        background-color: #2c2c2c;
    }
}
</style>
