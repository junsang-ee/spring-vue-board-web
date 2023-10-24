import { createRouter, createWebHistory } from "vue-router";
import MainDashboard from "../views/MainDashboard.vue"
import Test from "../views/Test.vue";
import PostList from "../views/post/PostList.vue";
import PostEmpty from "../views/post/PostEmpty.vue";
import Login from "../views/Login.vue";


const routes = [
    // {path: "/", redirect: "/main"},
    {path: "/main", name:"Main", component: MainDashboard},
    {path: "/test", name:"Test", component: Test},
    {path: '/post-list/:boardId', name:'PostList', component: PostList},
    {path: "/post-empty", name:"PostEmpty", component: PostEmpty},
    {path: "/login", name:"Login", component: Login},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;