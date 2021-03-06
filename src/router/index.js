import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Statistics from "../views/Statistics.vue";
import Settings from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/statistcs',
        name: 'statistics',
        component: Statistics,
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;