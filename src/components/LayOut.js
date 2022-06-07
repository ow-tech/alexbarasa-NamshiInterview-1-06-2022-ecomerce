import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Navbar, Tab, Nav, Sonnet } from 'react-bootstrap';
import Products from './Products/Products';
import Cart from './Cart/Cart';

function LayOut() {

    const [productsCategoryData, setProductsCategoryData]= useState()
    const [addToCart, setAddToCart] = useState();
    const [handleData, setHandleData] =useState();

    // const productsCategory = 
            // console.log(productsCategory)
            const added = [];
            

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductsCategoryData(json))
        // console.log(addToCart)
        // console.log(productsCategory)
        // setProductsCategoryData(productsCategory)
        added.push(handleData)
        console.log(added)


    }, [handleData])
  return (
    <>
      <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <h3 className='d-flex'>Shopping Websites</h3>
    </Navbar.Brand>
    </Navbar>
      <Container>
    
          
        <Row>
            <Col xs={4} md={3}>
                <h3>Categories</h3>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col >
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">All Products</Nav.Link>
        </Nav.Item>
        </Nav>
        
    </Col>
   
  </Row>
  <Row>
  <Col >
    <Nav variant="pills" className="flex-column">
    
    <Nav.Item>
          <Nav.Link inactive eventKey="second">Electronics</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  </Row>
  <Row>
  <Col >
    <Nav variant="pills" className="flex-column">
    
    <Nav.Item>
          <Nav.Link inactive eventKey="second1">Cosmetics</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  </Row>
</Tab.Container>
                
            </Col>
            <Col xs={10} md={6}>
            <h3>Products</h3>
                <Products productsCategoryData ={productsCategoryData} setAddToCart={setAddToCart} setHandleData={setHandleData}/>
            </Col>
            <Col xs={4} md={3}>
            <h3>Cart</h3>
                <Cart handleData={handleData}/>
            </Col>
        </Row>
        </Container>
    </>
  )
}

export default LayOut