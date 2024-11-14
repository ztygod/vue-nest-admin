<template>
    <a-drawer :width="500" :title="props.title" :placement="placement" :open="open" @close="onClose">
        <template #extra>
          <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
        </template>
          <Form 
            class="form"
            :formdata="props.formdata"            
            >
          </Form>
  </a-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { DrawerProps } from 'ant-design-vue';
import { Form } from '..';

const placement = ref<DrawerProps['placement']>('right');
const emit = defineEmits(['close']);
const props = defineProps({
  open:{
    type:Boolean,
    default:false,
    require:true
  },
  title:{
    type:String,
    default:'',
    require:true
  },
  formdata:{
  }
});

const onClose = () => {
  console.log(props.formdata)
  emit('close');
};
</script>

<style lang="less" scoped>
.form{
  margin-left: -60px;
  width: 100%;
  height: 500px;
}
</style>