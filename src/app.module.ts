import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: "db", // docker || local || "localhost" || "db"
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "cursonestjs", // docker || local|| "postgres" || "cursonestjs"
    autoLoadEntities: true,
    synchronize: false, // false to production, true to local
  })],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
