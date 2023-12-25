import React, { useEffect, useState } from 'react'

const Productsbazaar = () => {

  const[product, setproduct ] = useState(12);

  useEffect(() => {
    
  })



  return (
    <div>
          <div className='container'>
              <div className='row'>
                  <div className='col-3'>{product}</div>
                  <div className='col-9'></div>
              </div>
          </div>
    </div>
  )
}

export default Productsbazaar
