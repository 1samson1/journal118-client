<template>    
    <div class="reg block-scroll">
        <div class="contur">
            <div class="title-page">Регистрация</div>
            <form class="form-reg" @submit.prevent='onReg'>                
                <div class="form-group">
                    <label for="reg-name">Имя</label>
                    <input v-model="name" type="text" class="form-input" id="reg-name" placeholder="Введите имя" required>
                </div>
                <div class="form-group">
                    <label for="reg-surname">Фамилия</label>
                    <input v-model="surname" type="text" class="form-input" id="reg-surname" placeholder="Введите фамилию" required>
                </div>
                <div class="form-group">
                    <label for="reg-login">Логин</label>
                    <input v-model="login" type="text" class="form-input" id="reg-login" placeholder="Введите логин" required>
                </div>
                <div class="form-group">
                    <label for="reg-email">E-mail</label>
                    <input v-model="email" type="text" class="form-input" id="reg-email" placeholder="Введите e-mail" required>
                </div>
                <div class="form-group">
                    <label for="reg-password">Пароль</label>
                    <input v-model="pass" type="password" class="form-input" id="reg-password" placeholder="Введите пароль" required>
                </div>                
                <div class="form-group">
                    <label for="reg-repassword">Подтверждение пароля</label>
                    <input v-model="repass" type="password" class="form-input" id="reg-repassword" placeholder="Подтвердите пароль" required>
                </div>
                <MButton label="Зарегистрироваться" type="submit" style="font-size:1.3rem" :stretch="true" :loading="loading"/>
            </form>            
        </div>         
    </div>    
</template>

<script>
import MButton from '@/components/MButton.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
    name:'reg',    
    metaInfo() {
        return {
            title: 'Регистрация'
        }
    }, 
    data(){
        return{
            name:'',
            surname:'',
            login:'',
            email:'',
            pass:'',
            repass:'',
            loading:false,
        }
    },
    watch:{
        logined(newValue){
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
        onReg(){
            this.loading = true
            this.reg({
                body:{
                    name:this.name,
                    surname:this.surname,
                    login:this.login,
                    email:this.email,
                    pass:this.pass,
                    repass:this.repass,
                },                
                done:()=> this.$router.push({name:'login'}),
                lastly:()=> this.loading = false,
            })
        },
        ...mapActions(['reg'])
    },    
    computed:{
        ...mapGetters(['logined'])
    },
    components:{
        MButton,
    } 
}
</script>

<style scoped>
.reg{   
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

.form-reg{
    margin: 0 auto;    
    padding-bottom: 1rem;
}

.form-reg input{     
    font-size:1.3rem ;
}
</style>

