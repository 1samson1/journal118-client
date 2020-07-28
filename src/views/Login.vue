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
                    <input v-model="password" type="password" class="form-control" id="password" placeholder="Введите пароль" required>
                </div>                
                <div class="form-group">
                    <input type="submit" class="btn btn-success btn-block" value="Войти">
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
            login:'',
            password:'',
        }
    },
    mounted(){
        if(this.dataUser){
            this.$router.push('/');
        }
    },
    methods:{
        onLogin(){
            this.$emit('onLogin',{
                login:this.login,
                password:this.password,
            })
        },
    },    
}
</script>

<style scoped>
.login{
    
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
