// import { ApolloServer } from "@apollo/server";
// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { PrismaClient } from "@prisma/client";
// import { typeDefs } from "@/graphql/schema";
// import { resolvers } from "@/graphql/resolvers";
// const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

// export default startServerAndCreateNextHandler(apolloServer, {
// 	context: async (req, res) => ({ req, res, prisma }),
// });

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../prisma/db";

export type Context = {
  prisma: PrismaClient;
};

const typeDefs = `#graphql
type Novel {
  id: ID!
  title: String
  image: String
  createdAt: String
  updatedAt: String
  authors: [Author]
}

type Author {
  id: String
  name: String
  novelID: String
}
type Query {
  novel(id: ID!): Novel
    novels: [Novel]
}
type Mutation {
  addNovel(image: String, title: String) : Novel
  updateNovel(id:ID!, image: String, title: String) : Novel
  deleteNovel(id:ID!) : Novel
  addAuthor(novelId: ID!, name:String): Author
  deleteAuthor(id:ID!)
}

`;

const resolvers = {
  Query: {
    novels: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findMany();
    },
    novel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: {
          id: args.id
        }
      });
    },
  },
  Novel: {
    authors: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.findMany({
        where: {
          novelId: parent.id,
        },
      });
    },
  },
  Mutation: {
    addNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.update({
        where: {
          id: args.id
        },
        data: {
          title: args.title,
          image: args.image
        }
      });
    },
    updateNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.create({
        data: {
          title: args.title,
          image: args.image
        }
      });
    },
    deleteNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.delete({
        where: {
          id: args.id
        }
      });
    },
    addAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.create({
        data: {
          novelId: args.novelId,
          name: args.name
        }
      });
    },
  }
};

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
