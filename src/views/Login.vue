<template>
    <div class="login">
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
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import axios from 'axios'

export default defineComponent({
    name: 'Login',
    components: { ValidateInput, ValidateForm },
    setup() {
        const router = useRouter()
        const store = useStore()

        const emailRules: RulesProp = [
            { type: 'required', message: 'Can not be empty' },
            { type: 'email', message: 'Should be valid Email' },
        ]
        const passwordReuls: RulesProp = [
            { type: 'required', message: 'Can not be empty' },
        ]

        const email = ref('')
        const password = ref('')

        const onFormSubmit = (res: boolean) => {
            if (!res) return
            axios
                .post('http://127.0.0.1:4523/mock/379617/login', {
                    email: email.value,
                    password: password.value,
                })
                .then(res => {
                    router.push('/')
                    store.commit('login')
                })
        }

        return {
            emailRules,
            passwordReuls,
            email,
            password,
            onFormSubmit,
        }
    },
})
</script>

<style lang="less"></style>
