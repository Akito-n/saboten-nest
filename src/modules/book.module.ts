import { Module } from '@nestjs/common';
import { BookResolver } from 'src/resolvers/book/book.resolver';
import { BookService } from 'src/services/book/book.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [BookResolver, BookService]
})
export class BookModule {}
