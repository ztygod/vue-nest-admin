import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ResultData } from 'src/common/result';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  //创建用户，即注册功能
  async create(@Body() dto: CreateUserDto): Promise<ResultData> {
    if ((await this.findOne(dto.user_id)).data.length !== 0) {
      console.log('当前账号以及存在');
      return ResultData.fail(404, '账号已经存在，请重新设置账号');
    }
    if (await this.usersRepository.findOne({ where: { phone_number: dto.phone_number } })) {
      console.log('当前手机号已经存在');
      return ResultData.fail(404, '手机号已经存在，请更换手机号');
    }
    if (await this.usersRepository.findOne({ where: { email: dto.email } })) {
      const email = await this.usersRepository.findOne({ where: { email: dto.email } })
      console.log('当前邮箱已经存在', email);
      console.log(dto)
      return ResultData.fail(404, '邮箱已经存在,请更换邮箱');
    }

    let new_user = new User();
    new_user = { last_online: new Date(Date.now()), ...dto };
    const result = await this.usersRepository.save(new_user);
    return ResultData.ok(JSON.parse(JSON.stringify(result)), '新增用户成功')
  }
  //得到所有用户列表
  async findAll() {
    const result = await this.usersRepository.find();
    if (result.length === 0) {
      return ResultData.ok(JSON.parse(JSON.stringify(result)), '用户列表为空')
    }

    return ResultData.ok(JSON.parse(JSON.stringify(result)), '得到所有用户列表成功')
  }
  //根据user_id搜索用户
  async findOne(user_id: string) {
    const user = await this.usersRepository.find({ where: { user_id } });
    console.log(user);
    return ResultData.ok(JSON.parse(JSON.stringify(user)))
  }
  //更新用户数据
  async update(user_id: string, dto: UpdateUserDto) {
    console.log("ipdate", dto);
    const result = await this.usersRepository.update(user_id, dto);
    return ResultData.ok(result, `更新用户${user_id}成功`);
  }
  //删除用户信息
  async remove(user_id: string) {
    if ((await this.findOne(user_id)).data.length === 0) {
      return ResultData.fail(404, '未找到该用户');
    }
    const result = this.usersRepository.delete(user_id);
    return ResultData.ok(result, `删除用户${user_id}成功`);
  }
}
