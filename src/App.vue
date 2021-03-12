<template>
    <div class="container">
        <column-list :list="list" />
    </div>
    <!-- <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnPorps } from './components/ColumnList.vue'

export default defineComponent({
    components: { ColumnList },
    setup() {
        const list: ColumnPorps[] = [
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
            {
                description: '234',
                id: 1,
                title: '3',
                avatar:
                    'https://tse1-mm.cn.bing.net/th?id=OIP.Sz2t3UycZ358frC6NaJxlwHaIK&w=185&h=204&c=8&rs=1&qlt=90&pid=3.1&rm=2',
            },
        ]

        return { list }
    },
})
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
