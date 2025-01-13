import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    username?: string;
    eamil?: string;
    phone_number?: string;
    department?: string;
    age?: number;
    location?: string;
}
