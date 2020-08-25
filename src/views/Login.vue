<template>    
    <div class="login">
        <div class="contur">
            <div class="title-page">Авторизация</div>
            <form class="form-login" @submit.prevent='onLogin'>                
                <div class="form-group">
                    <label for="log-login">Логин</label>
                    <input v-model="login" type="text" class="form-input" id="log-login" placeholder="Введите логин" required>
                </div>
                <div class="form-group">
                    <label for="log-password">Пароль</label>
                    <input v-model="pass" type="password" class="form-input" id="log-password" placeholder="Введите пароль" required>
                </div>               
                <CheckBox class="login-checkbox" v-model="onlyLogin">Чужой компьютер</CheckBox>                             
                <MButton label="Войти" type="submit" style="font-size:1.3rem" :stretch="true" :loading="loading"/>
            </form>  
        </div>         
    </div>    
</template>

<script>
import CheckBox from '@/components/CheckBox.vue'
import MButton from '@/components/MButton.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
    name:'Login',    
    metaInfo() {
        return {
            title: 'Авторизация'
        }
    },    
    data(){
        return{
            login:'',
            pass:'',
            onlyLogin:false,
            loading:false,
        }
    },
    watch:{
        logined(newValue){
            console.log("gg");
            if(newValue){
                this.$router.push({name:'home'});
            }
        }
    },
    mounted(){
        if(this.logined){
            this.$router.push({name:'home'});
        }
    },
    methods:{        
        onLogin(){
            this.loading = true
            this.auth({
                body:{
                    login:this.login,
                    pass:this.pass,
                },
                onlyLogin:this.onlyLogin,
                done:()=> this.$router.push({name:'home'}),
                lastly:()=> this.loading = false,
            })
        },
        ...mapActions({
           auth:'login'
        })
    },    
    computed:{
        ...mapGetters(['logined'])
    },
    components:{
        CheckBox,MButton,
    }

}
</script>

<style scoped>
.login{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    padding:0 1rem;
}

.contur{
    background: #77777720;
    flex:500px 0 1;
    padding: 1rem;
}

.form-login{
    margin: 0 auto;  
    padding-bottom: 1rem;  
}

.form-login input {     
    font-size:1.3rem ;      
}

.login-checkbox{
    padding-bottom: .5rem;
}

</style>
