import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import { UsersModule } from './modules/users/users.module';
import { WorkspacesAuditsModule } from './modules/workspaces-audits/workspaces-audits.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { WorkspacesModule } from './modules/workspaces/workspaces.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { TasksModule } from './modules/tasks/tasks.module';

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
  ],
})
export class AppModule {}
