import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';

import { AuthModule } from './modules/spa/auth/auth.module';
import { UsersModule } from './modules/spa/users/users.module';
import { WorkspacesModule } from './modules/spa/workspaces/workspaces.module';
import { ProjectsModule } from './modules/spa/projects/projects.module';
import { TasksModule } from './modules/spa/tasks/tasks.module';
import { PrismaModule } from './modules/spa/prisma/prisma.module';
import { WorkspacesAuditsModule } from './modules/spa/workspaces-audits/workspaces-audits.module';

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
