<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img
                        :src="column.avatar"
                        :alt="column.title"
                        class="card-img-top rounded-circle border border-light w-25 my-3"
                    />
                    <h5 class="card-title">{{ column.title }}</h5>
                    <p class="card-text text-left">{{ column.description }}</p>
                    <router-link
                        :to="{ path: `/column/${column.id}` }"
                        href="#"
                        class="btn btn-outline-primary"
                    >
                        进入专栏
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export interface ColumnProps {
    id: number
    title: string
    avatar?: string
    description: string
}

export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
            type: Array as PropType<ColumnProps[]>,
            required: true,
        },
    },
    setup(prop) {
        const columnList = computed(() =>
            prop.list.map(column => {
                !column.avatar &&
                    (column.avatar = require('@/assets/column.jpg'))
                return column
            })
        )

        return { columnList }
    },
})
</script>

<style lang="less" scoped></style>
