import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { createMetaManager } from 'vue-meta'
//import '@/assets/bootstrap.min.css';
import '@/assets/animate.min.css';
import '@/components/date.js';
import '@/assets/main.css';
import '@/assets/scrollbar.css';


const app = createApp(App)

app.use(store)
app.use(router)
app.use(createMetaManager())

app.mount('#app')
