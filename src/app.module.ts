import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './modules/book.module';
import { SampleResolver } from './resolvers/sample.Resolver';
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [BookModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'saboten',
      synchronize: false,
      retryAttempts: 1
    }),

    GraphQLModule.forRoot({
     autoSchemaFile: join(process.cwd(), 'schema.graphql'),
     sortSchema: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, SampleResolver, AuthService],
})
export class AppModule {}
