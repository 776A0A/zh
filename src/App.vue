<template>
    <div class="container">
        <global-header :user="currentUser" />
        <!-- <column-list :list="list" /> -->
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Email address
                </label>
                <validate-input
                    type="email"
                    :rules="emailRules"
                    v-model="email"
                    placeholder="Please input your email address"
                    ref="inputRef"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Password
                </label>
                <validate-input
                    type="password"
                    v-model="password"
                    :rules="passwordReuls"
                    placeholder="Please input your password"
                />
            </div>
            <template #submit>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-danger">Reset</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnPorps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'

const currentUser: UserProps = {
    isLogin: true,
    name: 'wj',
}

export default defineComponent({
    components: { GlobalHeader, ValidateInput, ValidateForm },
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
        const passwordReuls: RulesProp = [
            { type: 'required', message: 'Can not be empty' },
        ]

        const email = ref('')
        const password = ref('')
        const inputRef = ref<any>()

        const onFormSubmit = (res: boolean) => {
            console.log(inputRef.value)

            console.log(res)
        }

        return {
            list,
            currentUser,
            emailRules,
            passwordReuls,
            email,
            password,
            onFormSubmit,
            inputRef,
        }
    },
})
</script>

<style lang="less"></style>
