import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Option from "../views/Option.vue";


const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/option",
        name: "Option",
        component: Option,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;