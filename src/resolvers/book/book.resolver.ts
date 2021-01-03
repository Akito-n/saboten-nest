import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class BookResolver {
  @Query(() => String)
  sayBook(): string{
    return 'this is book'
  }

}
