import type ResultData from "@/api/base";
import UserAPI, { type UserList } from "@/api/user";
import type getUserList from "@/types/user";

export async function getAllUserList(): Promise<getUserList[]> {
    let list = await UserAPI.getAllUser()
    return list.data
}

export async function getOneUser(user_id: string): Promise<getUserList[]> {
    let data: ResultData<getUserList> = await UserAPI.getOneUser(user_id);
    return data.data
}