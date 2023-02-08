import {createRouter, createWebHistory} from "vue-router";
import GuestPage from "@/components/pages/GuestPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Guest page',
            component: GuestPage
        },
        // {
        //     path: "books"
        // },
        // {
        //     path:''
        // }
    ]

})
export default router
