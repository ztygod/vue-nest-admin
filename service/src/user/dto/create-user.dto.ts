
export class CreateUserDto {
    user_id: string;
    username: string;
    email: string;
    phone_number: string;
    department: string;
    age: number;
    location: string;
    password: string
    //还有一个last_online计划在控制器中加入
}
