import React,{useEffect, useState} from 'react'

import Product from './Product'
import { Container, Row, Col } from 'react-bootstrap';

function Products(props) {

  
  
  // console.log(props.productsCategoryData)


  useEffect (()=>{
   


  }, [props.productsCategoryData])
  return (
    <>
    <Container>
      {
        props.productsCategoryData? props.productsCategoryData.map((product)=>(
          <Row>
            <Product product={product} setHandleData ={props.setHandleData}/>
        </Row>

        )):null
      }
        
    </Container>
    </>
  )
}

export default Products
