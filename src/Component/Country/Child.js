import React, { useEffect, useState } from 'react'

const Child = (props) => {


  const[apidata, setapidatea] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect( () => { // initailly all data show
      fetch('https://restcountries.com/v3.1/all/')
      .then(res => res.json())
      .then(json=>{
        console.log(json);
        setapidatea(json)
        setDisplayedData(json);
      })
  }, []);

  useEffect(() => {
    // Update displayed countries based on the search term
    if (props.p1.trim() === '') {
      setDisplayedData(apidata);
    } else {
      const filteredData = apidata.filter((obj) =>
        obj.name.common.toLowerCase().includes(props.p1.toLowerCase())
      );
      setDisplayedData(filteredData);
    }
  }, [props.p1, apidata]);


  return (
    <div>
      <span className='text-md text-xl pb-5'>Show Data Using Categories: <strong>{props.p1}</strong></span>

      <div className='row mt-4'>
          {
          displayedData.map((obj) => (
          <div className='col-2 text-center' >
          <img src={obj.flags.png}></img>
          <div className="country-name"><p>{obj.name.common}</p></div>

          </div>
          ))}
      </div>

    </div>
  )
}

export default Child
