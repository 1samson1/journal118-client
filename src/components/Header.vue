<template>
    <header>
        <router-link  to="/">Главная</router-link>
        <router-link  to="journal">Журнал</router-link>             
    
        <input type="checkbox" class="custom-control-input" id="customSwitch1"
            :checked="darkTheme"
            @change="$emit('change-theme')">
        <label class="custom-control-label" for="customSwitch1">Dark mode</label>
    
        <template v-if="!dataUser">
            <router-link class="p-3 text-decoration-none"  to="/login/">Вход</router-link>
            <router-link class="p-3 text-decoration-none" to="">Регистрация</router-link>
        </template>
        <template v-else>                        
                    {{dataUser.login}}                                                   
        </template>
                
        
    </header>
</template>

<script>
export default {
    name:'Header',
    props:{
        darkTheme:Boolean,
        dataUser:Object,
    },    
}
</script>

<style scoped>
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}

li,a {
    font-size: 1.2rem;
    font-weight:bold;
}

.link-menu{
    color:var(--success);
}

.link-menu:hover{
    color:#04791f;
}

</style>