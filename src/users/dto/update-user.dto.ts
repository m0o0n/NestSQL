import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    first_name?: string; 
    last_name?: string; 
    company?: string; 
    phone?: string; 
    country?: string; 
    source?: string; 
    service?: string; 
    subscribe?: boolean; 
    terms?: boolean; 
}
