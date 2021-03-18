<template>
    <div class="validate-input-container pb-3">
        <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': inputRef.error }"
            v-model="inputRef.val"
            @blur="validater"
        />
        <span class="invalid-feedback" v-if="inputRef.error">
            {{ inputRef.message }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

const emailReg = /\w+@\w+\.\w+/

interface RuleProp {
    type: 'required' | 'email'
    message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
    name: 'ValidateInput',
    props: {
        rules: Array as PropType<RulesProp>,
    },
    setup(props) {
        const inputRef = reactive({
            val: '',
            error: false,
            message: '',
        })

        const validater = () => {
            if (!props.rules) return

            const passed = props.rules.every(rule => {
                let passed = true
                inputRef.message = rule.message

                switch (rule.type) {
                    case 'required':
                        passed = inputRef.val.trim() !== ''
                        break
                    case 'email':
                        passed = emailReg.test(inputRef.val)
                        break
                    default:
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const n: never = rule.type
                        break
                }

                return passed
            })

            inputRef.error = !passed
        }

        return { inputRef, validater }
    },
})
</script>

<style lang="less"></style>
