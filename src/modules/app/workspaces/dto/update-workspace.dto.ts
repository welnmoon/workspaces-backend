import { TrimDecorator } from '@/common/decorators/trim.decorator';
import {
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateWorkspaceDto {
  @IsOptional()
  @IsString()
  @TrimDecorator()
  @MinLength(2)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @TrimDecorator()
  @MaxLength(1000)
  description?: string;

  @IsOptional()
  @IsString()
  @TrimDecorator()
  ownerId?: string;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  @MaxLength(512)
  avatarUrl?: string;
}
