/*
node 모듈
express
body-parser
apollo-server-express 
graphql-tools
*/

const express = require("express");

const { graphExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const PORT = 8000;
const server = express();

const typeDefs = `
    type Lang {
        id : Int,
        name  : String!
    }
    type Query {
        getLangs(name: String) : [Lang]
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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

server.use("/graphql", express.json(), graphExpress({ schema }));

server.use(
  "/graphiql",
  graphiqlExpress({
    endpoint: "/graphiql",
  })
);

server.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
