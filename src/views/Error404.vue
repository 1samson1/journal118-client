<template>    
    <div class="error">
        <div class="title-page" style="color:#F76C6C;  ">Страница не найдена!</div>
        <div class="copyright">Journal118 &copy; SAMSON 2020</div>  
    </div>           
      
</template>

<script>
export default {
    name:'Error404',
    metaInfo() {
        return {
            title: 'Страница не найдена!'
        }
    },
}
</script>

<style scoped>
.error{
    margin:0 0.5rem;      
    display: flex;
    justify-content: center;
    align-items: center;  
    height: 100%;    
}
.copyright {
    position: absolute;
    bottom: 0;
    text-align:center;
}
</style>
