import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CoursesModule } from '../../src/courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Courses: /courses (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        CoursesModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost', // docker || local || "localhost" || "db"
          port: 5433,
          username: 'postgres',
          password: 'docker',
          database: 'testdb', // docker || local|| "postgres" || "cursonestjs"
          autoLoadEntities: true,
          synchronize: true, // false to production, true to local
          entities: [__dirname + '/**/*.entity.ts'],
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it.todo('Create POST /courses', () => {
    return request(app.getHttpServer())
      .post('/courses')
      .expect(200)
      .expect('Hello World!');
  });

  it.todo('Create PUT /courses');
});
