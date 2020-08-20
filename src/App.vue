<template>
    <div id="app" :class="{ darkTheme: darkTheme }">        
        <Header  />
        <div class="content">
            <transition name="fadePage">
                <router-view />      
            </transition>             
        </div>
    </div>    
</template>

<script>
import Header from "./components/Header.vue";
import { mapActions, mapGetters } from "vuex"

export default {
    name: "App",    
    mounted() {
        this.cicleCheckToken()
    },
    methods: {
        ...mapActions(['cicleCheckToken']),
    }, 
    computed:{
        ...mapGetters({
            darkTheme:'onDarkTheme'
        })
    },
    components: {
        Header,
    },
};
</script>

<style>
/*/////////// GLOBAL CLASSES APP ////////////*/
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}

.full-height{
    position: relative;
    height: 100% !important;    
}

.block-scroll{
    position: absolute; 
    left:0;
    right:0;
    top:0;
    bottom:0;
    overflow-y: auto;
}

.content{
    overflow-y: auto;
    flex-grow: 3;
    position: relative;
}

.wait-dev{
    margin:auto
}

</style>
