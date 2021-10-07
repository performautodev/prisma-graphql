const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { resolvers, typeDefs } = require("./schema");

const port = process.env.PORT || 8080;

new ApolloServer({
  resolvers,
  typeDefs,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
}).listen({ port }, () =>
  console.log(`Server ready at: http://localhost:${port}`)
);
