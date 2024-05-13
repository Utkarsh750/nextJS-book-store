export const typeDefs = `#graphql
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
  deleteAuthor(id:ID!): Author
}

`;