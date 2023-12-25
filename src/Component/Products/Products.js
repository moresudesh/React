import React, { useState } from 'react'
import Productchild1 from './Productchild1';
import Productchild2 from './Productchild2';

const Products = () => {

  const[product, setproducts] = useState(``);

  function datatoHold(param){
      setproducts(param);
  }

  // console.log();
  return (
    <div>
        <h1>Products</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-3 boder-4'>
                      <Productchild1 p1={datatoHold}/>
                </div>
                <div className='col-9 boder-4'>
                      <Productchild2 p2={product}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
