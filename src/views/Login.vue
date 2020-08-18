<template>    
    <div class="login">
        <div style="flex:500px 0 1;">
            <div class="title-page">Авторизация</div>
            <form class="form-login" @submit.prevent='onLogin'>                
                <div class="form-group">
                    <label for="login">Логин</label>
                    <input v-model="login" type="text" class="form-input" id="login" placeholder="Введите логин" required>
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input v-model="pass" type="password" class="form-input" id="password" placeholder="Введите пароль" required>
                </div>               
                <CheckBox v-model="onlyLogin">Чужой компьютер</CheckBox>                             
                <div class="form-group">
                    <input type="submit" class="form-button" value="Войти">
                </div>
            </form>  
        </div>         
    </div>    
</template>

<script>
import CheckBox from '@/components/CheckBox.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
    name:'Login',    
    data(){
        return{
            login:'',
            pass:'',
            onlyLogin:false,
        }
    },
    mounted(){
        if(this.userData){
            this.$router.push({name:'home'});
        }
    },
    methods:{        
        onLogin(){
            this.auth({
                body:{
                    login:this.login,
                    pass:this.pass,
                },
                onlyLogin:this.onlyLogin,
                done:()=> this.$router.push({name:'home'})
            })
        },
        ...mapActions({
           auth:'login'
        })
    },    
    computed:{
        ...mapGetters({
            userData:'getUserData'
        })
    },
    components:{
        CheckBox,
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

.form-login{
    margin: 0 auto;    
}

.form-login input{     
    font-size:1.3rem ;      
}
</style>
