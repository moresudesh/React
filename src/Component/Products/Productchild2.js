import React, { useEffect, useState } from 'react'

const Productchild2 = (props) => {
 
   const[productapi, setproduct] = useState([]);

   useEffect( () => {
         var apipath = 'https://fakestoreapi.com/products'

         if(props.p2!= ''){
          apipath = `https://fakestoreapi.com/products/category/${props.p2}`
         }
         fetch(apipath)
         .then(res=>res.json())
         .then(json=>setproduct(json))
   }, [props.p2])
   
  return (
    <div>
      <div className='row'>
      {
            productapi && productapi.length > 0 && productapi.map(obj => 
                  <div className='col-3'>
                      <img src = {obj.image} className='img-fluid'/>
                      <h2>{obj.price}</h2>
                      <h2>{obj.id}</h2>
                      <p>{obj.title}</p>
                  </div>
              )
          }
      </div>  
    </div>
  )
}

export default Productchild2
