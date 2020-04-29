import { GraphQLSchema, GraphQLFieldResolver, BuildSchemaOptions } from 'graphql';
import { Executor, Subscriber } from '@graphql-tools/delegate';

export interface IMakeRemoteExecutableSchemaOptions {
  schema: GraphQLSchema | string;
  executor?: Executor;
  subscriber?: Subscriber;
  createResolver?: (executor: Executor, subscriber: Subscriber) => GraphQLFieldResolver<any, any>;
  buildSchemaOptions?: BuildSchemaOptions;
}