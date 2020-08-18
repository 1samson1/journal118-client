<template>
    <div class="dropdown" :class="{ darkDropdown: darkTheme }">
        <div
            class="dropdown-label"
            tabindex="0"
            @click="showDropDown = !showDropDown"
            @blur="showDropDown = false"
        >
            <slot name="label"></slot>
        </div>
        <transition name="fade">
            <div class="options-dropdown" v-show="showDropDown">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "DropDown",
    props: {
        darkTheme: Boolean,
    },
    data() {
        return {
            showDropDown: false,
        };
    },
};
</script>

<style>
.dropdown {
    position: relative;
    display: block;
}

.dropdown-label {
    position: relative;
    display: block;
    padding: 1rem;
    background-color: #e7e7e7;
    border: 1px solid transparent;
    border-radius: 5px;
    color: #000;
    box-sizing: border-box;
}

.dropdown-label:focus {
    border: 1px solid #77777777;
    outline: none;
}

.options-dropdown {
    z-index: 2;
    transition: opacity 0.5s ease;
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    background-color: #e7e7e7;
    border-radius: 5px;
}

.options-dropdown > * {
    display: block;
    user-select: none;
    padding: 0.8rem;
    text-decoration: none;
    color: inherit;
}

.options-dropdown > *:hover {
    background-color: #cfcfcf;
}

.darkDropdown,
.darkDropdown .dropdown-label,
.darkDropdown .options-dropdown {
    background-color: #3a3a3a;
    color: #fff;
}

.darkDropdown .options-dropdown > *:hover {
    background-color: #2a2a2a;
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
