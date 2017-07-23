import Vue from 'vue';
import VueRouter from "vue-router"

import App from './App';
import routes from "./routes"

Vue.use(VueRouter);
Vue.config.productionTip = false;

let router = new VueRouter({
    routes: routes,
    mode: "history",
    scrollBehavior: function(to, from, savedPosition) {
        return savedPosition || {x: 0, y: 0}
    }
});

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
