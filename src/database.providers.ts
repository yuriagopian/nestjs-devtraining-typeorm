import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
import { config } from 'dotenv';
import { CreateCoursesTable1670369515433 } from './migrations/1670369515433-CreateCoursesTable';

config();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get('DB_HOST'), // local -> 'localhost' 'localhost' ||
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [__dirname + '/../**/*.entity.js'],
        migrations: [__dirname + '/src/migrations/*.ts'],
        // migrations: [__dirname + '/migrations/*.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'), // local -> 'localhost' 'localhost' ||
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity.js'],
  // migrations: [__dirname + '/src/migrations/*.ts'],
  migrations: [CreateCoursesTable1670369515433],
  synchronize: true,
});
