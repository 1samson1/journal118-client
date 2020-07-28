<template>    
    <div class="reg">
        <div style="flex:600px 0 1;">
            <div class="title-page">Регистрация</div>
            <form class="form-login" @submit.prevent='onReg'>                
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
                    <input v-model="password" type="password" class="form-control" id="password" placeholder="Введите пароль" required>
                </div>                
                <div class="form-group">
                    <label for="repassword">Подтверждение пароля</label>
                    <input v-model="repassword" type="password" class="form-control" id="repassword" placeholder="Подтвердите пароль" required>
                </div>                
                <div class="form-group">
                    <input type="submit" class="btn btn-success btn-block" value="Зарегистрироваться">
                </div>
            </form>            
        </div>         
    </div>    
</template>

<script>
export default {
    name:'Login',
    props:{
        dataUser:Object,
    },
    data(){
        return{
            name:'',
            surname:'',
            login:'',
            email:'',
            password:'',
            repassword:'',
        }
    },
    mounted(){
        if(this.dataUser){
            this.$router.push('/');
        }
    },
    methods:{
        onReg(){
            this.$emit('onReg',{
                login:this.login,
                password:this.password,
            })
        },
    },    
}
</script>

<style scoped>
.reg{    
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
}

.form-login{
    margin: 0 auto;    
}

.form-login input{     
    font-size:1.5rem ;    
    max-width: 600px;    
}

.custom-checkbox{
    padding-bottom: 1rem;
}
</style>

