import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";
import App from "./App.vue";

// const router = new VueRouter({
//     mode: "history",
//     routes,
// });

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);

// tslint:disable-next-line: no-unused-expression
new Vue({
    el: "#app",
    render: (h) => h(App),
});
