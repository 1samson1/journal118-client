<template>    
    <div class="login">
        <div style="flex:600px 0 1;">
            <div class="title-page">Авторизация</div>
            <form class="form-login" @submit.prevent='onLogin'>                
                <div class="form-group">
                    <label for="login">Логин</label>
                    <input v-model="login" type="text" class="form-control" id="login" placeholder="Введите логин" required>
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input v-model="pass" type="password" class="form-control" id="password" placeholder="Введите пароль" required>
                </div>                
                <div class="form-group">
                    <input type="submit" class="btn btn-success btn-block" value="Войти">
                </div>
            </form>  
        </div>         
    </div>    
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
    name:'Login',    
    data(){
        return{
            login:'',
            pass:'',
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
                callback:()=> this.$router.push({name:'home'})
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

.form-group label{
    margin-left: .5rem;    
}

.form-login input{     
    font-size:1.5rem ;    
    max-width: 600px;    
}

.custom-checkbox{
    padding-bottom: 1rem;
}
</style>
