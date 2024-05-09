// import { ApolloServer } from "@apollo/server";
// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { PrismaClient } from "@prisma/client";
// import { prisma } from "../../prisma/db";
// import { typeDefs } from "@/graphql/schema";
// import { resolvers } from "@/graphql/resolvers";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

// export type Context = {
// 	prisma: PrismaClient;
// };

// const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

// export default startServerAndCreateNextHandler(apolloServer, {
// 	context: async (req, res) => ({ req, res, prisma }),
// });

const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const typeDefs = `#graphql
type Novel {
  id: ID!
  title: String
  image: String
  createdAt: String
  updatedAt: String
  author: [Author]
}

type Author {
  id: String
  name: String
  novelId: String
}
type Query {
    novels: [Novel]
}

type Mutation{
  
}
`;

const server = new ApolloServer({
    resolvers,
    typeDefs
})

export default startServerAndCreateNextHandler(server)
