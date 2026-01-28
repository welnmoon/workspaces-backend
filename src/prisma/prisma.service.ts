import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../prisma-generated/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleDestroy, OnModuleInit
{
  constructor(configService: ConfigService) {
    // logger.log('DATABASE_URL:' + process.env.DATABASE_URL);
    // logger.log('TYPE:' + typeof process.env.DATABASE_URL);
    const url =
      configService.get<string>('DATABASE_URL') ?? process.env.DATABASE_URL;
    // logger.debug(
    //   'DATABASE_URL defined:',
    //   typeof url,
    //   url,
    //   'cwd:',
    //   process.cwd(),
    // );

    if (!url || typeof url !== 'string') {
      throw new Error(
        'DATABASE_URL is missing or not a string. Check .env loading and startup cwd.',
      );
    }
    super({
      adapter: new PrismaPg({ connectionString: url }),
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
