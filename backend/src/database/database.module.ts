import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as entities from '../entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isProduction = config.get<string>('NODE_ENV') === 'production';
        const host = config.get<string>('DB_HOST', 'localhost');
        const port = config.get<number>('DB_PORT', 5432);
        const username = config.get<string>('DB_USERNAME', 'postgres');
        const password = config.get<string>('DB_PASSWORD', 'postgres');
        const database = config.get<string>('DB_DATABASE', 'farm_erp');

        return {
          type: 'postgres',
          host,
          port,
          username,
          password,
          database,
          entities: Object.values(entities),
          synchronize: true, // Auto sync schema in development
          logging: !isProduction ? ['error', 'warn'] : false,
          ssl: false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}

