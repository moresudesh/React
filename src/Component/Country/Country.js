import React, { useRef, useState } from 'react'
import Child from './Child';


const Parent = () => {

    var x1 = useRef();
    var[rec, setRec] = useState(``);
    var myfunc = () => {
        console.log(x1);  
        console.log(x1.current.value);
        console.log(document.getElementById(`x2`).value);
        setRec(x1.current.value)
    }

  return (
    <div className='container p-9'>
        <h1 className='text'> Search Name</h1>
        <input type='text' className='p-2 w-full rounded-xl mb-4 border-zinc-900	' style={{color: "red", backgroundColor: "lightblue"}} ref={x1}  id='x2'/> <br></br>
        <button onClick={myfunc} className='rounded-full bg-cyan-600 p-2 w-1/5 text-white'>Enter</button>
        <Child p1={rec}/>
    </div>
  )
}

export default Parent
