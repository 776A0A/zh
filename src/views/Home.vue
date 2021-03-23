<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
            :style="{ margin: 'auto', display: 'block' }"
        />
        <column-list :list="list" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import ColumnList from '../components/ColumnList.vue'

export default defineComponent({
    name: 'Home',
    components: { ColumnList },
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
