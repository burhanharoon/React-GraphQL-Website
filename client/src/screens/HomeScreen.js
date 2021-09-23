import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useQuery } from "@apollo/client"
import { ALL_PROCUCTS } from "../services/graphQL/queries/product";


const HomeScreen = () => {

  const { data, error, loading } = useQuery(ALL_PROCUCTS);
  const products = data?.productMany

  console.log(products);


  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
