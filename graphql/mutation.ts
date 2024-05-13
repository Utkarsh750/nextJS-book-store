import { gql } from "@apollo/client";

export const ADD_NOVEL = gql`
mutation Mutation($image: String, $title: String) {
    addNovel(image: $image, title: $title) {
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