<template>
  <div>
    <a-button type="primary" @click="showModal">编辑</a-button>
    <a-modal v-model:open="open" title="选择你要修改的对象" @ok="handleOk">
      <a-input v-model:value="user_id" placeholder="请输入你的User ID"/>
      <div class="container">
        <a-select
        ref="select"
        v-model:value="key"
        style="width: 120px"
        @change="handleChange"
        class="select"
        >
          <a-select-option value="username">用户名</a-select-option>
          <a-select-option value="email">邮箱</a-select-option>
          <a-select-option value="phone_number">手机号</a-select-option>
          <a-select-option value="department">部门</a-select-option>
          <a-select-option value="age">年龄</a-select-option>
          <a-select-option value="location">居住地</a-select-option>
        </a-select>
        <a-input v-model:value="value" placeholder="Basic usage" class="btn" />
      </div>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import UserAPI from '@/api/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { notification } from 'ant-design-vue';
const open = ref<boolean>(false);
const key = ref('username');
const value = ref('');
const user_id = ref('');
const router = useRouter();

const showModal = () => {
  open.value = true;
};

const openNotification = (isSuccess: boolean) => {
  notification.open({
    message: isSuccess? '成功' : '失败',
    description:
      isSuccess ?
       `${user_id.value}用户的${key.value}已成功修改为${value.value},请刷新查看。`
      : `${user_id.value}用户的${key.value}修改失败`,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const handleChange = (value: string) => {

};
//更新用户
const handleOk = (e: MouseEvent) => {
  open.value = false;
  console.log(`selected ${user_id.value}`);
  console.log(key,'value1');
  console.log(key.value,'value1')
  console.log(value,'value2');
  
  UserAPI.updatedUser(String(user_id.value),{[key.value]:value.value})
          .then((res) => {
            openNotification(true);
          })
          .catch((err) => {
            openNotification(false);
          })
          .finally(() => {
          });
};
</script>
<style lang="less" scoped>
.container{
  display: flex;
  .select{
    margin-top: 10px;
    margin-right: 10px;
  }
  .btn{
    margin-top: 10px;
    height: 32px;
  }
}

</style>