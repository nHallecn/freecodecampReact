import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount]  = useState(0);

  return (
    <div style={{
        margin: '50px',
        padding: '25px',
        border: '2px solid yellow',
        borderRadius: '10px',
    }} >
        <h1 style={{
            textAlign:'center'
        }}>Counter app</h1>
        <p>Count: {count} </p>
        <button onClick={(e)=>setCount(count+1)}>Add</button>
        <button onClick={(e)=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter