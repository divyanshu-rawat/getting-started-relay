import { GraphQLSchema, GraphQLObjectType, GraphQLInt } from "graphql";

let counter = 42;
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      counter: {
        type: GraphQLInt,
        resolve: () => counter
      }
    })
  }),

  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
      incrementCounter: {
        type: GraphQLInt,
        resolve: () => counter++
      }
    })
  })
});

export default schema;
