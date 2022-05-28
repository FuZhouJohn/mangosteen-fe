import { createApp } from "vue";
import { createRouter } from "vue-router";
import { App } from "./App";
import routes from "~pages";
import { history } from "./shared/history";

import "@unocss/reset/tailwind.css";
import "./styles/main.css";
import "uno.css";

const router = createRouter({ history, routes });

const app = createApp(App);

app.use(router);

app.mount("#app");
