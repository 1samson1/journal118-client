import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import VueMeta from 'vue-meta'
//import '@/assets/bootstrap.min.css';
import '@/assets/animate.min.css';
import '@/components/date.js';
import '@/assets/main.css';
import '@/assets/scrollbar.css';


Vue.config.productionTip = false;

Vue.use(VueMeta)

new Vue({    
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
