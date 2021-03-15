<template>
    <div class="dropdown" ref="dropDownRef">
        <a
            href="#"
            class="btn btn-outline-light my-2 dropdown-toggle"
            @click.prevent="toggleOpen"
        >
            {{ title }}
        </a>
        <ul class="dropdown-menu" :style="{ display: 'block' }" v-show="isOpen">
            <slot />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

export default defineComponent({
    name: 'DropDown',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    setup() {
        const isOpen = ref(false)
        const dropDownRef = ref<HTMLElement | null>(null)
        const toggleOpen = () => (isOpen.value = !isOpen.value)

        const { isClickOutside } = useClickOutside(dropDownRef)

        watch(isClickOutside, is => {
            if (!is && isOpen.value) isOpen.value = false
        })

        return { isOpen, toggleOpen, dropDownRef }
    },
})
</script>

<style lang="less"></style>
