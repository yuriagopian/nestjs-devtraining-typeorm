import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CoursesModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'db', // docker || local || "localhost" || "db"
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'docker',
    //   database: 'cursonestjs', // docker || local|| "postgres" || "cursonestjs"
    //   autoLoadEntities: false,
    //   synchronize: false, // false to production, true to local
    //   entities: [__dirname + '/**/*.entity.ts'],
    // }),
    // DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
