<template>
    <nav
        class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4"
    >
        <a href="#" class="navbar-brand">zh</a>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light my-2">登录</a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light my-2">注册</a>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <drop-down :title="`你好 ${user.name}`">
                    <drop-down-item>
                        <a class="dropdown-item" href="#">新建文章</a>
                    </drop-down-item>
                    <drop-down-item :disabled="true">
                        <a class="dropdown-item" href="#">编辑资料</a>
                    </drop-down-item>
                    <drop-down-item>
                        <a class="dropdown-item" href="#">退出登陆</a>
                    </drop-down-item>
                </drop-down>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from '@/components/DropDown.vue'
import DropDownItem from '@/components/DropDownItem.vue'
import { UserProps } from '@/store'

export default defineComponent({
    name: 'GlobalHeader',
    components: { DropDown, DropDownItem },
    props: {
        user: {
            type: Object as PropType<UserProps>,
            required: true,
        },
    },
})
</script>

<style lang="less"></style>
