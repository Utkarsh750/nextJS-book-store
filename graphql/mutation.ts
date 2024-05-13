import { gql } from "@apollo/client";

export const ADD_NOVEL = gql`
mutation AddNovel($image: String, $title: String) {
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

export const DELETE_NOVEL = gql`
mutation Mutation($id: ID!) {
    deleteNovel(id: $id) {
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
export const UPDATE_NOVEL = gql`
mutation Mutation($id: ID!, $image: String, $title: String) {
  updateNovel(id: $id, image: $image, title: $title) {
    authors {
      novelID
      name
      id
    }
    createdAt
    id
    image
    title
    updatedAt
  }
}
`