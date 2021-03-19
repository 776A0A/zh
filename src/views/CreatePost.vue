<template>
    <div class="create-post">
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Title
                </label>
                <validate-input
                    type="email"
                    :rules="titleRules"
                    v-model="title"
                    placeholder="Please input the article title"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                    Content
                </label>
                <validate-input
                    tag="textarea"
                    v-model="content"
                    :rules="contentRules"
                    placeholder="Please input article content ..."
                />
            </div>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import { GlobalDataProps, PostProps } from '@/store'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'CreatePost',
    components: { ValidateForm, ValidateInput },
    setup() {
        const title = ref('')
        const content = ref('')
        const store = useStore<GlobalDataProps>()
        const router = useRouter()

        const onFormSubmit = (res: boolean) => {
            if (!res) return
            const { columnId } = store.state.user
            if (!columnId) return
            const post: PostProps = {
                id: Date.now(),
                title: title.value,
                content: content.value,
                columnId,
                createAt: new Date().toLocaleString(),
            }
            store.commit('createPost', post)
            router.push(`/column/${columnId}`)
        }

        const titleRules: RulesProp = [
            { type: 'required', message: 'Can not be empty' },
        ]
        const contentRules: RulesProp = [
            { type: 'required', message: 'Can not be empty' },
        ]

        return { onFormSubmit, title, titleRules, content, contentRules }
    },
})
</script>

<style lang="less"></style>
