<template>
    <div id="app" :class="{ darkTheme: darkTheme }">        
        <Header
            :darkTheme="darkTheme"            
            :alerts="alerts"         
            @change-theme="changeTheme"            
        />        
        <transition name="fade">
            <router-view class="content" />
        </transition>
        <div class="copyright">&copy; SAMSON 2020</div>     
    </div>    
</template>

<script>
import Header from "./components/Header.vue";
import { mapActions } from "vuex"

export default {
    name: "App",
    data() {
        return {
            alerts: [],        
            
            darkTheme: true,            
            
        };
    },
    created() {},
    
    mounted() {
        this.darkTheme = localStorage.darkTheme === 'true'        
                  
        this.cicleCheckToken()
        
    },   
    watch:{        
        darkTheme(newValue){
            localStorage.darkTheme = newValue
        }
    },
    methods: {  
        ...mapActions(['cicleCheckToken']),
        changeTheme() {
            this.darkTheme = !this.darkTheme;
        },        
               
    },
    computed: {
        useError() {
            return this.error.trim();
        },
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
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
</style>
