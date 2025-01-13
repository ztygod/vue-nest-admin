<template>
    <div class="container">
        <a-card title="搜索" class="header">
            <div class="search">
                <a-input-search
                    class="search-box"
                    v-model:value="value"
                    placeholder="请输入user_id"
                    enter-button="Search"
                    size="large"
                    @search="onSearch(String(value))"
                />
                <a-button class="samll-btn" @click="reset">重置</a-button>
            </div>
        </a-card>
        <article class="article">
            <div class="top">
                <p>用户管理</p>
                <a-button type="primary" class="top-btn" @click="addUser">新增</a-button>
            </div>
            <a-table class="table" :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 500 }">
                <template #bodyCell="{ column }">
                <template v-if="column.key === 'operation'">
                    <Modal></Modal>
                </template>
                <template v-if="column.key === 'delete'">
                    <a-button type="primary" danger>删除</a-button>
                </template>
                </template>
            </a-table>
            <Drawer 
                class="form"
                :open="open"
                :title="'新增用户'"
                :formdata="formdata"
                @close="onClose"
                >
            </Drawer>
        </article>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { TableColumnsType } from 'ant-design-vue';
import { reactive } from 'vue';
import type {getUserList , getUserListIndex} from '@/types/user';
import { getAllUserList, getOneUser } from '@/utils/user';
import { Drawer } from '@/components';
import { useUserStore } from '../../stores/modules/user';
import { currentPage } from '../../api/base';
import { Modal } from '../../components';

const userStore = useUserStore()
const open = ref<boolean>(false);
const value = ref<string>('');
const data: getUserList[] = reactive([]);
//带有索引的data数组
const dataIndex: getUserListIndex[] = reactive([])
const columns: TableColumnsType = [
 { title: 'user_id', width: 100, dataIndex: 'user_id', key: 'user_id', fixed: 'left' },
  { title: 'username', width: 100 ,dataIndex: 'username', key: 'username',fixed:'left'},
  { title: '邮箱', dataIndex: 'email', key: '2', width: 150 },
  { title: '手机号', dataIndex: 'phone_number', key: '3', width: 150 },
  { title: '部门', dataIndex: 'department', key: '4', width: 150 },
  { title: '年龄', dataIndex: 'age', key: '5', width: 150 },
  { title: '居住地', dataIndex: 'location', key: '6', width: 150 },
  { title: '上次在线时间', dataIndex: 'last_online', key: '7', width: 150 },
  {
    title:'删除',
    key:'delete',
    fixed:'right',
    width:100
  },
  {
    title: '编辑',
    key: 'operation',
    fixed: 'right',
    width: 100,
  },
];

const formdata = reactive(
    {
        user: {
            user_id: '',
            username:'',
            email:'',
            phone_number:'',
            department:'',
            age: undefined,
            location:'',
            password:''
        },
    }
)
onMounted(() => {
    initPage();
    userStore.currentPage = currentPage.USER
})

function initPage(){

  getAllUserList().then((res) => {
    data.push(...res);
    //data时间格式变为正常格式
    data.forEach(item => {
        item.last_online = new Date(item.last_online).toString();
    })
    //得到带索引的数组
  })
};

function onSearch(user_id:string){
    data.length = 0;
    getOneUser(user_id).then((res) => {
        data.push(...res)
    })
}

//重置输入框与页面
const reset = () => {
    value.value = '';
    initPage();
};

//隐藏侧边栏
const onClose = () => {
    open.value = false;
}

//展开侧边栏同时新增用户
const addUser = () => {
    open.value = true;
};
//编辑用户信息
const editUser = () => {

}

//删除用户
const deleteUser = () => {

};


</script>

<style lang="less" scoped>
.container{
    height: calc(100vh - 70px);
    background-color: #ececec;
    margin-top: 10px;
    border-radius: 20px;
    overflow: hidden;
    .header{
        margin: 10px;
        .search{
            .search-box{
                width: 400px;
            }
            .samll-btn{
                height: 40px;
                margin-left: 800px;
                margin-right: 30px;
            }
        }
    }
    .article{
        width: calc(100%-20px);
        height: 680px;
        margin: 10px;
        border-radius: 20px;
        background-color: white;
        overflow: hidden;
        .top{
            display: flex;
            width: calc(100%-20px);
            height: 50px;
            margin: 10px;
            background-color: #ececec;
            border-radius: 20px;
            p{
                margin-left: 20px;
                font-weight: 700;
                font-size: 25px;
                color: rgb(97, 167, 232);
                line-height: 50px;
            }
            .top-btn{
                margin: 10px 0px 10px 1200px;
            }
        }
        .table{
            
        }
        .form{
            z-index: 100;
        }
    }
}
</style>