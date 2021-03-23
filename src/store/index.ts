import { createStore } from 'vuex'
import plugins from './plugins'
import axios, { AxiosResponse } from 'axios'

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
        columns: [],
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
        fetchColumns: (state, payload: ColumnProps[]) => {
            state.columns = payload
        },
    },
    actions: {
        fetchColumns: ({ commit }) => {
            axios
                .get('http://127.0.0.1:4523/mock/379617/columns')
                .then((res: AxiosResponse<ResponseData<ColumnProps>>) => {
                    commit('fetchColumns', res.data.data)
                })
        },
    },
    modules: {},
    plugins,
})

interface ResponseData<T> {
    code: number
    message: string
    data: T[]
}
