<template>
    <div class="file-upload">
        <button class="btn btn-primary" @click.prevent="triggerUpload">
            <span v-if="fileStatus === 'loading'">正在上传...</span>
            <span v-else>点击上传</span>
        </button>
        <input
            type="file"
            class="file-input d-none"
            ref="fileInput"
            @change="handleFileChange"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

type UploadStatus = 'ready' | 'loading' | 'success' | 'error'

export default defineComponent({
    name: 'Uploader',
    props: {
        action: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const fileInput = ref<HTMLInputElement | null>(null)
        const fileStatus = ref<UploadStatus>('ready')

        const triggerUpload = () => {
            if (!fileInput.value) return

            fileInput.value.click()
        }

        const handleFileChange = (evt: Event) => {
            const target = evt.target as HTMLInputElement
            if (target.files) {
                fileStatus.value = 'loading'
            }
        }

        return { fileInput, triggerUpload, handleFileChange, fileStatus }
    },
})
</script>

<style lang="less"></style>
