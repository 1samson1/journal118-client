<template>
    <div id="app" :class="{ darkTheme: darkTheme }">        
        <Header  />
        <div class="content">
            <transition name="fade">
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
        this.checkToken()
    },
    methods: {
        ...mapActions(['checkToken']),
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
.content{
    overflow-y: auto;
    flex-grow: 3;
    position: relative;
}
</style>
