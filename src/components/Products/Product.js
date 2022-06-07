import React,{useEffect, useState} from 'react'

import { Card, Button, footer} from 'react-bootstrap';

function Product(props) {

  const [updating, setUpdating] =useState()

  // const added=[];
  function handleClick (p){
    // added.push(p);
    // console.log(added)
    // console.log(added)
    // setUpdating(added)
    props.setHandleData(p)
    
  //   fetch('https://fakestoreapi.com/carts',{
  //     method:"POST",
  //     body:JSON.stringify(
  //         {
  //             userId:5,
  //             products:[{productId:p.id,quantity:1, title:p.title}]
  //         }
  //     )
  // })
  //     .then(res=>res.json())
  //     .then(json=>console.log(json))
  }

  useEffect (()=>{
    
// console.log(added)
  


  }, [])
  return (
    <>
    <div className="card mb-3" style={{width: '600px'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="bd-placeholder-img"
            width="100%"
            height="250"
            
            src={props.product.image}
          />
            
            {/* <rect width="100%" height="100%" fill="#868e96" /> */}
            
        </div>
        <div className="col-md-5">
          <div className="card-body">
          <h3>{props.product.title}</h3>
            <h5 className="card-title">&#x20B9; {props.product.price}</h5>
            
            <p className="card-text">
              <small className="text-muted"> {props.product.description}</small>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="align-items-bottom align-items-center">
          <Button variant="primary" className="align-text-bottom" onClick={()=>handleClick(props.product)} >Add</Button>

          </div>

        
            
          
        </div>
      </div>
    </div>
     {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="horizontal" src={props.product.image} />
        <Card.Body>
            <Card.Title>props.product.title</Card.Title>
            <footer className="blockquote-footer">
            {props.product.description}
              
      </footer>
            <Card.Text>
            &#x20B9; {props.product.price}
            </Card.Text>
          
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
</Card> */}
    </>
  )
}

export default Product