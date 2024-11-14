import { createRouter, createWebHashHistory } from 'vue-router'
import { HomeView } from '@/pages'
import UserInfo from '@/pages/User/UserInfo.vue'
import UserEvent from '@/pages/User/UserEvent.vue'
import CompanyInfo from '@/pages/Company/CompanyInfo.vue'
import CompanyEvent from '@/pages/Company/CompanyEvent.vue'
import MissionList from '@/pages/Mission/MissionList.vue'
import RoleInfo from '@/pages/Role/RoleInfo.vue'
import RoleEvent from '@/pages/Role/RoleEvent.vue'
import MenuAdd from '@/pages/Menu/MenuAdd.vue'
import Login from '@/pages/Login/Login.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: UserInfo
        },
        {
            path: '/userevent',
            name: 'userevent',
            component: UserEvent
        },
        {
            path: '/companyinfo',
            name: 'companyinfo',
            component: CompanyInfo
        },
        {
            path: '/companyevent',
            name: 'companyevent',
            component: CompanyEvent
        },
        {
            path: '/roleinfo',
            name: 'roleinfo',
            component: RoleInfo
        },
        {
            path: '/roleevent',
            name: 'roleevent',
            component: RoleEvent
        },
        {
            path: '/missionlist',
            name: 'missionlist',
            component: MissionList
        },
        {
            path: '/menuadd',
            name: 'menuadd',
            component: MenuAdd
        }
    ]
})

export default router
