// users/dto/create-user.dto.ts
import { TrimDecorator } from '@/common/decorators/trim.decorator';
import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @TrimDecorator()
  @MaxLength(254)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;

  @IsOptional()
  @IsString()
  @TrimDecorator()
  @MaxLength(50)
  firstName?: string;

  @IsOptional()
  @IsString()
  @TrimDecorator()
  @MaxLength(50)
  lastName?: string;

  @IsOptional()
  @IsString()
  @TrimDecorator()
  @MinLength(3)
  @MaxLength(30)
  nickname?: string;

  @IsOptional()
  @TrimDecorator()
  @MaxLength(2048)
  image?: string;
}
