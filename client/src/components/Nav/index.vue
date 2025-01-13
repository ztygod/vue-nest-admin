<template>
    <div class="nav">
        <p>vue-nest-admin</p>
        <a-dropdown class="dropdown">
            <a class="ant-dropdown-link" @click.prevent>
                <Avatar></Avatar>
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>
<script lang="ts" setup>
import { Avatar } from '..';
</script>

<style lang="less" scoped>
.nav{
    position: relative;
    height: 50px;
    background-color: #ececec;
    border-radius: 20px;
    p{
        margin-left: 30px;
        line-height: 50px;
        text-align: left;
        font-weight: 700;
        font-size: 30px;
        color: rgb(97, 167, 232);
    }
    .dropdown{
        position: absolute;
        top:5px;
        right: 10px;
    }
}
</style>
