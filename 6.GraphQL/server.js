const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = gql`
  type Lang {
    id: Int
    name: String!
  }
  type Query {
    getLangs(name: String): [Lang]
  }
`;

const langs = [
  {
    id: 0,
    name: "node",
  },
  {
    id: 1,
    name: "Python",
  },
];

const resolvers = {
  Query: {
    getLangs: () => langs,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const app = express();

server.applyMiddleware({
  app,
  path: "/graphql",
});

app.listen({ port: 8000 }, () => {
  console.log("server start");
});
