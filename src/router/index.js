import { createRouter, createWebHistory } from 'vue-router'


//1.安装插件
// Vue.use(VueRouter)


const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/category.vue")
const Cart = () => import("../views/cart/cart.vue")
const Profile = () => import("../views/profile/Profile.vue")

//2.创建router
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]
const routerHistory = createWebHistory()
const router = createRouter({
    routes,
    history: routerHistory
})


export default router