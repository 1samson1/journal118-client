<template>
    <div id="app" :class="{darkTheme: darkTheme }">        
        <loader v-if="loading"/>
        <template v-else>
            <Header />
            <div class="content" :class="{ fixscroll: fixscroll}">
                <transition
                    name="fadePage"
                    @before-enter="beforeEnter"
                    @after-leave="afterLeave"
                >
                    <router-view />
                </transition>
            </div>
        </template>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Loader from "@/components/Loader.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "App",
    data() {
        return {
            fixscroll: false,
        };
    },
    created() {
        this.cicleCheckToken();
    },
    methods: {
        beforeEnter() {
            this.fixscroll = true;
        },
        afterLeave() {
            this.fixscroll = false;
        },
        ...mapActions(["cicleCheckToken"]),
    },
    computed: {
        ...mapGetters({
            darkTheme: "onDarkTheme",
            loading: "getloadingUserData",
        }),
    },
    components: {
        Header,Loader
    },
};
</script>

<style>
/*/////////// GLOBAL CLASSES APP ////////////*/
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}

.full-height {
    position: relative;
    height: 100% !important;
}

.fixscroll {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
    overflow: hidden !important;    
}

.block-scroll {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
}

.content {
    overflow-y: auto;
    flex-grow: 3;
    position: relative;
}

.wait-dev {
    margin: auto;
}

</style>
