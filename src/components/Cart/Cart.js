import React, { useEffect } from 'react'

function Cart(props) {
  let data = props.handleData

  useEffect(()=>{
    

  }, [])
  return (
    <>
    {data? 
      <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-9">
          <div className="card-body">
          <h3>{data.title}</h3>
            <h5 className="card-title">&#x20B9; {data.price}</h5>
             
          </div>
        </div>
        <div className="col-md-3">
          <div className="align-items-bottom align-items-center">
          {/* <Button variant="primary" className="align-text-bottom" onClick={()=>handleClick(props.product)} >Add</Button> */}

          </div>

        
            
          
        </div>
      </div>
    </div>
    
    :
    <div>
      <img src="https://png.pngtree.com/png-clipart/20220119/ourmid/pngtree-cartoon-shopping-cart-png-image_4231426.png"/>

      <h4>Your Cart is Empty</h4>
    </div>
    
    }
      
    
    </>
  )
}

export default Cart