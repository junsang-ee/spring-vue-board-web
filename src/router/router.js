import MainDashboard from "../views/MainDashboard.vue";

const routes = [
    {path: "/", redirect: "/main"},
    {
        path: "/main", name:"Main", components: MainDashboard
    }
];