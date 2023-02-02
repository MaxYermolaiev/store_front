import {createApp} from 'vue';
import App from './App.vue';
import {createWebHistory, createRouter} from 'vue-router';

const app = createApp(App)
import {AppHome,AppAuthentificate,AppCreate,AppRestore,AppBasket,AppNotFound,AppCategory,AppProduct,AppSearch
} from "./components";
//import {AdminHeader} from './components/admin'
const routerHistory = createWebHistory();
const routes = [
    {path: '/cart', component: AppBasket, props: true},
    {path: '/search', component: AppSearch, props: true},
    {path: '/create', component: AppCreate, props: true},
    {path: '/auth', component: AppAuthentificate, props: true},
    {path: '/restore', component: AppRestore, props: true},
    {path: '/home', component: AppHome, props: true},
    {path: '/category', component: AppCategory, props: true},
    {path: '/product', component: AppProduct, props: true},
    {path: '/not-found', component: AppNotFound},
    {path: '/:pathMatch(.*)*', redirect: '/not-found'},
    //-----------admin-------------

]

const router = createRouter({
    history: routerHistory,
    routes: routes
});


app.use(router)
app.mount('#app')
