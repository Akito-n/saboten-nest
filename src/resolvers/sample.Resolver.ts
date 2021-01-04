import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class SampleResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World'
  }
  @Mutation((returns) => Number)
  async updatePost(@Args({name: 'id', type: () => Number}) id: number){
    return 1
  }
}
