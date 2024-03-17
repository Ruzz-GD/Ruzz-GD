// Import the MyHome and MyLogin components
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';

// Import necessary functions from Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import the Vuex store
import store from './store';
import CreateAccount from './components/CreateAccount.vue';

// Create a router instance
const router = createRouter({
    // Set up web history mode
    history: createWebHistory(),
    // Define routes
    routes: [
        {
            path: '/',
            redirect: '/LoginPage', // Redirect the root path to the login page
        },
        {
            path: '/HomePage',
            component: HomePage,
            meta: { requiresAuth: true },
            beforeEnter: (to, from, next) => {
                // Check if the user is authenticated using the Vuex store state
                if (store.state.isAuthenticated) {
                    // User is authenticated, allow access to MyHome.vue
                    next();
                } else {
                    // User is not authenticated, redirect to MyLogin.vue
                    next('/LoginPage');
                }
            },
        },
        {
            path: '/LoginPage',
            component: LoginPage,
            // Add a beforeEnter guard for MyLogin to prevent access if already authenticated
            beforeEnter: (to, from, next) => {
                // Check if the user is already authenticated using the Vuex store state
                if (store.state.isAuthenticated) {
                    // User is already authenticated, redirect to MyHome.vue
                    next('/HomePage');
                } else {
                    // User is not authenticated, allow access to MyLogin.vue
                    next();
                }
            },
        },
        {
            path: '/CreateAccount',
            component: CreateAccount,
        }
    ],
});

export default router;
