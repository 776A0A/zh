import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: { redirectIfLogin: true },
    },
    {
        path: '/column/:id',
        name: 'Column',
        props: true,
        component: import('@/views/Column.vue'),
    },
    {
        path: '/create',
        name: 'CreatePost',
        component: import('@/views/CreatePost.vue'),
        meta: { requiredLogin: true },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from) => {
    if (to.meta.requiredLogin && !store.state.user.isLogin) return '/login'
    if (to.meta.redirectIfLogin && store.state.user.isLogin) return '/'
})

export default router
