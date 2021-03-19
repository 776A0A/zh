<template>
    <form action="" class="validate-form-container">
        <slot name="default" />
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">Submit</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

export const emitter = mitt()

type ValidateFn = () => boolean

export default defineComponent({
    name: 'ValidateForm',
    emits: ['form-submit'],
    setup(props, { emit }) {
        const fnArr: ValidateFn[] = []

        const submitForm = () => {
            emit(
                'form-submit',
                fnArr.reduce((res, fn) => fn() && res, true) // 循环验证结果，有一个为 false 则最终返回 false
            )
        }

        const callback = (fn?: ValidateFn) => fn && fnArr.push(fn)

        emitter.on('form-item-created', callback)

        onUnmounted(() => {
            emitter.off('form-item-created', callback)
            fnArr.length = 0
        })

        return { submitForm }
    },
})
</script>

<style lang="less"></style>
