<template>
    <div class="home block-scroll">
        <div class="title-page">Добро пожаловать в журнал!</div>
        <div class="copyright">Journal118 &copy; SAMSON 2020</div>  
    </div>
</template>

<script>
export default {
    name:'Home',
    metaInfo() {
        return {
            title: 'Добро пожаловать в журнал!'
        }
    },
}
</script>

<style scoped>
.home {   
    margin:0 0.5rem;      
    display: flex;
    justify-content: center;
    align-items: center;
}
.copyright {
    position: absolute;
    bottom: 0;
    text-align:center;
}
</style>
