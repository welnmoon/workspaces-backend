import { TrimDecorator } from '@/common/decorators/trim.decorator';
import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateProjectDto {
  @IsOptional()
  @IsString()
  @TrimDecorator()
  @MinLength(2)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @TrimDecorator()
  @MaxLength(2000)
  description?: string;

  @IsOptional()
  @IsInt()
  workspaceId?: number;

  @IsOptional()
  @IsDateString()
  endedAt?: string;
}
