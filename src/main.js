import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const Appx = createApp(App);

Appx.use(router);
Appx.mount("#app");
