<template>
    <div class="profile">
        <div class="wait-dev">В разработке!</div>
    </div>
</template>

<script>
export default {
    name:'Profile',
    metaInfo() {
        return {
            title: 'Профиль'
        }
    }, 
}
</script>

<style scoped>
.profile{
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
