<template>
  <a-form
    :model="props.formdata"
    v-bind="layout"
    name="nest-messages"
    :validate-messages="validateMessages"
    @finish="onFinish"
  > 
    <a-form-item 
      v-for="item in items"
      :name="[formObject,item]" :label="item">
      <a-input v-model:value="props.formdata.user[item]" />
    </a-form-item>
    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useUserStore } from '../../stores/modules/user';
import UserAPI from '../../api/user';


const userStore = useUserStore()
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const props = defineProps({
  formdata:{
    default:{} as any,
    require:true
  }
});
//表单对象(user,company,role)
const formObject = Object.keys(props.formdata);
//表单项（表单目录）
const items = Object.keys(Object.values(props.formdata)[0] as {});


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = () => {
  //测试
  console.log(props.formdata)
  console.log(Object.keys(props.formdata))
  console.log(Object.values(props.formdata))
  console.log(Object.keys(Object.values(props.formdata)[0] as {}))

  UserAPI.createUser(Object.values(props.formdata)[0] as any);
};
</script>

<style lang="less" scoped>
</style>