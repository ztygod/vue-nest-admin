import service from "./axios"
import type ResultData from "./base"
import { HTTPMethod } from "./base"

export interface UserList {
    user_id: string
    username: string
    email: string
    phone_number: string
    department: string
    age: number
    location: string
    last_online: string
    password: string
}

class User {
    getAllUser(): Promise<ResultData<UserList>> {
        return service({
            method: HTTPMethod.GET,
            url: '/user',
        })
    };
    getOneUser(user_id: string): Promise<ResultData<UserList>> {
        return service({
            method: HTTPMethod.GET,
            url: `/user/${Number(user_id)}`
        })
    };
    createUser(user: UserList) {
        return service({
            method: HTTPMethod.POST,
            url: '/user/create',
            data: user
        })
    };
    deleteUser(user_id: number) {
        return service({
            method: HTTPMethod.DELETE,
            url: `/user/${user_id}`
        })
    };
    login() {

    }
    changePassword() {

    }
    updatedLastOnlienTime() {

    }
}

const UserAPI = new User();
export default UserAPI