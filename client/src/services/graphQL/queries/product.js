import { gql } from "@apollo/client";

// TEMP: Fetch all tournaments
const ALL_PROCUCTS = gql`
query Query {
  productMany {
    name
    brand
    description
    rating
    price
    countInStock
    _id
    image
  }
}`

export {
  ALL_PROCUCTS,
}