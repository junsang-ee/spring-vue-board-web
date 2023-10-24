import { createRouter, createWebHistory } from "vue-router";
import MainDashboard from "../views/MainDashboard.vue"
import Test from "../views/Test.vue";
import PostList from "../views/posts/PostList.vue";
import PostEmpty from "../views/posts/PostEmpty.vue";
import Login from "../views/Login.vue";


const routes = [
    {path: "/main", name:"Main", component: MainDashboard},
    {path: "/test", name:"Test", component: Test},
    {path: '/post-list/:boardId', name:'PostList', component: PostList},
    {path: "/post-empty", name:"PostEmpty", component: PostEmpty},
    {path: "/login", name:"Login", component: Login}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;