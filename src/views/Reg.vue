<template>    
    <div class="reg">
        <div style="flex:600px 0 1;">
            <div class="title-page">Регистрация</div>
            <form class="form-reg" @submit.prevent='onReg'>                
                <div class="form-group">
                    <label for="name">Имя</label>
                    <input v-model="name" type="text" class="form-control" id="name" placeholder="Введите имя" required>
                </div>
                <div class="form-group">
                    <label for="surname">Фамилия</label>
                    <input v-model="surname" type="text" class="form-control" id="surname" placeholder="Введите фамилию" required>
                </div>
                <div class="form-group">
                    <label for="login">Логин</label>
                    <input v-model="login" type="text" class="form-control" id="login" placeholder="Введите логин" required>
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input v-model="email" type="text" class="form-control" id="email" placeholder="Введите e-mail" required>
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input v-model="pass" type="password" class="form-control" id="password" placeholder="Введите пароль" required>
                </div>                
                <div class="form-group">
                    <label for="repassword">Подтверждение пароля</label>
                    <input v-model="repass" type="password" class="form-control" id="repassword" placeholder="Подтвердите пароль" required>
                </div>                
                <div class="form-group">
                    <input type="submit" class="btn btn-success btn-block" value="Зарегистрироваться">
                </div>
            </form>            
        </div>         
    </div>    
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
    name:'reg',
    data(){
        return{
            name:'',
            surname:'',
            login:'',
            email:'',
            pass:'',
            repass:'',
        }
    },
    mounted(){
        if(this.userData){
            this.$router.push({name:'home'});
        }
    },
    methods:{        
        onReg(){
            this.reg({
                body:{
                    name:this.name,
                    surname:this.surname,
                    login:this.login,
                    email:this.email,
                    pass:this.pass,
                    repass:this.repass,
                },                
                callback:()=> this.$router.push({name:'login'})
            })
        },
        ...mapActions(['reg'])
    },    
    computed:{
        ...mapGetters({
            userData:'getUserData'
        })
    }   
}
</script>

<style scoped>
.reg{   
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    padding:0 1rem;
}

.form-reg{
    margin: 0 auto;    
}

.form-group label{
    margin-left: .5rem;
}

.form-reg input{     
    font-size:1.5rem ;    
    max-width: 600px;    
}

.custom-checkbox{
    padding-bottom: 1rem;
}
</style>

