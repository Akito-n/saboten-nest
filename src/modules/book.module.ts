import { Module } from '@nestjs/common';
import { BookResolver } from 'src/resolvers/book/book.resolver';
import { BookService } from 'src/services/book/book.service';

@Module({
  imports: [],
  providers: [BookResolver, BookService]
})
export class BookModule {}
