import { createApp } from "vue";
import App from "./App.vue";
import Card from "./components/UI/Card.vue";

createApp(App)
.component("card-component", Card)
.mount("#app");
