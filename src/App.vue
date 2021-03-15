<template>
    <div class="container">
        <global-header :user="currentUser" />
        <column-list :list="list" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnPorps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

const currentUser: UserProps = {
    isLogin: true,
    name: 'wj',
}

export default defineComponent({
    components: { ColumnList, GlobalHeader },
    setup() {
        const list: ColumnPorps[] = [
            {
                description: '234',
                id: 1,
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
                id: 1,
                title: '3',
                avatar:
                    'https://tse1-mm.cn.bing.net/th?id=OIP.Sz2t3UycZ358frC6NaJxlwHaIK&w=185&h=204&c=8&rs=1&qlt=90&pid=3.1&rm=2',
            },
            {
                description: '234',
                id: 1,
                title: '3',
                avatar:
                    'https://tse1-mm.cn.bing.net/th?id=OIP.Sz2t3UycZ358frC6NaJxlwHaIK&w=185&h=204&c=8&rs=1&qlt=90&pid=3.1&rm=2',
            },
        ]

        return { list, currentUser }
    },
})
</script>

<style lang="less"></style>
