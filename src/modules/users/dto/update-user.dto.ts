import { TrimDecorator } from '@/common/decorators/trim.decorator';
import { PlatformRole, Tariff } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @TrimDecorator()
  @IsEmail()
  @MaxLength(254)
  email?: string;

  @IsOptional()
  @TrimDecorator()
  @IsString()
  @MaxLength(50)
  firstName?: string;

  @IsOptional()
  @TrimDecorator()
  @IsString()
  @MaxLength(50)
  lastName?: string;

  @IsOptional()
  @TrimDecorator()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  nickname?: string;

  @IsOptional()
  @TrimDecorator()
  @IsUrl({ require_protocol: true })
  @MaxLength(2048)
  image?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password?: string;

  @IsOptional()
  @IsEnum(Tariff)
  currentTariff?: Tariff;

  @IsOptional()
  @IsEnum(PlatformRole)
  platformRole?: PlatformRole;
}
