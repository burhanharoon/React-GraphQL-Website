import { gql } from "@apollo/client";

// TEMP: Fetch all tournaments
const PRODUCT_BY_ID = gql`
query Query($id: MongoID!) {
    productById(_id: $id) {
      name
      image
      brand
      description
      rating
      price
      countInStock
      _id
    }
  }`

export {
    PRODUCT_BY_ID,
}