import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class BookModel {
  @Field((type) => ID )
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title: string
}
