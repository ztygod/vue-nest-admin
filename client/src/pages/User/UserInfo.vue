<template>
  <div class="table">
    <div class="header">
      用户信息
    </div>
    <a-table class="table-item":columns="columns" :data-source="data" :scroll="{ x: 1500, y:600 }">
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a>action</a>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>

import UserAPI from '@/api/user';
import type getUserList from '@/types/user';
import type { TableColumnsType } from 'ant-design-vue';
import { onMounted, reactive } from 'vue';

onMounted(() => {
  initPage();
});

let  data: getUserList[] = reactive([]);
const columns: TableColumnsType = [
  { title: 'user_id', width: 100, dataIndex: 'user_id', key: 'user_id', fixed: 'left' },
  { title: 'username', width: 100 ,dataIndex: 'username', key: 'username',fixed:'left'},
  { title: '邮箱', dataIndex: 'email', key: '2', width: 150 },
  { title: '手机号', dataIndex: 'phone_number', key: '3', width: 150 },
  { title: '部门', dataIndex: 'department', key: '4', width: 150 },
  { title: '年龄', dataIndex: 'age', key: '5', width: 150 },
  { title: '居住地', dataIndex: 'location', key: '6', width: 150 },
  { title: '上次在线时间', dataIndex: 'last_online', key: '7', width: 150 },
];

async function initPage(){
  let list = await UserAPI.getAllUser();
  data.push(...list.data);
  //data时间格式变为正常格式
  data.forEach(item => {
    item.last_online = new Date(item.last_online).toString();
  })
};

</script>
<style lang="less" scoped>
.table{
  margin-top: 10px;
  border-radius: 20px;
  background-color: #ececec;
  height: 92vh;
  overflow: hidden;
  .header{
    height: 120px;
    margin: 10px;
    background-color: white;
    border-radius: 20px;
  }
  .table-item{
    margin: 10px 10px 0 10px;

  }
}
</style>
