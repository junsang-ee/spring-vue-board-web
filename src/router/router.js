import { createRouter, createWebHistory } from "vue-router";
import MainDashboard from "../views/MainDashboard.vue"
import Test from "../views/Test.vue";


const routes = [
    // {path: "/", redirect: "/main"},
    {path: "/main", name:"Main", component: MainDashboard},
    {path: "/test", name:"Test", component: Test},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;