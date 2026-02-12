import { PlatformRole, Tariff } from '@prisma/client';

export class UserResponseDto {
  id: string;
  email: string | null;

  firstName: string | null;
  lastName: string | null;
  nickname: string | null;
  image: string | null;

  emailVerified: Date | null;
  wasOnline: Date | null;

  createdAt: Date;
  updatedAt: Date;

  currentTariff: Tariff;
  platformRole: PlatformRole;
}
