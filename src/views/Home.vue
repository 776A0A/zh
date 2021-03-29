<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
            :style="{ margin: 'auto', display: 'block' }"
        />
        <uploader />
        <column-list :list="list" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import ColumnList from '../components/ColumnList.vue'
import Uploader from '@/components/Uploader.vue'

export default defineComponent({
    name: 'Home',
    components: { ColumnList, Uploader },
    setup() {
        const store = useStore<GlobalDataProps>()
        const list = computed(() => store.state.columns)

        onMounted(() => {
            store.dispatch('fetchColumns')
        })

        return { list }
    },
})
</script>
