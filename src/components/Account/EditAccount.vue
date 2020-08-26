<template>
    <div class="edit-account">        
        <div class="account-info">
            <img src="/img/anonymous.png" class="account-foto" alt="foto">
            <div class="account-story">{{getUserData.name}} {{getUserData.surname}}</div>
        </div>
        <form class="form-update" @submit.prevent='onUpdate'> 
            <div class="form-group">
                <label for="upd-group-name">Группа</label>
                <div id="upd-group-name" class="form-disabled">{{group}}</div>
            </div>  
            <div class="form-inline">
                <div class="form-group">
                    <label for="upd-name">Имя</label>
                    <input v-model="name" type="text" class="form-input" id="upd-name" placeholder="Введите имя" required>
                </div>
                <div class="form-group">
                    <label for="upd-surname">Фамилия</label>
                    <input v-model="surname" type="text" class="form-input" id="upd-surname" placeholder="Введите фамилию" required>
                </div>
            </div>
            <div class="form-inline">
                <div class="form-group">
                    <label for="upd-login">Логин</label>
                    <input v-model="login" type="text" class="form-input" id="upd-login" placeholder="Введите логин" required>
                </div>
                <div class="form-group">
                    <label for="upd-email">E-mail</label>
                    <input v-model="email" type="text" class="form-input" id="upd-email" placeholder="Введите e-mail" required>
                </div>
            </div>
            <div class="form-group">
                <label for="upd-miss-user">Пропускать при генерации дежурных</label>
                <div id="upd-miss-user" class="form-disabled">{{miss_user | yesNo}}</div>
            </div>    
            <div class="title-part">Смена пароля</div>    
            <div class="form-group">
                <label for="upd-password">Старый пароль</label>
                <input v-model="pass" type="password" class="form-input" id="upd-password" placeholder="Введите старый пароль">
            </div>                
            <div class="form-group">
                <label for="upd-newpassword">Пароль</label>
                <input v-model="newpass" type="password" class="form-input" id="upd-newpassword" placeholder="Введите пароль">
            </div>                
            <div class="form-group">
                <label for="upd-repassword">Подтверждение пароля</label>
                <input v-model="repass" type="password" class="form-input" id="upd-repassword" placeholder="Подтвердите пароль">
            </div>
            <MButton label="Сохранить изменения" type="submit" style="font-size:1.3rem" :stretch="true" :loading="loading"/>
        </form>  
    </div>
</template>

<script>
import MButton from '@/components/MButton.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
    name:'EditAccount',
    data(){
        return{
            group:'',
            name:'',
            surname:'',
            login:'',
            email:'',
            miss_user:'',
            pass:'',
            newpass:'',
            repass:'',
            loading:false,
        }
    },
    mounted(){
        this.group = this.getUserData.group_name;
        this.name = this.getUserData.name;
        this.surname = this.getUserData.surname;
        this.login = this.getUserData.login;
        this.email = this.getUserData.email;
        this.miss_user = this.getUserData.miss_user;
    },
    methods:{
        onUpdate(){
            this.loading = true
            this.editProfile({
                body:{
                    name:this.name,
                    surname:this.surname,
                    login:this.login,
                    email:this.email,
                    pass:this.pass,
                    newpass:this.newpass,
                    repass:this.repass,
                },
                done:()=> {
                    this.pass = ''
                    this.newpass = ''
                    this.repass =''
                },
                lastly:()=> this.loading = false,
            })
        },
        ...mapActions(['editProfile'])
    },
    computed:{
        ...mapGetters(['getUserData'])
    },
    filters:{
        yesNo(bool){
            return bool === '1'?'Да':'Нет'
        },
    },
    components:{
        MButton,
    },
}
</script>

<style scoped>
.title-part{    
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.3rem;
}

.account-info{
    display: flex;    
    align-items: center;
}

.account-foto{
    width: 72px;
}

.account-story{
    margin-left: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
}

.form-update{    
    margin: 0 auto;    
    padding: 1rem 0;
}

.form-inline{
    display: flex;
}

.form-inline div{
    width: 50%;
}

.form-inline div:nth-child(1){
    margin-right: .5rem;
}

.form-update input{     
    font-size:1.3rem ;
}

@media (max-width: 600px) {
    .form-inline{
        display: block;
    }

    .form-inline div{
        width: 100%;
    }

    .form-inline div:nth-child(1){
        margin-right: none;
    }
}
</style>
