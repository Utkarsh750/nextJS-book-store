import { gql } from "@apollo/client";

export const GET_NOVELS = gql`
query Novels {
    novels {
      createdAt
      id
      image
      title
      updatedAt
      authors {
        id
        name
        novelID
      }
    }
  }
`
export const GET_NOVEL = gql`
query Query($id: ID!) {
  novel(id: $id) {
    authors {
      id
      name
      novelID
    }
    createdAt
    id
    image
    title
    updatedAt
  }
}
`