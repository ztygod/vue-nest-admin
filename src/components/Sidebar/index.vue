<template>
  <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    :items="items"
    @click="handleClick"
  ></a-menu>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps, ItemType } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const selectedKeys = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const items: ItemType[] = reactive([
  getItem('首页', '/home', () => h(AppstoreOutlined)),

  { type: 'divider' },

  getItem('权限管理', 'user', () => h(MailOutlined), [
    getItem('用户', 'g1', null, [getItem('用户信息', '/userinfo'), getItem('用户管理', '/userevent')], 'group'),
    getItem('公司', 'g2', null, [getItem('公司信息', '/companyinfo'), getItem('组织管理', '/companyevent')], 'group'),
    getItem('角色', 'g2', null, [getItem('角色状态', '/roleinfo'), getItem('角色管理', '/roleevent')], 'group'),
  ]),

  { type: 'divider' },

  getItem('任务管理', 'sub2', () => h(AppstoreOutlined), [
    getItem('任务列表', '/missionlist'),
  ]),

  { type: 'divider' },

  getItem('菜单管理', 'sub4', () => h(SettingOutlined), [
    getItem('添加菜单', '/menuadd'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  { type: 'divider' },


  getItem('Group', 'grp', null, [getItem('仅作测试用途', '13'), getItem('仅作测试用途', '14')], 'group'),
]);

const handleClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
  router.push(String(e.key));
};

watch(openKeys, val => {
  console.log('openKeys', val);
});
</script>


<style lang="less" scoped>
.side{
    height: 100vh;
}
</style>

