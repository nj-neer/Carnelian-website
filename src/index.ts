
import Vue from "vue";
import Notifications from "vue-notification";
import VueRouter from "vue-router";
import App from "./App.vue";
import Account from "./components/Account.vue";
import LoginForm from "./components/LoginForm.vue";
import Main from "./components/Main.vue";
import SignupForm from "./components/SignupForm.vue";
import Verify from "./components/Verify.vue";
// tslint:disable-next-line: no-var-requires
const config = require("../config.json");
// tslint:disable-next-line: no-var-requires
const devConfig = require("../config.dev.json");
declare let window: any;
const routes = [
    {
        path: "/", component: Main
    },
    {
        path: "/signup", component: SignupForm
    },
    {
        path: "/login", component: LoginForm
    },
    {
        path: "/verify", component: Verify
    },
    {
        path: "/account", component: Account
    },
    { path: "*", redirect: "/" }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: "history",
    routes
});

Vue.use(Notifications);
Vue.use(VueRouter);

window.config = config;
if (Vue.config.devtools) {  // set the dev config if we are in dev mode
    window.config = devConfig;
}

// tslint:disable-next-line: no-unused-expression
new Vue({
    el: "#app",
    router,
    render: (h) => h(App),
});
