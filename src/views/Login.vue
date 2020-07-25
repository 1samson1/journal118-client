<template>
    <div class="container">
        <div class="login">
            <div class="mx-1 display-4 text-success">Авторизация</div>
        </div>
        <div class="d-flex justify-content-center">
            <form class="form-login" @submit.prevent='onLogin'>
                <div class="form-group">
                    <label for="formGroupInput">Логин</label>
                    <input v-model="login" type="text" class="form-control" id="formGroupInput" placeholder="Login">
                </div>
                <div class="form-group">
                    <label for="formGroupInput2">Пароль</label>
                    <input v-model="password" type="password" class="form-control" id="formGroupInput2" placeholder="Password">
                </div>
                <div class="custom-control custom-checkbox">
                    <input v-model="loginOnly" type="checkbox" class="custom-control-input" id="loginOnly">
                    <label class="custom-control-label" for="loginOnly">Чужой компьютер</label>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-success btn-lg btn-block" value="Войти">
                </div>
            </form>
        </div>        
    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            login:'',
            password:'',
            loginOnly:true,
        }
    },
    methods:{
        onLogin(){
            this.$emit('onLogin',{
                login:this.login,
                password:this.password,
                loginOnly:this.loginOnly,
            })
        },
    }
}
</script>

<style scoped>
.login{
   padding-top: 15%;
   text-align: center;
}

.form-login{
    padding-top: 4%;
    max-width: 600px;
    flex:600px 0 1;
}

.custom-checkbox{
    padding-bottom: 1rem;
}
</style>