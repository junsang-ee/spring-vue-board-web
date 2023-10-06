import { createRouter, createWebHistory } from "vue-router";
import MainDashboard from "../views/MainDashboard.vue"
import Test from "../views/Test.vue";
import PostList from "../views/post/PostList.vue";


const routes = [
    // {path: "/", redirect: "/main"},
    {path: "/main", name:"Main", component: MainDashboard},
    {path: "/test", name:"Test", component: Test},
    {path: "/post-list", name:"PostList", component: PostList}

];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;