import { ref, Ref, onMounted, onUnmounted } from 'vue'

const useClickOutside = (elementRef: Ref<HTMLElement | null>) => {
    const isClickOutside = ref(false)

    const handler = (evt: MouseEvent) => {
        if (!elementRef.value) return

        // evt.target 的值可能是 null，所以要断言
        if (elementRef.value.contains(evt.target as HTMLElement)) {
            isClickOutside.value = true
        } else {
            isClickOutside.value = false
        }
    }

    onMounted(() => document.addEventListener('click', handler))
    onUnmounted(() => document.removeEventListener('click', handler))

    return { isClickOutside }
}

export default useClickOutside
