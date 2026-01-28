import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { WorkspacesAuditsModule } from './workspaces-audits/workspaces-audits.module';
import { LoggerModule } from 'nestjs-pino/LoggerModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        resolve(process.cwd(), '.env'),
        resolve(__dirname, '..', '.env'),
      ],
    }),
    // LoggerModule.forRoot({
    //   pinoHttp: {
    //     transport: {
    //       target: 'pino-pretty',
    //       options: {
    //         colorize: true,
    //         translateTime: 'SYS:standard',
    //       },
    //     },
    //   },
    // }),
    UsersModule,
    PrismaModule,
    WorkspacesAuditsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
