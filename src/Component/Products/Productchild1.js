import React, { useEffect, useState } from 'react'

const Productchild1 = (props) => {

   const[cat, setcat] = useState([]);
   
   useEffect( (props) => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setcat(json))
   }, [])

   function myfunc(res){
        props.p1(res);
   }
  
  return (
    <div>
          <h1>Categoreis</h1>
          
          <ul>
             {
              cat && cat.map(res => 
                  <li onClick={()=>{myfunc(res)}}>{res}</li>
                )
             }
          </ul>
    </div>
  )
}

export default Productchild1
