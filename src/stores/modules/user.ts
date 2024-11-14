import { defineStore } from "pinia";


export const useUserStore = defineStore('user', {
    state: () => ({
        currentPage: Number
    }),
    actions: {
        //新增用户信息
        createUserInfo(userInfo) {
            UserAPI.createUser(userInfo);
        }
    }
})