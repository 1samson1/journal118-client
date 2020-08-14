<template>
    <div class="dates-work full-height">
        <div class="controls">
            <button class="btm-border previus">&#60; Назад</button>
            <div class="control-dates">20.02.2020</div>
            <button class="btm-border next" disabled>Далее &#62;</button>
        </div>
        <div class="work">
            <div class="block-scroll">
                <div class="user-work-header">
                    <div class="user-work-field">Студент</div>
                    <div class="user-work-field">Присутствует</div>
                    <div class="user-work-field">Опоздал</div>
                    <div class="user-work-field">Уроков пропущено</div>                
                </div>
                <div class="user-work">
                    <div class="user-work-field">Алексей Прохоров</div>
                    <div class="user-work-field">Да</div>
                    <div class="user-work-field">Нет</div>
                    <div class="user-work-field">0</div>                
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.dates-work{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.controls{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.work{
    position: relative;
    flex-grow:1;
    padding-top:1rem;
}

.user-work, .user-work-header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #cecece; 
}

.user-work:nth-child(even) {
    background: #7777773a;
}

.user-work-header{
    border-top: 1px solid #cecece; 
    font-weight: bold;
    background: #7777776b;
}

.user-work-field{
    width: 40%;
    text-align: center;
    padding:.9rem 0;
}
</style>
