import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: import('@/views/Home.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Login.vue'),
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
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
