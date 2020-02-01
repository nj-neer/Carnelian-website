import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Main from "./components/Main.vue";
import SignupForm from "./components/SignupForm.vue";
import Verify from "./components/Verify.vue";

const routes = [
    {
        path: "/", component: Main
    },
    {
        path: "/signup", component: SignupForm
    },
    {
        path: "/verify", component: Verify
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

Vue.use(VueRouter);

// tslint:disable-next-line: no-unused-expression
new Vue({
    el: "#app",
    router,
    render: (h) => h(App),
});
