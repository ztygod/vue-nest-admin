import { IsEmail, IsMobilePhone, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid') // 使用 UUID 作为主键，确保每个用户都有唯一标识
    user_id: string;

    @Column({ type: 'varchar', length: 255 })
    @Length(3, 10)
    username: String;

    @Column({ type: 'varchar', length: 255 })
    @IsEmail()
    email: String;

    @Column({ type: 'varchar', length: 255 })
    @IsMobilePhone('zh-CN', { strictMode: false }, { message: '请输入正确的手机号' })
    phone_number: String;

    @Column({ type: 'varchar', length: 255 })
    department: String;

    @Column({ type: 'int' })
    age: Number;

    @Column({ type: 'varchar', length: 255 })
    location: String;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    last_online: Date;

    @IsString()
    @Column({ type: 'varchar', length: 255 })
    password: String
}
