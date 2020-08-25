<template>
    <div class="userPanel" :class="{ darkUserPanel: darkTheme }">
        <div
            class="userPanel-label"
            tabindex="0"
            @click="showUserPanel = !showUserPanel"
            @blur="showUserPanel = false"
        >
            <slot name="label"></slot>
        </div>
        <transition name="fade">
            <div class="options" v-show="showUserPanel">
                <slot></slot>
            </div>
        </transition>
        <div class="options options-mobile">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserPanel",
    props: {
        darkTheme: Boolean,
    },
    data() {
        return {
            showUserPanel: false,
        };
    },
};
</script>

<style>
.userPanel {
    position: relative;
    display: block;
}

.options-mobile{
    display: none;
}

.userPanel-label {
    position: relative;
    display: block;
    padding: 1rem;
    background-color: #e7e7e7;
    border: 1px solid transparent;
    /* border-radius: 5px; */
    color: #000;
    box-sizing: border-box;
}

.userPanel-label:focus {
    border: 1px solid #77777777;
    outline: none;
}

.options {
    z-index: 3;
    transition: opacity 0.5s ease;
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    background-color: #e7e7e7;
    /* border-radius: 5px; */
}

.options > * {
    display: block;
    user-select: none;
    padding: 0.8rem;
    text-decoration: none;
    color: inherit;
}

.options > *:hover {
    background-color: #cfcfcf;
}

.darkUserPanel .userPanel-label,
.darkUserPanel .options {
    background-color: #3a3a3a;
    color: #fff;
}

.darkUserPanel .options > *:hover {
    background-color: #252525;
}

@media (max-width: 720px) {
    .userPanel{
        min-width: 100%;
    }
    .userPanel-label{
        word-wrap: break-word;
    }
    .userPanel-label:focus {
        border: 1px solid transparent;
        outline: none;
    }
    .options{
        display: none;
    }
    .options-mobile{
        position: static;
        margin-top:5px;
        display: block;
        min-width: 100%;
        word-wrap: break-word;
    } 
}

/*//////////////// ANIMATION ////////////////*/
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>
