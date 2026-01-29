import { Prisma } from '@prisma/client';

export const userPublicSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  nickname: true,
  image: true,
  emailVerified: true,
  wasOnline: true,
  createdAt: true,
  updatedAt: true,
  platformRole: true,
  currentTariff: true,
});
