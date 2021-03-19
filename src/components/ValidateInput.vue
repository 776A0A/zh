<template>
    <div class="validate-input-container pb-3">
        <input
            v-bind="$attrs"
            class="form-control"
            :class="{ 'is-invalid': inputRef.error }"
            :value="modelValue"
            @input="updateValue"
            @blur="validateInput"
        />
        <span class="invalid-feedback" v-if="inputRef.error">
            {{ inputRef.message }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'

const emailReg = /\w+@\w+\.\w+/

interface RuleProp {
    type: 'required' | 'email'
    message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
    name: 'ValidateInput',
    inheritAttrs: false,
    emits: ['update:modelValue'],
    props: {
        rules: Array as PropType<RulesProp>,
        modelValue: String,
    },
    setup(props, { emit }) {
        const inputRef = reactive({
            error: false,
            message: '',
        })

        const validateInput = () => {
            if (!props.rules) return true

            const passed = props.rules.every(rule => {
                let passed = true
                inputRef.message = rule.message

                switch (rule.type) {
                    case 'required':
                        passed = props.modelValue?.trim() !== ''
                        break
                    case 'email':
                        passed = emailReg.test(props.modelValue || '')
                        break
                    default:
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const n: never = rule.type
                        break
                }

                return passed
            })

            inputRef.error = !passed

            return passed
        }

        const updateValue = (e: InputEvent) => {
            // 断言为更具体的元素
            const value = (e.target as HTMLInputElement).value
            emit('update:modelValue', value)
        }

        onMounted(() => {
            emitter.emit('form-item-created', validateInput)
        })

        return { inputRef, validateInput, updateValue }
    },
})
</script>

<style lang="less"></style>
