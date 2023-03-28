import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
// import NotFound from './pages/NotFound.vue';
// import ThankYou from './pages/ThankYou.vue';
// import Contacts from './pages/Contacts.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        // {
        //     path: '/Contatti',
        //     name: 'Contacts',
        //     component: Contacts
        // },
        // {
        //     path: '/Thank-You',
        //     name: 'ThankYou',
        //     component: ThankYou
        // },
        // {
        //     path: '/*',
        //     name: 'NotFound',
        //     component: NotFound
        // },

    ]
});

export { router }