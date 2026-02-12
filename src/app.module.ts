import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';

import { PrismaModule } from './modules/prisma/prisma.module';
import { UsersModule } from './modules/app/users/users.module';
import { WorkspacesModule } from './modules/app/workspaces/workspaces.module';
import { ProjectsModule } from './modules/app/projects/projects.module';
import { TasksModule } from './modules/app/tasks/tasks.module';
import { WorkspacesAuditsModule } from './modules/app/workspaces-audits/workspaces-audits.module';
import { AuthModule } from './modules/app/auth/auth.module';

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
    WorkspacesModule,
    ProjectsModule,
    TasksModule,
    PrismaModule,
    WorkspacesAuditsModule,
    AuthModule,
  ],
})
export class AppModule {}
