import { Field, InputType } from '@nestjs/graphql';
import UserrInput from './user.input';

@InputType()
class MessageUserConnectInput {
  @Field()
  readonly id: number;
}

@InputType()
class MessageUserInput {
  @Field({ nullable: true })
  readonly connect: MessageUserConnectInput;

  @Field({ nullable: true })
  readonly create: UserrInput;
}

@InputType()
class MessageInput {
  @Field()
  readonly content: string;

  @Field()
  readonly user: MessageUserInput;
}

export default MessageInput;
