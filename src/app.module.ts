import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: "localhost",
    port: "5435",
    username: "postgres",
    password: "docker",
    database: "postgres",
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule { }
