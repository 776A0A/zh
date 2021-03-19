import { createStore } from 'vuex'
import plugins from './plugins'
import axios from 'axios'

axios
    .post('https://yapi.baidu.com/mock/43546/login', {
        email: '123@qq.com',
        password: '123',
    })
    .then(res => {
        console.log(res)
    })

export interface ColumnProps {
    id: number
    title: string
    avatar?: string
    description: string
}

export interface PostProps {
    id: number
    title: string
    content: string
    columnId: number
    createAt: string
}

export interface UserProps {
    isLogin: boolean
    name?: string
    id?: number
    columnId?: number
}

export interface GlobalDataProps {
    columns: ColumnProps[]
    posts: PostProps[]
    user: UserProps
}

export default createStore<GlobalDataProps>({
    state: {
        columns: [
            {
                description: '234',
                id: 0,
                title: '3',
            },
            {
                description: '234',
                id: 1,
                title: '3',
                avatar:
                    'https://tse1-mm.cn.bing.net/th?id=OIP.Sz2t3UycZ358frC6NaJxlwHaIK&w=185&h=204&c=8&rs=1&qlt=90&pid=3.1&rm=2',
            },
            {
                description: '234',
                id: 2,
                title: '3',
                avatar:
                    'https://tse1-mm.cn.bing.net/th?id=OIP.Sz2t3UycZ358frC6NaJxlwHaIK&w=185&h=204&c=8&rs=1&qlt=90&pid=3.1&rm=2',
            },
            {
                description: '234',
                id: 3,
                title: '3',
                avatar:
                    'https://tse1-mm.cn.bing.net/th?id=OIP.Sz2t3UycZ358frC6NaJxlwHaIK&w=185&h=204&c=8&rs=1&qlt=90&pid=3.1&rm=2',
            },
        ],
        posts: [],
        user: { isLogin: false },
    },
    getters: {
        getColumnById: state => (id: number) =>
            state.columns.find(c => c.id === id),
        getPostsByCid: state => (id: number) =>
            state.posts.filter(p => p.id === id),
    },
    mutations: {
        login: state => {
            state.user = {
                ...state.user,
                name: 'wj',
                isLogin: true,
                columnId: 1,
            }
        },
        createPost: (state, post: PostProps) => {
            state.posts.push(post)
        },
    },
    actions: {},
    modules: {},
    plugins,
})
