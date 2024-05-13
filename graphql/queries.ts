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