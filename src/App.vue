<template>
    <div class="container">
        <global-header :user="currentUser" />
        <!-- <column-list :list="list" /> -->
        <form>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Password
                </label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Email address
                </label>
                <validate-input :rules="emailRules" />
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnPorps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'

const currentUser: UserProps = {
    isLogin: true,
    name: 'wj',
}

export default defineComponent({
    components: { GlobalHeader, ValidateInput },
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

        const emailRules: RulesProp = [
            { type: 'required', message: 'Can not be empty' },
            { type: 'email', message: 'Should be valid Email' },
        ]

        const emailRef = reactive({
            val: '',
            error: false,
            message: '',
        })

        return {
            list,
            currentUser,
            emailRules,
        }
    },
})
</script>

<style lang="less"></style>
