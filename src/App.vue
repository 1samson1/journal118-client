<template>
    <div id="app" :class="{ 'darkTheme': darkTheme }">
        <Header :darkTheme="darkTheme" :dataUser="dataUser" @change-theme="changeTheme" />
        <Error :error="error" v-show="useError" />
        <transition name="fade">
            <router-view class="content"  @onLogin="onUser" />
        </transition>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Error from "./components/Errors.vue";
import { SendQuery } from "./components/request.js";

export default {
    name: "App",
    data() {
        return {
            error: "",
            domain: "http://journal118",
            darkTheme: true,
            dataUser:null,
            dataToken:'',
        };
    },
    created(){
        
    },
    mounted(){
        setInterval(()=>{
            console.log('Check Token!', this.dataToken)
            if(this.dataToken){                
                SendQuery(this.domain + "/api/confirm.php", {
                    token: this.dataToken,
                }).then(json => {
                    console.log(json)
                    if(json.error){
                        this.dataToken = ''
                        this.dataUser = null
                        return this.error = json.error_info
                    }
                    this.dataUser = json.response                    
                })
                .catch(err => {
                    this.error = err.error_info
                })
            }
        },30000)        
    },
    methods: {
        changeTheme() {
            this.darkTheme = !this.darkTheme;
        },
        onUser(data_login) {
            SendQuery(this.domain + "/api/login.php", {
                login: data_login.login,
                pass: data_login.password,
            }).then(json => {
                console.log(json)
                if(json.error){
                    return this.error = json.error_info
                }
                this.dataUser = json.response.user
                this.dataToken = json.response.token

            })
            .catch(err => this.error = err.error_info )
        },
    },
    computed: {
        useError() {
            return this.error.trim();
        },
    },

    components: {
        Header,
        Error,
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

.content{
    overflow-y:auto;
    height: 100%;
}

.darkTheme{
    background-color: #202020;
    color: #FFF;
}

/*/////////// ANIMATIONS ////////////*/
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-active {
    transition: opacity 0.5s ease 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
