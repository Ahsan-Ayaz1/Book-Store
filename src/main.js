import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
pinia.use(piniaPluginPersistedstate);
